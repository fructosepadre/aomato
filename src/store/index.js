import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        lat:'12.9151677',
        long:'77.6496451',
        zomatoApiKey:'d05fa7a233bacb1b0b1f3c84feae4df7',
        headerClicked:true,
        restaurants_from_search:{},
        searchDropdown:{},
        categories:{},
        selectedRestaurant:'',
        restaurantDetails:{}
    },
    mutations:{
        SET_RESTAURANTS_FROM_SEARCH(state,data){
            state.restaurants_from_search=data
        },
        SET_CATEGORIES(state,data){
            state.categories=data
        },
        SET_SELECTED_RESTAURANT(state,data){
            state.selectedRestaurant=data
        },
        SET_SEARCH_DROPDOWN(state,data){
            state.searchDropdown=data
        },
        SET_RESTAURANT_DETAILS(state,data){
            state.restaurantDetails=data
        }
    },
    actions:{
        Restaurants(context,{searchQuery}){
            console.log()
            return Axios.get('https://developers.zomato.com/api/v2.1/search?entity_type=city&lat='+
            this.state.lat+"&lon="+this.state.long+"&count=8&q="+searchQuery.data,{
                headers:{
                    "user-key":this.state.zomatoApiKey,
                    "content-type": "application/json"
                }
                })
              .then(function(response){
                if(searchQuery.isSearchbox){
                    context.commit('SET_SEARCH_DROPDOWN',response.data.restaurants)}
                else{
                    context.commit('SET_RESTAURANTS_FROM_SEARCH',response.data.restaurants)}  
            })
        },
        Categories(context){
            return Axios.get('https://developers.zomato.com/api/v2.1/categories',{
                headers:{
                    "user-key":this.state.zomatoApiKey,
                    "content-type": "application/json"
                }
                })
              .then(function(response){
                    context.commit('SET_CATEGORIES',response.data.categories)    
            })
        },
        async RestaurantDetails(context,data){
            // context.commit('SET_SELECTED_RESTAURANT',data)
            return Axios.get('https://developers.zomato.com/api/v2.1/restaurant?res_id='+data,{
                headers:{
                    "user-key":this.state.zomatoApiKey,
                    "content-type": "application/json"
                }
                })
              .then(function(response){
                  console.log(response.data)
                    context.commit('SET_RESTAURANT_DETAILS',response.data)    
            })
        }
    },
    getters:{
        GET_CATEGORIES(state){
            return state.categories
        },
        GET_SELECTED_RESTAURANT(state){
            return state.selectedRestaurant
        },
        GET_RESTAURANT_DETAILS(state){
            return state.restaurantDetails
        },
        GET_RESTAURANTS_FROM_SEARCH(state){
            return state.restaurants_from_search
        },
        GET_SEARCH_DROPDOWN(state){
            return state.searchDropdown
        },
    },
    modules: {
    }
})