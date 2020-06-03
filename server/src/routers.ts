import express, { request, response } from 'express';
import knex from './database/connections';

const routes = express.Router()

routes.get('/items', async (request, response) => {

    const items =  await knex('items').select('*');

    const serialzedItems = items.map( item =>{
        return {
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        }
    })

    return response.json({serialzedItems});

});


routes.post('/points', async (request, response) =>{
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

    await knex('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    });

    return response.json({sucess: true})
})

export default routes;