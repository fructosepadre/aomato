<template>
    <div class="page-body">                   
      <div class="imageCard flexrow">
          <div class="main-image">
            <img>
          </div>
          <div class="thumbnails">
            <img><img><img><img>
          </div>
      </div>
      <br>
      <div class="restaurant-info flexrow">
        <div class="restaurant" style="flex-basis:90%; text-align:left;">
            <div style="font-size: 2em;">{{getRestaurantDetails.name}}<br></div>
            <div style="font-size: 1em;">{{getRestaurantDetails.cuisines}}<br></div>
            <div style="font-size: 1em; color:grey;">{{getRestaurantDetails.location.locality}}<br><br></div>
            {{getRestaurantDetails.timings}}<br>
            <div style="font-size: 1em; color:crimson;"><b>Average cost for 2 : Rs. {{getRestaurantDetails.average_cost_for_two}}</b><br></div>
        </div>
        <div class="rating" style="flex-basis:10%; text-align:center; border-radius:2vh; background-color:rgb(79, 223, 35);">
          <br>
          User Rating<hr>
          {{getRestaurantDetails.user_rating.aggregate_rating}}<hr>
          {{getRestaurantDetails.user_rating.votes}} votes
        </div>
      </div>
      <br>
      <div class="more-info flexrow">
          <div class="info-body">
            <p style="font-size: 1.5em;">Menu</p>
            <img class="menu">
            <br><br><br>
            <p style="font-size: 1.5em;">Cuisines</p>
            <div class="cuisine flexrow">
              <div v-for="(item,index) in getCuisines(getRestaurantDetails.cuisines)" :key="index">
                <div v-if="index<4"><b-button style="border-radius:5vh; margin-right:2vh;" variant="outline-secondary" @click="searchByCuisine(item)">{{item}}</b-button></div>  
              </div>
            </div>
            <br><br>
            <p style="font-size: 1.5em;">Payment Methods:</p>
            <div v-for="(item,index) in getRestaurantDetails.highlights" :key="index">
                <div v-if="item=='Credit Card'">{{item}}</div>
                <div v-if="item=='Debit Card'">{{item}}</div>
                <div v-if="item=='Cash'">{{item}}</div>
            </div>
            <br><br>
            <p v-if="getRecommendation.length>1" style="color:gray">RECOMMENDATIONS:</p>
            <div class="recco" v-for="(item, index) in getRecommendation" :key="index">
              <div class="recco-Card" v-if="index<3 && item.restaurant.name!=getRestaurantDetails.name" @click="showProductDetails(item.restaurant.R.res_id)"> 
                    <img v-if="item.restaurant.thumb.length>0" :src="item.restaurant.thumb">
                    <img v-else src='https://i.ibb.co/sbkYD3d/64dffaa58ffa55a377cdf42b6a690e721585809275.png'>
                    <h3 style="font-size: 1.5em;">{{item.restaurant.name}}</h3>
                    <p style="font-size: 1em; color:gray;">{{slicing(item.restaurant.cuisines)}}</p>       
              </div><br>
            </div>
          </div>
          <div class="contact-card">
            <div style="padding: 3vh 3vh 3vh 3vh">
              <b-button @click="showOnMap(getRestaurantDetails.name,getRestaurantDetails.location.locality_verbose)" variant="outline-secondary" style="color:blue">Directions</b-button><br>
              <br>
              <p style="font-size: 1.5em;">Call</p>
              <p style="font-size: 1em; color:red;">{{getRestaurantDetails.phone_numbers}}</p>
              <p style="font-size: 1.5em;">Address</p>
              <p style="font-size: 1em; color:gray;">{{getRestaurantDetails.location.address}}</p>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
      ...mapGetters(['getRestaurantDetails','getRecommendation']),
    },
    mounted(){
        this.$store.dispatch('restaurantDetails')
    },
    methods:{
      showOnMap:(data,data2)=>{
        let searchTerm=data+' '+data2
        window.open('https://www.google.com/maps/dir//'+searchTerm, '_blank')
      },
      getCuisines(data){
        return data.split(",")
      },
      showProductDetails(data){
        localStorage.setItem('res_id',data)        
        this.$store.dispatch('restaurantDetails').then(()=>{this.$router.replace('/restaurant-details')
        this.$store.commit('SET_SEARCH_DROPDOWN',{})})
      },
      slicing(data){
            let data_to_splice=data
            if(data_to_splice.length<33)
                return data_to_splice
            else
                return data_to_splice.slice(0,32)+".."
      },
      searchByCuisine(searchData){
        localStorage.setItem('searchQuery',searchData)
        localStorage.setItem("Cuisine",null)
        this.$store.dispatch('restaurantsFromFacets').then(()=>{this.$router.replace('/search')})
      }
    }
}
</script>
<style lang="scss">
.flexrow{
    display: flex;
    flex-direction: row;
}
.page-body{
  justify-content:space-around;
  padding: 0vh 20vh 0vh 20vh;
  background-color: white;
}
.imageCard{
    padding: 10vh 0vh 5vh 0vh;
    height: 90%;
}
.restaurant-info{
    background-color: ivory;
  padding: 0vh 3vh 2vh 4vh;
  height: 30vh;
  position: sticky; 
  top: 0vh;
}
.more-info{
 padding: 0vh 3vh 2vh 4vh;
 text-align:left
}
.contact-card{
  flex-basis:40%; 
  height: 50vh; 
  position: sticky; 
  top: 30vh;
  box-shadow: 0vh 0vh 1vh 0vh rgba(189, 162, 162, 0.4);
  border-radius: 2vh;
}
.recco-Card{
    border-radius: 2vh;
    width: 60vh;
    height: 40vh;
    img{
      box-shadow: 0vh 0vh 1vh 0vh rgba(189, 162, 162, 0.4);
      border-radius: 2vh;
      height: 30vh;
      width: 100%;
    }
}
.info-body{
  flex-basis:60%;
}
.menu{
    content: url('https://b.zmtcdn.com/data/menus/937/19028937/25ec01119c40e1e90c0a688e7c8b65ba.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A');
  }
  .menu:hover{
    transform: scale(1.1);
  }

.main-image{
  flex-basis:60%;
  img{
    height: 100%;
    width: 90%;
    content: url('https://b.zmtcdn.com/data/pictures/5/52015/9a51034cd073de83a84ef133fe0b1945.jpg?output-format=webp');
  }
}
.thumbnails{
    flex-basis:40%;
    img{
      margin:0vh 1vw 1vw 0vw; 
      height: 48%;
      width: 45%;
      content: url('https://b.zmtcdn.com/data/pictures/chains/7/19028937/2802b25da35e0b646095d4fcd785bf0a.jpg?output-format=webp');
    }
}
</style>