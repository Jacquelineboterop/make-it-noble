const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { response } = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");
//express
const app = express();
const PORT = 3000;
app.use(cors());
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
  username: String,
  password: String,
});

const PostSchema = new mongoose.Schema({
  content: String,
  userUuid: String,
  author: String,

},{
  timestamps:true
});

const PostModel = mongoose.model("Post", PostSchema);
const UserModel = mongoose.model("User", UserSchema);
app.use(express.json());
  
//Cookie
app.use(cookieSession({
  secret: " ",
  maxAge: 5 * 60 * 1000,
}));

//Login
app.post("/login", async (request, response) => {
  try {
    const { username, password } = request.body;
    const user = await UserModel.findOne({ username }).exec();
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        request.session.userId = user._id;
        response.status(200).json({
          logged: true,
        });
      } else {
        response.status(401).json({
          logged: false,
        });
      }  
    } else {
      response.status(401).json({
        logged: false,
      });
    }  
  } catch (error) {
    response.status(500).json(error);
  }
});

//Register
app.post("/register", async (request, response) => {
  try {
    const { password, ...data } = request.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
  
    if (
      data.name === "" ||
      data.lastname === "" ||
      password === "" ||
      data.username === ""
    ) {
      response.status(400).json({
        created: false,
      });
      
    } else {
      const user = await UserModel.create({
        ...data,
        password: encryptedPassword
      });
      response.status(200).json({
        user,
        created:true,
      });
    }  
  } catch (error) {
    response.status(400).json(error);
  }
});

//Post
app.post("/post", async (request, response) => {
  const user =  request.session.userId;
  try {
    const { userUuid, ...data } = request.body;
    if (user) {
      const author = await UserModel.findById(user);
      const post = await PostModel.create({ ...data, author: `${author.name} ${author.lastname}`, userUuid: user});
      response.status(200).json(post);
    } 
    /*else {
     response.status(401).json(error);
    }  */
  } catch (error) {
    response.status(500).json(error);
  }
});

//Posts
app.get("/posts", async (request, response) => {
  const user =  request.session.userId;
      try {
        const { userUuid, ...data } = request.body;
        // if (user) {
        //const posts = await PostModel.find({userUuid: user});
        const posts = await PostModel.find({});
          response.status(200).json({
            posts,
          });
        // } else {
          // response.status(401).json(error);
        // }  
      } catch (error) {
        response.status(500).json(error);
      }
  });

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));
