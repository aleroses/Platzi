var express = require("express") // Libreria express
var aplicacion = express(); // Invoca express como si fuera una funcion

aplicacion.get("/", inicio); // Slash home
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
  resultado.send("Este es el <strong>Home</strong> del Servidor")
}

function cursos(peticion, resultado)
{
  resultado.send("Estos son los cursos");
}

aplicacion.listen(8989);
