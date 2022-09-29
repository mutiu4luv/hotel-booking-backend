import Hotels from "../models/Hotels.js";
import Room from "../models/Room.js";
// import Room from "../models/Room.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotels.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

///UPDATE

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRooms = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRooms);
  } catch (err) {
    next(err);
  }
};

///DElete

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotels.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted");
  } catch (err) {
    next(err);
  }
};

///get hotel by id

export const getRoomById = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

///get all hotels

export const getRoom = async (req, res, next) => {
  try {
    const Room = await Room.find();
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};
