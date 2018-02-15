# Examples

I'll be copying some of the exercises I've been doing on codecademy into this document.

React:

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(
  (person, i) => <li key={'person_' + i}>{person}</li>
);

ReactDOM.render(
  <ul>{peopleLis}</ul>, document.getElementById('app')
);

JS:

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() {
    return Math.floor(Math.random() * 10000)
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurse1 = new Nurse('nurse1', ['Trauma','Pediatrics']);

nurse1.takeVacationDays(5);
console.log(nurse1.remainingVacationDays);

nurse1.addCertification('Genetics');
console.log(nurse1.certifications);
