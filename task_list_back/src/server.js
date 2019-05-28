const ex = require('express')
const xlsx = require('node-xlsx')
var xlsx_file_path = "./task_list.xlsx"

const app = ex()

getContent = function () { 
  var content = xlsx.parse(xlsx_file_path)
  var content1 = []
  tmplist = []
  for (x in [...Array(content.length)]){
    console.log(x)
    tmplist.push(content[x].data.length)
  }
  maxLength = Math.max.apply(Math,tmplist)
  for (y in [...Array(maxLength)]){
    content1[y]=[]
    for(x in [...Array(content.length)]){
      try {
        content1[y].push(content[x].data[y][0])
      } catch (error) {
        console.log(error)
        content1[y].push(' ')
      }
    }
  }
  content1.unshift([])
  for (i in [...Array(content.length)]){
    content1[0].push(content[i].name)
    //content1[0].push(item.name)
  }
  return content1
 }
//console.log(getContent())
app.get("/xlsx_data", (req,res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.send(JSON.stringify(getContent()))})

app.listen(3000, ()=>{console.log("Running")})
