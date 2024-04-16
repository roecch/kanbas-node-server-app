import mongoose from "mongoose";
const schema = new mongoose.Schema({
    id: { type: String, required: true},
    name: String,
    number: String,
    startDate: Date,
    endDate: Date,
    image: String,
},
    { collection: "courses" });
export default schema;