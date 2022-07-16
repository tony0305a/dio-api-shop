import e, { Request, Response } from "express";
import { UserService } from "../services/UserService";
const userService = new UserService();
class UserController {
  async create(req: Request, res: Response) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const user = await userService.create({
      name: name,
      email: email,
      password: password,
    });
    return res.status(201).json(user);
  }
  async check(req: Request, res: Response) {
    const email = req.body.email;
    const verify = await userService.check(email);
    console.log(verify);
    if (verify.length !== 0) {
      return res.status(200).json(verify);
    } else {
      return res.status(200).json([]);
    }
  }
  async login(req: Request, res: Response){
    const email = req.body.email
    const password = req.body.password

    const login = await userService.login(email,password)
    if(login.length !==0){
        return res.status(200).json(login)
    } else {
        return res.status(200).json([])
    }

  }
}
export { UserController };
