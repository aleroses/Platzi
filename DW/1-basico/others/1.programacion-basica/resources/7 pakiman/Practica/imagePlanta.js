var imagenes = [];
imagenes["PlantaUno"] = "plantaUno.png";
imagenes["PlantaDos"] = "plantaDos.png";
imagenes["PlantaTres"] = "plantaTres.png";

var coleccion = [];
coleccion.push(new Planta("PlantaUno", 150, 80));
coleccion.push(new Planta("PlantaDos", 200, 100));
coleccion.push(new Planta("PlantaTres", 300, 180));

for(var p of coleccion)
{
  p.mostrar();
}

for(var x in coleccion[0])
{
  console.log(x);
}
