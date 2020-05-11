<template>
      <div id="app">
            <Header/>
          <router-view/>
      </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Header from '@/layout/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  text-align: center;
  background-color: white;
}
</style>
