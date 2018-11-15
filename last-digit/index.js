/* eslint-disable class-methods-use-this */
const { Transform } = require('stream');

class LastDigitTransform extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      const number = Number(chunk.toString());
      callback(null, (number % 10).toString());
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = {
  LastDigitTransform,
};
