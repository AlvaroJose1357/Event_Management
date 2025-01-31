import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/UserModel";
import { checkPassword, createAccessToken, hashPassword } from "../utils/auth";
import { JWT_SECRET } from "../config/Process";

export const createAccount = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    // validacon de usuario existente
    const exitingUser = await User.findOne({ email });
    if (exitingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const newUser = new User(req.body);
    newUser.password = await hashPassword(password);
    // const newUser = new User({
    //   name,
    //   email,
    //   password: await hashPassword(password),
    // });
    await newUser.save();
    // generacion del token de acceso
    const token = await createAccessToken({ id: newUser._id });
    res.cookie("token", token);
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // validacon de usuario existente
    const userExist = await User.findOne({ email });
    if (!userExist) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    // validar si la constraseña es correcta
    const isValidPassword = await checkPassword(password, userExist.password);
    if (!isValidPassword) {
      res.status(400).json({ message: "Invalid password" });
      return;
    }
    // generacion del token de acceso
    const token = await createAccessToken({ id: userExist._id });
    res.cookie("token", token);
    res.status(200).json({ message: "Login successfully", userExist });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Session closed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const profile = async (req: Request, res: Response) => {
  try {
    const userFound = await User.findById(req.body.user);
    if (!userFound) {
      res.status(400).json({ message: "Unauthorized" });
      return;
    }
    res.status(200).json(userFound);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const verifyToken = (req: Request, res: Response) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(401).json({ message: "Access denied" });
    // console.log("No token provided");
    return;
  }
  jwt.verify(token, JWT_SECRET, async (error: jwt.VerifyErrors, user) => {
    if (error) {
      res.status(401).json({ message: "Invalid token" });
      return;
    }
    const userFound = await User.findById(user.id);
    if (!userFound) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.status(200).json({
      id: userFound._id,
      username: userFound.name,
      email: userFound.email,
    });
  });
};
