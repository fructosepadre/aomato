<template>
    <div class="sidebar">
        <div class="sidebar-content">
            <div v-if="type=='Filters'">
            <p style="font-size: 1.5em;">{{type}}</p>
            <hr>
             <SidebarContent facet="Cuisine" :options="cuisines"/>
             <SidebarContent facet="Distance" :options="distance"/>
             <SidebarContent facet="Categories" :options="categories" />
            </div>
            <div v-if="type=='Sort'">
            <p style="font-size: 1.5em;">{{type}}</p>
            <hr>
             <SidebarContent facet="Average Cost for 2" :options="cost"/>
             <SidebarContent facet="Rating" :options="rating"/>
            </div>   
        </div>
    </div>    
</template>
<script>
import SidebarContent from '@/layout/SidebarContent.vue'
export default {
    components: {
        SidebarContent
    },
    props:{
        type:String
    },
    data: ()=>({ 
       distance: [
          { id: '200', value: 'Upto 200m'},
          { id: '500', value: 'Upto 500m'},
          { id: '700', value: 'Upto 700m'},
        ],
       cuisines: [
          { id: '25', value: 'Chinese'},
          { id: '7', value: 'Biryani'},
          { id: '50', value: 'North Indian'},
        ],
        categories: [
          { id: '21', value: 'Quick Bites'},
          { id: '31', value: 'Bakery'},
          { id: '23', value: 'Dessert Parlour'},
        ],
        cost: [
          { id: 'desc', value: 'High to Low'},
          { id: 'asc', value: 'Low to High'},
        ],
        rating: [
          { id: 'desc', value: 'High to Low'},
          { id: 'asc', value: 'Low to High'},
        ],
    }),
    methods:{
    }
}
</script>
<style>
.sidebar{
    margin-top: 10vh;
    border-radius: 2vh;
    flex-basis: 15%;
    box-shadow: 0vh 0vh 1vh 0vh rgba(189, 162, 162, 0.4);
    position: sticky;
    top:0vh;
    width: 20%;
}
.sidebar-content{
    margin: 2vh 2vh 2vh 2vh;
}
</style>
