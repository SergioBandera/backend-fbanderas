import employeesDAO from "../model/dao";

const getOne = async (req, res) => {
  try {
    if (!req.params.id) {
      res.sendStatus(400);
    } else {
      const employee = await employeesDAO.listOne(req.params.id);
      res.json(employee);
    }
  } catch (error) {
    throw error;
  }
};

export default getOne;
