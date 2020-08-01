let express = require('express')
let app = express()
const {MongoClient} = require('mongodb');

let items = 
[
    //itemsSpecification;
    //dateOfOrder;
    //orderedBy;
    //deliveryDate;
    {id:11, itemsSpecification:"Sand", dateOfOrder:"14Jun2020", orderedBy:"Neha", rate:400},
    {id:12, itemsSpecification:"Cenment", dateOfOrder:"11Mar2020", orderedBy:"Neha", rate:500},
    {id:13, itemsSpecification:"Bricks", dateOfOrder:"1July2020", orderedBy:"Vinit", rate:1400},
]

app.get("/",(req,res)=>{
    res.send("You called Home")
})

app.get("/items",(req,res)=>{
    res.send(items)
})

app.get("/items/:id",(req,res)=>{
    let itemID = req.params.id;
    console.log(req.params.id)
    let product = items.find((p)=>{return p.id == itemID});
    res.send(product);
})

app.post("/items",(req,res)=>{
    console.log("POST Request received!");
    console.log(req.body.id);
    console.log(req.body.name);
    console.log(req.body.price);

    let product = {
        id:parseInt(req.body.id), 
        name:req.body.name, 
        price:parseInt(req.body.price)
    }
    items.push(product);
    res.send(items)
});

app.put("/",(req,res)=>{
    
})

app.delete("/",(req,res)=>{
    
})

app.listen(5000,()=>{
    console.log("server started")
})

// let express = require('express') 

// let app = express();

// //Below line is responsible for collecting body parameters in JSON format
// //needed or POST specifically
// app.use(express.json());

// let items = 
// [
//     {id:11, name:"laptop1", price:40000},
//     {id:12, name:"laptop2", price:30000},
//     {id:13, name:"laptop3", price:20000},
//     {id:14, name:"laptop4", price:10000}
// ];


// app.get("/",(req,res)=>{
//     res.send("You called Home!");
// });

// app.get("/items",(req,res)=>{
//     res.send(items);
// });


// app.get("/items/:id",(req,res)=>{
//     let itemID = req.params.id;
//     let product = items.find((p)=>{return p.id == itemID;});
//     res.send(product);
// });

// app.post("/items",(req,res)=>{

//     console.log("POST REquest received!");
//     console.log(req.body.id);
//     console.log(req.body.name);
//     console.log(req.body.price);

//     let product = {
//         id:parseInt(req.body.id), 
//         name:req.body.name, 
//         price:parseInt(req.body.price)
//     }
//     items.push(product);
//     res.send(items)
