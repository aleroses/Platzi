document.addEventListener("mousemove", dibujarMouse);
var area = document.getElementById("areaDibujo");
var papel = area.getContext("2d");
var colorcito = "red";
var x, y;

function dibujarLinea(color, xinicio, yinicio, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicio, yinicio);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarMouse(evento)
{
  if (evento.buttons == 1) {
    dibujarLinea(colorcito, x, y, evento.offsetX, evento.offsetY, papel);
  }
  x = evento.offsetX;
  y = evento.offsetY;
}
