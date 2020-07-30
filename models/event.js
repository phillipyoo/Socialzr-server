const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Event = new Schema ({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    organiser: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: true
    },
    //route in the server and call the instance through axios in client
    //post the new user and update the event
    attendees:[{
        username: String
    }]
})


module.exports = mongoose.model("Event", Event)