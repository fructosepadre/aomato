<template>
    <main>
        <div class="header">
            <div class="searchBar">
                <div v-if="GET_RESTAURANTS.length<1" class="aomato"><h1>aomato</h1></div>
                <div v-else class="aomato results"><h1>aomato</h1></div>
                <br>
                <h2>Discover the best food & drinks in Bangalore</h2>
                <br>
                <b-input-group>
                    <b-input v-model="dish" v-on:keyup="getMenu" placeholder="Quarantine mei khud bana bro. Wase kya khayega?" autocomplete="off"></b-input>
                    <b-button @click="showResults"><b-icon-search></b-icon-search></b-button>
                </b-input-group>
            </div>  
            <div v-if="dish.length>0" class="searchResultContainer">
                <div v-for="(item, index) in GET_RESTAURANTS" :key="index" @click="showProductDetails(item.restaurant.R.res_id)">
                    <div class="searchResults">
                        <div style="font-size:2em">
                        {{item.restaurant.name}}
                        </div>
                        <br>
                        <div>
                        {{item.restaurant.cuisines}}</div>
                    </div>
                </div>
            </div>  
        </div>
    </main>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
      ...mapGetters(['GET_RESTAURANTS']),
       currentRouteName() {
        return this.$route.name;
    }
    },
    data:()=>({
        dish:''
    }),
    methods:{
        getMenu: function(){
           this.$store.dispatch('Restaurants',this.dish)
        },
        showProductDetails(data){
            this.$store.dispatch('RestaurantDetails',data).then(()=>{this.$router.push('/restaurant-details')})
            this.dish=''
        },
        showResults: function(){
            this.$store.dispatch('Restaurants',this.dish).then(()=>{this.$router.push('/search')})
            this.dish=''
        }
    }
    
}
</script>
<style>
.header{
    background-image: url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png');
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.aomato{
    text-align: center;
    font-family:Okra,Helvetica,sans-serif;
    color: white;
}
.results{
    padding-top: 20vh;
}
h1{
    font-size: 10vh;
    font-style: italic;
    color: white;
}
h2{
    color: white;
}
.searchResultContainer{
    color: ivory;
    width: 100vh;
    overflow-x: auto; 
}
.searchResults{
    background-image: url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png');
    color:white;
    height:100px;
    margin-top: 10px;
    text-align: center;
    opacity: 0.7;
    box-shadow: 2px 2px 2px 2px;
}
.searchResults:hover {  opacity:1;transform: scale(1.2)}

</style>