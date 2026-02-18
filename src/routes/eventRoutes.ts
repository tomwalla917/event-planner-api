import { Router } from 'express';
import * as eventController from '../controllers/eventController';

const router = Router();

//query routes
//get all
router.get('/filter/events', eventController.getAllEvents);
//get by id
router.get('/events/id/:id', eventController.getEventById);

//crud
//create new event
router.post('/', eventController.createEvent);
//update event
router.put('/', eventController.updateEvent);
//delete event
router.delete('/', eventController.deleteEvent);

export default router;