console.log('Assignment_1');

// ****************** Question => 1 ****************** \\
// Create a nodejs app and import express, fs and url module

const express = require('express');
const fs  = require('fs');
const ApiUrl = require('url');


// ****************** Question => 2 ****************** \\
// Create a file ‘doc.txt’ add following text in it ‘Products List’

fs.open('doc.txt', 'w', 
(err, file) => {
    if(err) throw err;
    console.log(err, file)}
);  

fs.writeFile('doc.txt', 'Products List' , (err, file) => {
    if(err) throw err; 
    console.log(err, file)} 
);

// ****************** Question => 3 ****************** \\
// Create an endpoint to get the data from the user in query params and create a new file( delete if already there), write the data to it

const app = express();

app.listen(3000);

app.get('/userData', (req, res) => {
    
    const data = req.query.data;

    res.send(`Data => ${data}`);

    if (fs.existsSync('dataFile.txt')) fs.existsSync('dataFile.txt');
    else {
        fs.open('dataFile.txt', 'w', (err, file) => {
            if(err) throw err;
            console.log(err, file)
        });  

        fs.writeFile('dataFile.txt', data , (err, file) => {
            if(err) throw err; 
            console.log(err, file)
        });
    }

});



// ****************** Question => 4 ****************** \\
// Create an endpoint to get the data from the user in query params and append data to new line in the same file.

app.listen(2020);

app.get('/user1Data', (req, res) => {
    
    const data1 = req.query.data;

    res.send(`Data => ${data1}`);

    fs.open('dataFile.txt', 'a', (err, file) => {
        if(err) throw err;
        console.log(err, file)
    }); 

    fs.appendFile('dataFile.txt', '\n' + data1  , (err, file) => {
        if(err) throw err; 
        console.log(err, file)
    });

});


// ****************** Question => 6 ****************** \\
// Create a GET endpoint to fetch all active products

var { data } = require('./data');
const { isKeyObject } = require('util/types');

app.get('/dummyData' , (req, res) => {   

    let activeStatus = data.filter( status => status.active);

    res.json(activeStatus);
});

app.listen(3030);



// ****************** Question => 7 ****************** \\
// Create a GET endpoint to fetch product by productName using params only

app.get('/ProductName' , (req, res) => { 
    
    let productName = req.query.productName;

    let productData = data.filter( name => name.productName === productName);
    res.send(productData);
});

app.listen(5000);



// ****************** Question => 8 ****************** \\
// Create a GET endpoint to fetch product by id

app.get('/id' , (req, res) => { 

    let productData = data.filter( name => name.id === 4);
    res.send(productData);
});

app.listen(4000);


// ****************** Question => 9 ****************** \\
// Create a GET endpoint to search data based on productName and quantity

app.get('/searchingData' , (req, res) => { 

    let productName = req.query.productName;
    let quantity = parseInt(req.query.quantity);

    let searchData = data.filter( item => (item.productName.toLowerCase().includes(productName.toLowerCase())) 
    || (item.quantity === quantity));
    res.send(searchData);
});

app.listen(6070);