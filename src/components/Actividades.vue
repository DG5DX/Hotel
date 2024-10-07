<template>
    <div class="Actividades">
        <h2>Deportes Extremos</h2>
        <div class="ListaActividades">
            <div class="Actividad" v-for="actividad in actividades" :key="actividad.id">
                <img :src="actividad.imagen" alt="imagen de la actividad" class="ImgActividad" />
                <h3>{{ actividad.nombre }}</h3>
                <p>{{ actividad.descripcion }}</p>
                <p class="precio">Precio: {{ actividad.precio }}€</p>
                <button @click="agregarAlCarrito(actividad)">Agregar al carrito</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const actividades = ref([
    {
        id: 1,
        nombre: 'Parapente',
        descripcion: 'Vuela sobre las montañas con total seguridad.',
        precio: 50,
        imagen: "https://plus.unsplash.com/premium_photo-1663089705266-11b95d2d0121?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        nombre: 'Rafting',
        descripcion: 'Desciende por rápidos impresionantes.',
        precio: 40,
        imagen: "https://plus.unsplash.com/premium_photo-1661895394542-34d5a1901d6e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        nombre: 'Escalada',
        descripcion: 'Sube acantilados desafiantes.',
        precio: 30,
        imagen: "https://plus.unsplash.com/premium_photo-1661895527587-8f8d3eae2a33?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        nombre: 'Buceo',
        descripcion: 'Explora las profundidades del océano.',
        precio: 60,
        imagen: "https://plus.unsplash.com/premium_photo-1661894232140-73d96a67731b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        nombre: 'Esquí Acuático',
        descripcion: 'Deslízate a toda velocidad sobre el agua.',
        precio: 45,
        imagen: "https://plus.unsplash.com/premium_photo-1661869597110-f3c98c256f5b?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        nombre: 'Surf',
        descripcion: 'Atrapa las mejores olas del mar.',
        precio: 35,
        imagen: "https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 7,
        nombre: 'Bungee Jumping',
        descripcion: 'Desciende por cable desde lo alto de una montaña.',
        precio: 25,
        imagen: "https://media.istockphoto.com/id/606014554/es/foto/puenting-salto-de-ca%C3%ADda-libre.jpg?s=1024x1024&w=is&k=20&c=VpH7FV1PboiuENuDOdSMAm8aPjWYbQshSQaENBXgLm0="
    },
    {
        id: 8,
        nombre: 'Ciclismo',
        descripcion: 'Recorre senderos con tu bicicleta.',
        precio: 40,
        imagen: "https://media.istockphoto.com/id/953471124/es/foto/j%C3%B3venes-amigos-ciclistas-en-la-ciudad.jpg?s=1024x1024&w=is&k=20&c=BwQLpr_Dstq1z7HQaNBCj_uuIW2BLlVqVjkgS_A_Vm0="
    }
]);

const agregarAlCarrito = (actividad) => {
    console.log(`Agregado al carrito: ${actividad.nombre}`);
};
</script>
<style scoped>
.Actividades{
    padding: 20px;
    background-color: rgba(240, 240, 240, 0.9);
    border-radius: 5px;
    max-width: 800px;
    margin: auto;
}
h2{
    text-align: center;
    margin-bottom: 20px;
    color: rgb(240, 66, 66);
}
.ListaActividades{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.Actividad{
    flex: 1 1 calc(50% - 20px);
    padding: 15px;
    border: 1px solid #d4c8b9;
    border-radius: 5px;
    background-color: white;
    text-align: center;
}
.Actividad h3{
    margin: 10px 0;
    color: rgb(240, 66, 66);
}
.ImgActividad{
    width: 300px;
    height: 300px;
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
</style>