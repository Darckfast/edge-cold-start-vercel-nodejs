import { createServer } from 'node:http';

const server = createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ time: Date.now() * 1000 }));
});

server.listen(Number(process.env.PORT ?? 3000));
