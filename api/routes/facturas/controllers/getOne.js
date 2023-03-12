import clientsDAO from "../model/dao";

const getOne = async (req, res) => {
  try {
    if (!req.params.id) {
      res.sendStatus(400);
    } else {
      const client = await clientsDAO.listOne(req.params.id);
      res.json(client);
    }
  } catch (error) {
    throw error;
  }
};

export default getOne;
