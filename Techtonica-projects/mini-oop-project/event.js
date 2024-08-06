// console.log('hi'); TESTING JS SCRIPT

// creating event class
// this keyword is used to refer to that specific instance of the variable
class Event {
  constructor(eventName, description) {
    this.name = eventName;
    this.description = description;
    this.availableTickets = [];
  }
// function addAvailableTickets(ticketName, price) 
// creates new object called newTicket which holds ticketName and its price
// push newTicket to availableticket array
  addAvailableTickets(ticketName, price){
    const newTicket = new ticketType(ticketName, price);
    this.availableTickets.push(newTicket);
  };
// function allTickets that returns a string with all ticket types and prices:
// "all tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)"
  allTickets(){
    // map will filter thru availabletickets array and print each index (will return element's index number into string), ticketname and prices
    // join method will join all info together separated using spaces
    return "All tickets: " + this.availableTickets.map((ticket, index) => `${index + 1}. ${ticket.ticketName} ($${ticket.price})`).join(' ')
  }

// function searchTickets(low to high price range) 
// filter will order using specification of between low and high value we set 
// if no tickets within that range, return none
// return list of eligible tickets
  searchTickets(low, high){
    const eligibleTickets = this.availableTickets.filter((ticket) => ticket.price >= low && ticket.price <= high);
    if(eligibleTickets.length === 0){
      return "No tickets available"
    }
    return "Eligible tickets: " + eligibleTickets.map((ticket, index) => `${index + 1}. ${ticket.ticketName} ($${ticket.price})`).join(' ')
  }
}

// creating ticket type class (name, price)
class ticketType {
  constructor(ticketName,price){
    this.ticketName = ticketName;
    this.price = price;
  }
}

// using event class to create a new object and assign values
// key:value --- eventname:description
const eventObj = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);

// create more objects with different values
const eventObj2 = new Event('Puppy Bowl XVI', 'Meet & Greet Event');
const eventObj3 = new Event('Destiny\'s Child', 'Reunited for one night only');

// create an empty array to hold all events
const eventArray = [];

// push newly created objects to event array
  eventArray.push(eventObj,eventObj2,eventObj3);
  // console.log(eventArray);

// iterate through eventarray and append to html
document.addEventListener('DOMContentLoaded', () => {
let html = '';
eventArray.forEach((item) => {
  html += `<li>${item.name} - ${item.description}</li>`;
});
  document.querySelector('#event').innerHTML = html;
});

// iterate thru alltickets function and display all tickets available on html
document.addEventListener('DOMContentLoaded', () => {
let html = '';
eventArray.forEach((event) => {
  html += `<li>${event.name} - ${event.description} - ${event.allTickets()}</li>`;
});
  document.querySelector('#event').innerHTML = html;
});

// adding tickets to each event
  // event 1
  eventObj.addAvailableTickets('Human', 299);
  eventObj.addAvailableTickets('Vampire', 99);
// event 2
  eventObj2.addAvailableTickets('General Admission', 25);
  eventObj2.addAvailableTickets('Floor Seating', 80);
// event 3
  eventObj3.addAvailableTickets('Orchestra', 300);
  eventObj3.addAvailableTickets('Mezzanine', 200);
  eventObj3.addAvailableTickets('Balcony', 100);


// testing searchtickets within specified range
console.log(eventObj.searchTickets(0,100));
console.log(eventObj2.searchTickets(100,200));
console.log(eventObj3.searchTickets(100,200));