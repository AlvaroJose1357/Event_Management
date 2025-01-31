import { Request, Response } from "express";
import Event from "../models/EventModel";

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find();
    res.status(200).json({ data: events });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const getEventbyId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }
    res.status(200).json({ data: event });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    // console.log(req.body);
    // console.log(req.body.user);
    // console.log(req.body.user.id);
    // return;
    const newEvent = new Event(req.body, { user: req.body.user.id });
    await newEvent.save();
    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const eventUpdated = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!eventUpdated) {
      res.status(404).json({ message: "Event not found" });
      return;
    }
    res.status(200).json({ message: "Event updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const EventDeleted = await Event.findByIdAndDelete(req.params.id);
    if (!EventDeleted) {
      res.status(404).json({ message: "Event not found" });
      return;
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
