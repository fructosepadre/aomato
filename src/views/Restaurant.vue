<template>
    <div class="page-body flexcolumn">                   
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
            <div style="font-size: 2em;">{{GET_RESTAURANT_DETAILS.name}}<br></div>
            <div style="font-size: 1em;">{{GET_RESTAURANT_DETAILS.cuisines}}<br></div>
            <div style="font-size: 1em; color:grey;">{{GET_RESTAURANT_DETAILS.location.locality}}<br><br></div>
            {{GET_RESTAURANT_DETAILS.timings}}<br>
            <div style="font-size: 1em; color:crimson;"><b>Average cost for 2 : Rs. {{GET_RESTAURANT_DETAILS.average_cost_for_two}}</b><br></div>
        </div>
        <div class="rating" style="flex-basis:10%; text-align:center; border-radius:2vh; background-color:rgb(79, 223, 35);">
          <br>
          User Rating<hr>
          {{GET_RESTAURANT_DETAILS.user_rating.aggregate_rating}}<hr>
          {{GET_RESTAURANT_DETAILS.user_rating.votes}} votes
        </div>
      </div>
      <br>
      <div class="more-info flexrow">
          <div class="info-body">
            <p style="font-size: 1.5em;">Menu</p>
            <img>
            <br><br><br>
            <p style="font-size: 1.5em;">Cuisines</p>
            <div class="cuisine flexrow">
              <div v-for="(item,index) in getCuisines(GET_RESTAURANT_DETAILS.cuisines)" :key="index">
                <div v-if="index<4"><b-button style="border-radius:5vh; margin-right:2vh;" variant="outline-secondary">{{item}}</b-button></div>  
              </div>
            </div>
            <br><br>
            <p style="font-size: 1.5em;">Payment Methods:</p>
            <div v-for="(item,index) in GET_RESTAURANT_DETAILS.highlights" :key="index">
                <div v-if="item=='Credit Card'">{{item}}</div>
                <div v-if="item=='Debit Card'">{{item}}</div>
                <div v-if="item=='Cash'">{{item}}</div>
            </div>
          </div>
          <div class="contact-card">
            <div style="padding: 3vh 3vh 3vh 3vh">
              <p style="font-size: 1.5em;">Call</p>
              <p style="font-size: 1em; color:red;">{{GET_RESTAURANT_DETAILS.phone_numbers}}</p>
              <p style="font-size: 1.5em;">Address</p>
              <p style="font-size: 1em; color:gray;">{{GET_RESTAURANT_DETAILS.location.address}}</p>
              <b-button @click="showOnMap(GET_RESTAURANT_DETAILS.name,GET_RESTAURANT_DETAILS.location.locality_verbose)" variant="outline-secondary" style="color:blue">Directions</b-button><br>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data: ()=>({
    }),
    computed:{
      ...mapGetters(['GET_RESTAURANT_DETAILS']),
    },
    methods:{
      showOnMap:(data,data2)=>{
        let searchTerm=data+' '+data2
        window.open('https://www.google.com/maps/dir//'+searchTerm, '_blank')
      },
      getCuisines: (data)=>{
        return data.split(",")
      }
    }
}
</script>
<style lang="scss">
.flexcolumn{
  display: flex;
  flex-direction: column;
}
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
  background-color: white;
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
  box-shadow: 0vh 0vh 1vh 0vh rgba(0,0,0,0.4);
  border-radius: 2vh;
}
.info-body{
  flex-basis:60%;
  height: 200vh;
  img{
    content: url('https://b.zmtcdn.com/data/menus/937/19028937/25ec01119c40e1e90c0a688e7c8b65ba.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A');
  }
  img:hover{
    transform: scale(1.1);
  }
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
img{
   transition: 1s; 
}
img:hover{
    filter: brightness(1.1);
}
</style>