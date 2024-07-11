import { createHash } from "@/helpers/hash";
import UserDB from "@/libs/database/Users";

const HOME_LATEST_COUNT = 4;

const UserService = {
  signUp: async (data: any) => {
    const passwordHash = await createHash(data.password);

    return UserDB.create({ ...data, password: passwordHash });
  },
};

export default UserService;
