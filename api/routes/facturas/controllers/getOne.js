import invoicesDAO from "../model/dao";

const getOne = async (req, res) => {
  try {
    if (!req.params.id) {
      res.sendStatus(400);
    } else {
      const invoice = await invoicesDAO.listOne(req.params.id);
      res.json(invoice);
    }
  } catch (error) {
    throw error;
  }
};

export default getOne;
