import mongoose from "mongoose";

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  hash: String,
  salt: String,
});

export default employeeSchema;
