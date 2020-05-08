<template>
    <div>
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
    -------------------------------<br>
    |   {{this.location}}  Images  | (=================== {Hide ho jana chahiye}<br>
    -------------------------------<br>
    <br>
    ---Fixed------------------                    {{this.establishment}}<br> 
    |  {{this.name}}         |                   {{this.user_rating}}<br>
    |  {{this.cuisines}}     |                    {{this.highlights}}<br>
    |  {{this.timings}}      |                    {{this.phone_numbers}}<br>
    ---Fixed -----------------                    {{this.has_online_delivery}}<br> 
    <br>     
    ---Menu image------------- 
    <br>
    {{this.average_cost_for_two}}
    <br>
    --Buttons--------------------
    |  {{this.cuisines}} |
    ---Buttons-------------------
    <br>
                           
                   
 
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
<style scoped>
</style>