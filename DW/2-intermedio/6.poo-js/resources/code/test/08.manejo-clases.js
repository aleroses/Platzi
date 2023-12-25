class Band {
  constructor({ name, genre, members = [] }) {
    this.name = name;
    this.genre = genre;
    this.members = members;
  }

  add_member(new_member) {
    if (new_member.instrument === "Drums") {
      const validation = this.members.find(
        member => member.instrument === "Drums"
      );

      validation
        ? console.log("Already exist")
        : this.members.push(new_member);
    } else {
      this.members.push(new_member);
    }
  }
}

class Member {
  constructor({ name, instrument }) {
    this.name = name;
    this.instrument = instrument;
  }
}

const member_one = new Member({
  name: "Simone Simons",
  instrument: "Singer",
});

const member_two = new Member({
  name: "Alissa White-Gluz",
  instrument: "Drums",
});

const member_three = new Member({
  name: "Angela Gossow",
  instrument: "Drums",
});

const band_one = new Band({
  name: "Misfits",
  genre: "Punk",
  // members: [member_one],
});

band_one.add_member(member_one);
band_one.add_member(member_two);
band_one.add_member(member_three);

console.log(band_one);
