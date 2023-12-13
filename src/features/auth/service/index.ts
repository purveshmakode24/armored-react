import axios from "axios";
import { API_AUTH_URL, HOME_ROUTES, ROLES } from "../../../config";
import { LoginDTO, RegisterDTO } from "@/utils/types";
import storage from "@/utils/storage";

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
    return axios.get("../test_jsons/login_response.json", config).then((response: any) => {
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

export const getAuthHomeRoute = (role: string | undefined) => {
    switch (role) {
        case ROLES.ADMIN: {
            return HOME_ROUTES.ADMIN;
        }
        case ROLES.USER: {
            return HOME_ROUTES.USER;
        }
        default:
            return "/";
    }
}

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
    getAuthHomeRoute
};

export default AuthService;