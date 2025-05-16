# Benchmark de Bibliotecas de Gerenciamento de Estado: Redux, NgRx e Pinia

Este projeto tem como objetivo comparar o desempenho das bibliotecas de gerenciamento de estado Redux (React), NgRx (Angular) e Pinia (Vue.js) em aplicações de página única (SPAs). Foram realizados testes de tempo e consumo de recursos (CPU e memória) para operações típicas como criação, leitura, atualização e exclusão de registros em diferentes escalas (1, 100, 1000 e 10.000 linhas).

## 📦 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
state-management-benchmark/
├── react-redux/        # Aplicação React com Redux
├── angular-ngrx/       # Aplicação Angular com NgRx
├── vue-pinia/          # Aplicação Vue com Pinia
├── datasets/           # Arquivos JSON com os dados de teste
├── scripts/            # Scripts de automação dos testes (ex: Puppeteer)
├── results/            # Saída dos resultados (tempo, CPU, memória)
└── README.md
```

## 🚀 Tecnologias Utilizadas

* React 16.13.1 com Redux 7.2.1 e Redux Thunk 2.3.0
* Angular 10 com NgRx 9.2.0
* Vue 3 com Pinia
* Puppeteer para automação de testes no navegador
* Faker.js para geração de dados
* Node.js para execução de scripts auxiliares

## 🧺 Como Executar os Testes

1. Instale as dependências na raiz e nas subpastas:

```bash
npm install
cd react-redux && npm install
cd ../angular-ngrx && npm install
cd ../vue-pinia && npm install
```

2. Execute as aplicações localmente (cada uma em uma porta diferente, ex: 3000, 4200, 8080):

```bash
cd react-redux && npm start
# Em outro terminal:
cd angular-ngrx && ng serve
# Em outro terminal:
cd vue-pinia && npm run dev
```

3. Execute os testes automatizados:

```bash
cd scripts
node run-benchmark.js
```

O script de benchmark coleta o tempo de execução, uso de CPU e uso de memória para cada operação, e gera relatórios em JSON/CSV dentro da pasta results/.

## 📊 Operações Avaliadas

* Criação de registros (create)
* Leitura de registros (read)
* Atualização de registros (edit)
* Exclusão de registros (delete)
* Busca aleatória (random select)

Cada operação foi testada com 1, 100, 1000 e 10.000 registros.

## 📊 Métricas Coletadas

* ⏱️ Tempo de execução (em milissegundos)
* 💻 Uso médio de CPU (em %)
* 🧠 Uso médio de memória (em MB)

Essas métricas foram obtidas com `performance.now()` para marcação de tempo e monitoramento via process/Chrome DevTools.

## ✅ Resultados

Os resultados brutos podem ser consultados na pasta `results/`, e foram utilizados para gerar análises comparativas e gráficos de boxplot que demonstram a performance relativa de cada biblioteca.

Para ver os gráficos e análise completa, consulte o relatório de benchmark gerado com base nesses testes.

## 📚 Referências

* Szymanek, A., & Pańczyk, A. (2021). Performance comparison of popular JavaScript frameworks and libraries.
* Redux: [https://redux.js.org](https://redux.js.org)
* NgRx: [https://ngrx.io](https://ngrx.io)
* Pinia: [https://pinia.vuejs.org](https://pinia.vuejs.org)

## 👨‍💼 Autor

Este projeto foi desenvolvido para fins acadêmicos como parte de um trabalho de conclusão de curso (TCC) de análise comparativa de bibliotecas de gerenciamento de estado.
