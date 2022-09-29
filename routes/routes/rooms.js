import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRoomById,
  updateRoom,
} from "../controllers/rooms.js";

const router = express.Router();

///create
router.post("/:hotelid", createRoom);

////UPDATE
router.put("/:id", updateRoom);

////DELETE HOTEL
router.get("/:id/:hotelid", deleteRoom);

////GET  ROOMS BY ID

router.get("/:id", getRoomById);
////GET ALL ROOMS

router.get("/", getRoom);

export default router;
