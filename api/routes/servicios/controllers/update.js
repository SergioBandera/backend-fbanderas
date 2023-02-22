import clientsDAO from '../model/dao'

const update = async (req,res)=>{
    console.log(req.params)
    try {
      if (!req.body || !req.params.id){
        res.sendStatus(400)
      } else{
        const client = await clientsDAO.updateOne(req.params.id, req.body)
        res.send(client)
      }
    } catch (error) {
     throw error   
    }
}

export default update;