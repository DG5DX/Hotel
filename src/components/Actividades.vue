<template>
    <div class="Actividades">
        <h2>Actividades en el Hotel</h2>
        <div class="ListaActividades">
            <div class="Actividad">
                <h3>Excursiones Guiadas</h3>
                <p>Descubre los alrededores con nuestras excursiones guiadas. Disponibles todos los días.</p>
            </div>
            <div class="Actividad">
                <h3>Clases de Cocina</h3>
                <p>Aprende a cocinar platos locales con nuestros chefs. ¡Una experiencia deliciosa!</p>
            </div>
            <div class="Actividad">
                <h3>Yoga al Amanecer</h3>
                <p>Relájate y revitalízate con nuestras clases de yoga en la terraza del hotel.</p>
            </div>
            <div class="Actividad">
                <h3>Deportes Acuáticos</h3>
                <p>Disfruta de una variedad de deportes acuáticos, desde paddle surf hasta kayak.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
.Actividades {
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

.ListaActividades {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.Actividad {
    padding: 15px;
    border: 1px solid #d4c8b9;
    border-radius: 5px;
    background-color: white;
}

.Actividad h3 {
    margin: 0;
    color: rgb(240, 66, 66);
}
</style>
