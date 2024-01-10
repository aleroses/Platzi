class Band {
  constructor({ name, genre = [] }) {
    this.name = name;
    this.genre = genre;
    this.members = [];
  }

  new_member(member) {
    const drums_found = this.members.find(
      x => x.instrument == "Drums"
    );

    if (
      member.instrument == "Drums" &&
      drums_found
    ) {
      console.log(
        `There is already a band member who plays the drums. It's ${drums_found.name}`
      );
    } else {
      this.members.push(member);
    }
  }
}

class Member {
  constructor({ name, instrument }) {
    this.name = name;
    this.instrument = instrument;
  }
}

const band_one = new Band({
  name: "Band One",
  genre: ["Pop Rock", "Punk Rock"],
});

band_one.new_member(
  new Member({
    name: "Simone Simons",
    instrument: "Piano",
  })
);
band_one.new_member(
  new Member({
    name: "Alissa White",
    instrument: "Drums",
  })
);
band_one.new_member(
  new Member({
    name: "Ale Ghost",
    instrument: "Drums",
  })
);

/* class Band{
    constructor({
        name,
        genres = [],
        // members = [],
    }){
        this.name = name;
        this.genres = genres;
        this.members = [];
    }

    new_member(member){
        const drums_found = this.members.find(x => x.instrument == 'drums')

        if(member.instrument == 'drums' &&  drums_found){
            console.log("There is already a band member who plays the drums.")
        }else{
            this.members.push(member);
        }
    }
}

class Members{
    constructor({name, instrument}){
        this.name = name;
        this.instrument = instrument;
    }
}

const band_one = new Band({
    name: 'Band One',
    genres: [
        'Indie Rock',
        'Pop Rock',
    ],
});

const band_two = new Band({
    name: 'Band Two',
    genres: [
        'Electronics',
        'Trance',
    ],
});


band_one.new_member(new Members({name: 'Ale', instrument: 'piano'}));
band_one.new_member(new Members({name: 'Iva', instrument: 'drums'}));
band_one.new_member(new Members({name: 'Ully', instrument: 'drums'}));  */

/* class Banda {
    constructor({
        nombre,
        generos = [],
    }) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        const drums_found = this.integrantes.find(x => x.instrumento == 'Bateria');

        if (integranteNuevo.instrumento == 'Bateria' && drums_found) {
        console.log('Ya existe baterista');
        } else {
        this.integrantes.push(integranteNuevo);
        }
    }
}

//Crear clase Integrante
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
}
const banda = new Banda(data)
banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))

export {
    Banda,
    Integrante,
} */
