import Inicio from "../components/Inicio.vue"
import Habitaciones from "../components/Habitaciones.vue"
import Login from "../components/Login.vue"
import Servicio from "../components/Servicios.vue"
import Actividad from "../components/Actividades.vue"
import {createRouter, createWebHashHistory} from "vue-router"

const routes =[
    {path: "/", component:Inicio,},
    {path: "/habitacion", component:Habitaciones,},
    {path: "/login", component:Login,},
    {path: "/servicio", component:Servicio,},
    {path: "/actividad", component:Actividad,},
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})