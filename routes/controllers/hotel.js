import Hotels from "../models/Hotels.js";

////create

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotels(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

///UPDATE

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotels = await Hotels.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotels);
  } catch (err) {
    next(err);
  }
};

///DElete

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotels.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    next(err);
  }
};

///get hotel by id

export const getHotelById = async (req, res, next) => {
  try {
    const Hotel = await Hotels.findByIdAndUpdate(req.params.id);
    res.status(200).json(Hotel);
  } catch (err) {
    next(err);
  }
};

///get all hotels

export const getHotel = async (req, res, next) => {
  try {
    const Hotel = await Hotels.find();
    res.status(200).json(Hotel);
  } catch (err) {
    next(err);
  }
};
