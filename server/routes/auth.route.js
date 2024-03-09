import express from "express";

import { signUp, logIn } from "../controller/auth.countroller.js";
const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", logIn);

export default authRouter;
