<template>
    <div class="Servicios">
        <h2>Servicios del Hotel</h2>
        <div class="ListaServicios">
            <div class="Servicio">
                <h3>Recepción 24/7</h3>
                <p>Nuestro personal está disponible las 24 horas para atender tus necesidades.</p>
            </div>
            <div class="Servicio">
                <h3>Wi-Fi Gratuito</h3>
                <p>Disfruta de conexión a Internet gratuita en todas las áreas del hotel.</p>
            </div>
            <div class="Servicio">
                <h3>Desayuno Incluido</h3>
                <p>Comienza tu día con un delicioso desayuno buffet incluido en tu estadía.</p>
            </div>
            <div class="Servicio">
                <h3>Servicio de Habitaciones</h3>
                <p>Disfruta de la comodidad de nuestro servicio de habitaciones disponible todo el día.</p>
            </div>
            <div class="Servicio">
                <h3>Centro de Fitness</h3>
                <p>Mantente en forma con acceso a nuestro gimnasio completamente equipado.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
.Servicios {
    padding: 20px;
    background-color: rgba(240, 240, 240, 0.9);
    border-radius: 5px;
    max-width: 800px;
    margin: auto;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: rgb(240, 66, 66);
}

.ListaServicios {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.Servicio {
    padding: 15px;
    border: 1px solid #d4c8b9;
    border-radius: 5px;
    background-color: white;
}

.Servicio h3 {
    margin: 0;
    color: rgb(240, 66, 66);
}
</style>
