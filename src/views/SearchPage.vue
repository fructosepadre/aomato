<template>
<div class="bodz" style="display:flex; flex-direction:row">
    <Sidebar/>
    <div class="page-body">
         <div v-for="(item, index) in GET_RESTAURANTS_FROM_SEARCH" :key="index">
            <div class="card" @click="showProductDetails(item.restaurant.R.res_id)">
                <div class="first"> 
                    <div style="color: crimson; font-size: 2em; flex-basis:80%">
                        {{item.restaurant.name}}
                    </div>
                    <div class="second">
                        {{slicing(item.restaurant.cuisines)}}
                    </div>
                    <div class="second">
                        {{item.restaurant.location.city}}
                    </div> 
                </div>   
                <div class="image-card">
                    <img v-if="item.restaurant.thumb.length>0" :src="item.restaurant.thumb">
                    <img v-else src='https://i.ibb.co/sbkYD3d/64dffaa58ffa55a377cdf42b6a690e721585809275.png'>
                </div>  
            </div>
        </div>
    </div>
 </div>   
</template>
<script>
import {mapGetters} from 'vuex'
import Sidebar from '@/layout/Sidebar.vue'
export default {
      components: {
    Sidebar
  },
    computed:{
      ...mapGetters(['GET_RESTAURANTS_FROM_SEARCH','GET_RESTAURANTS_FROM_SEARCH']),
    },
    mounted(){
        this.$store.dispatch('Restaurants')
    },
    methods:{
        getSize(){
            return this.$store.getters.GET_RESTAURANTS_FROM_SEARCH.length;
        },
        showProductDetails(data){
            localStorage.setItem('res_id',data)            
            this.$store.dispatch('RestaurantDetails').then(()=>{this.$router.push('/restaurant-details')
            this.$store.commit('SET_SEARCH_DROPDOWN',{})})
        },
        slicing(data){
            let data_to_splice=data
            if(data_to_splice.length<33)
                return data_to_splice
            else
                return data_to_splice.slice(0,32)+".."
        }
    }
}
</script>
<style scoped>
.page-body{
    margin-top: 10vh;
    margin-left: 2vh;
    margin-right: 10vh;
    display: flex;
    flex-wrap: wrap;
    flex-basis: 75%;
    justify-content: space-evenly;
    background-color: ivory;
}
.card{
    width: 80vh;
    height: 35vh;
    margin-bottom: 5vh;
    transition:1s;
    display: flex;
    flex-direction: row;
}
.first{
    flex-basis: 80%;
    text-align: left;
    font-weight: bold;
    display: flex;
    flex-direction: column;
}
img{
    height:100%;
    width:35vh;
    transition:1s
}
.second{
    box-shadow: 1px 0px 1px 1px;
    color: white;
    background-color: gold;
}
</style>