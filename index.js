let express = require('express');
let config = require('config');

let app = express()
app.listen(2408,() =>{
    console.log("Inventory Management Server Started")
})

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("bhai ye chal gaya");
    //res.write("idhar aa gaya");
})