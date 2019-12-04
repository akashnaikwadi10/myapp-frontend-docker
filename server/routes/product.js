const express = require('express')
const connect = require('../db')

const router = express();

router.get('/', (request, response) => {
    
    const connection = connect()

    const statement = `select id, title, description, price from product`

    connection.query(statement, (error, result) => {
        connection.end()
        
        response.send(JSON.stringify(result))
    })
})

router.post('/', (request, response) => {
    const title = request.body.title
    const description = request.body.description
    const price = request.body.price
    const category = request.body.category
    
    const connection = connect()
    const statement = `insert into product (title, description, price, category) values ('${title}', '${description}', '${price}', '${category}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(data)
    })
})


module.exports = router