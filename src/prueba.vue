<template>
  <v-app>
    
    <div class="menu">
      <v-navigation-drawer permanent expand-on-hover v-model="drawer">

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-clipboard-text-play</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contenidos</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-application-edit-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Actividades</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-script-text</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Evaluación</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-supervisor-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Créditos</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>
    </div>
    <router-view> 

    </router-view>
  </v-app>
</template>
<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () {
    return {

      drawer: true,
      items: [
        {title: "Contenidos", icon: "mdi-clipboard-text-play", path: "/src/views/contenido.vue"},
        {title: "Actividades", icon: "mdi-application-edit-outline", path: "/src/views/ComponenteNuevo.vue"},
      ]

    }
  },
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
