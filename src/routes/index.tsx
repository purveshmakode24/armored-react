import { useContext } from "react";
import { useRoutes } from "react-router-dom";
import { AppContext } from "../AppContext";
import PageNotFound from "../components/PageNotFound";
import { ProtectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
    const { currentUser } = useContext(AppContext)

    const commonRoutes = [{ path: '*', element: <PageNotFound /> }];

    const routes = currentUser ? ProtectedRoutes(currentUser.role) : publicRoutes;

    const element = useRoutes([...routes, ...commonRoutes]);

    return element;
}