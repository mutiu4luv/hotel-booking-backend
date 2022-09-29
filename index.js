import cors from "cors";

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/routes/auth.js";
import userRoute from "./routes/routes/user.js";
import hotelsRoute from "./routes/routes/hotels.js";
import roomsRoute from "./routes/routes/rooms.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//     console.log("connected to mongoDB");
//   } catch (error) {
//     throw error;
//   }
// };

mongoose
  .connect(
    "mongodb+srv://admin:12345@mutiu.otmzq.mongodb.net/bookings?authSource=admin&replicaSet=atlas-nva2km-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("connected To Database And listening to localhost 5000")
  )

  .catch((err) => console.log(err));
////middlewares

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelsRoute);

app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong!";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  // connect();
  console.log("connected to backend");
});
