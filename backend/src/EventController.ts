import Event from './Event';
import express from 'express';
import FileService from './FileService';

class EventController {
  async create(req: express.Request, res: express.Response) {
    try {
      const fileName = await FileService.saveFile(req.files?.image);
      const { title, description, date, tickets } = req.body;
      const event = await Event.create({
        title,
        description,
        date,
        tickets,
        image: fileName,
      });
      res.json(event);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req: express.Request, res: express.Response) {
    try {
      const events = await Event.find();
      return res.json(events);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req: express.Request, res: express.Response) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'Id not specified' });
      }
      const event = await Event.findById(id);
      return res.json(event);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async update(req: express.Request, res: express.Response) {
    try {
      const event = req.body;
      if (!event._id) {
        res.status(400).json({ message: 'Id not specified' });
      }
      const updatedEvent = await Event.findByIdAndUpdate(event._id, event, {
        new: true,
      });
      return res.json(updatedEvent);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req: express.Request, res: express.Response) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'Id not specified' });
      }
      const event = await Event.findByIdAndDelete(id);
      return res.json(event);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new EventController();
