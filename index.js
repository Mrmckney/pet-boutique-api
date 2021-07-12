const express = require('express')
const cors = require('cors')
const { getCustomers } = require('./src/customers')

const app = express()
app.use(cors())

app.get('/customers', getCustomers)
// app.post('/customers', createCustomer)

app.listen(3000, () => {
    console.log('Listening to http://localhost:3000')
})