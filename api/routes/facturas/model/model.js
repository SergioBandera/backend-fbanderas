import mongoose from 'mongoose';
import invoiceSchema from "./schema.js";


export default mongoose.model("facturas", invoiceSchema); 