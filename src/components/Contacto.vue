<template>
    <div class="container-contacto">
      <div class="informacion">
        <h5>Ubicación</h5>
        <div class="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.059016608256!2d-151.7096784260011!3d-16.47254908426687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76bdbd86ce55f507%3A0xe5f1074d61ace582!2sFour%20Seasons%20Resort%20Bora%20Bora!5e0!3m2!1ses!2sco!4v1728864993071!5m2!1ses!2sco"
            width="100%"
            height="300px"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <h5>Contáctanos</h5>
        <div class="formulario">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-row">
             
              <input
                type="text"
                v-model="form.firstName"
                placeholder="Nombre*"
                required
              />
              <input
                type="text"
                v-model="form.lastName"
                placeholder="Apellidos*"
                required
              />
            </div>
  
            <div class="form-row">
              <input
                type="email"
                v-model="form.email"
                placeholder="Email*"
                required
              />
              <input
                type="tel"
                v-model="form.phoneNumber"
                placeholder="telefono"
              />
            
            </div>
  
            <input
              type="text"
              v-model="form.confirmationNumber"
              placeholder="Confirmar telefono"
            />
  
            <textarea
              v-model="form.message"
              placeholder="En que podemos ayudarte?"
              rows="5"
            ></textarea>
  
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const form = reactive({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    primaryContact: false,
    destination: '',
    reasonForContact: '',
    confirmationNumber: '',
    message: '',
  });
  
  
  const handleSubmit = () => {
    console.log('Form submitted:', form);
    alert('Form submitted successfully!');
    
    resetForm();
  };
  
  const resetForm = () => {
    form.title = '';
    form.firstName = '';
    form.lastName = '';
    form.email = '';
    form.phoneNumber = '';
    form.primaryContact = false;
    form.destination = '';
    form.reasonForContact = '';
    form.confirmationNumber = '';
    form.message = '';
  };
  </script>
  
  <style scoped>
  
  .container-contacto {
    background-image: url(https://digital.ihg.com/is/image/ihg/intercontinental-bora-bora-4009874529-16x9?);
    backdrop-filter: contrast(40%);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
 
    gap: 20px;
    text-align: center;
  }
  
  .mapa {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
  }
  
  .informacion {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffffe7;
    max-width: 700px;
    border: 1px solid #ddd;
    box-shadow: 10px 10px 50px 20px rgba(0, 0, 0, 0.995);
    margin: 45px auto 0;
  }
  
  .formulario {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    justify-content: center;
    max-width: 500px;
    align-items: center;
    margin: 0 auto;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 600px;
    margin: auto;
  }
  
  .form-row {
    display: flex;
    gap: 1rem;
  }
  
  input,
  select,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    align-self: flex-end;
    padding: 0.75rem 1.5rem;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #333;
  }
  h5{
    text-align: center;
    margin-top: 20px;
    background-color: white;
    padding: 10px;
  }
  </style>
  