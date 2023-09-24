import employeesDAO from "../model/dao";

const getOne = async (req, res) => {
  try {
    console.log("entro aqui")
    if (!req.body.id) {
      res.sendStatus(400);
    } else {
      const employee = await employeesDAO.getOne(req.body.id);
      res.json(employee);
      console.log("existe!")
    }
  } catch (error) {
    throw error;
  }
};

export default getOne;
