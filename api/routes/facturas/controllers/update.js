import invoicesDAO from "../model/dao";

const update = async (req, res) => {
  try {
    if (!req.body || !req.params.id) {
      res.sendStatus(400);
    } else {
      const invoice = await invoicesDAO.updateOne(req.params.id, req.body);
      res.send(invoice);
    }
  } catch (error) {
    throw error;
  }
};

export default update;
