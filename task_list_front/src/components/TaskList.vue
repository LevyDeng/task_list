<template>
  <div class="task-list">
    <p>{{content}}</p>
    <table>
      <tr>
        <th v-for="item in content" v-bind:key=item.id>{{item.name}}</th>
      </tr>
      <tr v-for="y in content[0].data.length">
        <td v-for="x in content.length"></td>
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
      content: ''
    }
  },
  created() {
    axios.get('api/xlsx_data')
    .then((res)=>{
      window.console.log(res.data)
      this.content = res.data
    })
    .catch((err)=>this.content=err)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
