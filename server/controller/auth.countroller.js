import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import playerData from "../models/playerData.model.js";
import creatError from "../utils/serverError.js";

// register user
export const signUp = async (req, res, next) => {
  try {
    const user = await playerData.findOne({ email: req.body.email });
    if (user) {
      return next(new creatError("User alerady exist!", 400));
    }
    const hashedPassword = await bcryptjs.hash(req.body.password, 12);
    const newUser = await playerData.create({
      ...req.body,
      password: hashedPassword,
    });

    // assign JWT
    const token = jwt.sign({ _id: newUser._id }, "secretkey123", {
      expiresIn: "90d",
    });

    res.status(201).json({
      status: "success",
      message: "User registred sucessfully",
      token,
    });
  } catch (error) {
    next(error);
  }
};

// login
export const logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await playerData.findOne({ email });
    if (!user) return next(new creatError("User not found!", 404));
    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return next(new creatError("Invalid email or Password", 401));
    }
    const token = jwt.sign({ id: user._id }, "secretkey123", {
      expiresIn: "90d",
    });

    res.status(200).json({
      status: "success",
      message: "logged in successfully",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        location: user.location,
        sports: user.sports,
      },
    });
  } catch (error) {
    next(error);
  }
};
