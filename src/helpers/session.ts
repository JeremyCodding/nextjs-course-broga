import { cookies } from "next/headers";
import { decrypt, encrypt } from "@/helpers/jwt";

const SESSION_NAME = "session";
const generateExpires = () => new Date(Date.now() + 60 * 60 * 1000);

export const createSession = (payload: string) => {
  const expires = generateExpires();
  cookies().set(SESSION_NAME, payload, { expires, httpOnly: true });
};

export const getSession = async () => {
  const session = cookies().get(SESSION_NAME)?.value;

  if (!session) return null;

  return await decrypt(session);
};

export const updateSession = async () => {
  const session = await getSession();

  if (!session) return null;
  const expires = generateExpires();
  const jwt = await encrypt({ ...session, expires });

  const updatedSession = {
    name: SESSION_NAME,
    value: jwt,
    expires,
    httpOnly: true,
  };

  return updatedSession;
};

export const logout = async () => {
  cookies().set(SESSION_NAME, "", { expires: new Date(0) });
};
