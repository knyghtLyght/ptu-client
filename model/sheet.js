'use strict';

var app = app || {};

var __API_URL__ = 'http://localhost:3000';
var __POKE_API__= 'https://pokeapi.co/api/v2/';

(module => {
  function Trainer(rawTrainerObj) {
    Object.keys(rawTrainerObj).forEach(key => this[key] = rawTrainerObj[key]);
  }

  Trainer.all = [];

  module.Trainer = Trainer;
})(app);