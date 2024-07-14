import { createHash, verifyHash } from "@/helpers/hash";
import UserDB from "@/libs/database/Users";

const HOME_LATEST_COUNT = 4;

const UserService = {
  signUp: async (data: any) => {
    const passwordHash = await createHash(data.password);

    return UserDB.create({ ...data, password: passwordHash });
  },
  signIn: async (data: any) => {
    const record = await UserDB.findByEmail(data.email);

    if (!record) return null;

    const isValidPassword = verifyHash(data.password, record.password);

    if (!isValidPassword) return null;

    return { ...record, password: null };
  },
};

export default UserService;
