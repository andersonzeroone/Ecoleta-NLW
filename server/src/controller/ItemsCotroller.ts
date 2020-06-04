import knex from '../database/connections';
import { Request, Response} from 'express';

class ItemsController{
    async index(request:Request, response: Response){
    
        const items =  await knex('items').select('*');
    
        const serialzedItems = items.map( item =>{
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            }
        })
    
        return response.json({serialzedItems})     
        
    }
}

export default ItemsController;