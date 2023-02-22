import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    tipo:String,
    empresa:{
        empresa:String,
        comercio:String,
    },
    persona:{
        nombre:String,
        apellidos:String,
    },
    
 });

 export default clientSchema;