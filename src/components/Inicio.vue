<template>
    <div class="Contenedor">
        <header>
            <h2 class="Logo">Hotel</h2>
        </header>
        <div class="Imagenes" id="imagenes">
            <img src="ruta-a-tu-imagen.jpg" alt="Imagen del hotel" />
            <img src="ruta-a-tu-imagen2.jpg" alt="Otra imagen del hotel" />
        </div>
        <div class="Historia" id="historia">
            <h3>Nuestra Historia</h3>
            <p>
                Bienvenido a nuestro hotel, un lugar donde la comodidad y la elegancia se encuentran. 
                Fundado en 1990, hemos sido el destino preferido para viajeros de todo el mundo.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: rgba(212, 200, 185, 0.8);
    color: rgb(240, 66, 66);
}

.Logo {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 15px;
}

.nav-links a {
    text-decoration: none;
    color: rgb(240, 66, 66);
    font-weight: bold;
}

.Imagenes {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.Imagenes img {
    max-width: 100%;
    height: auto;
    margin: 0 10px;
    border-radius: 10px;
}

.Historia {
    padding: 20px;
    background-color: rgba(240, 240, 240, 0.9);
    border-radius: 5px;
    max-width: 600px;
    margin: auto;
}

.Historia h3 {
    margin-bottom: 10px;
}

.Historia p {
    line-height: 1.6;
}
</style>
