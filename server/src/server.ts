import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('lISTANDO USER');

    response.json([
        'Anderson',
        'Pedro',
        'joao'
    ])

});

app.listen(3333, ()=>{
    console.log('Runnig server..');
});