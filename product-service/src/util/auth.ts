import * as jwt from "jsonwebtoken";

const APP_SECRET = "our_app_secret";

export const AuthUser = async (token?: string) => {
  try {
    if (!token) return false;
    const payload = await jwt.verify(token.split(" ")[1], APP_SECRET);
    return payload as {
      user_id: number;
      email: string;
      user_type: "BUYER" | "SELLER";
    };
  } catch (error) {
    return false;
  }
};