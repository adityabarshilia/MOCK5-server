const jsonServer = require('json-server');
let users = require("./db.json");
const server = jsonServer.create();
const router = jsonServer.router(users); 
const middlewares = jsonServer.defaults();
const port = 3000;

// fs.writeFileSync("./db.json", JSON.stringify(users));

server.use(middlewares);
server.use(router);
server.listen(port, () => console.log("server chal gaya"));