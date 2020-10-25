const express = require('express');
const sequelize = require('../database/sequelize');
const First = require('../models/first');
const router = new express.Router();

router.get('/', async(req, res) => {
    try {
        const first = await First.findAll();
        res.send(first);
    } catch(error){
        console.log(error);
        res.send('ERROR', error);
    }
});

router.get('/add', async(req, res) => {
    try{
        const data = {
            title: 'Looking for ML scientist',
            technologies: 'Tensorflow,Keras,Pandas',
            budget: '$5000',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eu nibh a ultrices. Morbi consequat, libero et porttitor consectetur, leo leo egestas nibh, eu pellentesque ipsum est et ligula. In a condimentum neque. Nulla vehicula, elit a mollis bibendum, lorem ante consequat libero, vel faucibus massa arcu nec ligula.',
            contact_email: 'user2@gmail.com'
        }

        const first = await First.create(data);
        res.send(first);

    }catch(error){
        console.log(error);
        res.send('ERROR', error);
    }
});

router.get('/update', async(req, res) => {
    try{
        const first = await First.findByPk(1);
        first.budget = '$4000';
    }catch(error){
        console.log(error);
        res.send('ERROR', error);
    }
})

module.exports = router;