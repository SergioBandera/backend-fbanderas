import invoicesDAO from '../model/dao'

const remove = async (req,res)=>{
    try {
      if (!req.params.id){
        res.sendStatus(400)
      } else{
        const invoice = await invoicesDAO.removeOne(req.params.id)
        res.send(invoice)
      }
    } catch (error) {
     throw error   
    }
}

export default remove;