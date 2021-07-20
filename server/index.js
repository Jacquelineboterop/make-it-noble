const express = require("express");
const bcrypt = require("bcrypt");

const mongoose = require("mongoose");
const { response } = require("express");
const cookieSession = require("cookie-session");

//express
const app = express();
const PORT = 3000;


app.use(cookieSession({
secret: " ",
maxAge: 5 * 60 * 1000,
}));
//Mongo

mongoose.connect("mongodb://localhost:27017/noble", {
    useNewUrlParser: true
});
mongoose.connection.on("error", (error) => console.error(error));
mongoose.connection.once("open", () => console.log("Mongoose connected"));




const UserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  userName: String,
  password: String,
});

const UserModel = mongoose.model("User", UserSchema);
app.use(express.json());
  
//Cookie
app.post("/login", async (request, response) => {
  try {
    const { userName, password } = request.body;
    const user = await UserModel.findOne({ userName }).exec();
    if (user) {
      console.log(userName)
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        response.status(200).json({
          logged: true,
        })
        response.redirect("/");
      }
    }
    response.status(200).json({
      logged: false,
    })
  } catch (error) {
    console.log(error);
    response.status(400).json(error);
  }
})
//Register
app.post("/register", async (request, response) => {
  try {
    const { password, ...data } = request.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({ ...data, password: encryptedPassword });
    response.status(200).json({
      user
    })
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});
app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));
