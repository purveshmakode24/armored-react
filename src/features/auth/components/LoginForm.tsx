import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../AppContext';
import { User } from '../../../utils/types';
import AuthService from '../auth.service';
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
// import { getAuthHomeRoute } from '../../../utils/commons';


const LoginForm = () => {
    const { setCurrentUser } = useContext(AppContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((values) => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

        AuthService.login(formData).then((user: User) => {
            setCurrentUser(user);
            navigate('/');
            // let redirectHomeRoute = getAuthHomeRoute(user?.role);
            // navigate(redirectHomeRoute);
            // window.location.reload();
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="p-4">Login</h2>
            <div className="p-fluid col-md-6 m-auto">
                <InputText
                    className="mt-2"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <InputText
                    className="mt-2"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <Button className="mt-2" type="submit" label="Login" />
            </div>
        </form>
    )
}

export default LoginForm
