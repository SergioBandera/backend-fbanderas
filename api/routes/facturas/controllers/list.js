import clientsDAO from '../model/dao'

const list = async (req, res)=>{
    try {
        const clients = await clientsDAO.list();
        res.json(clients);
    } catch (error) {
        throw error 
    }
} 
export default list;