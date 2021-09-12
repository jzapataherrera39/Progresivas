<template>
  <v-app>

    <router-view> 

    </router-view>
  </v-app>
</template>
<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style>


#app {
  background: url('../models/img/background.png') no-repeat center center fixed !important;
  background-size: cover;
  
}

.title {
  color:  rgb(0, 0, 0);
position: relative;
  bottom: -350px;
   right: -450px;


}

.subtitle {
  color:  rgb(0, 0, 0);
position: relative;
bottom: -350px;
   right: -540px;
   font-size: 55px;
  

}

body{
  margin: 0; 
  padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon {
    align-content: right;
    align-items: right;
    padding-left: 85%;
    
}
.img{
position: relative;
  bottom: 120px;
   right: -540px;

    }

.menu {
  align-items: left;
  align-self: left;
 
}
</style>
