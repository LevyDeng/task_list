<template>
  <div class="home">
    <TaskList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskList from '@/components/TaskList.vue'

export default {
  name: 'home',
  components: {
    TaskList
  }
}
</script>
