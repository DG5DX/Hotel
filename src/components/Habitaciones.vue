<template>
    <div class="Habitaciones">
        <h2 class="Titulo">Nuestras Habitaciones</h2>
        <div class="ListaHabitaciones">
            <div class="Habitacion" v-for="habitacion in habitaciones" :key="habitacion.id">
                <h3>{{ habitacion.nombre }}</h3>
                <img :src="habitacion.imagen" :alt="habitacion.nombre" class="ImgHabitacion" />
                <p>{{ habitacion.descripcion }}</p>
                <p class="precio">Precio: {{ habitacion.precio }} €/noche</p>
                <button class="btn-agregar" @click="agregarAlCarrito(habitacion)">Agregar al Carro</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const habitaciones = [
    { id: 1, nombre: 'Suite Deluxe', descripcion: 'Una suite con vista al mar y jacuzzi privado.', precio: 200, imagen: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, nombre: 'Habitación Familiar', descripcion: 'Espaciosa y perfecta para familias.', precio: 150, imagen: 'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, nombre: 'Habitación Individual', descripcion: 'Cómoda y acogedora para una persona.', precio: 80, imagen: 'https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, nombre: 'Suite Presidencial', descripcion: 'Lujo y exclusividad con servicio premium.', precio: 500, imagen: 'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, nombre: 'Habitación Doble', descripcion: 'Moderna y cómoda para parejas.', precio: 120, imagen: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, nombre: 'Habitación Económica', descripcion: 'Sencilla y accesible.', precio: 50, imagen: 'https://plus.unsplash.com/premium_photo-1676321688630-9558e7d2be10?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 7, nombre: 'Suite Ejecutiva', descripcion: 'Perfecta para viajes de negocios.', precio: 180, imagen: 'https://images.unsplash.com/photo-1572177215152-32f247303126?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 8, nombre: 'Habitación Triple', descripcion: 'Espacio adicional para grupos.', precio: 160, imagen: 'https://images.unsplash.com/photo-1576354302919-96748cb8299e?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 9, nombre: 'Bungalow', descripcion: 'Cabaña privada con todas las comodidades.', precio: 220, imagen: 'https://plus.unsplash.com/premium_photo-1685133855300-60d42d843c0a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 10, nombre: 'Habitación Romántica', descripcion: 'Ideal para parejas en escapada romántica.', precio: 180, imagen: 'https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];
</script>
<style scoped>
.Habitaciones{
    padding: 20px;
    background-color: rgba(19, 19, 19, 0.9);
    border-radius: 5px;
    max-width: 180vh;
    margin: auto;
}
.ListaHabitaciones{
    display: grid;
    flex-direction: column;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    gap: 20px;
}
.Habitacion{
    padding: 15px;
    border: 1px solid #d4c8b9;
    border-radius: 5px;
    background-color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}
.Titulo{
    color: rgb(240, 66, 66);
    display: grid;
    justify-items: center;
}
.ImgHabitacion{
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
}
.Habitacion h3{
    margin: 0;
    color: rgb(240, 66, 66);
}
.precio{
    font-weight: bold;
    color: green;
}
.btn-agregar{
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.btn-agregar:hover {
    background-color: #218838;
}
@media (max-width:880px) {
    .ListaHabitaciones{
        grid-template-columns: repeat(1, minmax(200px, 1fr));;
    }
}
</style>