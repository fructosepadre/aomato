<template>
<div class="bodz" style="display:flex; flex-direction:row">
    <Sidebar type="Filters" style="margin-left: 5vh; height:100vh; "/>
    <div v-if="getRestaurantsFromSearch.length>0" class="page-body">
         <div v-for="(item, index) in getRestaurantsFromSearch" :key="index">
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
        <div v-else class="page-body" style="height:100vh">
            No results! Try searching something else......
        </div>
    <Sidebar type="Sort" style="margin-right: 5vh; height:60vh; "/>
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
      ...mapGetters(['getRestaurantsFromSearch']),
    },
    mounted(){
        this.$store.dispatch('restaurants')
    },
    methods:{
        getSize(){
            return this.$store.getters.getRestaurantsFromSearch.length;
        },
        showProductDetails(data){
            localStorage.setItem('res_id',data)            
            this.$store.dispatch('restaurantDetails').then(()=>{this.$router.push('/restaurant-details')
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
    margin-left: 10vh;
    margin-right: 10vh;
    display: flex;
    flex-wrap: wrap;
    flex-basis: 70%;
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