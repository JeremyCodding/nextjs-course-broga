import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const UserDB = {
  create: async (data: any) => {
    return prisma.user.create({ data });
  },
};

export default UserDB;
