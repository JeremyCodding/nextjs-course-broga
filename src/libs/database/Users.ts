import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const UserDB = {
  create: async (data: Pick<User, "name" | "email" | "password">) => {
    return prisma.user.create({ data });
  },
  findByEmail: async (email: string) => {
    return prisma.user.findUnique({ where: { email } });
  },
};

export default UserDB;
