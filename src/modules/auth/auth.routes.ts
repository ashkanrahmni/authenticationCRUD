import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

// Route to render the login page
router.get("/login", AuthController.loginIndex);

// Route to handle the login process
router.post("/login", AuthController.login);

// Route to render the register page
router.get("/register", AuthController.registerIndex);

// Route to handle the register process
router.post("/register", AuthController.register);

// Route to handle user logout
router.get("/logout/:id", AuthController.logout);

export default router;
