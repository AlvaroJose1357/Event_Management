import { JWT_SECRET } from "../config/Process";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const checkPassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export const createAccessToken = async (payload: string | object) => {
  return await jwt.sign(payload, JWT_SECRET, {
    expiresIn: "15m",
  });
};
