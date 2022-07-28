import mongoose, { Model, Schema } from "mongoose";
import { Entry } from "../interfaces";

export interface IEntry extends Entry {}

const entrySchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Date },
  status: {
    type: String,
    enum: ["pending", "in-progress", "finished"],
    message: "{value} no es un estado premitido",
    default: "pending",
  },
});

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default EntryModel;
