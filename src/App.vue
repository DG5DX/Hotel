<template>
  <div class="Contenedor">
    <div class="Tab">
    <q-tabs v-model="tab" no-caps class="bg-orange text-white shadow-2">
      <q-tab name="Inicio" label="Inicio" @click="goTo('/')"/>
      <q-tab name="Habitaciones" label="Habitaciones" @click="goTo('/habitacion')"/>
      <q-tab name="Servicios" label="Servicios" @click="goTo('/servicio')" />
      <q-tab name="Actividades" label="Actividades" @click="goTo('/actividad')"/>
      <q-tab name="Registrarse" label="Registrarse" @click="goTo('/login')"/>
    </q-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import axios from 'axios';
import { useRouter } from 'vue-router'

const tab = ref('Inicio');
const router = useRouter();
const goTo = (route) => {
  router.push(route);
}
</script>

<style>
.Tab{
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>