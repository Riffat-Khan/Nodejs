const db = require('../../database');


// *************** requests for "products" table ***************\\

const getProducts = (req, res) => {
    db.query('SELECT * FROM products')
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.send.json({
            message : "Error in displaying products table's data"
        });
    });
}; 

const addProducts =  (req, res) => {
    const body = req.body;
    if (Object.keys(body)?.length) {
      const { productName, price } = body;
    console.log('body', body);
    const insertQuery =
      `INSERT INTO
        products
          (productName, price)
        VALUES
          (
            '${productName}',
            '${price}'
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

const updateProducts = (req, res) => {
    const { params, body } = req;
    const { id } = params;
    const { productName, price } = body;
  
    const updateQuery =
      `UPDATE products
       SET name = '${productName}', price = '${price}'
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

const deleteProducts = (req, res) => {
    const { id } = req.params;
    if (Number(id)) {
      const deleteQuery = `DELETE FROM products WHERE id = ${id}`
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
    getProducts,
    addProducts,
    updateProducts,
    deleteProducts    
}