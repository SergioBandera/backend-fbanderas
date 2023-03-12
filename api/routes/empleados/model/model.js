import mongoose from "mongoose";
import EmployeeSchema from "./schema.js";

export default mongoose.model("empleados", EmployeeSchema);
