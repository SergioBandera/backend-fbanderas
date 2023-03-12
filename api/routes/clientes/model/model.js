import mongoose from 'mongoose';
import ClientSchema from './schema.js';

export default mongoose.model("clientes", ClientSchema); 