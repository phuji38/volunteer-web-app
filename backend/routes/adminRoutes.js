const express = require('express');
const { createAdminEvent, getAdminEvents, deleteAdminEvent } = require('../controllers/adminController');

const router = express.Router();

// Create an event (for Admin)
router.post('/events', createAdminEvent);

// Get all events created by Admin
router.get('/events', getAdminEvents);

// Delete an event by ID
router.delete('/events/:id', deleteAdminEvent);

module.exports = router;
