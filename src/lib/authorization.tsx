import { useAppContext } from "@/AppContext"
import AuthService from "@/features/auth/service";
import { Navigate } from "react-router-dom";

type Props = {
    allowedRoles: Array<any>,
    forbiddenFallback?: React.ReactNode,
    children: React.ReactNode
}

const Authorization = ({
    allowedRoles,
    forbiddenFallback = null,
    children }: Props) => {
    const { currentUser } = useAppContext();
    const currentRole = currentUser?.role;

    if (allowedRoles?.includes(currentRole)) {
        return <>{children}</>;
    }

    if (forbiddenFallback) {
        return <>{forbiddenFallback}</>;
    }
    return (
        <Navigate to={AuthService.getAuthHomeRoute(currentRole)} replace />
    );
}

export default Authorization;