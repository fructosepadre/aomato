import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        lat:'12.9151677',
        long:'77.6496451',
        zomatoApiKey:'609580fc2c9ee708511fa0e89b3acef5',
        headerClicked:true,
        restaurants:{},
        categories:{},
        selectedRestaurant:'',
        restaurantDetails:{}
    },
    mutations:{
        SET_RESTAURANTS(state,data){
            state.restaurants=data
        },
        SET_CATEGORIES(state,data){
            state.categories=data
        },
        SET_SELECTED_RESTAURANT(state,data){
            state.selectedRestaurant=data
        },
        SET_RESTAURANT_DETAILS(state,data){
            state.restaurantDetails=data
        }
    },
    actions:{
        Restaurants(context,data){
            return Axios.get('https://developers.zomato.com/api/v2.1/search?entity_type=city&lat='+
            this.state.lat+"&lon="+this.state.long+"&count=8&q="+data,{
                headers:{
                    "user-key":this.state.zomatoApiKey,
                    "content-type": "application/json"
                }
                })
              .then(function(response){
                context.commit('SET_RESTAURANTS',response.data.restaurants)    
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
        RestaurantDetails(context,data){
            context.commit('SET_SELECTED_RESTAURANT',data)    
            return Axios.get('https://developers.zomato.com/api/v2.1/restaurant?res_id='+data,{
                headers:{
                    "user-key":this.state.zomatoApiKey,
                    "content-type": "application/json"
                }
                })
              .then(function(response){
                    context.commit('SET_RESTAURANT_DETAILS',response.data)    
            })
        }
    },
    getters:{
        GET_RESTAURANTS(state){
            return state.restaurants
        },
        GET_CATEGORIES(state){
            return state.categories
        },
        GET_SELECTED_RESTAURANT(state){
            return state.selectedRestaurant
        },
        GET_RESTAURANT_DETAILS(state){
            return state.restaurantDetails
        }
    },
    modules: {
    }
})