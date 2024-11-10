const dbConnect = require('./mongodb')
const express = require('express');
const { response } = require('express');
const app = express();
app.use(express.json())

//GET API
app.get('/getdata', async(req, res) => {
        let result = await dbConnect();
        result = await result.find().toArray();
        res.send(result);
    })
    //POST API

app.post('/insertdata', async(req, res) => {
        let result = await dbConnect();
        result = result.insertOne(req.body);
        res.send("Data inserted Successfully");
    })
    //PUT API
app.put('/updatedata/:name', async(req, res) => {
    let result = await dbConnect();
    result = await result.updateOne({ name: req.params.name }, { $set: req.body })
    res.send("Data Updated Successfully");
})

//DELETE API
app.delete('/deletedata/:name', async(req, res) => {
    let result = await dbConnect();
    result = await result.deleteOne({ name: req.params.name });
    res.send("Data Deleted Successfully");

})
app.listen(3000);