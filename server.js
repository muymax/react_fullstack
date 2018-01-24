const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');
app.use(bodyParser.json())

const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
});
const Car = mongoose.model('Car',carSchema);

// const addCar = new Car({
//     brand: 'Chevy',
//     model: 'Impala',
//     year: '2015',
//     avail: true
// })

// addCar.save((err,doc)=>{
//     if(err) return console.log(err);
//     console.log(doc)
// })

// Car.findById("5a4e66173a4805166b097666",(err,doc)=>{
//     if(err) return console.log(err);
//     console.log(doc)
// })

// Car.remove({},(err,doc)=>{
//      if(err) return console.log(err);
//      console.log(doc)
// })

// 5a4e6b1ec28e1e169a269cb1

app.get('/api/movies',(req,res)=>{
    const movie = {
        name:"Fight club",
        gen:"Weird",
        stars:["Brad Pitt","Edward Norton"]
    }
    res.send(movie)
});
 
app.post('/api/movies',(req,res)=>{
    console.log(req.body)
    res.sendStatus(200)
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Started at port ${port}`)
})
