<template>
    <div class="content-facet">
        <p>{{facet}}</p>
        <div class="filter_list">
            <b-form-radio-group 
                v-model="checkedCuisine"
                :options="options"
                value-field="id" 
                text-field="value"
                @input="enable(facet)">
            </b-form-radio-group>
        </div>
        <button type="button" class="btn btn-link" @click="refresh">Remove filter</button>
        <hr>
    </div>    
</template>
<script>
export default {
    name:'sidebar-content',
    props: {
        facet: String,
        options: Array,
    },
    data:()=>({
        checkedCuisine: localStorage.getItem("Cuisine")
    }),
    methods:{
        enable(facet){
            localStorage.setItem(facet,this.checkedCategories)
            this.$store.dispatch('RestaurantsFromFacets')    
        },
        refresh(){
            this.checkedCategories=''
            this.$store.dispatch('RestaurantsFromFacets')

        }
    }
}
</script>
<style lang="scss" scoped>
.content-facet{
    color: black;
    text-align: left;
    font-size: 1em;
}
.filter_list{
    font-size: 1em;
    color: gray;
}
</style>
