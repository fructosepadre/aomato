<template>
    <div class="page-body">
         <div v-for="(item, index) in GET_RESTAURANTS" :key="index">
            <div class="card" @click="showProductDetails(item.restaurant.R.res_id)">
                    {{item.restaurant.name}}
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
      ...mapGetters(['GET_RESTAURANTS'])
    },
    methods:{
        showProductDetails(data){
            this.$store.dispatch('RestaurantDetails',data).then(()=>{this.$router.push('/restaurant-details')})
        },
    }
}
</script>
<style scoped>
.page-body{
    margin-top: 10vh;
    margin-left: 10vh;
    margin-right: 10vh;
    justify-content: center;

}
.card{
    width: 80vh;
    height: 30vh;
    margin-bottom: 10vh;
    text-align:center;
    box-shadow: 0px 0px 2px 2px;
    background-color: coral;
}
</style>