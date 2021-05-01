<template>
  <v-app>
    

    <v-main>
      <br>
    
      <h1 class="title"><span style="font-size: 58px;">APLICACIONES WEB</span> </h1>
      <h3 class="subtitle">PROGRESIVAS</h3>
      <br>

      <div class="img">
     <v-img
      src="../models/img//logo.png"
      max-width="300" 
      max-height="300"
      
    >
        </v-img>
        </div>
   
   
  
<div class="icon">
      <v-btn
              y-large
              color="primary"
              large="15"
              elevation="0"
              fab
            >
              <v-icon color="white">mdi-chevron-right</v-icon>
            </v-btn>
            </div>
            
           
    </v-main>
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

</style>
