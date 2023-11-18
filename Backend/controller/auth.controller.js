const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/auth.model");

exports.store = async (req, res) => {
  try {
    const payload = req.body;
    const email = await User.findOne({ email: payload.email });

    if (email) {
      return res.json({ message: "Email already Exist", status: 409 });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const user = await User.create({ ...payload, password: hashedPassword });

    res.json({ message: "User Created Successfully", status: 200, user });
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        message: "User not found",
        status: 404,
        success: false,
      });
    }

    // Use bcrypt.compare to compare the provided password with the hashed password in the database
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error(err);
        return res.json({
          message: "Error comparing passwords",
          status: 500,
          success: false,
        });
      }
      if (result) {
        // Passwords match, generate a JWT token
        const token = jwt.sign(
          { email: user.email, userId: user._id },
          "your_secret_key",
          { expiresIn: "1h" }
        ); // Replace 'your_secret_key' with your actual secret key

        return res.json({
          message: "Login successful",
          status: 200,
          success: true,
          token,
        });
      } else {
        return res.json({
          message: "Password does not match",
          status: 403,
          success: false,
        });
      }
    });
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Internal Server Error",
      status: 500,
      success: false,
    });
  }
};


    
   
   
