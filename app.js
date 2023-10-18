const express =require("express");
const bodyParser= require("body-parser");
const date = require(__dirname+ "/date.js")

const app=express();
var items =["Score food","Crush food"];
var work=[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));

app.get("/",function(req,res){
    let day = date();

    res.render("list",{
        Title:day,
        newListItems:items

    });

});
app.get("/work",function(req,res){
    res.render("list",{
        Title:"WorkList",
        newListItems:work
    });


});


app.post("/",function(req,res){
    var item = req.body.newItem;
    if(req.body.list==="WorkList"){
        work.push(item);
        res.redirect('/work');
    }else{


    items.push(item);
   res.redirect("/");
    }

});


app.listen(3000,function(){
    console.log("Server started on port 3000")

});