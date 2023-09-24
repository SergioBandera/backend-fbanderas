import invoicesDAO from '../model/dao'

const create = async (req,res)=>{
    try {
      if (!req.body){
        res.sendStatus(400)
      } else{
        const invoice = await invoicesDAO.create(req.body)
        res.send(invoice)
      }
    } catch (error) {
     throw error   
    }
}

export default create;