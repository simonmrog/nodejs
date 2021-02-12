import { Request, Response } from "express";

class IndexController {

  public root(req: Request, res: Response) {
    res.status(200).json({
      message: "Welcome to the API!"
    });
  }
}

export default new IndexController();
