import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const UserDB = {
  create: async (data: any) => {
    prisma.user.create({ data });
  },
};

export default UserDB;
