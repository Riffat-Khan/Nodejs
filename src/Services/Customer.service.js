const db = require('../../database');


// ************** requests for "customers" table **************\\

const getCustomers = (req, res) => {
    db.query('SELECT * FROM customers')
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.send.json({
            message : "Error in displaying customers table's data"
        });
    });
};

const addCustomers =  (req, res) => {
    const body = req.body;
    if (Object.keys(body)?.length) {
      const { customerName, email , phone, password , address, country } = body;
    console.log('body', body);
    const insertQuery =
      `INSERT INTO customers (customerName, email , phone, password , address, country)
      VALUES
          (
            '${customerName}',
            '${email}',
            '${phone}',
            '${password}',
            '${address}',
            '${country}'
          )`;
  
    db.query(insertQuery)
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.send(err)
    });
    } 
    else {
      res.send('Body is required')
    }
};

const updateCustomers = (req, res) => {
    const { params, body } = req;
    const { id } = params;
    const { customerName, email , phone, password , address, country } = body;
  
    const updateQuery =
      `UPDATE ocustomers
       SET name = '${customerName}', email = '${email}', phone = '${phone}', password = '${password}', address = '${address}', country = '${country}'
       WHERE id = ${id}
      `
    db.query(updateQuery)
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.send.json({
            message : "Error in updating customers table"
        });
    });
};

const deleteCustomers = (req, res) => {
    const { id } = req.params;
    if (Number(id)) {
      const deleteQuery = `DELETE FROM customers WHERE id = ${id}`
      db.query(deleteQuery)
      .then(data => {
        res.send(data[0])
      })
      .catch(err => {
        res.send(err);
      });
    } else {
      res.send({ message: "Please enter valid Id"});
    }
}; 


module.exports ={
    getCustomers,
    addCustomers,
    updateCustomers,
    deleteCustomers    
}