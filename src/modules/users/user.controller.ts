import { Request, Response, NextFunction } from "express";
import { UserService } from "./user.service";
import { EditUserDto } from "../../dto/editUser.dto";
import { ObjectId } from "mongodb";

export class UserController {
  
  // Get all users
  static async UsersIndex(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await UserService.getAllUsers();
      res.render('users/index', {
        title: 'کاربران',
        layout: 'dashboard',
        users: users,
      });
    } catch (error: any) {
      next(error);  // Handle error with next middleware
    }
  }

  // Delete a user by ID
  static async UserDelete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.params.id;
      const result:boolean =await UserService.deleteUserById(userId);
      if(result){
        res.redirect('/users')
      }

    } catch (error: any) {
      next(error);  // Pass error to error handler
    }
  }

  // Get user for editing
  static async UserEditIndex(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const userId = req.params.id;
      const user = await UserService.getUserById(userId);
      if (!user) {
        res.redirect('/users/list')
      }
      res.render('users/edit/index', {
        title: 'کاربران',
        layout: 'dashboard',
        user: user,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Edit user details
  static async UserEdit(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.params.id;
      const { username, email } = req.body;
      const editUserDto = new EditUserDto(username, email);

      const updatedUser = await UserService.editUserById(userId, editUserDto);
      const message = req.flash('success', 'User Updated !')
      res.render('users/edit/index', {
        title: 'کاربران',
        layout: 'dashboard',
        user: updatedUser,
        messages: req.flash(),
      });
    } catch (error: any) {
      next(error);
    }
  }
}
