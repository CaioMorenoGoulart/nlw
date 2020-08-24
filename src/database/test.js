const Database = require('./db')
const creatProffy = require('./createProffy')


Database.then(async (db) => {

    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "999999999", 
        bio: "Entusiasta das melhores tecnologias de quimica avançada.<br><br>Apaixonado por esplodir coisas em laboratório e por mudar a vida das pessoass atravéz da experiência. Mais de 200 pessoas já passaram por minhas esplosões.", 
    }

    classValue = {
    subject: 1, 
    cost: "20",
    
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from:720 , 
            time_to: 1220
        },
        {
            weekday: 0,
            time_from:520 , 
            time_to: 1220
        }
    ]

    // await creatProffy(db, {proffyValue, classValue, classScheduleValues}) 


    //Consultar Dados

    //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //Consultar as classes de um determinado professor 
    //e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    // O horário que a pessoa trabalha 


    const selectedClassesSchadules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectedClassesSchadules)


})