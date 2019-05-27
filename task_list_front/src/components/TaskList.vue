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
export default {
  name: 'TaskList',
  data: function(){
    return {
      content: '',
      err: ''
    }
  },
  created() {
    axios.get('api/xlsx_data')
    .then((res)=>{
      //window.console.log(res.data)
      this.err=res.data
    })
    .catch((err)=>this.content=err)
  },
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
</style>
