const express = require('express');
const router = express.Router();
const Contabil = require('../models/contabil')

router.post('/', async (req, res) =>{
    try {
        
    const contabil = await new Contabil(req.body).save();
    }catch (err){
        res.json({error: true, message: err.message});
    }
});

module.exports = router;