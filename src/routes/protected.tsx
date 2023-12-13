
import React, { Suspense } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import AuthService from '@/features/auth/service';
import { useAppContext } from '@/AppContext';
import MainLayout from '@/components/MainLayout';
import { lazyImport } from '@/utils/lazyImport';

const { UserRoutes } = lazyImport(() => import("@/features/user"), "UserRoutes");
const { AdminRoutes } = lazyImport(() => import("@/features/admin"), "AdminRoutes");

// ------------------Latest Version Approach ------------------------
const Layout = () => {
    return (
        <MainLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </MainLayout>
    )
}

const Home = () => {
    const { currentUser } = useAppContext();
    return (
        <Navigate to={AuthService.getAuthHomeRoute(currentUser?.role)} replace />
    )
}

export const protectedRoutes = [
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/user/*",
                element: <UserRoutes />
            },
            {
                path: "/admin/*",
                element: <AdminRoutes />
            }
        ]
    }
]

// --------------- version01 - (Approach) --------------------------
// export const ProtectedRoutes = (role: string) => {
//     const allProtectedRoutes = [
//         {
//             path: "/",
//             element: <Navigate to={getAuthHomeRoute(role)} replace />,
//             allowedRoles: [ROLES.ADMIN, ROLES.USER],
//         },
//         {
//             path: "/user/*",
//             element: <UserRoutes />,
//             allowedRoles: [ROLES.USER],
//         },
//         {
//             path: "/admin/*",
//             element: <AdminRoutes />,
//             allowedRoles: [ROLES.ADMIN],
//         }
//     ];

//     const protectedRoutes = allProtectedRoutes.filter((route: any) =>
//         route.allowedRoles.includes(role)
//     );

//     return protectedRoutes;
// }