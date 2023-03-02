import { Route, Routes } from "react-router-dom";
import PageNotFound from "../../../components/PageNotFound";
import Home from "../components/Home";

export const UserRoutes = () => {
    return (
        <Routes>
            <Route path="home" element={< Home />} />
            <Route path="*" element={<PageNotFound />} />
        </ Routes>
    );
};