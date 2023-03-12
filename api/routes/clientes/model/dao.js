import Clients from "./model";

//para buscador mejor utilizar agregate
class clientsDAO {
  constructor() {}
  async create(data) {
    const client = new Clients();
    Object.assign(client, data);
    client.save();
    return client;
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
    return Clients.find().lean();
  }
  listOne(id) {
    return Clients.findById(id).lean();
  }
}
export default new clientsDAO();
