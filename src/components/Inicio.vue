<template>

    <div class="col-6">
        <q-img class="img-inicio"
            src="https://www.fourseasons.com/alt/img-opt/~80.1860.0,0000-312,5000-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BOR/BOR_1622_original.jpg">
            <div class="absolute-bottom text-subtitle1 text-center">
                <h3>FOUR SEASONS</h3>
                <h5>Bora Bora</h5>
            </div>
        </q-img>
    </div>
    <div class="container">
        <div class="container-texto">
        <div class="texto">

            <p><strong>UNA PARADISÍACA ISLA PRIVADA 100 % SUITES EN EL CORAZÓN DE LA POLINESIA FRANCESA.</strong><br>
                Espaciosas suites-bungaló sobre el agua, villas a pie de playa y aventuras acuáticas lo esperan en este
                idílico atolón situado en el centro de la Polinesia francesa. Desde nuestro afamado resort de lujo en
                Bora Bora, podrá disfrutar de las mejores vistas del monte Otemanu y brindar por los atardeceres desde
                su piscina de inmersión privada, maravillarse del cielo estrellado tahitiano o simplemente fluir entre
                los peces exóticos y llamativos corales de nuestra laguna.</p>
        </div>
    </div>
    <div class="container2">
        <h3>Nuestra Historia</h3>
        <div class="historia">

            <div class="historia-texto">

                <p><strong>La historia de Four Seasons Hotels and Resorts</strong>,<br> que abrió su primer hotel en 1961, es una historia de
                    innovación continua, expansión notable y una dedicación absoluta a los más altos estándares. </p>
            </div>
            <div class="imagen">
                <video src="../assets/video.mp4" autoplay loop muted></video>
            </div>
        </div>
    </div>
        
    <div class="container2">
        <h3> Nuestros Servicios</h3><br>
        <h6>Alojamientos</h6>
        <div class="historia">
            <div class="imagen">
                <img src="https://www.fourseasons.com/alt/img-opt/~80.1530.0,0000-156,2500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BOR/BOR_1442_original.jpg">
            </div>
                <div class="historia-texto">
                    <p><strong>Four Seasons Resort Bora Bora</strong><br> incluye lujosos bungalows y villas, muchos de ellos sobre el agua. Cada unidad ofrece terrazas privadas con vistas espectaculares y comodidades modernas, como baños de mármol y tecnología de última generación. Algunas villas cuentan con piscina privada, brindando un ambiente exclusivo y relajante en un entorno paradisíaco.</p>
                <p><router-link to="/Habitaciones">Más información</router-link></p>
                </div>
        </div>
    </div>
    <div class="container2">
        <h6>Actividades</h6>
        <div class="historia">
            <div class="historia-texto">
                <p><strong>El Four Seasons Resort Bora Bora</strong><br> ofrece diversas actividades, como snorkel, paddleboarding y buceo en su laguna cristalina. Los huéspedes pueden disfrutar de excursiones en catamarán y paseos en kayak, así como de un spa de clase mundial y clases de yoga. También se organizan experiencias culturales, como clases de cocina polinesia, para una inmersión en la rica herencia local.</p>
            <p><router-link to="/Actividades">Más información</router-link></p>
            </div>
            <div class="imagen">
                <img src="https://www.fourseasons.com/alt/img-opt/~80.1340.0,0000-107,6560-2953,0000-1661,0625/publish/content/dam/fourseasons/images/web/MAL/MAL_552_original.jpg">
            </div>
        </div>   
    </div>
    <div class="container2">
        <h6>Restaurantes</h6>
        <div class="historia">
            <div class="imagen">
                <img src="https://www.fourseasons.com/alt/img-opt/~80.1530.0,0000-0,0000-3840,0000-2160,0000/publish/content/dam/fourseasons/images/web/BOR/BOR_136_3840x2160.jpg">
            </div>
            <div class="historia-texto">
                <p><strong>El Four Seasons Resort Bora Bora</strong><br> ofrece una experiencia gastronómica excepcional con varios restaurantes. Arii Vahine combina cocina polinesia y francesa con vistas a la laguna, mientras que Tere Nui presenta un ambiente más informal. También hay opciones de cenas privadas en la playa o en los bungalows, todas con ingredientes frescos y sabores auténticos.</p>
            <p><router-link to="/Servicios">Más información</router-link></p>
            </div>
            
        </div>

    </div>

    </div>
    


</template>
<script setup>

</script>
<style>
body {
    background-color: white;
}
h3, h6{
    text-align: center;
    margin-top: 20px;
}


.img-inicio {
    width: 100%;
    margin-top: 50px;
    height: 655px;
    
}


.container-texto {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(30px);
 
    font-family: "Bitter", serif;

}

.texto {
    color: black;
    padding: 50px 10px;
    text-align: center;
    max-width: 930px;

}

.texto p {
    text-align: center;
    font-family: "Bitter", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 1px;
    font-size: 20px;
}

.texto a {
    color: black;
}

.container{
    display: flex;
    background-image: url(https://www.fourseasons.com/alt/img-opt/~80.1530.0,0000-25,5000-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BOR/BOR_1599_original.jpg);
   opacity: 1.3;
   background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   /*  padding-bottom: 20px; */
    font-family: "Bitter", serif;
}
.container2{
    background-color: #ffffffda;
    /* background-color: transparent; */
    backdrop-filter: blur(30px);
    box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
    margin-bottom: 20p;
}
h6{
  background-color: white;
  padding: 10px;
}
.historia {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 930px;
    padding: 40px;
    gap: 20px;
    text-align: center;
}

.historia-texto {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px 20px 0px;
}

video {
    display: flex;
    flex-direction: column;
    
    width: 500px;
    height: 280px;
    object-fit: cover;
}
.imagen img{
    width: 500px;
    height: 300px;
    transition: all 0.3s ease-in-out;
}

.imagen img:hover{
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
}


@media(max-width: 800px) {
    .historia {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 930px;
        padding: 40px;
        gap: 20px;
    justify-items: center;
    }
}
</style>