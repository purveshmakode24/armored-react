import axios from "axios";
import { API_AUTH_URL } from "../../../config";
import storage from "../../../utils/storage";
import { LoginDTO, RegisterDTO, User } from "../../../utils/types";

// const API_ROOT_URL = "https://localhost:8080/api/auth/";

const register = (payload: RegisterDTO) => {
    return axios.post(API_AUTH_URL + "register", payload);
}

const login = (payload: LoginDTO) => {
    let config = {
        headers: {
            xyz: "1234"
        }
    }
    return axios.get("../login_response.json", config).then((response: any) => {
        if (response.data) {
            storage.setItem("_current_user", JSON.stringify(response.data));
        }
        return response.data;
    });
}

const logout = () => {
    storage.clearItem("_current_user");
}

const getCurrentUser = () => {
    const _user = storage.getItem("_current_user");
    return _user;
}

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser
};

export default AuthService;