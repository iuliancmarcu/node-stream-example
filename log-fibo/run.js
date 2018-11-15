const { FiboServerReadable } = require('../stream-fibo');
const { FiboConsoleWritable } = require('./');

const max = Number(process.argv[2] || 40);
new FiboServerReadable({ max })
  .pipe(new FiboConsoleWritable());
