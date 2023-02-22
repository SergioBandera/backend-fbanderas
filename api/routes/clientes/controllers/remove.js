import clientsDAO from '../model/dao'

const remove = async (req,res)=>{
    try {
      if (!req.params.id){
        res.sendStatus(400)
      } else{
        const client = await clientsDAO.removeOne(req.params.id)
        res.send(client)
      }
    } catch (error) {
     throw error   
    }
}

export default remove;