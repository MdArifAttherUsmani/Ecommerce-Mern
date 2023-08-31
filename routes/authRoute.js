import express from "express";
import {
  logincontroller,
  registercontroller,
  testcontroller,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router obj
const router = express.Router();

// routing
// register || method post
router.post("/register", registercontroller);

// login || post
router.post("/login", logincontroller);

// test routes
router.get("/test", requireSignIn, isAdmin, testcontroller);

// protected Route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
