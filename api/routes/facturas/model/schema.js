import mongoose from "mongoose";

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  factura:{
    id: Number,
    precio: Number,
    iva: Number,
  },

});

export default invoiceSchema;
