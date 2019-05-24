const ex = require('express')
const xlsx = require('node-xlsx')
var xlsx_file_path = "./task_list.xlsx"

//var task_list = xlsx.parse(xlsx_file_path)

const app = ex()
app.get("/xlsx_data", (req,res) => res.send(JSON.stringify(xlsx.parse(xlsx_file_path))))

app.listen(3000, ()=>{console.log("Running")})
