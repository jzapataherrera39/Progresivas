<template>
<v-app>
  <div>
<v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="../../models/img/angie.jpeg"
      height="200px"
    ></v-img>

    <v-card-title>
      Angie Rojas
    </v-card-title>

    <v-card-subtitle>
     Programadora/diseñadora
    </v-card-subtitle>

  </v-card>
<br>
<br>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="../../models/img/nini.jpeg"
      height="200px"
    ></v-img>

    <v-card-title>
      Nini López Escobar
    </v-card-title>

    <v-card-subtitle>
     Programadora/investigadora
    </v-card-subtitle>

  </v-card>
  <br>
  <br>
  <br>
   <v-card
    class="mx-auto"
    max-width="344"
  >
      <v-img
      src="../../models/img/aly.jpeg"
      height="100px"
    ></v-img>

    <v-card-title>
      Culchac de la Vega Aly Ben-Hur
    </v-card-title>

    <v-card-subtitle>
     Docente
    </v-card-subtitle>
    </v-card>
  </div>


    </v-app>
</template>


<style>


.iz {
  align-content: center;
  align-items: center;
  position: absolute
}
</style>
<script>
export default {
  name: "creditos",
  data: () => ({
    //
  }),

  beforeDestroy() {
    },
};
</script>
