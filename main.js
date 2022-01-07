const express=require("express");
const app=express();

app.use(express.json);

const cors =require("cors");
app.use(cors());

const{addUser,selectUser}=require("./user");

app.get("/index",async(req,res)=>{
    const list =await selectUser();
    res.json(list);

});
app.post("/hello",async(req,res)=>{
    const body=re.body;
    await addUser(body);
    res.json("iam postman");

});

app.listen(8000,()=>{console.log("serverstarted");});