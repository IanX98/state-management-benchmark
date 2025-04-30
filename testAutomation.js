const os = require("os");
const puppeteer = require("puppeteer");
const readline = require("readline");

const iterations = 100;

// Utilitário para entrada do usuário
const askQuestion = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans.toLowerCase());
    })
  );
};

// Calcula média, mínimo e máximo
const calculateMetrics = (times) => {
  const total = times.reduce((acc, val) => acc + val, 0);
  return {
    average: total / times.length,
    min: Math.min(...times),
    max: Math.max(...times),
  };
};

// Mede o tempo de execução de uma operação
const measureOperation = async (page, baseURL, operation, count) => {
  await page.goto(baseURL);
  const buttonId = `#${operation}-${count}`;
  const timeId = `#${operation}-time`;

  await page.waitForSelector(buttonId);
  await page.click(buttonId);
  await page.waitForSelector(timeId);

  const timeText = await page.$eval(timeId, (el) => el.textContent);
  const match = timeText?.match(/(\d+(\.\d+)?)/);
  return match ? parseFloat(match[1]) : NaN;
};

const getSystemUsage = () => {
  const totalMemMB = os.totalmem() / 1024 / 1024;
  const freeMemMB = os.freemem() / 1024 / 1024;
  const usedMemMB = totalMemMB - freeMemMB;

  const cpus = os.cpus();
  const cpuUsage = cpus.map((cpu) => {
    const total = Object.values(cpu.times).reduce((acc, t) => acc + t, 0);
    const idle = cpu.times.idle;
    return ((total - idle) / total) * 100;
  });
  const avgCpuUsage = cpuUsage.reduce((a, b) => a + b, 0) / cpuUsage.length;

  return {
    memoryUsed: usedMemMB.toFixed(2),
    memoryTotal: totalMemMB.toFixed(2),
    cpuAvg: avgCpuUsage.toFixed(2),
  };
};

(async () => {
  const framework = await askQuestion("Framework (react, vue, angular): ");
  const operation = await askQuestion(
    "Operação (create, read, edit, delete): "
  );
  const count = await askQuestion("Quantidade (1, 100, 1000, 10000): ");

  const ports = {
    react: 5173,
    vue: 5174,
    angular: 4200,
  };

  const port = ports[framework];
  if (!port) {
    console.error("Framework inválido.");
    process.exit(1);
  }

  const baseURL = `http://localhost:${port}`;
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  console.log(
    `\nIniciando teste de ${operation}-${count} em ${framework}...\n`
  );

  const times = [];

  for (let i = 0; i < iterations; i++) {
    console.log(`Iteração ${i + 1} de ${iterations}`);
    try {
      const t = await measureOperation(page, baseURL, operation, count);
      times.push(t);
      console.log(`Tempo: ${t.toFixed(2)} ms`);
    } catch (err) {
      console.error(`Erro na iteração ${i + 1}: ${err.message}`);
    }
  }

  await browser.close();

  const { average, min, max } = calculateMetrics(times);

  console.log(`\n--- Resultados (${operation}-${count}) em ${framework} ---`);
  console.log(`Média: ${average.toFixed(2)} ms`);
  console.log(`Mínimo: ${min.toFixed(2)} ms`);
  console.log(`Máximo: ${max.toFixed(2)} ms`);

  const systemStats = getSystemUsage();

  console.log(`\n--- Uso de Sistema ---`);
  console.log(
    `Uso de memória: ${systemStats.memoryUsed} MB de ${systemStats.memoryTotal} MB`
  );
  console.log(`Uso médio de CPU: ${systemStats.cpuAvg}%`);
})();
