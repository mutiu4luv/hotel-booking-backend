import mongoose from "mongoose";

const ImageSchema = mongoose.Schema({
  name: {
    type: String,
    requireed: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

export default mongoose.model("imageModel", ImageSchema);
