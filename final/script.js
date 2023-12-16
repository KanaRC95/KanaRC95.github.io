/*const scriptURL = 'https://script.google.com/macros/s/AKfycbxjJB0GN7qNM93P5yUyxym5Wh4bY7dg426szXVO86kVDIEBjmHM4QjGR8VkfHHcmbMB/exec';
const form = document.forms['form-inscripcion'];



form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { 
    redirect: "follow", 
    method: 'POST',
    mode: 'cors', 
    body: new FormData(form)})
  .then(response => alert("Su inscripcion ha sido registrada con Exito!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
});*/

const fechaActual = new Date();
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("fecha").defaultValue = fechaActual.getDate()+'-'+fechaActual.getMonth()+'-'+fechaActual.getFullYear();
});