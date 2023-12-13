declare const window: any;

export const APP_VERSION = window.REACT_APP_VERSION as string;
export const API_AUTH_URL = window.REACT_APP_API_AUTH as string;
export const JWT_SECRET = '123456' as string;
export const ROLES = {
    ADMIN: "admin",
    USER: "user"
};
export const HOME_ROUTES = {
    ADMIN: "/admin/dashboard",
    USER: "/user/home",
}