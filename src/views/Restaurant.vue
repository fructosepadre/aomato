<template>
    <div class="page-body">
      <!-- {{GET_RESTAURANT_DETAILS.name}}<br>
      {{GET_RESTAURANT_DETAILS.location}}<br>
      {{GET_RESTAURANT_DETAILS.cuisines}}<br>
      {{GET_RESTAURANT_DETAILS.timings}}<br>
      {{GET_RESTAURANT_DETAILS.average_cost_for_two}}<br>
      {{GET_RESTAURANT_DETAILS.highlights}}<br>
      {{GET_RESTAURANT_DETAILS.user_rating}}<br>
      {{GET_RESTAURANT_DETAILS.phone_numbers}}<br>              
      {{GET_RESTAURANT_DETAILS.establishment}}<br>              
      {{GET_RESTAURANT_DETAILS.has_online_delivery}}<br> -->            
      <div class="imageCard">
          <div class="main-image">
            <img>
          </div>
          <div class="thumbnails">
            <img><img><img><img>
          </div>
      </div>
      <div class="restaurant-info">
        <div class="restaurant" style="flex-basis:90%; text-align:left;">
            <div style="font-size: 2em;">{{this.name}}<br></div>
            <div style="font-size: 1em;">{{this.cuisines}}<br></div>
            <div style="font-size: 1em; color:grey;">{{this.location.locality}}<br><br></div>
            {{this.timings}}<br>
            <div style="font-size: 1em; color:crimson;"><b>Average cost for 2 : Rs. {{average_cost_for_two}}</b><br></div>
        </div>
        <div class="rating" style="flex-basis:10%; text-align:center; border-radius:2vh; background-color:rgb(79, 223, 35);">
          User Rating<hr>
          {{this.user_rating.aggregate_rating}}<hr>
          {{this.user_rating.votes}} votes
        </div>
    </div>
      </div>
</template>
<script>
// import {mapGetters} from 'vuex'
export default {
    data: ()=>({
      name:'MOJO Pizza - 2X Toppings',
      location:{ "address": "120/4, Harlur Main Road, HSR, Bangalore", "locality": "HSR", "city": "Bangalore", "city_id": 4, "latitude": "12.8988477602", "longitude": "77.6584519073", "zipcode": "", "country_id": 1, "locality_verbose": "HSR, Bangalore" },
      cuisines:'Pizza, Fast Food, Desserts',
      timings:'11am – 1am (Mon-Sun)',
      average_cost_for_two:'600',
      highlights:[ "No Seating Available", "Dinner", "Delivery", "Credit Card", "Lunch", "Cash", "Takeaway Available", "Debit Card", "Bulk Orders Accepted", "Digital Payments Accepted" ],
      user_rating:{ "aggregate_rating": "4.0", "rating_text": "Very Good", "rating_color": "5BA829", "rating_obj": { "title": { "text": "4.0" }, "bg_color": { "type": "lime", "tint": "600" } }, "votes": "59" },
      phone_numbers:'022 33252828',
      establishment:[],
      has_online_delivery:'1'
    }),
    computed:{
      // ...mapGetters(['GET_RESTAURANT_DETAILS']),
    },
    methods:{
    }
}
</script>
<style lang="scss">
.page-body{
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  padding-left: 10vh;
  padding-right: 10vh;
  background-color: white;
}
.imageCard{
    padding-top: 10vh;
    padding-bottom:5vh;
    height: 90%;
    display: flex;
    flex-direction: row;
    border-radius: 2vh;
}
.restaurant-info{
  margin-left: 5vh;
  margin-right: 5vh;
  height: 30vh;
  display: flex;
  flex-direction: row;
  border-radius: 2vh;
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
    filter: brightness(1.2);
}
</style>