import { Router } from "express";
import { body } from "express-validator";
import {
  createAccount,
  login,
  logout,
  profile,
  verifyToken,
} from "../controllers/UserController";
import { AuthRequired, handleInputError } from "../middleware";
const router = Router();

// Autenticacion
router.post(
  "/auth/register",
  // validacion con express-validator
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("E-mail not valid"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
  handleInputError,
  createAccount
);

router.post(
  "/auth/login",
  body("email").isEmail().withMessage("E-mail not valid"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
  handleInputError,
  login
);
router.post("/auth/logout", logout);
router.get("/profile", AuthRequired, profile);
router.get("/verify", verifyToken);

export default router;
