<template>
    <div class="Habitaciones">
        <h2>Nuestras Habitaciones</h2>
        <div class="ListaHabitaciones">
            <div class="Habitacion">
                <h3>Habitación Deluxe</h3>
                <p>Una habitación espaciosa con cama king-size, baño privado y vistas espectaculares.</p>
                <p class="precio">$150 por noche</p>
            </div>
            <div class="Habitacion">
                <h3>Habitación Standard</h3>
                <p>Confortable y acogedora, ideal para estancias cortas. Incluye cama queen-size.</p>
                <p class="precio">$100 por noche</p>
            </div>
            <div class="Habitacion">
                <h3>Suite Familiar</h3>
                <p>Perfecta para familias, cuenta con dos habitaciones y un espacio de estar.</p>
                <p class="precio">$200 por noche</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
.Habitaciones {
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

.ListaHabitaciones {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.Habitacion {
    padding: 15px;
    border: 1px solid #d4c8b9;
    border-radius: 5px;
    background-color: white;
}

.Habitacion h3 {
    margin: 0;
    color: rgb(240, 66, 66);
}

.precio {
    font-weight: bold;
    color: green;
}
</style>
