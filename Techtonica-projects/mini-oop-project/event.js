// console.log('hi'); TESTING JS SCRIPT

// creating event class
class Event {
  constructor(eventName, description) {
    this.name = eventName;
    this.description = description;
    this.availableTickets = [];
  }
// function addAvailableTickets(ticketName, price) and push to available ticket array
  addAvailableTickets(ticketName, price){
    const newTicket = new ticketType(ticketName, price);
    this.availableTickets.push(newTicket);
  }
// function allTickets that returns a string with all ticket types and prices:
// "all tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)"
  allTicket(){
    console.log(`All tickets: 1.${this.type} $${this.price}`);
  }
}

// creating ticket type class (name, price)
class ticketType {
  constructor(ticketType,price){
    this.type = ticketType;
    this.price = price;
  }
}

// using event class to create a new object and assign values
const eventObj = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);

// create more objects with different values
const eventObj2 = new Event('Puppy Bowl XVI', 'Meet & Greet Event');
const eventObj3 = new Event('Destiny\'s Child', 'Reunited for one night only');

// create an empty array;
const eventArray = [];

// push newly created objects to an array
  eventArray.push(eventObj,eventObj2,eventObj3);
  // console.log(eventArray);

// iterate through array and append to html
let html = '';
eventArray.forEach((item) => {
  html += `<li>${item.name} - ${item.description}</li>`;
  });
  document.querySelector('#event').innerHTML = html;

// adding tickets to each event
  // event 1
    eventObj.addAvailableTickets('Human', 299);
    eventObj,addAvailableTickets('Vampire', 99);
  // event 2
    eventObj2.addAvailableTickets('General Admission', 25);
    eventObj2.addAvailableTickets('Floor Seating', 80);
  // event 3
    eventObj3.addAvailableTickets('Orchestra', 300);
    eventObj3.addAvailableTickets('Mezzanine', 200);
    eventObj3.addAvailableTickets('Balcony', 100);

