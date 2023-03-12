import employeesDAO from "../model/dao";

const create = async (req, res) => {
  try {
    if (!req.body) {
      res.sendStatus(400);
    } else {
      const employee = await employeesDAO.create(req.body);
      res.send(employee);
    }
  } catch (error) {
    throw error;
  }
};

export default create;
