import React, { useEffect } from 'react'
import useAuthContext from '../../hooks/useAuthContext';


export const Logout = () => {
    const { logout } = useAuthContext();
    useEffect(() => logout());
    return null;
};
