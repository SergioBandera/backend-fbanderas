import Invoice from "./model";

//para buscador mejor utilizar agregate
class invoicesDAO {
  constructor() {}
  async create(data) {
    const invoice = new Invoice();
    Object.assign(invoice, data);
    invoice.save();
    return invoice;
  }

  updateOne(id, data) {
    return Invoices.findByIdAndUpdate(id, data, {
      new: true,
      useFindAndModify: false,
      upsert: true,
    }).exec();
  }
  removeOne(id) {
    return Invoices.findByIdAndRemove(id, {
      useFindAndModify: false
    }).exec();
  }
  list() {
    return Invoices.find().lean();
  }
  listOne(id) {
    return Invoices.findById(id).lean();
  }
}
export default new invoicesDAO();
