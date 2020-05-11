<template>
    <div class="page-body">
        <div v-for="(item, index) in getCategories" :key="index">
            <div v-if="index<8" class="card" @click="showDetailsInSearch(item.categories.name)">
                <div>
                    <img src='https://i.ibb.co/sbkYD3d/64dffaa58ffa55a377cdf42b6a690e721585809275.png'>
                </div>
                <div style="margin-top:2vh">
                    {{item.categories.name}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
      ...mapGetters(['getCategories'])
    },
    mounted(){
        this.$store.dispatch('categories')
    },
    methods:{
        showDetailsInSearch(searchData){
            localStorage.setItem('searchQuery',searchData)
            this.$store.dispatch('restaurants').then(()=>{this.$router.replace('/search')
            this.$store.commit('SET_SEARCH_DROPDOWN',{})})
        }
    }
    
}
</script>
<style scoped>
.page-body{
    margin-top: 10vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.card{
    width: 40vh;
    height: 40vh;
    margin-bottom: 10vh;
    margin-right: 5vh;
    border-radius: 2vw;
    font-size: 1.5em;
}
img{
    width: 40vh;
    height: 30vh;
}
</style>