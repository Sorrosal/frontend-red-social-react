import React, { useState } from 'react'
import useForm from '../../hooks/useForm';
import { Global } from '../../helpers/Global';
import { useAuth } from '../../hooks/useAuth';

export default function Login() {

    const { form, changed } = useForm({});
    const [saved, setSaved] = useState("not_sended");
    const { setAuth } = useAuth();

    const loginUser = async (e) => {
        e.preventDefault();

        let userToLogin = form;
        console.log(userToLogin);
        const request = await fetch(Global.url + "user/login", {
            method: "POST",
            body: JSON.stringify(userToLogin),
            headers: {
                "Content-Type": "application/JSON"
            }
        });
        const data = await request.json();

        console.log(data);

        if (data.status == "success") {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            setSaved("login");

            // Set datos en el auth
            setAuth(data.user);
            // Redireccion
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        } else {
            setSaved("error");
        }
    }

    return (
        <>
            <header className='content__header content__header--public'>
                <h1 className='content__title'>Login</h1>
            </header>

            <div className='content__posts'>
                {saved == 'login' ?
                    <strong className='alert alert-success'>Usuario identificado correctamente</strong> : ''}

                {saved == 'errpr' ?
                    <strong className='alert alert-dange'>No se ha identificado el usuario</strong> : ''}
                <form className='form-login' onSubmit={loginUser}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' onChange={changed} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>Contraseña</label>
                        <input type='password' name='password' onChange={changed} />
                    </div>

                    <input type='submit' value="Identificate" className='btn btn-success' />
                </form>
            </div>
        </>
    )
}
