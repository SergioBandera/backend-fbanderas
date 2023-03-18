import employeesDAO from "../model/dao";
import validatePassword from "./validatePassword";

const login = async (req, res) => {
  try {
    const employee = await employeesDAO.listOne(req.body.nombre);
    if (employee === null) {
      return res.status(400).send({
        message: "User no encontrado",
        isLogged: false,
      });
    } else {
      if (validatePassword(req.body.password, employee.salt, employee.hash)) {
        console.log("te has logeado");
        return res.status(201).send({
          id: employee._id,
          isLogged: true,
        });
      } else {
        return res.status(400).send({
          message: "contraseña erronea",
          isLogged: false,
        });
      }
    }
  } catch (error) {
    throw error;
  }
};

export default login;
