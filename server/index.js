const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth')
const productRoute = require('./routes/Product')
const cartRoute = require('./routes/Cart')
const orderRoute = require('./routes/Order')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect('mongodb+srv://shantu:talha123@cluster0.w4zcw.mongodb.net/food?retryWrites=true&w=majority',
)

const connectdb = mongoose.connection

connectdb.on('open',()=>{
    console.log('Db is Connected')
})

app.use(express.json())
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/auth", authRoute)


app.listen(5000,()=> console.log('App running on 5000'))