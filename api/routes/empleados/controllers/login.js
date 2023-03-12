import employeesDAO from "../model/dao";
import employeeSchema from "../model/schema";
import list from "./list";
import setPassword from "./setPassword";
import validatePassword from "./validatePassword";

const login = async (req, res) => {
  try {
    const employee = await employeesDAO.listOne(req.body.nombre);
    if (employee === null) {
      return res.status(400).send({
        message: "User no encontrado",
      });
    } else {
      if (validatePassword(req.body.password, employee.salt, employee.hash)) {
        return res.status(201).send({
          message: "Usuario logeado",
        });
      } else {
        return res.status(400).send({
          message: "contraseña erronea",
        });
      }
    }
  } catch (error) {
    throw error;
  }
};

export default login;
