import employeesDAO from "../model/dao";

const list = async (req, res) => {
  try {
    const employees = await employeesDAO.list();
    res.json(employees);
  } catch (error) {
    throw error;
  }
};
export default list;
