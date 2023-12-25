class Banda {
  constructor({
    nombre,
    generos,
    integrantes = [],
  }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = integrantes;
  }

  agregarIntegrante(integrante) {
    if (
      integrante.instrumento === "Bateria" &&
      !this.hayBaterista()
    ) {
      this.integrantes.push(integrante);
      console.log(
        "Integrante agregado exitosamente."
      );
    } else {
      console.log(
        "No se puede agregar otro baterista."
      );
    }
  }

  hayBaterista() {
    return this.integrantes.some(
      integrante =>
        integrante.instrumento === "Bateria"
    );
  }
}

class Integrante {
  constructor({ nombre, instrumento }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
}

const data = {
  nombre: "Los Jacks",
  generos: ["rock", "pop", "post-punk"],
  integrantes: [],
};

const banda = new Banda(data);
banda.agregarIntegrante(
  new Integrante({
    nombre: "Erik",
    instrumento: "Guitarra",
  })
);
banda.agregarIntegrante(
  new Integrante({
    nombre: "Paul",
    instrumento: "Bateria",
  })
);

console.log(banda);
