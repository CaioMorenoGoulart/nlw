// Configuração do servidor
const express = require('express')
const server = express()

// Importação das rotas
const { pageLanding, pageStudy, pageGiveClasses, succespage, saveClasses } = require('./pages')

// Configuração do template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Middlewares
server
    .use(express.urlencoded({ extended: true })) // Para receber os dados via POST
    .use(express.static('public')) // Arquivos estáticos

// Rotas
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give_classes", pageGiveClasses)
    .get("/succes", succespage)
    .post("/save_classes", saveClasses)

// Iniciar o servidor
    .listen(5500, () => {
        console.log('Servidor rodando em http://localhost:5500')
    })
