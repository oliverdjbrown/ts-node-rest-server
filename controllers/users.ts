import { Request, Response } from "express";

const getUsers = (req: Request, res: Response) => {
  res.status(200).json({
    message: "getUsers",
  });
};

const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({
    message: "getUser",
    id,
  });
};

const postUser = (req: Request, res: Response) => {
  const { body } = req;  
  res.status(200).json({
    message: "postUser",
    body,
  });
};

const putUser = (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  res.status(200).json({
    message: "putUser",
    body,
    id
  });
};

const deleteUser = (req: Request, res: Response) => {  
  const { id } = req.params;
  res.status(200).json({
    message: "deleteUser",    
    id
  });
};

export { getUsers, getUser, postUser, putUser, deleteUser };
