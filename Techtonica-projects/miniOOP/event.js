//step 8
class TicketType {
    constructor(ticketName, price){
        this.ticketName = ticketName;
        this.price = price;
    }
}

//step 1
class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description
        this.availableTickets = [];
    }

    //step 9
    addAvailableTickets(ticketName, price){
        const newTicket = new TicketType(ticketName, price);
        this.availableTickets.push(newTicket)
    }
    //step 11
    allTickets(){
        return "All tickets: " + this.availableTickets.map((ticket, index) => `${index + 1}. ${ticket.ticketName} ($${ticket.price})`).join(" ")
    }
}
//step 2
const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
);

//step 3
const eventObj2 = new Event(
    'Skillet & Sevendust', 
    'Victorious war tour'
);
const eventObj3 = new Event(
    'Jenny Lewis', 
    'On the line tour 2019'
);

//step 4
const eventArray = new Array()

//step 5
// example of pushing a single object
// eventArray.push(eventObj1);

//example of pushing multiple objects at once
eventArray.push(eventObj1, eventObj2, eventObj3)

//step 6
//console.log(eventArray)

//Step 7
// document.addEventListener('DOMContentLoaded', () => {
//     //handler when the dom is fully loaded
//     let html = '';
//     eventArray.forEach((item) => {
//         html += `<li>${item.name} - ${item.description}</li>`;
//     });
//     document.querySelector('#event').innerHTML = html;
// })

//step 12
document.addEventListener('DOMContentLoaded', () => {
    let html = '';
    eventArray.forEach((event) => {
      html += `<li>${event.ticketName} - ${event.description} - ${event.allTickets()}</li>`;
    });
    document.querySelector('#event').innerHTML = html;
  });


//Step 9 part 2: add available tickets to event
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

//step 10
eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)
