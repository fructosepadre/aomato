import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        lat:'12.9151677',
        long:'77.6496451',
        zomatoApiKey:'d05fa7a233bacb1b0b1f3c84feae4df7',
        restaurants_from_search:{},
        searchDropdown:{},
        categories:{},
        selectedRestaurant:'',
        restaurantDetails:{},
        reccomendation:{}
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
        },
        SET_RECOMMENDATION(state,data){
            state.reccomendation=data
        },        
    },
    actions:{
        RestaurantsFromFacets(context){
            let query=localStorage.getItem('searchQuery')
            let distance=localStorage.getItem('Distance')
            let cuisine=localStorage.getItem('Cuisine')
            let category=localStorage.getItem('Categories')
            return Axios.get('https://developers.zomato.com/api/v2.1/search?entity_type=city&lat='+
            this.state.lat+"&lon="+this.state.long+"&count=10&q="+query+"&radius="+distance+"&cuisines="+cuisine+"&establishment_type="+category,{
                headers:{
                    "user-key":this.state.zomatoApiKey,
                    "content-type": "application/json"
                }
                })
              .then(function(response){
                context.commit('SET_RESTAURANTS_FROM_SEARCH',response.data.restaurants)
                context.commit('SET_RECOMMENDATION',response.data.restaurants) 
            })
        },
        RestaurantsInDropDrown(context,data){
            return Axios.get('https://developers.zomato.com/api/v2.1/search?entity_type=city&lat='+
            this.state.lat+"&lon="+this.state.long+"&count=8&q="+data,{
                headers:{
                    "user-key":this.state.zomatoApiKey,
                    "content-type": "application/json"
                }
                })
              .then(function(response){
                context.commit('SET_SEARCH_DROPDOWN',response.data.restaurants)
                context.commit('SET_RECOMMENDATION',response.data.restaurants) 
            })
        },
        Restaurants(context){
            let query=localStorage.getItem('searchQuery')
            return Axios.get('https://developers.zomato.com/api/v2.1/search?entity_type=city&lat='+
            this.state.lat+"&lon="+this.state.long+"&count=10&q="+query,{
                headers:{
                    "user-key":this.state.zomatoApiKey,
                    "content-type": "application/json"
                }
                })
              .then(function(response){
                context.commit('SET_RESTAURANTS_FROM_SEARCH',response.data.restaurants)
                context.commit('SET_RECOMMENDATION',response.data.restaurants) 
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
        async RestaurantDetails(context){
            let res_id=localStorage.getItem('res_id')        
            return Axios.get('https://developers.zomato.com/api/v2.1/restaurant?res_id='+res_id,{
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
        GET_RECOMMENDATION(state){
            return state.reccomendation
        },
    },
    modules: {
    }
})