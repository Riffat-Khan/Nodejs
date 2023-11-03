const db = require('../../database');


// **************** requests for "orders" table ****************\\

const getOrders = (req, res) => {
    db.query('SELECT * FROM orders')
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.send.json({
            message : "Error in displaying orders table's data"
        });
    });
};

const addOrders =  (req, res) => {
    const body = req.body;
    if (Object.keys(body)?.length) {
      const { orderAmount, customerID } = body;
    console.log('body', body);
    const insertQuery =
      `INSERT INTO orders (orderAmount , customerID)
      VALUES
          (
            '${orderAmount}',
            '${customerID}'
          )`;
  
    db.query(insertQuery)
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.send(err);
    });
    } 
    else {
      res.send('Body is required')
    }
};
const updateOrders = (req, res) => {
    const { params, body } = req;
    const { id } = params;
    const { orderAmount, customerID } = body;
  
    const updateQuery =
      `UPDATE orders
       SET amount = '${orderAmount}', customerID = '${customerID}'
       WHERE id = ${id}
      `
    db.query(updateQuery)
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.send.json({
            message : "Error in updating orders table"
        });
    });
};

const deleteOrders = (req, res) => {
    const { id } = req.params;
    if (Number(id)) {
      const deleteQuery = `DELETE FROM orders WHERE id = ${id}`
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
    getOrders,
    addOrders,
    updateOrders,
    deleteOrders    
}