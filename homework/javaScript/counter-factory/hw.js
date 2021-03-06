// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
  insertCounterComponent: function(newCountId){
    console.log(`insert counter component #${newCountId}`);
    // Your Code Here
  },
  refreshCounterComponent: function(countId){
    console.log(`refresh counter component #${countId}`);
    // Your Code Here
  },
  removeCounterComponent: function(countId){             // REACH
    console.log(`remove counter component #${countId}`);
    // Your Code Here
  }
};
    // var counterNumber = 1;

// Top-Level Application Control //
const AppController = {
  counterNumber: 1,
  addOne: null,
  deleteButton: null,
  i: 0,

  onClickNewCounter: function(event){
    console.log("You asked for a new counter!");
    var newDiv = document.createElement("div");
    var newDivName = newDiv.className = "counter";
    newDiv.setAttribute('data-index', AppController.i);
    var node = document.createTextNode('');
    newDiv.appendChild(node);
    var element = document.getElementById('counter-list');
    element.appendChild(newDiv);
    document.querySelectorAll("[data-index]")[AppController.i].innerHTML = htmlMarkup;
    AppController.addOne = document.getElementsByClassName('increment')[AppController.i].addEventListener('click', AppController.onClickIncrement);
    AppController.deleteButton = document.getElementsByClassName('delete')[AppController.i].addEventListener('click', AppController.onClickDelete);
    AppController.i++;
    console.log(AppController.i);
  },
  onClickIncrement: function(event){
    console.log("you clicked a button")
    document.querySelector('.counter h3 span').innerHTML = AppController.counterNumber;
    console.log(AppController.counterNumber);
    AppController.counterNumber++;
  },
  onClickDelete: function(event){                           // REACH
    document.getElementsByClassName('counter')[0].remove();
  }
};

window.onload = function(){
  // var counterNumber = 1;
  if (!document.getElementsByClassName('increment')[0] === undefined){
    var addOne = document.getElementsByClassName('increment')[0].addEventListener('click', AppController.onClickIncrement);
    var deleteButton = document.getElementById('delete').addEventListener('click', AppController.onClickDelete);
    var newCounterButton = document.getElementById('new-counter').addEventListener('click', AppController.onClickNewCounter);
} else {
  var newCounterButton = document.getElementById('new-counter').addEventListener('click', AppController.onClickNewCounter);
}
};
  var htmlMarkup = `
  <h3>Count: <span>0</span></h3>
  <button class='increment'> + 1 </button>
  <button class='delete'>Delete</button>`;
