import express from "express";
import {
  updateHotel,
  createHotel,
  getHotel,
  getHotelById,
  deleteHotel,
} from "../controllers/hotel.js";

// import {  } from "./controllers/hotel.js";
// import Hotels from "./models/Hotels.js";
// import { createError } from "./utilis/error.js";

const router = express.Router();

///CREATE
router.post("/", createHotel);

// => {
//   const newHotel = new Hotels(req.body);

//   try {
//     const savedHotel = await newHotel.save();
//     res.status(200).json(savedHotel);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
///UPDATE
router.put("/:id", updateHotel);

// => {
//   try {
//     const updatedHotels = await Hotels.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedHotels);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
////DELETE
router.delete("/:id", deleteHotel);

// => {
//   try {
//     await Hotels.findByIdAndDelete(req.params.id);
//     res.status(200).json("Hotel has been deleted");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
////GET HOTEL BY ID
router.get("/:id", getHotelById);

// => {
//   try {
//     const Hotel = await Hotels.findByIdAndUpdate(req.params.id);
//     res.status(200).json(Hotel);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
////GET ALL HOTELS

router.get("/", getHotel);

// => {
// const failed = true;
// if (failed) return next(createError(401, "you are not authenticated"));

//   try {
//     const Hotel = await Hotels.find();
//     res.status(200).json(Hotel);
//   } catch (err) {
//     // res.status(500).json(err);
//     next(err);
//   }
// });

export default router;
