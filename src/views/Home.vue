<template>
    <div class="page-body">
        <div v-for="(item, index) in GET_CATEGORIES" :key="index">
            <div class="card" @click="showDetailsInSearch(item.categories.name)">
                {{item.categories.name}}
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
    data: ()=>({
        home:true
    }),
    methods:{
        showDetailsInSearch(data){
            this.$store.dispatch('Restaurants',data).then(()=>{this.$router.push('/search')})
        }
    }
    
}
</script>
<style scoped>
.page-body{
    margin-top: 10vh;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10vh;
    margin-right: 10vh;
    justify-content: center;
}
.card{
    background-image: url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png');
    width: 30vh;
    height: 30vh;
     margin-left: 2vh;
    margin-right: 2vh;
    margin-bottom: 10vh;
    box-shadow: 0px 0px 2px 2px;
    background-color: coral;
}
</style>