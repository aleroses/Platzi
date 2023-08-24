const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "./movies.dat");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }

  // Aquí puedes trabajar con el contenido del archivo .dat
  //console.log(data);

  //const pattern = /^\d+::([\w\s:,\(\)'\.\-&!\/]+)\s\((\d+)\)::.*$/gm;
  const pattern = /^\d+::(.*)\s\((\d+)\)::.*$/gm;
  //console.log(data.match(pattern));
  //console.log(data.replace(pattern, `insert into movies (year, title) values($2, '$1')`));
  console.log(data.replace(pattern, `{title: "$1", year: $2}`));
});
