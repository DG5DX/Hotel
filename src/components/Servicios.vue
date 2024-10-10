<template>
    <div class="Servicios">
        <h2>Servicios del Hotel</h2>
        <div class="ListaServicios">
            <div class="Servicio" v-for="servicio in servicios" :key="servicio.id">
                <h3>{{ servicio.nombre }}</h3>
                <img :src="servicio.imagen" alt="imagen del servicio" class="ImgServicio" />
                <p>{{ servicio.descripcion }}</p>
                <p class="precio">Precio: {{ servicio.precio }}€</p>
                <button @click="agregarAlCarrito(servicio)">Agregar al carrito</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const servicios = ref([
    {
        id: 1,
        nombre: "Recepción 24/7",
        descripcion: "Nuestro personal está disponible las 24 horas para atender tus necesidades.",
        precio: 10,
        imagen: "https://plus.unsplash.com/premium_photo-1661302861607-6f3c68a2140d?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        nombre: "Wi-Fi Gratuito",
        descripcion: "Disfruta de conexión a Internet gratuita en todas las áreas del hotel.",
        precio: 1,
        imagen: "https://images.unsplash.com/photo-1554098415-cae1af5e4f1a?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        nombre: "Desayuno Incluido",
        descripcion: "Comienza tu día con un delicioso desayuno buffet incluido en tu estadía.",
        precio: 20,
        imagen: "https://plus.unsplash.com/premium_photo-1663840277579-ff6147963ce7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        nombre: "Servicio de Habitaciones",
        descripcion: "Disfruta de la comodidad de nuestro servicio de habitaciones disponible todo el día.",
        precio: 15,
        imagen: "https://plus.unsplash.com/premium_photo-1661724656715-898dd40cf8a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        nombre: "Centro de Fitness",
        descripcion: "Mantente en forma con acceso a nuestro gimnasio completamente equipado.",
        precio: 8,
        imagen: "https://plus.unsplash.com/premium_photo-1661284821625-9400498df354?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
    id: 6,
        nombre: "Centro de Spa",
        descripcion: "Relajate en nuestro servicio de spa.",
        precio: 20,
        imagen: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]);
</script>
<style scoped>
.Servicios{
    padding: 20px;
    background-color: rgba(19, 19, 19, 0.9);
    border-radius: 5px;
    max-width: 180vh;
    margin: auto;
}
h2{
    text-align: center;
    margin-bottom: 20px;
    color: rgb(240, 66, 66);
}
.ListaServicios{
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 20px;
}
.Servicio{
    padding: 15px;
    border: 1px solid #d4c8b9;
    border-radius: 5px;
    background-color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.Servicio h3{
    margin: 10px 0;
    color: rgb(240, 66, 66);
}
.ImgServicio{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
}
.precio{
    font-weight: bold;
    margin: 10px 0;
}
button{
    padding: 8px 16px;
    background-color: rgb(240, 66, 66);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover{
    background-color: rgb(200, 50, 50);
}
@media (max-width: 1145px) {
    .ListaServicios{
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    gap: 20px;
}
}
@media (max-width: 805px) {
    .ListaServicios{
    display: grid;
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    gap: 20px;
}
}
</style>