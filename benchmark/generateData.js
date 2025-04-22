const fs = require('fs');
const faker = require('faker');

const generateBusData = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: i + 1,
      plate: faker.vehicle.vin(),
      model: faker.vehicle.model(),
      capacity: faker.datatype.number({ min: 20, max: 60 }),
      lastMaintenance: faker.date.past().toISOString(),
    });
  }
  return data;
};

fs.writeFileSync('./benchmark/data/large-dataset.json', JSON.stringify(generateBusData(10000)));
fs.writeFileSync('./benchmark/data/small-dataset.json', JSON.stringify(generateBusData(100)));

console.log('✅ Dados gerados com sucesso');
