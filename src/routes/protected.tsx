
import React from 'react';
import { Navigate } from "react-router-dom";
import { AdminRoutes } from '../features/admin';
import { UserRoutes } from '../features/user';
import { getAuthHomeRoute, ROLES } from "../utils/commons";

// const Dashboard = React.lazy(() => import("../features/admin/Dashboard"));
// const Home = React.lazy(() => import("../features/user/Home"));

export const ProtectedRoutes = (role: string) => {
    const allProtectedRoutes = [
        {
            path: "/",
            element: <Navigate to={getAuthHomeRoute(role)} replace />,
            allowedRoles: [ROLES.ADMIN, ROLES.USER],
        },
        {
            path: "/user/*",
            element: <UserRoutes />,
            allowedRoles: [ROLES.USER],
        },
        {
            path: "/admin/*",
            element: <AdminRoutes />,
            allowedRoles: [ROLES.ADMIN],
        }
    ];

    const protectedRoutes = allProtectedRoutes.filter((route: any) =>
        route.allowedRoles.includes(role)
    );

    return protectedRoutes;
}