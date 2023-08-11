import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import PublicLayout from '../components/layout/public/PublicLayout';
import Login from '../components/user/Login';
import Register from '../components/user/Register';
import PrivateLayout from '../components/layout/private/PrivateLayout';
import Feed from '../components/publication/feed';

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="registro" element={<Register />} />
                </Route>

                <Route path="/social" element={<PrivateLayout />}>
                    <Route index element={<Feed />} />
                    <Route path="feed" element={<Feed />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
