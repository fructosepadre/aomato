<template>
    <div class="sidebar">
        <div class="sidebar-content">
            <p style="font-size: 1.5em;">Filters</p>
            <hr>
            <div class="content-facet">Cuisine</div>
            <hr>
            <div class="content-facet">Cost</div>
            <hr>
            <div class="content-facet">Distance</div>
            <hr>
        </div>
    </div>    
</template>
<script>
export default {
    
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
