import { verify } from "crypto";
import express from "express";
import {
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../utilis/verifyToken.js";

const router = express.Router();
router.get("/checkauthentification", verifyToken, (req, res, next) => {
  res.send("hello user,you are logged in");
});

///UPDATE
router.put("/:id", updateUser);

////DELETE
router.delete("/:id", deleteUser);

////GET HOTEL BY ID
router.get("/:id", getUserById);

////GET ALL HOTELS

router.get("/", getUser);

export default router;
