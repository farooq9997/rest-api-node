const router =require("express").Router();
const User=require("../models/UserSchema");

// Create  User
router.post("/add",async(req,res)=>{
try {
    const addUser= new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    const saveUser=await addUser.save();
    res.send(saveUser);
    console.log("New User Created");
} catch (e) {
    console.log("User not Created");
}
});

// Get All User
router.get("/alluser",async(req,res)=>{
    try {
        const getall= await User.find({});
        res.send(getall);
        console.log("Get All User ");
    } catch (e) {
        console.log(" All User  Not Get");
    }
    });

// Get Single User
router.get("/singleuser/:id",async(req,res)=>{
    try {
        const _id=req.params.id
        const getsingle= await User.findById({_id});
        res.send(getsingle);
        console.log("Get Single User ");
    } catch (e) {
        console.log(" Single User  Not Geted");
    }
    });

    // Update User
    router.patch("/updateuser/:id",async(req,res)=>{
        try {
            const _id=req.params.id
            const updateUser= await User.findByIdAndUpdate(_id,req.body,{
                new:true
            });
            res.send(updateUser);
            console.log(" User is updated ");
        } catch (e) {
            console.log("User is not updated");
        }
        });
    //Delete User
    router.delete("/deleteuser/:id",async(req,res)=>{
        try {
            const _id=req.params.id
            const deleteUser= await User.findByIdAndDelete({_id});
            res.send(deleteUser);
            console.log("User is Delelted");
        } catch (e) {
            console.log("User is not deleted");
        }
        });
  
module.exports=router;
