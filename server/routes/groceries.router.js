const express = require('express');
const groceryRouter = express.Router();
const pool = require('../modules/pool.js');

// GET
groceryRouter.get('/', (req, res) => {
    const sqlText = `
        SELECT * FROM "groceryList"
        ORDER BY "id";
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
        .then((result) => {
            console.log(`In POST (${sqlText})`);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });

});

// PUT
groceryRouter.put('/:id', (req, res) => {
    const itemId = req.params.id;
    const sqlText = `
        UPDATE "groceryList"
        SET "bought" = NOT "bought"
        WHERE "id" = $1;
    `;
    pool
        .query(sqlText, [itemId])
        .then((result) => {
            console.log(`In PUT (${sqlText})`);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

// DELETE
groceryRouter.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    const sqlText = `
        DELETE FROM "groceryList"
        WHERE "id" = $1
    `
    pool
        .query(sqlText, [itemId])
        .then((result) => {
            console.log(`In DELETE (${sqlText})`);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

// RESET (PUT change purchase status)
groceryRouter.put('/', (req, res) => {
    const sqlText = `
        UPDATE "groceryList"
        SET "bought" = false;
    `;
    pool
        .query(sqlText)
        .then((result) => {
            console.log(`In PUT(reset) (${sqlText})`);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });

});
// CLEAR (DELETE all)
groceryRouter.delete('/', (req, res) => {
    const sqlText = `
        DELETE FROM "groceryList"
    `;
    pool    
        .query((result) => {
            console.log(`In DELETE(all) (${sqlText})`);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});


module.exports = groceryRouter;