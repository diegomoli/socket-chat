class Usuarios {
  constructor() {
    this.personas = [];
  }

  agregarPersona(id, nombre, sala) {
    let persona = { id, nombre, sala };
    this.personas.push(persona);
    return this.personas;
  }
  getPersona(id) {
    let persona = this.personas.filter((pers) => pers.id === id)[0];

    return persona;
  }

  getPersonas() {
    return this.personas;
  }

  getPersonasPorSalas(sala) {
    let personaSala = this.personas.filter((persona) => persona.sala === sala);

    return personaSala;
  }

  borrarPersona(id) {
    let personaBorrada = this.getPersona(id);
    this.personas = this.personas.filter((pers) => pers.id !== id);
    return personaBorrada;
  }
}

module.exports = {
  Usuarios,
};
