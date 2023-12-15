import { NavLink } from 'react-router-dom';
import AuthService from '@/features/auth/service';
import { useAppContext } from '@/AppContext';
import { useAdminContext } from '@/features/admin/context';

const Header = () => {
    const { currentUser } = useAppContext();
    const { count } = useAdminContext();

    const handleLogout = () => {
        AuthService.logout();
        window.location.pathname = "/";
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Armored React {count}</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {currentUser ?
                        (
                            <>
                                {currentUser?.menu.map((menu: any, index: any) => (
                                    <li key={index} className="nav-item m-2">
                                        <NavLink
                                            to={menu.url}
                                            style={({ isActive }) =>
                                                isActive ? { color: "black" } : undefined
                                            }>
                                            {menu.label}
                                        </NavLink>
                                    </li>
                                ))}
                                <li className="nav-item m-2">
                                    {currentUser?.username}
                                </li>
                                <li className="nav-item m-2">
                                    <NavLink to='/' onClick={handleLogout}>
                                        Logout
                                    </NavLink>
                                </li>

                            </>
                        ) : (
                            <>
                                <li className="nav-item m-2">
                                    <NavLink
                                        to='/auth/login'
                                        style={({ isActive }) =>
                                            isActive ? { color: "black" } : undefined
                                        }>
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item m-2">
                                    <NavLink
                                        to='/auth/register'
                                        style={({ isActive }) =>
                                            isActive ? { color: "black" } : undefined
                                        }>
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Header;
