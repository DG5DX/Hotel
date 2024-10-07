<template>
    <div class="Contacto">
        <h2>Regístrate</h2>
        <form @submit.prevent="enviarFormulario">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" v-model="nombre" required />
            </div>
            <div class="form-group">
                <label for="email">Correo Electrónico</label>
                <input type="email" id="email" v-model="email" @input="validarCorreo" required />
                <span v-if="!correoValido" style="color: red;">Por favor, introduce un correo válido.</span>
            </div>
            <div class="form-group">
                <label for="telefono">Teléfono</label>
                <input type="tel" id="telefono" v-model="telefono" @input="validarTelefono" required />
                <span v-if="!telefonoValido" style="color: red;">El teléfono debe tener al menos 10 dígitos.</span>
            </div>
            <button type="submit" :disabled="!correoValido || !telefonoValido">Registrar</button>
        </form>

        <div class="Ubicacion">
            <h3>Ubicación</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31807.67269331996!2d-74.11967930421207!3d4.653332867136881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99f6c9159a7f%3A0xdccc25a78db7c8de!2sHotel%20Tequendama!5e0!3m2!1ses!2sco!4v1696519684351!5m2!1ses!2sco"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const nombre = ref('');
const email = ref('');
const telefono = ref('');
const correoValido = ref(true);
const telefonoValido = ref(true);

const validarCorreo = () => {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    correoValido.value = patron.test(email.value);
};

const validarTelefono = () => {
    telefonoValido.value = telefono.value.length >= 10;
};

const enviarFormulario = () => {
    if (correoValido.value && telefonoValido.value) {
        console.log("Usuario registrado:", { nombre: nombre.value, email: email.value, telefono: telefono.value });
    }
};
</script>
<style scoped>
.Contacto{
    padding: 20px;
    background-color: rgba(240, 240, 240, 0.9);
    border-radius: 5px;
    max-width: 800px;
    margin: auto;
}
.form-group{
    margin-bottom: 15px;
}
h2{
    display: grid;
    justify-items: center;
    color: rgb(240, 66, 66);
}
.form-group label{
    display: block;
    margin-bottom: 5px;
}
.form-group input{
    width: 100%;
    padding: 10px;
    border: 1px solid #d4c8b9;
    border-radius: 5px;
}
button{
    padding: 10px 20px;
    background-color: rgb(240, 66, 66);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:disabled{
    background-color: rgb(150, 150, 150);
    cursor: not-allowed;
}
button:hover{
    background-color: rgb(200, 50, 50);
}
.Ubicacion{
    margin-top: 20px;
}
.Ubicacion iframe{
    width: 100%;
    height: 450px;
    border: 0;
}
</style>