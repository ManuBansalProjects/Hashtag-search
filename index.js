require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');

const constants = require('./constants');

app.get('/api/v1/search/:query', async (req, res, next)=>{
    try{
        const url = `${constants.SEARCH_URL}&q=${req.params.query}`;    
        console.log(url);
        const result = await axios.get(url);
        res.json(result.data);
    }catch(error){
        console.log(error);
    }
})

app.listen(constants.PORT, ()=>{
    console.log(`Server is running at port : ${constants.PORT}`);
})
