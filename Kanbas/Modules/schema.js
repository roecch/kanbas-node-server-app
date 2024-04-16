import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    id: { type: String, required: true},
    name: String,
    description: String,
    course: String,
    lessons: [{
        name: String,
        description: String,
        module: String
    }],
  },
  { collection: "modules" });
export default moduleSchema;