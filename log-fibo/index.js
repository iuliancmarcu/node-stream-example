const { Writable } = require('stream');

class FiboConsoleWritable extends Writable {
  constructor(options) {
    super(options);
    this.currFibo = 1;
  }

  write(chunk) {
    console.log(`fibonacci(${this.currFibo}) is ${chunk.toString()}`);
    this.currFibo += 1;
  }
}

module.exports = {
  FiboConsoleWritable,
};
