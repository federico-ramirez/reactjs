import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import logo from '../../assets/img/safe-on-sivar-logo.png'
import { ToastContainer, toast } from 'react-toastify';

import { useAdminContext } from '../../contexts/AdminContext';

const Login = () => {
    const { login, token } = useAdminContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (e, save) => {
        save(e.target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();
        const logged = await login(email, password);

        if (!logged) {
            toast('Error en inicio de sesión', { type: 'error' });
        }

        setEmail("");
        setPassword("");

    }

    if (token) {
        return <Navigate replace to="/redirect" />
    }

    return (
        <div className="wrapper bg-danger">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" >
                            <div className="card-body p-5 text-center">
                                <img src={logo} className="logo" alt="Safe On Sivar logo" />
                                <h1 className="mb-5 text-danger">Safe On Sivar</h1>
                                <form onSubmit={onSubmit}>
                                    <ToastContainer
                                        position="top-center"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                    />
                                    <div className="form-outline mb-4">
                                        <input
                                            id="email"
                                            className="form-control"
                                            placeholder='Correo electrónico'
                                            onChange={(e) => onChange(e, setEmail)}
                                            value={email}
                                            autoComplete='off' />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            placeholder='Contraseña'
                                            onChange={(e) => onChange(e, setPassword)}
                                            value={password} />
                                    </div>
                                    <button className="btn btn-danger btn-md btn-block" type="submit">Iniciar sesión</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login