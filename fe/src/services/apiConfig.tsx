import axios from "./axios";
import{SignUpPayload} from '../interface/user/signup'

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
