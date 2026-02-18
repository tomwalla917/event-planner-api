import { Request, Response } from 'express';
import Event from '../models/Events';

export const createEvent = async (req: Request, res: Response): Promise<void> =>{
    try{
        const event = new Event({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            location: req.body.location,
            category: req.body.category,
            attendees: req.body.attendees, 
            createdAt: req.body.createdAt,
            updateAT: req.body.updateAT
        });

        const savedEvent = await event.save()

        res.status(201).json({
            message: "Event created successfully",
            event: savedEvent
        });
    }
    catch (err:any) {
        res.status (400).json({
            message: 'Error creating event',
            error: err.message
        });
    }
    
};

export const getAllEvents = async (req: Request, res: Response): Promise<void> => {
	try {
		const events = await Event.find();
		
		res.json({ 
			count: events.length,
			events 
		});
	} catch (err: any) {
		res.status(500).json({ 
			message: 'Error fetching events',
			error: err.message 
		});
	}
};

export const getEventById = async (req: Request, res: Response): Promise<void> => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            res.status(404).json({ message: "event not found"});
            return;
        }
        res.json({event});
    }
     catch (err: any) {
		res.status(400).json({ 
			message: 'Invalid event ID',
			error: err.message 
		});
	}
};

export const updateEvent = async (req: Request, res: Response): Promise<void> => {
	try {
		const event = await Event.findByIdAndUpdate(
			req.params.id,
			{ 
				...req.body,
				updatedAt: Date.now()
			},
			{ 
				new: true,           // Return the updated document
				runValidators: true  // Run schema validation
			}
		);
		
		if (!event) {
			res.status(404).json({ message: 'Event not found' });
			return;
		}
		
		res.json({ 
			message: 'Event updated successfully',
			event 
		});
	} catch (err: any) {
		res.status(400).json({ 
			message: 'Error updating event',
			error: err.message 
		});
	}
};

export const deleteEvent = async (req: Request, res: Response): Promise<void> => {
	try {
		const event = await Event.findByIdAndDelete(req.params.id);
		
		if (!event) {
			res.status(404).json({ message: 'Event not found' });
			return;
		}
		
		res.json({ 
			message: 'Event deleted successfully',
			event 
		});
	} catch (err: any) {
		res.status(400).json({ 
			message: 'Error deleting event',
			error: err.message 
		});
	}
};