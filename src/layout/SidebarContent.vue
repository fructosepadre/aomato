<template>
    <div class="content-facet">
        <p>{{facet}}</p>
        <div class="filter_list">
            <b-form-radio-group 
                v-model="checkedFacet"
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
    mounted(){
        if(this.facet=='Cuisine'){
             return this.checkedFacet=localStorage.getItem("Cuisine")}
        else if(this.facet=='Distance'){
             return this.checkedFacet=localStorage.getItem("Distance")}
        else if(this.facet=='Categories'){ 
            return this.checkedFacet=localStorage.getItem("Categories")}

        if(this.facet=='Cost for 2'){
             return this.checkedFacet=localStorage.getItem("Cost for 2")}
        else if(this.facet=='Rating'){
             return this.checkedFacet=localStorage.getItem("Rating")}
    },
    data:()=>({
        checkedFacet:'',
    }),
    methods:{
        enable(facet){
            localStorage.setItem(facet,this.checkedFacet)
            this.$store.dispatch('restaurantsFromFacets') 
        },
        refresh(){
            this.checkedFacet=''
            this.$store.dispatch('restaurantsFromFacets')
        },
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
