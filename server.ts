import { createServer } from 'node:http';

const server = createServer((request, response) => {
    const vercelId = request.headers['x-vercel-id'];
    response.writeHead(200, { 'Content-Type': 'application/json', 'x-datacenter': vercelId });
    response.end(JSON.stringify({ time: Date.now() * 1000 }));
});

server.listen(Number(process.env.PORT ?? 3000));
