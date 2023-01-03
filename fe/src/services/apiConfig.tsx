import axios from "./axios";
import{SignUpPayload} from '../interface/user/signup'

export const register = async (data:SignUpPayload) => {
    try {
      const res = await axios.post("/register", data);
      return res;
    } catch (error) {
      console.log(error)
    }
};
