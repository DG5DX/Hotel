<template>
    <div class="Login">
        <h2>Iniciar Sesión</h2>
        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="email">Correo Electrónico</label>
                <input type="email" id="email" v-model="email" required />
            </div>
            <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleLogin = () => {
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log(`Email: ${email.value}, Contraseña: ${password.value}`);
    // Ejemplo: redirigir a otra página o mostrar un mensaje
};
</script>

<style scoped>
.Login {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #d4c8b9;
    border-radius: 5px;
    background-color: rgba(240, 240, 240, 0.9);
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: rgb(240, 66, 66);
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #d4c8b9;
    border-radius: 5px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: rgb(240, 66, 66);
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
}

button:hover {
    background-color: darkred;
}
</style>
