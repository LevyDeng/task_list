<template>
  <div class="task-list">
    <p v-if="err!==''">{{err}}</p>
    <table style="margin:0 auto;" v-if="content!==''">
      <tr><th v-for="h in content[0]" :key="h.id">{{h}}</th></tr>
      <tr v-for="row in content.slice(1,)" :key=row.id>
        <td v-for="item in row" :key=item.id>{{item}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import XLSX from 'xlsx'
import transformSheets from '../scripts/read_xlsx'

export default {
  name: 'TaskList',
  data: function () {
    return {
      content: '',
      err: ''
    }
  },
  created() {
    var url = "http://localhost:8080/task_list.xlsx"
    
    axios.get(url, {responseType:'arraybuffer'})
    .then((res) => {
		var data = new Uint8Array(res.data)
    var wb = XLSX.read(data, {type:"array"}, '-j')
    var sheets = wb.Sheets
    this.content = transformSheets(sheets)
    }).catch( err =>{
      this.err = err
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  text-align: center
}
thead th {
background-color: rgb(81, 130, 187);
color: #fff;
border-bottom-width: 0;
}

/* Column Style */
td {
color: #000;
}
/* Heading and Column Style */
tr, th {
border-width: 1px;
border-style: solid;
border-color: rgb(81, 130, 187);
}

/* Padding and font style */
td, th {
padding: 5px 10px;
font-size: 12px;
font-family: Verdana;
font-weight: bold;
}
p {
  color: red
}
</style>
