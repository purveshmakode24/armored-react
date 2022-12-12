import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
// import { AppContext } from '../../../AppContext';
// import { User } from '../../../utils/types';
// import AuthService from '../auth.service';

type Props = {}

const RegisterForm = (props: Props) => {
    // const { setCurrentUser } = useContext(AppContext);
    // const navigate = useNavigate();

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

        // register service
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="p-4">Register</h2>
            <div className="p-fluid col-md-6 m-auto">
                <InputText
                    className="mt-2"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    required
                />
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
                <Button className="mt-2" type="submit" label="Submit" />
            </div>
        </form>
    )
}

export default RegisterForm;