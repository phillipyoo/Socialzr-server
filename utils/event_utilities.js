const Event = require("../models/event")


// Exported functions

// get all events
// return a query
const getAllEvents = function(req) {
    if (req.query.attendee) {
        return Event.findByAttendee(req.query.attendee)
    } else {
        return Event.find()
    }
}

// get event by id
// returns a query
const getEventById = function (req) {
    return Event.findById(req.params.id)
}

// add post
// returns a Post object
const addEvent = function (body) {
    return new Event (body)
}

const deleteEvent = function (id) {
    return  Event.findByIdAndRemove(id)
}

const updateEvent = function (req) {
    // use new: true to return updated event rather than old one
    return Event.findByIdAndUpdate(req.params.id, req.body, {
        // Flag to see updated Event in response
        new : true
    })
}

// get an eventPostId in req.params.eventId and add an username in req.body
// look up the event with the id(findById)
// create and add attendee to the array of attandees with the username

const addAttandee = async function(req) {
    //look up the event with the id (findById)
    let event = await Event.findById(req.params.id)
    let newAttandee = {
        username: req.body.username
    }
    event.attendees.push(newAttandee)
    
    // call findByIdAndUpdate with the modified event object
    return Event.findByIdAndUpdate(req.params.id, event, {
        new: true
    })
}


module.exports = {
    getAllEvents, 
    getEventById, 
    addEvent, 
    deleteEvent, 
    updateEvent,
    addAttandee
}; 