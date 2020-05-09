<template>
    <main>
        <div class="header">
            <div class="searchBar">
                <div class="aomato">
                    <h1>aomato</h1>
                </div>
                <br>
                <h2>Discover the best food & drinks in Bangalore</h2>
                <br>
                <b-input-group>
                    <b-input v-model="dish" v-on:keyup="getMenu" placeholder="Quarantine mei khud bana bro. Wase kya khayega?" autocomplete="off"></b-input>
                    <b-button v-if="dish.length!=0" @click="showResults"><b-icon-search></b-icon-search></b-button>
                </b-input-group>
            </div>  
            <div class="searchResultContainer">
                <div v-for="(item, index) in GET_SEARCH_DROPDOWN" :key="index" @click="showProductDetails(item.restaurant.R.res_id)">
                    <div class="searchResults">
                        <div>                        
                            <img v-if="item.restaurant.thumb.length>0" :src="item.restaurant.thumb">
                            <img v-else src='https://b.zmtcdn.com/data/reviews_photos/b61/20c052d41ef37b1e7cf50a6fcaa1cb61_1514270283.jpg?impolicy=newcropandfit&cropw=480&croph=480&cropoffsetx=75&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore'>
                        </div>
                        <div style="font-size:1.2em; flex-basis:80%">
                            <br>
                            {{item.restaurant.name}}
                        </div>
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
      ...mapGetters(['GET_SEARCH_DROPDOWN']),
    },
    data:()=>({
        dish:'',
    }),
    methods:{
        getMenu: function(event){
            if(this.dish.length<=1)
                return this.$store.commit('SET_SEARCH_DROPDOWN',{})
            if(event.key== "Enter")
                return this.showResults()
            const searchQuery={ 
            data:this.dish,
            isSearchbox:"dropdown",
           }
           this.$store.dispatch('Restaurants',{searchQuery})
        },
        showProductDetails(data){
            this.$store.dispatch('RestaurantDetails',data)
                .then(()=>{this.$router.push('restaurant-details')})
            this.dish=''
            this.$store.commit('SET_SEARCH_DROPDOWN',{})
        },
        showResults: function(){
            const searchQuery={ 
            data:this.dish,
            isSearchbox:"false",
            }
            this.$store.dispatch('Restaurants',{searchQuery}).then(()=>{this.$router.push('/search')
            this.$store.commit('SET_SEARCH_DROPDOWN',{})
            })
            this.dish=''
        }
    }
    
}
</script>
<style lang="scss">
.searchResults img{
    height:80%;
    border-radius: 10%;
    margin-top: 5%;
}
.header{
    background-image: url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png');
    height:40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family:Okra,Helvetica,sans-serif;
    transition: 0.8s;
}
.header:hover{
    height:80vh;
    transition: ease-out;
    transition: 1.2s;
}
.searchBar{
    height:80%;
    transition: 1.5s;
    margin-bottom: 1vh;
}
.aomato{
    text-align: center;
    color: white;
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
    border-radius:20px;
}
.searchResults{
    background-color: white;
    color:black;
    height:100px;
    width:100vh;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 1px 0px;
}

</style>