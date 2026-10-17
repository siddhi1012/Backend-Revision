import http from "http";

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405);
        return res.end("Method Not Allowed");
    }
    if (req.url === '/') {
        res.writeHead(200);
        return res.end("Home Page");
    }
    if (req.url === '/users') {
        res.writeHead(200, {
            "Content-Type": "applicaion/json"
        })
        return res.end(JSON.stringify([
            { id: 1, name: "Siddhi" }
        ]))
    }
    res.writeHead(404);
    res.end("Not Found");
})

server.listen(3000);