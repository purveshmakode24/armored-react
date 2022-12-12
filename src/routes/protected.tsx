
import React from 'react';
import { Navigate } from "react-router-dom";
import { getAuthHomeRoute, ROLES } from "../utils/commons";

const Dashboard = React.lazy(() => import("../features/pages/admin/Dashboard"));
const Home = React.lazy(() => import("../features/pages/user/Home"));

export const ProtectedRoutes = (role: string) => {
    const allProtectedRoutes = [
        {
            path: "/",
            element: <Navigate to={getAuthHomeRoute(role)} replace />,
            allowedRoles: [ROLES.ADMIN, ROLES.USER],
        },
        {
            path: "/home",
            element: <Home />,
            allowedRoles: [ROLES.USER],
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
            allowedRoles: [ROLES.ADMIN],
        }
    ];

    const protectedRoutes = allProtectedRoutes.filter((route: any) =>
        route.allowedRoles.includes(role)
    );

    return protectedRoutes;
}