class Billete
{
  constructor(v, c)
  {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;

    this.imagen.src = imagenes[this.valor];
  }

  mostrar()
  {
    document.write("<br>");
    document.body.appendChild(this.imagen);
    document.body.appendChild(this.valor);
    document.body.appendChild(this.cantidad);
    document.write("<br>" + caja);
  }
}

function entregarDinero()
{
  for(var c of caja)
  {
    console.log(c);
  }
}

var imagenes = [];
imagenes[0] = "billeteDiez.png";
imagenes[1] = "billeteVeinte.png"
imagenes[2] = "billeteCincuenta.png"
imagenes[3] = "billeteCien.png"

var caja = [];
caja.push(new Billete(0, 10, 10));
caja.push(new Billete(1, 20, 10));
caja.push(new Billete(2, 50, 10));
caja.push(new Billete(3, 100, 10));

var dineroDespachar = 230;
var div = 0

var boton = document.getElementById("boton");
boton.addEventListener("click", entregarDinero);

for(var c of caja)
{
  c.mostrar();
}
