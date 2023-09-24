import { modelNames } from "mongoose";
import setPassword from "../controllers/setPassword";
import Employees from "./model";

//para buscador mejor utilizar agregate
class employeesDAO {
  constructor() {}
  async create(data) {
    const employee = new Employees();
    const passwordHashed = setPassword(data.password);
    const newEmployee = {
      nombre: data.nombre,
      hash: passwordHashed.hash,
      salt: passwordHashed.salt,
    };
    Object.assign(employee, newEmployee);
    employee.save();
    return employee;
  }

  updateOne(id, data) {
    return Clients.findByIdAndUpdate(id, data, {
      new: true,
      useFindAndModify: false,
      upsert: true,
    }).exec();
  }
  removeOne(id) {
    return Clients.findByIdAndRemove(id, {
      useFindAndModify: false,
    }).exec();
  }
  list() {
    return Employees.find().lean();
  }
  listOne(name) {
    return Employees.findOne({ nombre: name }).lean();
  }
  getOne(id) {
    return Employees.findById(id).lean();
  }
}
export default new employeesDAO();
