import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        lat:'12.9151677',
        long:'77.6496451',
        zomatoApiKey:'609580fc2c9ee708511fa0e89b3acef5',
        restaurants_from_search:{},
        searchDropdown:{},
        categories:{},
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
        restaurantsFromFacets(context){
            const QUERY=localStorage.getItem('searchQuery')
            const DISTANCE=localStorage.getItem('Distance')
            const CUISINE=localStorage.getItem('Cuisine')
            const CATEGORY=localStorage.getItem('Categories')
            const COST_SORT=this.checkedFacet=localStorage.getItem("Cost for 2")
            const RATING_SORT=this.checkedFacet=localStorage.getItem("Rating")
            let URL='https://developers.zomato.com/api/v2.1/search?entity_type=city&lat='+
                this.state.lat+"&lon="+this.state.long+"&count=10&q="+QUERY+"&"
            if(DISTANCE.length>0){
                URL+="radius="+DISTANCE+"&"}
            if(CUISINE.length>0){
                URL+="cuisines="+CUISINE+"&"}
            if(CATEGORY.length>0)
                URL+="establishment_type="+CATEGORY+"&"
            if(COST_SORT.length>0)
                URL+="sort=cost&order="+COST_SORT+"&"
            if(RATING_SORT.length>0)
                URL+="sort=rating&order="+RATING_SORT+"&"
            URL=URL.slice(0,-1)  
            return Axios.get(URL,{
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
        restaurantsInDropDrown(context,data){
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
        restaurants(context){
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
        categories(context){
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
        restaurantDetails(context){
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
        getCategories(state){
            return state.categories
        },
        getRestaurantDetails(state){
            return state.restaurantDetails
        },
        getRestaurantsFromSearch(state){
            return state.restaurants_from_search
        },
        getSearchDropdown(state){
            return state.searchDropdown
        },
        getRecommendation(state){
            return state.reccomendation
        },
    },
    modules: {
    }
})