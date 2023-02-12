import { Request, Response } from "express";
import { httpResponses } from "../enums/http_responses";
import User from "../models/user";

const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();

  res.status(200).json({
    users,
  });
};

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  user
    ? res.status(200).json({ user })
    : res.status(404).json({ message: httpResponses.status404 });
};

const postUser = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const email = await User.findOne({ where: { email: body?.email } });
    if (email) return res.status(400).json({ message: httpResponses.status400 });

    const user = User.build(body);

    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: httpResponses.status500 });
  }

  res.status(200).json({
    message: "postUser",
    body,
  });
};

const putUser = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if(!user) return res.status(400).json({ message: httpResponses.status400 });
    
    const email = await User.findOne({ where: { email: body?.email } });
    if (email) return res.status(400).json({ message: httpResponses.status400 });

    await user.update(body);
    
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: httpResponses.status500 });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if(!user) return res.status(400).json({ message: httpResponses.status400 });
    
    //await user.destroy();
    
    await user.update({state: false});  

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: httpResponses.status500 });
  }
};

export { getUsers, getUser, postUser, putUser, deleteUser };
