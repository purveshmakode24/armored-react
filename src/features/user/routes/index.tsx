import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import PageNotFound from "@/components/PageNotFound";
import Authorization from "@/lib/authorization";
import { ROLES } from "@/config";
import AuthorizationError from "@/components/AuthorizationError";

export const UserRoutes = () => {
    return (
        <Authorization allowedRoles={[ROLES.USER]}
            forbiddenFallback={<AuthorizationError />}>
            <Routes>
                <Route path="home" element={< Home />} />
                <Route path="*" element={<PageNotFound />} />
            </ Routes>
        </Authorization>
    );
};