import { registerSchema } from "./schemas";
import * as authService from './auth.service';
import { Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";

export const register = asyncHandler(async (req: Request, res: Response) => {
    console.log(req.body)
  const data = registerSchema.parse(req.body);
  const user = await authService.register(data);
  res.status(201).json({ status: 'success', data: { user } });
});