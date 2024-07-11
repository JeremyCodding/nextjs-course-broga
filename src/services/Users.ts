import UserDB from "@/libs/database/Users";

const HOME_LATEST_COUNT = 4;

const UserService = {
  signUp: async (data: any) => {
    UserDB.create(data);
  },
};

export default UserService;
