import { Request, Response } from "express";

export function userValidation(
  request: Request,
  response: Response,
  next: any
) {
  const { user_id } = request.headers;
  const;
  return next();
}
