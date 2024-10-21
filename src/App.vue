<template>
  <div class="Contenedor">
    <div class="Tab">
      <q-tabs v-model="tab" no-caps class="bg-orange text-white shadow-2">
        <q-tab name="Inicio" label="Inicio" @click="goTo('/')" />
        <q-tab name="Habitaciones" label="Habitaciones" @click="goTo('/habitacion')" />
        <q-tab name="Servicios" label="Servicios" @click="goTo('/servicio')" />
        <q-tab name="Actividades" label="Actividades" @click="goTo('/actividad')" />
        <q-tab name="Registrarse" label="Registrarse" @click="goTo('/login')" />
      </q-tabs>
    </div>
    <router-view></router-view>

    <footer class="Pie">
      <div class="Info_Contacto">
        <p>Teléfono: +57 304 3526113</p>
        <p>Email: dafecani@gmail.com</p>
      </div>
      <div class="Redes">
        <p>Redes Sociales:</p>
        <p>
          <a href="https://example.com/" target="_blank">Facebook</a> |
          <a href="https://example.com/" target="_blank">Twitter</a> |
          <a href="https://example.com/" target="_blank">Instagram</a>
        </p>
      </div>
      <p class="Copy">&copy; 2024 Hotel valle del sol.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const tab = ref('Inicio');
const router = useRouter();
const goTo = (route) => {
  router.push(route);
}
</script>

<style>
.Contenedor {
  background-image: url(https://st2.depositphotos.com/2974663/46714/i/450/depositphotos_467149506-stock-photo-wood-texture-background-vector-illustration.jpg);
}

.Tab {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.Pie {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 7px;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-around;
}

.Info_Contacto,
.Redes {
  display: grid;
  justify-content: center;
}

.Copy {
  display: grid;
  align-items: center;
}

a {
  color: aqua;
}

@media (max-width:835px) {
  .Pie {
    display: grid;
  }
}
</style>