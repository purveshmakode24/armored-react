import { Route, Routes } from "react-router-dom";
import PageNotFound from "../../../components/PageNotFound";
import Dashboard from "./Dashboard";
import Authorization from "@/lib/authorization";
import AuthorizationError from "@/components/AuthorizationError";
import { ROLES } from "@/config";

export const AdminRoutes = () => {
    return (
        <Authorization allowedRoles={[ROLES.ADMIN]}
            forbiddenFallback={<AuthorizationError />}>
            <Routes>
                <Route path="dashboard" element={< Dashboard />} />
                <Route path="*" element={<PageNotFound />} />
            </ Routes>
        </Authorization>
    );
};