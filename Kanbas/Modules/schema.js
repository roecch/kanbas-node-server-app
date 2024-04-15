import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    name: String,
    description: String,
    course: String,
    lesson: [{
        name: String,
        description: String,
        module: String
    }],
  },
  { collection: "modules" });
export default moduleSchema;