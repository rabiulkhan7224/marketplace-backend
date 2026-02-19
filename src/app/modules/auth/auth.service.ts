import z from "zod";
import { registerSchema } from "./schemas";
import { prisma } from "../../lib/prisma";
import bcrypt from 'bcrypt';


export const register = async (data: z.infer<typeof registerSchema>) => {
  const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
  if (existingUser) {
    throw new Error('Email is already registered');
  }

  const hashedPassword = await bcrypt.hash(data.password, 12);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role,
    },
  });

  return { id: user.id, name: user.name, email: user.email, role: user.role };
};