const express = require('express');
const groceryRouter = express.Router();
const pool = require('../modules/pool.js');

// GET
groceryRouter.get('/', (req, res) => {
    const sqlText = `
        SELECT * FROM "groceryList"
        ORDER BY id;
    `;
    pool
        .query(sqlText)
        .then((result) => {
            console.log(`In GET (${sqlText})`);
            res.status(200).send(result.rows);
        })
        .catch((err) => {
            console.error(err);
            alert(`ERROR in GET (${sqlText})`, err);
            res.sendStatus(500);
        });
});

// POST
groceryRouter.post('/', (req, res) => {
    const item = req.body;
    const sqlText =`
        INSERT INTO "groceryList" ("name", "displayImage", "unit", "quantity")
        VALUES ($1, $2, $3, $4);
    `;
    pool
        .query(sqlText, [item.name, item.displayImage, item.unit, item.quantity])
        .then((res) => {
            console.log(`In POST (${sqlText})`);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.error(err);
            alert(`ERROR in POST (${sqlText})`, err);
            res.sendStatus(500);
        });

});

// PUT
groceryRouter.put('/:id', (req, res) => {

});

// DELETE
groceryRouter.delete('/:id', (req, res) => {

});

// RESET (PUT change purchase status)
groceryRouter.put('/', (req, res) => {

});
// CLEAR (DELETE all)
groceryRouter.delete('/', (req, res) => {

});


module.exports = groceryRouter;