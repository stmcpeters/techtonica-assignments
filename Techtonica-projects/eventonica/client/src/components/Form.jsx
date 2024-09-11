import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"

const MyForm = ({ onSaveEvent, editingEvent, onUpdateEvent }) => {

    // This is the original State with not initial student 
    const [events, setEvents] = useState(editingEvent || {
        title: "",
        location: "",
        eventtime: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleTitleChange = (event) => {
        const title = event.target.value;
        setEvents((events) => ({ ...events, title }));

    };

    const handleLocationChange = (event) => {
        const location = event.target.value;
        setEvents((events) => ({ ...events, location }));
    };

    const handleDateChange = (event) => {
        const eventtime = event.target.checked;
        //console.log(eventtime);
        setEvents((events) => ({ ...events, eventtime }));
    };

    const clearForm = () => {
        setEvents({ title: "", location: "", eventtime: "" })
    }

    //A function to handle the post request
    const postEvent = (newEvent) => {
        return fetch("http://localhost:8080/api/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEvent),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log("From the post ", data);
                //I'm sending data to the List of Students (the parent) for updating the list
                onSaveEvent(data);
                //this line just for cleaning the form
                clearForm();
            });
    };

    //A function to handle the post request
    const putEvent = (toEditEvent) => {
        return fetch(`http://localhost:8080/api/events/${toEditEvent.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toEditEvent),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                onUpdateEvent(data);
                //this line just for cleaning the form
                clearForm();
            });
    };


    //A function to handle the submit in both cases - Post and Put request!
    const handleSubmit = (e) => {
        e.preventDefault();
        if (events.id) {
            putEvent(events);
        } else {
            postEvent(events);
        }
    };

    return (
        <Form className='form-events' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <input
                    type="text"
                    id="add-event-title"
                    placeholder="Event Title"
                    required
                    value={events.title}
                    onChange={handleTitleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <input
                    type="text"
                    id="add-event-location"
                    placeholder="Location"
                    required
                    value={events.location}
                    onChange={handleLocationChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <input
                    type="date"
                    id="add-event-date"
                    required
                    value={events.eventtime}
                    onChange={handleDateChange}
                />
            </Form.Group>
            <Form.Group>
            <Button type="submit" variant="outline-success">{events.id ? "Edit Event" : "Add Event"}</Button>
            {events.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
            </Form.Group>
        </Form>
    );
};


export default MyForm