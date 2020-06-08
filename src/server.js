const express = require("express")
const server = express()

//configurar pasta publica
server.use(express.static("public"))


//ligar o servidor
server.listen(3000)

//confiurar caminhos da minha aplicação
//pagina inicial - req: requisição res: resposta
//rotas
server.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", function(req, res) {
    res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search-results", function(req, res) {
    res.sendFile(__dirname + "/views/search-results.html")
})

//utlizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})