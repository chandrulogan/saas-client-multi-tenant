import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Signin = () => {
    const { organisationName } = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/${organisationName}/home`)

        // Other API call and logic
    };

    return (
        <div className='auth_container'>
            <div className='auth_container__inner'>
                <header>Odonine staff login</header>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button className='todo_royalBlue_button' type="submit">Sign in</button>
                    <Link className='navigate' to={`/${organisationName}/admin/signin`}>Admin login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signin
