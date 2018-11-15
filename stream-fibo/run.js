const { FiboServerReadable } = require('./');

const max = Number(process.argv[2] || 40);
new FiboServerReadable({ max })
  .on('data', (data) => {
    console.log(data.toString());
  });
