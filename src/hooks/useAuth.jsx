import { React, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider.jsx'

export const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;

