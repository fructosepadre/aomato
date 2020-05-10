<template>
    <div class="content-facet">
        <p>{{facet}}</p>
        <div class="filter_list">
            <b-form-radio-group 
                v-model="checkedCategories"
                :options="options"
                value-field="id" 
                text-field="value"
                @input="show(facet)">
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
        checkedCategories:''
    }),
    methods:{
        show(facet){
            console.log(facet,this.checkedCategories)
        },
        refresh(){
            this.checkedCategories=''
        }
    }
}
</script>
<style lang="scss" scoped>
.content-facet{
    color: black;
    text-align: left;
    font-size: 1.2em;
}
.filter_list{
    font-size: 1em;
    color: gray;
}
</style>
