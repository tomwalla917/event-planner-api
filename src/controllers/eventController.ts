import { Request, Response } from 'express';
import {Event} from '../models/Events';

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
            post: savedEvent
        });
    }
    catch (err:any) {
        res.status (400).json({
            message: 'Error creating event',
            error: err.message
        });
    }
    
};

