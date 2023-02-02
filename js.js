// funcion que muestra el menu responsive
function responsivemenu() {
  let menu = document.getElementById('nav');
  if (menu.className===""){
    menu.className="responsive";
  }else{
    menu.className = "";
  }
}

// aplica el estilo a la opcion seleccionada y quita el menu previamente seleccionada
function seleccionar(link) {
  let opciones = document.querySelector('#link a');
  opciones[0] = className = "";
  opciones[1] = className = "";
  opciones[2] = className = "";

  // se hace para desaparecer el menu una vez seleccionado una opcion del modo responsive
  let x = document.getElementById("nav");
  x.className = "";
}