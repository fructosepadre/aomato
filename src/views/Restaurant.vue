<template>
    <div>{{GET_RESTAURANT_DETAILS}}<br></div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
      ...mapGetters(['GET_RESTAURANT_DETAILS']),
    }
}
</script>
<style scoped>
</style>