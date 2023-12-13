import { lazyImport } from "@/utils/lazyImport";
import { Navigate } from "react-router-dom"

const { AuthRoutes } = lazyImport(() => import("@/features/auth"), "AuthRoutes");

export const publicRoutes = [
    {
        path: "/",
        element: <Navigate to="/auth/login" replace />
    },
    { path: "/auth/*", element: <AuthRoutes /> }
];