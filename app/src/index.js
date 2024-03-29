const express = require("express")
const dao = require("./PeopleDAO.js")
const helper = require("./helper.js")

const app = express()
const port = 3000

const nameToInsert = "Jose da Silva"

app.get("/", (req,res)=> {
    dao.insertPeople(nameToInsert)

    dao.findPeople(people => {
        let html = helper.getHeader()
        html += "<h1>Full Cycle Rocks!</h1>\n<ul>\n"

        for(i = 0; i < people.length; i++){
            let name = people[i].name;
            html += 
            `<li>${name}</li>\n`;
        }

        html += "</ul>";
        html += helper.getFooter()
        res.send(html)
    })
})

app.listen(port,()=>{
    console.log("Rodando na porta " + port + " do container")
})
