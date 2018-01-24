const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/test';

/* CONNECTING */
// MongoClient.connect(url,(err,db)=>{
//     if(err){
//         console.log('could not connect');
//     }
//     console.log('connected !!!')
//     db.close();
// })


// MongoClient.connect(url,(err,db)=>{

//     const cars = [
//         {model:"Chevy",year:"2017"},
//         {model:"Nissan",year:"2000"}
//     ];

//     db.collection('Cars').insertMany(cars,(err,res)=>{
//         if(err){
//             return console.log(`Cannot insert: ${err}`)
//         }
//         console.log(res.ops)
//     })

//     db.close();
// })


MongoClient.connect(url,(err,db)=>{
    db.collection('Cars').findOneAndUpdate(
        {
            name:"Francis"
        },
        {
            $set:{
                lastname:"Breaker"
            },
            $inc:{
                age:+2
            }
        },
        {
            upsert:true,
            returnOriginal:true
        },
        (err,doc)=>{
            console.log(doc)
        }

    )
    db.close();
})