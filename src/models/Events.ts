import mongoose, { Schema, Document } from 'mongoose';

export interface IComment extends Document{
    title: string;
    description?: string;
    date: Date;
    location?: string;
    category: 'Meeting' | 'Conference' | 'Personal' | 'Workshop' | 'Other';
    attendees: string[];
    createdAt: Date;
    updatedAt: Date;
}

const EventSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Event title is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      required: [true, 'Event date is required'],
    },
    location: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      enum: {
        values: ['Meeting', 'Conference', 'Personal', 'Workshop', 'Other'],
        message: '{VALUE} is not a valid category',
      },
      default: 'Other',
    },
    attendees: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the model
export default mongoose.model<IEvent>('Event', EventSchema);