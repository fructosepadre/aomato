<template>
    <div class="page-body">
         <div v-for="(item, index) in getSize()>0? GET_RESTAURANTS_FROM_SEARCH:GET_RESTAURANTS" :key="index">
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
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
      ...mapGetters(['GET_RESTAURANTS','GET_RESTAURANTS_FROM_SEARCH']),
    },
    methods:{
        getSize(){
            return this.$store.getters.GET_RESTAURANTS_FROM_SEARCH.length;
        },
        showProductDetails(data){
            this.$store.dispatch('RestaurantDetails',data).then(()=>{this.$router.push('/restaurant-details')
            this.$store.commit('SET_SEARCH_DROPDOWN',{})})
            this.dish=''
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
    justify-content: space-around;
}
.card{
    width: 80vh;
    height: 35vh;
    margin-bottom: 10vh;
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