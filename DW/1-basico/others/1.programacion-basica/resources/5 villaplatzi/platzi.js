var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keyup", moverLoboTeclado);

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

var lobo = {
  url: "lobo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargarLobos()
{
  lobo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK)
  {
    var cantidad = aleatorio(5, 15);
    console.log(cantidad);

    for(var v = 0; v < cantidad; v++)
    {
      var x = aleatorio(0, 5) * 80;
      var y = aleatorio(0, 5) * 80;

      papel.drawImage(vaca.imagen, x, y);
    }
  }

  if(cerdo.cargaOK)
  {
    var cantidad = aleatorio(1, 10);
    console.log(cantidad);

    for(var c = 0; c < cantidad; c++)
    {
      var x = aleatorio(0, 5) * 80;
      var y = aleatorio(0, 5) * 80;

      papel.drawImage(cerdo.imagen, x, y);
    }
  }

  if(pollo.cargaOK)
  {
    var cantidad = aleatorio(1, 20);
    console.log(cantidad);

    for(var p = 0; p < cantidad; p++)
    {
      var x = aleatorio(0, 5) * 80;
      var y = aleatorio(0, 5) * 80;

      papel.drawImage(pollo.imagen, x, y);
    }
  }

  /*if(lobo.cargaOK)
  {
    //var x = aleatorio(0, 5) * 80;
    //var y = aleatorio(0, 5) * 80;

    papel.drawImage(lobo.imagen, x, y);
  }*/
}

function aleatorio(min, max)
{
  var resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

var x = 220;
var y = 220;

function moverLoboTeclado(evento)
{
  var movimiento = 60;

  var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT:37,
    RIGHT: 39
  };

  switch(evento.keyCode){
    case teclas.UP:
      papel.drawImage(lobo.imagen, x, y - movimiento);
      y -= movimiento;
      break;
    case teclas.DOWN:
      papel.drawImage(lobo.imagen, x, y + movimiento);
      y += movimiento;
      break;
    case teclas.LEFT:
      papel.drawImage(lobo.imagen, x - movimiento, y);
      x -= movimiento;
      break;
    case teclas.RIGHT:
      papel.drawImage(lobo.imagen, x + movimiento, y);
      x += movimiento;
      break;
    default:
      console.log("otra tecla");
      break
  }
}
