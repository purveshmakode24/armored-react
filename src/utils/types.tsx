export type User = {
    username: string;
    role: string;
    menu: Array<any>;
} | null;

export type LoginDTO = {
    email: string;
    password: string;
};

export type RegisterDTO = {
    username: string;
    email: string;
    password: string;
};