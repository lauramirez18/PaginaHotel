import Servicios from '../components/Servicios.vue'
import Habitaciones from '../components/Habitaciones.vue'
import Contacto from '../components/Contacto.vue'
import Inicio from '../components/Inicio.vue'
import Actividades from '../components/Actividades.vue'

import {createRouter, createWebHashHistory} from 'vue-router'   

const routes = [
    
    { path: '/Servicios', component: Servicios },
    { path: '/Actividades', component: Actividades },
    { path: '/Contacto', component: Contacto },
    { path: '/', component: Inicio },  
    { path: '/Habitaciones', component: Habitaciones },

]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})