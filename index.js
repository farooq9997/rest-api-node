
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const UserRoute=require("./routes/UserRoute");
const bodyparser=require("body-parser")


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use("/users",UserRoute);


app.listen(port, () => {
  console.log(`Server is running on port:${port}`)
})