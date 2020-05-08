<template>
    <div class="page-body">
        <div v-for="(item, index) in GET_CATEGORIES" :key="index">
            <div class="card" @click="showDetailsInSearch(item.categories.name)">
                <div>
                    <img src='https://i.ibb.co/sbkYD3d/64dffaa58ffa55a377cdf42b6a690e721585809275.png'>
                </div>
                <div>
                    {{item.categories.name}}
                </div>
                 <div>
                    <b-icon-search></b-icon-search>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
      ...mapGetters(['GET_CATEGORIES'])
    },
    mounted(){
        this.$store.dispatch('Categories')
    },
    methods:{
        showDetailsInSearch(searchData){
            const searchQuery={ 
            data:searchData,
            isSearchbox:"false",
            }
            this.$store.dispatch('Restaurants',{searchQuery}).then(()=>{this.$router.replace('/search')})
        }
    }
    
}
</script>
<style scoped>
.page-body{
    margin-top: 10vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.card{
    width: 30vh;
    height: 35vh;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: column;
    transition: 1s;
}
img{
    width: 30vh;
    height: 25vh;
    transition: 1s;
}
</style>