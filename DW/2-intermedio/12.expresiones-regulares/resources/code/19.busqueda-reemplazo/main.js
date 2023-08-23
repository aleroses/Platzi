const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "./movies.dat");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }

  // Aquí puedes trabajar con el contenido del archivo .dat
  console.log(data[0]);

  // Aplica expresiones regulares para extraer la información deseada
  // y realiza las operaciones necesarias
});
