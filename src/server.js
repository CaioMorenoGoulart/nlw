
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, succespage, saveClasses } = require('./pages')


//Configurar nunjucks
const nunjucks = require('nunjucks')
const { query } = require('express')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, 
})

server

.use(express.urlencoded({ extended: true}))
//configurar Arquivos estáticos (css, scripts, imagens)
.use(express.static('public'))
//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give_classes", pageGiveClasses)
.get("/succes", succespage)
.post("/save_classes", saveClasses)


.listen(5500)
