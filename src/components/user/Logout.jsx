import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

export default function Logout() {
    const { setAuth, setCounters } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        debugger;
        // Vaciar localStorage
        localStorage.clear();
        // Setear estados globales a vacío
        setAuth({});
        setCounters({});
        // Navigate (redireccion) al login
        navigate("/login");
    });
    return (
        <div>
            <h1>Cerrando sesión ...</h1>
        </div>
    )
}
