let express = require('express')
let app = express()


var itemsClass = require('../server/models/InventoryModel.js');
var newitem = new itemsClass.inventoryModel();
newitem = [
    itemsSpecification = "thepla",
    dateOfOrder ="01August",
    orderedBy = "",
    deliveryDate = "",
    supervisedBy = "",
    quantity = "",
    rate = "",
    totalBill = "",
    gst = "",
    paidBy = "",
    paidAmount = "",
    pendingBillAmount = "",
    paidRemarks = "",
    srNo = "",
    selectedUnit = "",
    selectedPaymentMode = "",
]

var items = [];
items.push(newitem)

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

    let item = {
        id:parseInt(req.body.id), 
        name:req.body.name, 
        price:parseDouble(req.body.price),
        itemsSpecification:req.body.itemsSpecification,
        dateOfOrder:req.body.dateOfOrder,
        orderedBy:req.body.orderedBy,
        deliveryDate:req.body.deliveryDate,
        supervisedBy:req.body.supervisedBy,
        quantity:parseDouble(req.body.quantity),
        rate:parseDouble(req.body.rate),
        totalBill:parseDouble(req.body.totalBill),
        gst:parseDouble(req.body.gst),
        paidBy:req.body.paidBy,
        paidAmount:parseDouble(req.body.paidAmount),
        pendingBillAmount:parseDouble(req.body.pendingBillAmount),
        paidRemarks:req.body.paidRemarks,
        srNo:req.body.srNo,
        selectedUnit:req.body.selectedUnit,
        selectedPaymentMode:req.body.selectedPaymentMode
    }
    items.push(item);
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
