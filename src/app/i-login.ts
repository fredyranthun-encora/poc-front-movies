import { User } from "./user";

export interface ILogin {
  success: boolean;
  user: User | null;
  token: string | null;
}
