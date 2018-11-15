const { FiboServerReadable } = require('../stream-fibo');
const { LastDigitTransform } = require('./');

const max = Number(process.argv[2] || 40);
new FiboServerReadable({ max })
  .pipe(new LastDigitTransform())
  .on('data', (data) => {
    console.log(`Last digit: ${data.toString()}`);
  })
  .on('error', err => console.error(err));
