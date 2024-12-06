import { Router } from "express";
import { UserController } from "./user.controller";
import { sessionMiddleware } from "../../middlewares/session";

const router = Router();

// Route to get all users
router.get("/", sessionMiddleware,UserController.UsersIndex);

// Route to delete user by ID
router.get("/delete/:id",sessionMiddleware, UserController.UserDelete);

// Route to edit user (get user for editing)
router.get("/edit/:id",sessionMiddleware, UserController.UserEditIndex);

// Route to update user details
router.post("/edit/:id",sessionMiddleware, UserController.UserEdit);

export default router;