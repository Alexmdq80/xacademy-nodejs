const express = require('express');

const router = express.Router();


router.get('/', (req,res) => {
    // res.setHeader('content-type','text/html');
    res.send('<h1> Este es nuestro server </h1>');
});

router.post('/', (req, res) => {
    const { name, email, password } = req.body;
   
    // res.setHeader('content-type','application/json');
    // res.send(`Los datos que enviaste son: ${name} - ${email} -  ${password}`);
    res.send({name, email, password: "*****"});
});

// app.get('/user/:userId', myMdw, (req,res) => {
    router.get('/:userId', (req,res) => {
        const userId = req.params.userId;

    // res.setHeader('content-type','text/html');
    // res.send(`<h1>${name} Bienvenido a mi sitio web!</h1>`);
    // res.setHeader('content-type','application/json');
    res.send({userId});

});

router.get('/', (req,res) => {
    const name = req.query.name;

    // res.setHeader('content-type','text/html');
    // res.send(`<h1>${name} Bienvenido a mi sitio web!</h1>`);
    // res.setHeader('content-type','application/json');
    res.send({ name });

});

router.put('/:userId', (req,res) => {
    const userId = req.params.userId;
    const { name, email, password } = req.body;
   
    res.send(
        { id: userId, name, email, password: "*****"}
    );

});

router.delete('/:userId', (req,res) => {
    const userId = req.params.userId;
   
    res.send(
        `Adiós usuario: ${userId}`
    );

});

module.exports = router;