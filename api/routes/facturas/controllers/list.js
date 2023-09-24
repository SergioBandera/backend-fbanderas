import invoicesDAO from '../model/dao'

const list = async (req, res)=>{
    try {
        const invoices = await invoicesDAO.list();
        res.json(invoices);
    } catch (error) {
        throw error 
    }
} 
export default list;