<template>

<q-layout view="hhh lpR fFf">
    <q-header id="app1">
      <div class="logo">
        <router-link to="/">
          <img
            src="https://fastly.4sqi.net/img/user/width960/2199283-G4LDKNKOMPF5OR1N.png"
            alt=""
          />
        </router-link>
      </div>
      <q-tabs align="center" class="tabs" id="tabs">

        <q-route-tab to="/" label="INICIO" />
        <q-route-tab to="/Servicios" label="SERVICIOS" />
        <q-route-tab to="/Habitaciones" label="HABITACIONES" />
        <q-route-tab to="/Actividades" label="ACTIVIDADES" />
        <q-route-tab to="/Contacto" label="CONTACTO" />
      </q-tabs>
      <div class="btn-menu" v-if="isMobile">
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" id="btn-menu"/>
      </div>
    </q-header>
    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      show-if-above
      bordered
      content-class="bg-grey-2"
      v-if="isMobile"
    >
      <q-list id="list-menu">
        <h4>MENÚ</h4>
        <q-item clickable v-ripple>
          <q-item-section><router-link to="/">INICIO </router-link> </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section><router-link to="/Servicios">SERVICIOS </router-link> </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section><router-link to="/Habitaciones">HABITACIONES</router-link> </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section><router-link to="/Actividades">ACTIVIDADES</router-link> </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section><router-link to="/Contacto">CONTACTO</router-link> </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <router-view />
  </q-layout>
  <footer>
    <div class="logo-footer">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTas4GqyIRZ--_0l0Ba2V6BhMLDWs2aznJ0ow&s" alt="">
      <div class="inf-footer">
        <div class="inf">
          <p> Acerca de nosotros</p>
          <ul>
            <li>Acerca de nosotros</li>
            <li>Ambiental, social y Gobernanza (esg)</li>
            <li>salud y seguridad</li>
            
          </ul>
        </div>
        <div class="inf">
          <p>Reservaciones</p>
          <ul>
            <li>Solicitar factura</li>
            <li>Reservar una habitación</li>
            <li>Reservar una actividad</li>
            <li>Reservar un servicio</li>
          </ul>
        </div>
        <div class="inf">
          <p>Noticias</p>
          <ul>
            <li>Sala de prensa </li>
            <li>Nuevas Aperturas</li>
            <li>Revista</li>
          </ul>
        </div>
        <div class="inf">
          <div class="contact">
            <p>Contacto</p>
            <p class="direccion"> <i class="fa fa-map-marker" aria-hidden="true"></i>  Polinesia Francesa</p>
            <p class="direccion"> <i class="fa fa-phone" aria-hidden="true"></i>  322 701 4169</p>
          
            
          </div>


        </div>
      </div>
      
       <div class="iconsRedes">

<ul class="wrapper">
    <li class="icon facebook">
        <span class="tooltip">Facebook</span>
        <svg viewBox="0 0 320 512" height="16px" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
            </path>
        </svg>
    </li>
    <li class="icon twitter">
        <span class="tooltip">Twitter</span>
        <svg height="20px" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"
            class="twitter">
            <path
                d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429">
            </path>
        </svg>
    </li>
    <li class="icon instagram">
        <span class="tooltip">Instagram</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="17px" fill="currentColor"
            class="bi bi-instagram" viewBox="0 0 16 16">
            <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
            </path>
        </svg>
    </li>
</ul>
</div>
      </div>
     
    
  </footer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const rightDrawerOpen = ref(false)
const isMobile = ref(window.innerWidth <= 800)

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

function handleResize() {
  isMobile.value = window.innerWidth <= 800
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


#app1 {
    display: flex;
    position: fixed;
    justify-content: center;
    gap: 20px;
    background-color: black;
    color: white;
    backdrop-filter: blur(30px);
    box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
    padding: 10px;
}
    
.tabs{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
  
}



.logo img {
    position: relative;
    width: 50px;
    cursor: pointer;
  

}
footer {
  background-color: black;
  color: white;
  padding: 20px;
}

.logo-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-footer img {
  width: 150px;
  height: 100px;
}

.inf-footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  gap: 20px;
  padding: 20px 20px 0px;
  text-decoration: none;

}

.inf {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.inf li {
  list-style-type: none;
}


.iconosredes{
  display: flex;
  gap: 10px;
  justify-content: center;
  padding-top: 10px;
  font-size: 20px;
    color: gray;
    font-size: 16px;
}
.iconsRedes ul {
            display: flex;
            flex-direction: row;
            color: #000000;

        }

        .wrapper {
            display: inline-flex;
            list-style: none;
            width: 100%;
            padding-top: 27px;
            font-family: "Poppins", sans-serif;
            justify-content: center;
        }

        .wrapper .icon {
            position: relative;
            background: #fff;
            border-radius: 50%;
            margin: 10px;
            width: 30px;
            height: 30px;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            box-shadow: 0 10px 10px rgba(255, 255, 255, 0.1);
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            color: black;
        }

        .wrapper .tooltip {
            position: absolute;
            top: 0;
            font-size: 14px;
            background: #fff;
            color: #fff;
            padding: 5px 8px;
            border-radius: 5px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .wrapper .tooltip::before {
            position: absolute;
            content: "";
            height: 8px;
            width: 8px;
            background: #fff;
            bottom: -3px;
            left: 50%;
            transform: translate(-50%) rotate(45deg);
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .wrapper .icon:hover .tooltip {
            top: -45px;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        .wrapper .icon:hover span,
        .wrapper .icon:hover .tooltip {
            text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
        }

        .wrapper .facebook:hover,
        .wrapper .facebook:hover .tooltip,
        .wrapper .facebook:hover .tooltip::before {
            background: #1877f2;
            color: #fff;
        }

        .wrapper .twitter:hover,
        .wrapper .twitter:hover .tooltip,
        .wrapper .twitter:hover .tooltip::before {
            background: #1da1f2;
            color: #fff;
        }

        .wrapper .instagram:hover,
        .wrapper .instagram:hover .tooltip,
        .wrapper .instagram:hover .tooltip::before {
            background: #e4405f;
            color: #fff;
        }



@media(max-width: 800px) {
  .inf-footer {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 930px;
    padding: 40px;
    gap: 20px;
    justify-items: center;
  }
#tabs{
    display: none;
}
.logo img {
    position: relative;
    width: 50px;
    cursor: pointer;

}
#app1{
    display: flex;
    padding: 5px 12px;
    align-items: center;
    justify-content: space-between;
}

#list-menu{
  background-color: black;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  
 
  
}
#list-menu h4{
  list-style-type: none;
  padding: 20px;
  color: white;
  font-size: 20px;
  text-align: center;
}
#list-menu a{
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
}

}
</style>