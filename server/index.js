const express = require("express");
const bcrypt = require("bcrypt");

const mongoose = require("mongoose");
const { response } = require("express");

//express
const app = express();

const port = 3000;

//Mongo
mongoose.connect('mongodb://localhost:27017/noble',{useNewUrlParser:
true})
mongoose.connection.on('error', (error) => console.error(error));
mongoose.connection.once("open",() => console.log("Mongoose connected"));

const UserSchema = new mongoose.Schema({
    name: String,
    lastNames: String,
    userName: String,
    password: String,
});

const UserModel = mongoose.model ("User",UserSchema);
app.use(express.json())
app.post("/register", async (request, response) => {
try { 
    const {password, ...data} = request.body;
    const encryptedPassword= await bcrypt.hash(password, 10 )
    const user = await UserModel.create( { ...data, password :encryptedPassword})
    response.status(200).json({
        user
    })}
    catch (error) {
        console.log(error)
        response.status(400).json(error)        
    }
});
app.get("/",() => {});
app.listen(port, () => console.log(`Server listen on port ${port}`));