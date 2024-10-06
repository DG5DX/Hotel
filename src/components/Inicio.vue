<template>
  <div class="Inicio">
    <header>
      <h2 class="Logo">Hotel</h2>
      <p class="Slogan">Donde el lujo se encuentra con la naturaleza</p>
    </header>

    <div class="Carrusel">
      <div class="Imagenes" :style="{ transform: `translateX(${-currentIndex * 100}%)` }">
        <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vista del hotel" />
        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Piscina del hotel" />
        <img src="https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Habitaciones">
      </div>
      <button @click="prevImage">←</button>
      <button @click="nextImage">→</button>
    </div>

    <div class="Historia">
      <h3>Nuestra Historia</h3>
      <p>
        Fundado en 1990, nuestro hotel ha sido un destino favorito para viajeros que buscan una combinación
        única de lujo y contacto con la naturaleza. Con vistas espectaculares y servicios de primera, 
        ofrecemos a nuestros huéspedes una experiencia inolvidable.
      </p>
    </div>

    <div class="ServiciosDestacados">
      <h3>Servicios Destacados</h3>
      <div class="ServiciosLista">
        <div class="Servicio">
          <h4>Spa y Bienestar</h4>
          <p>Relájate en nuestro spa de clase mundial.</p>
        </div>
        <div class="Servicio">
          <h4>Restaurante Gourmet</h4>
          <p>Disfruta de la mejor gastronomía local e internacional.</p>
        </div>
        <div class="Servicio">
          <h4>Excursiones Guiadas</h4>
          <p>Explora la naturaleza con nuestras excursiones exclusivas.</p>
        </div>
      </div>
    </div>

    <div class="Testimonios">
      <h3>Lo que dicen nuestros huéspedes</h3>
      <div class="ListaTestimonios">
        <blockquote>"Una experiencia inolvidable, servicio impecable y vistas maravillosas." - María P.</blockquote>
        <blockquote>"El mejor lugar para relajarse y desconectar del mundo." - Carlos G.</blockquote>
        <blockquote>"Volvería sin dudarlo, todo fue perfecto." - Laura R.</blockquote>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const images = [
  "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const currentIndex = ref(0);  // Índice de la imagen actual

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};
</script>

<style scoped>
.Inicio {
  padding: 20px;
  background-color: rgba(240, 240, 240, 0.9);
  border-radius: 5px;
  max-width: 900px;
  margin: auto;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.Logo {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  color: rgb(240, 66, 66);
}

.Slogan {
  font-size: 18px;
  color: #777;
}
.Carrusel {
  position: relative;
  max-width: 600px;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 10px;
}

.Imagenes {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.Imagenes img {
  width: 100%;
  height: auto;
  max-width: 600px;
  flex-shrink: 0;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

button:first-of-type {
  left: 10px;
}

button:last-of-type {
  right: 10px;
}

.Historia {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  margin-bottom: 20px;
}

.Historia h3 {
  margin-bottom: 10px;
  color: rgb(240, 66, 66);
}

.ServiciosDestacados {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  margin-bottom: 20px;
}

.ServiciosLista {
  display: grid;
  justify-content: space-between;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.Servicio {
  flex: 1;
  text-align: center;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #d4c8b9;
}
.Servicio h4 {
  margin-bottom: 5px;
  color: rgb(240, 66, 66);
}
.Testimonios {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
}
.ListaTestimonios{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
blockquote{
  font-style: italic;
  color: #333;
  border-left: 4px solid rgb(240, 66, 66);
  padding-left: 10px;
}
</style>