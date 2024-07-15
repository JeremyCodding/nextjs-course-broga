import { createHash, verifyHash } from "@/helpers/hash";
import UserDB from "@/libs/database/Users";
import { User } from "@prisma/client";

const HOME_LATEST_COUNT = 4;

const UserService = {
  signUp: async (data: Pick<User, "name" | "email" | "password">) => {
    const passwordHash = await createHash(data.password);
    if (!passwordHash) {
      throw new Error("Unable to create Hash");
    }

    return UserDB.create({ ...data, password: passwordHash });
  },
  signIn: async (data: Pick<User, "email" | "password">) => {
    const record = await UserDB.findByEmail(data.email);

    if (!record) return null;

    const isValidPassword = verifyHash(data.password, record.password);

    if (!isValidPassword) return null;

    return { ...record, password: null };
  },
};

export default UserService;
