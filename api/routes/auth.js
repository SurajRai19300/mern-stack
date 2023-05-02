const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { validate } = require("../models/User");

//Register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // console.log(user, "user")
    const validPassword = await bcrypt.compare(req.body.password, user.password);


    // if(user){
    //   if(validPassword){
        
    //   }else
    // }

    // const validPassword = await bcrypt.compare(
    //   req.body.password,
    //   user.password
    // );

    // if (validPassword) {

    //   if(user){
    //     return res.status(200).json(res);
    //   }
    //   return res.status(404).json("user not match!");
    
    // } else {
    //   return res.status(404).json("password not found!");
      
    //   // return res.status(200).json(user);
    // }

    // const user = await User.findOne({ email: req.body.email});
    // !user && res.status(404).json("Username not found!");

    // const validPassword = await bcrypt.compare(req.body.password, user.password);
    // !validPassword && res.status(404).json("wrong password!");

    // res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err);
    // console.log(err,"error")
  }
});

module.exports = router;
