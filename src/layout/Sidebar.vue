<template>
    <div class="sidebar">
        <div class="sidebar-content">
            <p style="font-size: 1.5em;">Filters</p>
            <hr>
             <SidebarContent facet="Cuisine" :options="cuisines"/>
             <SidebarContent facet="Distance" :options="distance"/>
             <!-- <SidebarContent facet="Distance" content="North Indian,Buryani" />             -->
        </div>
    </div>    
</template>
<script>
import SidebarContent from '@/layout/SidebarContent.vue'
export default {
    components: {
        SidebarContent
    },
    data: ()=>({ 
       distance: [
          { id: '1', value: 'Upto 1 km'},
          { id: '5', value: 'Upto 5 km'},
          { id: '7', value: 'Upto 7 km'},
        ],
       cuisines: [
          { id: '25', value: 'Chinese'},
          { id: '7', value: 'Biryani'},
          { id: '50', value: 'North Indian'},
        ]
    }),
    methods:{
    }
}
</script>
<style>
.sidebar{
    margin-top: 10vh;
    margin-left: 5vh;
    border-radius: 2vh;
    flex-basis: 15%;
    height:50vw; 
    box-shadow: 0vh 0vh 1vh 0vh rgba(189, 162, 162, 0.4);
    position: sticky;
    top:0vh;
    width: 20%;
}
.sidebar-content{
    margin: 2vh 2vh 2vh 2vh;
}
/*
.content-facet{
    color: black;
    text-align: left;
    font-size: 1.2em;
}
.filter_list{
    font-size: 1em;
    color: gray;
} */
</style>
