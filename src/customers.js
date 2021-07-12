const admin = require('firebase-admin')
const credentials = require('../credentials.json')

function connectDb(){
    if(!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(credentials)
        })
    }  
    return admin.firestore()
}

exports.getCustomers = (request, response) => {
    const db = connectDb()
    db.collection('customers').get()
        .then(customerCollection => {
            const allCustomers = customerCollection.docs.map(doc => doc.data())
            response.send(allCustomers)
        })
        .catch(err => {
            console.error(err)
            response.status(500).send(err)
        })
}
