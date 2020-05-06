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
// import 'node_modules/bootstrap/scss/bootstrap';
// import 'node_modules/bootstrap-vue/src/index.scss';
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
}
</style>
