var imagenes = [];
imagenes["plantaUno"] = "plantaUno.png";
imagenes["plantaDos"] = "plantaDos.png";
imagenes["plantaTres"] = "plantaTres.png";

var coleccion = [];
coleccion.push(new PlantasZombies("plantaUno", 100, 80));
coleccion.push(new PlantasZombies("plantaDos", 200, 120));
coleccion.push(new PlantasZombies("plantaTres", 80, 150));

for(var plazom of coleccion)
{
  plazom.mostrar();
}

for(var x in coleccion[0])
{
  console.log(x);
}
