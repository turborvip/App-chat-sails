import axios from "./axios";
import{SignUpPayload} from '../interface/user/signup'
import { FindFriendPayload } from "../interface/friend/friend";

// user api
export const register = async (data:SignUpPayload) => {
    try {
      const res = await axios.post("/register", data);
      return res;
    } catch (error) {
      console.log(error)
    }
};

// friend api
export const findFriend = async (data:FindFriendPayload) => {
  try {
    const res = await axios.post("/friends/find", data);
    return res;
  } catch (error) {
    console.log(error)
  }
};