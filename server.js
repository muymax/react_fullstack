const express = require('express');
const app = express();


app.get('/api/users',(req,res)=>{
    res.json([
        {
            id:1,
            username:'Francis'
        },
        {
            id:2,
            username:'Steve'
        }
    ])
})


app.get('/api/cars',(req,res)=>{
    res.json([
        {
            id:1,
            brand:'Ford'
        },
        {
            id:2,
            brand:'Nissan'
        }
    ])
})


const port = process.env.PORT || 3001;

app.listen(port)
