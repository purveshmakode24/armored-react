export const ROLES = {
    ADMIN: "admin",
    USER: "user"
};

export const add = (x: number, y: number) => {
    return x + y;
}

export const getAuthHomeRoute = (role: string | undefined) => {
    switch (role) {
        case ROLES.ADMIN: {
            return "/admin/dashboard";
        }
        case ROLES.USER: {
            return "/user/home";
        }
        default:
            return "/";
    }
}