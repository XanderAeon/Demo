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

-

import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          What is important now is to recover our senses.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Susan_Sontag">
            Susan Sontag
          </a>
        </cite>
      </blockquote>
    );
  }
};


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

-airplane.js

export let availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300
},
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200
}];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = (maxSpeed - minSpeed);
  if (range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
}

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
}

export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };
export default meetsSpeedRangeRequirements;

-mission_control.js

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';
import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log (
     element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
}

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();
displayFuelCapacity();
displayStaffStatus();
