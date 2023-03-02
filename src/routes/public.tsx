import React from "react";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import { Navigate } from "react-router-dom"
import { AuthRoutes } from "../features/auth";

// const AuthRoutes = React.lazy(()=> import("../features/auth"));

export const publicRoutes = [
    {
        path: "/",
        element: <Navigate to="/auth/login" replace />
    },
    { path: "/auth/*", element: <AuthRoutes /> }
];