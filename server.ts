import { createServer } from 'node:http';

const server = createServer((request, response) => {
    const vercelId = request.headers['x-vercel-id'];
    response.writeHead(200, { 'Content-Type': 'application/json', 'x-datacenter': vercelId });
    response.end(JSON.stringify({ time: Date.now() }));
});

server.listen(Number(process.env.PORT ?? 3000));
