const mongoose=require("mongoose");
//database connection
mongoose.connect("mongodb://localhost:27017/node-restful-api")
.then(()=>{
    console.log("db is connected");
}).catch(()=>{
   console.log("db not connected");
});


//  User  Schema 
const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const User= new mongoose.model("rest-api-node",UserSchema);
module.exports=User;