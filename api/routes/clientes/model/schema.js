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
    datosFiscales:{
        tipoCliente:String,
        nombreEmpresa:String,
        direccionFacturacion:String,
        NIF:String,
    },
    lugarDeTratamiento:{
        piso:String,
        comunidadVecinos:String,
        nombreLocal:String,
        Direccion:String,
        Poblacion:String,
        codigoPostal:Number,
        metros:String,
    },
 });

 export default clientSchema;