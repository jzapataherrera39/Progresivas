<template>
<div>
<v-tabs
     
      background-color="blue"
      centered
      light
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

    <v-tab :to="{ name: 'Inicio' }">
        <v-icon>mdi-home-circle</v-icon>
      </v-tab>

      <v-tab :to="{ name: 'Contenido' }">
        Contenido
        <v-icon>mdi-book-open-variant</v-icon>
      </v-tab>
    
      <v-tab :to="{ name: 'NuevoC' }">
        Actividades
        <v-icon>mdi-bookmark-multiple</v-icon>
      </v-tab>

      <v-tab :to="{ name: 'Evaluacion' }">
        Evaluación
        <v-icon>mdi-account-box</v-icon>
      </v-tab>
      <v-tab :to="{ name: 'Creditos' }">
        Créditos
        <v-icon>mdi-account-details</v-icon>
      </v-tab>
    </v-tabs>
<v-main>
  <transition name="slide-fade">
      <router-view> </router-view>
      </transition>
      </v-main>
      
      </div>
      
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
