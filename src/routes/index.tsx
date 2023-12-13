import { useRoutes } from "react-router-dom";
import { useAppContext } from "../AppContext";
import PageNotFound from "../components/PageNotFound";
import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";

export const AppRoutes = () => {
    const { currentUser } = useAppContext();

    const commonRoutes = [{ path: '*', element: <PageNotFound /> }];

    //const routes = currentUser ? ProtectedRoutes(currentUser.role) : publicRoutes;
    const routes = currentUser ? protectedRoutes : publicRoutes;

    const element = useRoutes([...routes, ...commonRoutes]);

    return element;
}