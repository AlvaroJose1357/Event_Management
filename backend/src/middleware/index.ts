import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../config/Process";

export const handleInputError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};

export const AuthRequired = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(401).json({ message: "Access denied" });
    // console.log("No token provided");
    return;
  }
  jwt.verify(token, JWT_SECRET, (error: jwt.VerifyErrors, user) => {
    if (error) {
      res.status(401).json({ message: "Invalid token" });
      // console.log("Invalid token");
      return;
    }
    req.body.user = user.id;
    next();
  });
};
