const express = require('express');
const app = express();
const port = process.env.PORT || 5055;
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;
app.use(cors());
app.use(bodyParser.json());


const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://vramanBilash:vramanBilash88@cluster0.esvfp.mongodb.net/vraman?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const vramankariCollection = client.db(`vraman`).collection("vramankaris");
  const reviewCollection = client.db(`vraman`).collection("reviews");
  const adminPanelCollection = client.db(`vraman`).collection("adminPanel");
  const reviewStatusCollection = client.db(`vraman`).collection("reviewStatus");
  const serviceCollection = client.db(`vraman`).collection("orders");
  console.log("db connect done")
  app.get('/vramankaris', (req, res) => {
    vramankariCollection.find()
      .toArray((err, items) => {
        res.send(items)
      })
  })
  app.get('/services', (req, res) => {
    serviceCollection.find()
      .toArray((err, items) => {
        res.send(items)
      })
  })
  app.get('/services/:serviceId', (req, res) => {
    // const id = req.params.serviceId;
      serviceCollection.find({_id: ObjectId(req.params.serviceId)})
    .toArray ( (err, documents) =>{
      console.log(err);
      res.send(documents[0]);
    })
  })
  app.get('/reviews', (req, res) => {
    reviewCollection.find()
      .toArray((err, items) => {
        res.send(items)
      })
  })
  app.get('/ourTeams', (req, res) => {
    adminPanelCollection.find()
      .toArray((err, items) => {
        res.send(items)
      })
  })

  app.get('/pithaUser', (req, res) => {
    console.log(req.query.email)
    vramankariCollection.find({ email: req.query.email })
      .toArray((err, items) => {
        console.log(items)
        // res.redirect('/pithaUser')
        res.send(items)
      })
  })
  app.post('/addServices', (req, res) => {
    const newEvent = req.body;
    console.log('adding new event: ', newEvent)
    serviceCollection.insertOne(newEvent)
      .then(result => {
        console.log('inserted count', result.insertedCount);
        res.send(result.insertedCount > 0)
      })
  })
  app.post('/addStatus', (req, res) => {
    const newEvent = req.body;
    console.log('adding new event: ', newEvent)
    reviewStatusCollection.insertOne(newEvent)
      .then(result => {
        console.log('inserted count', result.insertedCount);
        res.send(result.insertedCount > 0)
      })
  })
  app.post('/addReviews', (req, res) => {
    const newEvent = req.body;
    console.log('adding new event: ', newEvent)
    reviewCollection.insertOne(newEvent)
      .then(result => {
        console.log('inserted count', result.insertedCount);
        res.send(result.insertedCount > 0)
      })
  })
  app.post('/addOurTeams', (req, res) => {
    const newEvent = req.body;
    console.log('adding new event: ', newEvent)
    adminPanelCollection.insertOne(newEvent)
      .then(result => {
        console.log('inserted count', result.insertedCount);
        res.send(result.insertedCount > 0)
      })
  })
  app.post('/addProductWithUser', (req, res) => {
    const newEvent = req.body;
    console.log('adding new event: ', newEvent)
    vramankariCollection.insertOne(newEvent)
      .then(result => {
        console.log('inserted count', result.insertedCount);
        res.send(result.insertedCount > 0)
      })
  })
  app.delete('/delete/:id', (req, res) => {
    const id = ObjectId(req.params.id);
    console.log('delete this', id);
    serviceCollection.deleteOne({ _id: id })
      .then(documents => {
        // if(documents.deletedCount>0){
        //   res.send(documents.deletedCount)
        // }
        res.send(documents.deletedCount > 0)
        console.log(documents)
      })
  })
  app.delete('/allOrders/:id', (req, res) => {
    const id = ObjectId(req.params.id);
    console.log('Allorders delete this', id);
    vramankariCollection.deleteOne({ _id: ObjectId(req.params.id) })
      .then(documents => {
        // if(documents.deletedCount>0){
        //   res.send(documents.deletedCount)
        // }
        res.send(documents.deletedCount > 0)
        console.log(documents)
      })
  })
  
  app.delete('/deleteTeamMember/:id', (req, res) => {
    const id = ObjectId(req.params.id);
    console.log('delete Iteam this', id);
    adminPanelCollection.deleteOne({ _id: ObjectId(req.params.id) })
      .then(documents => {
        // if(documents.deletedCount>0){
        //   res.send(documents.deletedCount)
        // }
        res.send(documents.deletedCount > 0)
        console.log(documents)
      })
  })
  app.delete('/deleteItems/:id', (req, res) => {
    const id = ObjectId(req.params.id);
    console.log('delete user oder this', id);
    vramankariCollection.deleteOne({ _id: id })
      .then(documents => {
        // if(documents.deletedCount>0){
        //   res.send(documents.deletedCount)
        // }
        res.send(documents.deletedCount > 0)
        console.log(documents)
      })
  })
  // app.delete('/delete/:id', (req, res) =>{
  //   productCollection.deleteOne({_id: ObjectId(req.params.id)})
  //   .then( result => {
  //     res.send(result.deletedCount > 0);
  //   })
  // })
  
  app.patch('/update/:id', (req, res) => {
    console.log(ObjectId(req.params.id));
    serviceCollection.updateOne({ _id: ObjectId(req.params.id) },
      {
        $set: { name: req.body.name, price: req.body.price, details: req.body.details, day: req.body.day, night: req.body.night }
      })
      .then(result => {
        res.send(result.modifiedCount > 0)
      })
  })
  app.patch('/update/:id', (req, res) => {
    console.log(ObjectId(req.params.id));
    vramankariCollection.updateOne({ _id: ObjectId(req.params.id) },
      {
        $set: { name: req.body.name, price: req.body.price}
      })
      .then(result => {
        res.send(result.modifiedCount > 0)
      })
  })

  app.patch('/updateStatus/:id', (req, res) => {
    console.log(req.body.status, req.params.id);
    vramankariCollection.updateOne({ _id: ObjectId(req.params.id) },
      {
        $set: { status: req.body.status }
      })
      .then(result => {
        res.send(result.modifiedCount > 0)
      })
  })
});
// update Problem



app.get('/', (req, res) => {
  res.send('Vraman-Golpo App!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})