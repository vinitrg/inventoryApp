let express = require('express')
const bodyParser = require('body-parser');
const router = express.Router();
let app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(router);
const fs = require('fs');

var itemsClass = require('../server/models/InventoryModel.js');
// var newitem = new itemsClass.inventoryModel();

// newitem = {
//     "id" : 0,
//     "itemsSpecification": "thepla",
//     "dateOfOrder":"01August",
//     "orderedBy" : "Neha",
//     // deliveryDate = "02August",
//     // supervisedBy = "Vinit",
//     // quantity = "10",
//     // rate = "20",
//     // totalBill = "200",
//     // gst = "18",
//     // paidBy = "Neha",
//     // paidAmount = "200",
//     // pendingBillAmount = "36",
//     // paidRemarks = "",
//     // srNo = "",
//     // selectedUnit = "",
//     // selectedPaymentMode = "",
// }

//var items = [];
// items.push(newitem)

let rawdata = fs.readFileSync('inventoryData.json');
let items = JSON.parse(rawdata);


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
    let data = JSON.stringify(items);
    fs.writeFileSync('inventoryData.json', data);
    res.send(items);
    res.send(product);
})

app.post("/items",(req,res)=>{
    console.log("POST Request received!");
    // console.log(req.body.id);
    // console.log(req.body.name);
    // console.log(req.body.price);

    let item = new itemsClass.inventoryModel()
    item = {
        id:req.body.id,
        itemsSpecification:req.body.itemsSpecification,
        dateOfOrder:req.body.dateOfOrder,
        orderedBy:req.body.orderedBy,
        // deliveryDate:req.body.deliveryDate,
        // supervisedBy:req.body.supervisedBy,
        // quantity:parseDouble(req.body.quantity),
        // rate:parseDouble(req.body.rate),
        // totalBill:parseDouble(req.body.totalBill),
        // gst:parseDouble(req.body.gst),
        // paidBy:req.body.paidBy,
        // paidAmount:parseDouble(req.body.paidAmount),
        // pendingBillAmount:parseDouble(req.body.pendingBillAmount),
        // paidRemarks:req.body.paidRemarks,
        // srNo:req.body.srNo,
        // selectedUnit:req.body.selectedUnit,
        // selectedPaymentMode:req.body.selectedPaymentMode
    }
    items.push(item);
    let data = JSON.stringify(items);
    fs.writeFileSync('inventoryData.json', data);
    res.send(items);
});

app.put("/item/:id", (req, res) => {
    console.log("PUT Request received!");
    let itemID = req.params.id;
    let item = items.filter(item => {
        return item.id == itemID;
    })[0];

    const index = items.indexOf(item);

    let keys = Object.keys(req.body);

    keys.forEach(key => {
        item[key] = req.body[key];
    });

    items[index] = item;
    let data = JSON.stringify(items);
    fs.writeFileSync('inventoryData.json', data);
    res.send(items);

    res.json(items[index]);
})


app.delete("/item/:id", (req, res) => {
    let itemID = req.params.id;

    let item = items.filter(item => {
        return item.id == itemID;
    })[0];

    const index = items.indexOf(item);

    items.splice(index, 1);
    let data = JSON.stringify(items);
    fs.writeFileSync('inventoryData.json', data);
    res.send(items);
    res.json({ message: `User ${itemID} deleted.` });
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
