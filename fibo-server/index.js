const http = require('http');

function getQuery(url) {
  if (url.indexOf('?') < 0) {
    return {};
  }

  const queryString = url.slice(url.indexOf('?') + 1);
  const queryParts = queryString.split('&');

  return queryParts.reduce((query, part) => {
    const [key, value] = part.split('=');
    query.set(key, value);
    return query;
  }, new Map());
}

function fibonacci(n) {
  return n < 3 ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
}

const server = http.createServer((req, res) => {
  const { url } = req;
  const query = getQuery(url);

  const n = Number(query.get('number') || 1);

  console.log(`Requested fibonacci(${n})`);

  res.write(`${fibonacci(n)}`);
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
  console.log('curl localhost:3000?number=1');
});
