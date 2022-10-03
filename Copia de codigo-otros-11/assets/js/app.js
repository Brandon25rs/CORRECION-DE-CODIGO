
//Se corrige la funcionalidad del fetch, se utiliza la herramienta innerText para la manipulación del DOM agregando los elementos al HTML, 
//se cambian las comillas simples por backtick para el correcto funcionamiento de la llamada de las variables, 
//se agrega al html la etiqueta <p> location con su respectiva clase y se hace su llamamiento correctamente en el .js, corrigiendo los otros dos <p> agregando un . 

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');
 
function displayUser(username) {
let promise = fetch (`${usersEndpoint}/${username}`,{
method:"GET"});

promise.then((response)=> {
  response.json().then((data)=>{
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  }) .catch ((error)=>{
    handleError(error);
  });
}).catch((error)=>{
  handleError(error);
});
}
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
