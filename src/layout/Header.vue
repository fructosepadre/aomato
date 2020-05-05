<template>
    <main>
        <div class="header">
            <div class="searchbar">
                <b-input v-model="name"></b-input>
            </div>    
        </div>
    </main>
</template>
<script>
export default {
    
}
</script>
<style>
.header{
    background-image: url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png');
    height: 85vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.searchbar{
    background-color: blue;
    padding-top: 20vh;
    width: 80vh;
    padding-bottom: 20vh;

}
#b-input{
    height: 50vh;
}
</style>