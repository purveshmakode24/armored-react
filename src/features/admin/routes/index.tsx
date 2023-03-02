import { Route, Routes } from "react-router-dom";
import PageNotFound from "../../../components/PageNotFound";
import Dashboard from "../components/Dashboard";

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="dashboard" element={< Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
        </ Routes>
    );
};