import clientsDAO from '../model/dao'

const create = async (req,res)=>{
    try {
      if (!req.body){
        res.sendStatus(400)
      } else{
        const client = await clientsDAO.create(req.body)
        res.send(client)
      }
    } catch (error) {
     throw error   
    }
}

export default create;