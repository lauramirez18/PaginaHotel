<template>
    <div class="body-rooms">
        <div class="col-6">
        <q-img class="img-inicio"
            src="https://digital.ihg.com/is/image/ihg/intercontinental-bora-bora-4842574703-3x2">
            <div class="absolute-bottom text-subtitle1 text-center">
                <h3>Alojamientos</h3>
                <h5>Bora Bora</h5>
            </div>
        </q-img>
    </div>
    
    <div class="container3">
        <div class="cards">
            <q-card class="my-card" v-for="card in cards" :key="card.name">
                <img :src="card.img" alt="">
                <div class="body-card">
                    <q-card-section>
                        <div class="text-h6">{{ card.name }}</div>
                        <div class="text-subtitle2">{{ card.precio }}</div>
                    </q-card-section>
                    <div class="detalles">
                        <q-btn flat style="color: #000"  label="Reservar" id="btn" />
                        <q-btn flat style="color: #000" id="btn" label="Más información" @click="mostrardetalles(card)"/>
                       
                    </div>
                </div>
            </q-card>
        </div>
    </div>
    <q-dialog v-model="modaldetalles">
        <q-card>
            <q-card-section>
                <div class="text-h6">{{ selectedCard?.name }}</div>
                <p>{{ selectedCard?.descripcion }}</p>
                <p>{{ selectedCard?.detalles }}</p>
               
            </q-card-section>

            <q-card-actions align="right">
                <q-btn flat label="Cerrar" color="primary" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
    </div>
   
</template>

<script setup>
import { ref } from 'vue';

const selectedCard = ref(null);
const modaldetalles = ref(false);

const cards = ref([
    {
        name: 'Villa sobre el agua con vista al Monte Otemanu',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qZZNF7JlzHnV5-vDTD-5wOY0EkW3P_3Ipg&s',
        descripcion: 'Relájate en esta villa sobre el agua con una vista espectacular del Monte Otemanu, que ofrece un ambiente sereno y lujoso con terrazas amplias y acceso al mar.',
        precio: ' 5.000.000'
    },
    {
        name: 'Villa sobre el agua con vista a la Laguna',
        img: 'https://cdn.bestlocationhotels.com/wp-content/uploads/2019/03/The-St-Regis-Bora-Bora-Resort.jpg',
        descripcion: 'Disfruta de impresionantes vistas a la laguna turquesa desde esta villa privada sobre el agua, equipada con una espaciosa terraza y acceso directo al agua.',
        precio: ' 4.500.000'
    },
    {
        name: 'Bungaló de lujo sobre el agua con piscina privada',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_TuUDdpPfQ1wd4qmW5QlzhSte4aJg1TQtA&s',
        descripcion: 'Disfruta de la exclusividad de un bungaló con piscina privada, amplias áreas de estar y vistas panorámicas del océano.',
        precio: ' 6.000.000'
    },
    {
        name: 'Suite sobre el agua con Piscina Privada',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/97/fe/1c/beach-villa-with-pool.jpg?w=1400&h=-1&s=1',
        descripcion: 'Esta suite ofrece el lujo máximo con dos habitaciones, una piscina de inmersión privada y vistas inigualables del océano.',
        precio: ' 6.800.000'
    },
    {  name: 'Villa Premier con vista al amanecer',
        img: 'https://www.myboutiquehotel.com/photos/8997/four-seasons-resort-bora-bora-bora-bora-054-99787-1110x700.jpg',
        descripcion: 'Disfruta de la vista al amanecer desde esta villa sobre el agua con piscina privada y acceso directo al agua.',
        precio: ' 6.000.000'
    },
    {
        name: 'Villa Real sobre el agua de dos habitaciones',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/b9/6b/93/likuliku-lagoon-resort.jpg?w=700&h=-1&s=1',
        descripcion: 'lujo y comodidad en su máxima expresión, con una gran terraza, comedor exterior y acceso exclusivo a las aguas turquesas de la laguna.',
        precio: ' 9.000.000'
    },
    {
        name: 'Bungaló sobre el agua con vista al arrecife',
        img: 'https://img.freepik.com/fotos-premium/cabanas-playa-bungalows-frente-al-mar-bora-bora-al-estilo-fotografia-nocturna_921860-28570.jpg',
        descripcion: 'Contempla la vida marina desde tu terraza privada en este bungaló sobre el agua, ideal para una escapada romántica.',
        precio: '4.800.000  '
    },
    {
        name: 'Villa familiar de lujo a pie de playa',
        img: 'https://images.squarespace-cdn.com/content/v1/643c7b777cff26300272736b/1684165766624-055LOEMUIJQHFH8EM8NE/Hotel_Playa_Koralia_045_VDP4511b.jpg?format=1000w',        
        descripcion: 'Perfecta para familias, con amplios espacios interiores y exteriores, acceso directo a la playa y una piscina privada para disfrutar del sol de Bora Bora.',
        precio: '8.800.000  '
    },
    {
        name: 'Villa de lujo a pie de playa',
        img: 'https://www.fourseasons.com/alt/img-opt/~80.1530.0,0000-162,7500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BOR/BOR_1425_original.jpg',
        descripcion: 'Rodeada de exuberante vegetación, esta villa ofrece acceso directo a la playa, una piscina privada y elegantes espacios al aire libre.',
        precio: '4.000.000  '
    },
    {
        name: 'Cabaña Premium para una escapada romántica',
        img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/486418133.jpg?k=3e22854b6c3e5e3a3a5b07adf3e3b7779ca5b661ead0ebbb0310d47a28e2a5af&o=&hp=1',
        descripcion: 'Contempla la vida marina desde tu terraza privada en este bungaló sobre el agua, ideal para una escapada romantha.',
        precio: ' 1.000.000'
    },
    {
        name: 'Beachfront Villa - St. Regis Bora Bora Resort',    
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/00/b3/de/royal-beach-villa-with.jpg?w=1400&h=-1&s=1',
        descripcion: 'Rodeada de exuberante vegetación, esta villa ofrece acceso directo a la playa, una piscina privada y elegantes espacios al aire libre.',        
        precio: '4.000.000  '    
    },
    {   
        name: 'Overwater Bungalow - Four Seasons Resort',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/fe/52/c5/caption.jpg?w=1400&h=-1&s=1',
        descripcion: 'Rodeada de exuberante vegetación, esta villa ofrece acceso directo a la playa, una piscina privada y elegantes espacios al aire libre.',
        precio: '4.000.000  '
    },
    
]);



const mostrardetalles = (card) => {
    selectedCard.value = card;
    modaldetalles.value = true;
};
</script>

<style>
.body-rooms {
    background-image: url(https://digital.ihg.com/is/image/ihg/intercontinental-bora-bora-4009874529-16x9?);
  
   
}
.container3 {
    backdrop-filter: contrast(60%);
    
 
}
.my-card {
    width: 100%;
    max-width: 300px;
    gap: 20px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 10px 0 40px rgba(0, 0, 0, 0.548);
}

.my-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
.my-card img:hover {
    transform: scale(1.1);
    transition: 1s;
   
    
}
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
}

.body-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 0px 20px 15px;
    text-align: center;
    height: 170px;
  background-color: #fff;
    
   
    
}


.detalles {
    position: absolute;  
    bottom: 10px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    
 
   
}

#btn {
   border: 1px solid black;
   padding: 5px;
   font-size: 10px;
}

</style>
