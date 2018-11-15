const http = require('http');
const { Readable } = require('stream');

class FiboServerReadable extends Readable {
  constructor(options) {
    super(options);

    this.maxFibo = options.max;
    this.currFibo = 1;
  }

  _read() {
    if (this.currFibo > this.maxFibo) {
      this.destroy();
      return;
    }

    http.get(`http://127.0.0.1:3000/?number=${this.currFibo}`, (res) => {
      let response = '';
      res.on('data', (chunk) => {
        response += chunk;
      });
      res.on('end', () => {
        this.push(Buffer.from(response));
      });
    });

    this.currFibo += 1;
  }
}

module.exports = {
  FiboServerReadable,
};
