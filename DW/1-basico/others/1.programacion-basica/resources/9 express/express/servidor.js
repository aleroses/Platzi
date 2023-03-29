var express = require("express"); // Libreria express
var aplicacion = express(); // invoca express como si fuera una funcion

aplicacion.get("/", inicio); // slash home
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
  resultado.send("Este es el <strong>home del Servidor</strong> genial!!")
}

function cursos(peticion, resultado)
{
  resultado.send("Estos son los <strong>cursos.</strong>")
}
aplicacion.listen(8989);
