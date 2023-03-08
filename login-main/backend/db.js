const mongoose=require("mongoose");
mongoose.set("strictQuery", false); 
//const monguri="mongodb://127.0.0.1:27017/mydb";
const monguri="mongodb+srv://ramkrishnasarkar12175:1GleQf4X7fTeyiWL@cluster0.gg9vkzf.mongodb.net/mydb?retryWrites=true&w=majority";

//mongodb+srv://ramkrishnasarkar12175:<password>@cluster0.gg9vkzf.mongodb.net/?retryWrites=true&w=majority
const  connectionParams={
    useNewUrlParser :true,
    useUnifiedTopology :true
    
}
//------------

//----------

const connecttomongo=()=>{
    mongoose.connect(monguri,connectionParams,()=>{
        console.log("db conected");
    })
}
module.exports=connecttomongo;