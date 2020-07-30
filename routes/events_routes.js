const express = require("express")
const router = express.Router()
const {getEvents, getEvent, postEvent, removeEvent, changeEvent, addUserToList,userAuthenticated} = require("../controllers/events_controller")


// READ
// GET on "/events"
// Returns all events
router.get("/", getEvents)

// READ
// GET on "/events/:id"
// Returns an event with given id
router.get ("/:id", getEvent)

router.use(userAuthenticated)

// CREATE
// POST in "/events"
// Creates a new event
router.post("/", postEvent)

//CREATE
//PUT on /events/:eventId/
//add a username to the event post with eventId
router.put("/add-user/:id", addUserToList)

// DELETE
// DELETE in "/events/:id"
// Deletes an event with given id
router.delete("/:id", removeEvent)

// UPDATE
// PUT on "/events/:id"
// Updates an event with given id
router.put("/:id", changeEvent)

module.exports = router;