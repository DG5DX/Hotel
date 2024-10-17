<template>
    <div class="Inicio">
        <header>
            <h2 class="Logo">Hotel Valle Del Sol</h2>
            <p class="Eslogan">Donde el lujo se encuentra con la naturaleza</p>
        </header>

        <div class="Carrusel">
            <div class="Imagenes" :style="{ transform: `translateX(${-currentIndex * 100}%)` }">
                <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Vista del hotel" />
                <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Piscina del hotel" />
                <img src="https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Habitaciones" />
            </div>
            <button @click="Anterior">◀️</button>
            <button @click="Siguiente">▶️</button>
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
                    <div class="ServicioContent">
                        <h4>Spa y Bienestar</h4>
                        <h5>⭐⭐⭐⭐⭐</h5>
                        <p>Relájate en nuestro spa de clase mundial.</p>
                    </div>
                </div>
                <div class="Servicio">
                    <div class="ServicioContent">
                        <h4>Restaurante Gourmet</h4>
                        <h5>⭐⭐⭐⭐⭐</h5>
                        <p>Disfruta de la mejor gastronomía local e internacional.</p>
                    </div>
                </div>
                <div class="Servicio">
                    <div class="ServicioContent">
                        <h4>Excursiones Guiadas</h4>
                        <h5>⭐⭐⭐⭐⭐</h5>
                        <p>Explora la naturaleza con nuestras excursiones exclusivas.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="Testimonios">
            <h3>Lo que dicen nuestros huéspedes</h3>
            <div class="ListaTestimonios">
                <blockquote>"Una experiencia inolvidable, servicio impecable y vistas maravillosas." - María P.
                </blockquote>
                <blockquote>"El mejor lugar para relajarse y desconectar del mundo." - Carlos G.</blockquote>
                <blockquote>"Volvería sin dudarlo, todo fue perfecto." - Laura R.</blockquote>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const imagenes = [
    "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const currentIndex = ref(0);

const Anterior = () => {
    currentIndex.value = (currentIndex.value - 1 + imagenes.length) % imagenes.length;
};

const Siguiente = () => {
    currentIndex.value = (currentIndex.value + 1) % imagenes.length;
};
</script>

<style scoped>
/* Aplica la transición de transform a todos los div */
div {
    transition: transform 0.5s ease-in-out;
}

.Inicio {
    padding: 20px;
    background-color: rgba(19, 19, 19, 0.9);
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
    font-size: 50px;
    color: rgb(255, 11, 11);
    margin: 30px;
}

.Eslogan {
    font-size: 18px;
    color: #fafafa;
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
    background-color: rgba(255, 234, 9, 0.867);
    border-radius: 5px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
}

.Historia:hover {
    transform: scale(1.05);
}

.Historia h3 {
    margin: 10px;
    color: rgb(240, 66, 66);
}

.ServiciosDestacados {
    padding: 20px;
    background-color: rgba(11, 105, 255, 0.768);
    border-radius: 5px;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
}

.ServiciosDestacados:hover {
    transform: scale(1.05);
}

.ServiciosDestacados h3 {
    color: rgb(255, 117, 31);
    justify-content: center;
    display: grid;
}

.ServiciosLista {
    display: grid;
    justify-content: space-between;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.Servicio {
    text-align: center;
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #d4c8b9;
    transition: transform 0.3s ease-in-out;
    overflow: hidden;
}

.Servicio:hover {
    transform: scale(1.05);
}

.ServicioContent {
    transition: transform 0.3s ease-in-out;
}

.Servicio h4 {
    margin-bottom: 5px;
    color: rgb(240, 66, 66);
}

.Testimonios {
    padding: 20px;
    background-color: rgba(255, 87, 53, 0.619);
    border-radius: 5px;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
}

.Testimonios:hover {
    transform: scale(1.05);
}

.Testimonios h3 {
    color: rgb(0, 255, 247);
}

.ListaTestimonios {
    margin-top: 15px;
}

.ListaTestimonios blockquote {
    font-style: italic;
    border-left: 5px solid #ccc;
    padding-left: 15px;
    margin: 10px 0;
}
</style>
