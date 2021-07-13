const express = require('express')
const cors = require('cors')
const { getCustomers, getCustomerById, getCustomerByQuery, createCustomer, deleteCustomer, updateCustomer }
 = require('./src/customers')

const app = express()
app.use(express.json())
app.use(cors())


app.get('/customers/search', getCustomerByQuery)
app.get('/customers/:id', getCustomerById)
app.get('/customers', getCustomers)

app.post('/customers', createCustomer)

app.delete('/customers/:docId', deleteCustomer)

app.patch('/customers/:name', updateCustomer)

app.listen(3000, () => {
    console.log('Listening to http://localhost:3000')
})