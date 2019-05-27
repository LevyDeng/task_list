const ex = require('express')
const xlsx = require('node-xlsx')
var xlsx_file_path = "./task_list.xlsx"

const app = ex()

getContent = function () { 
  var content = xlsx.parse(xlsx_file_path)
  var content1 = []
  tmplist = []
  for (y in [...Array(content[0].data.length)]){
    content1[y]=[]
    for(x in [...Array(content.length)]){
      content1[y].push(content[x].data[y][0])
    }
  }
  content1.unshift([])
  for (i in [...Array(content.length)]){
    content1[0].push(content[i].name)
    //content1[0].push(item.name)
  }
  return content1
 }

app.get("/xlsx_data", (req,res) => res.send(JSON.stringify(getContent())))

app.listen(3000, ()=>{console.log("Running")})
