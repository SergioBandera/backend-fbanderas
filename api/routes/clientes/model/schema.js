import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    persona:{
        nombre:String,
        primerApellido:String,
        segundoApellido:String,
        DNI:String,
        Telefono:String,
        segundoTelefono: String,
    },
    lugarTratamiento:{
        piso:String,
        comunidadVecinos:String,
        nombreLocal:String,
        Direccion:String,
        Poblacion:String,
        codigoPostal:Number,
        metros:String,
    },
    empresa:{
        nombreEmpresa:String,
        direccionFacturacion:String,
        NIF:String,
    },
 });

 export default clientSchema;