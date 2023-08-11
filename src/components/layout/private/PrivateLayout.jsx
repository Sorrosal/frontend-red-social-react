import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function PrivateLayout() {
    return (
        <>
            {/* LAYOUT */}
            <Header />

            {/* Contenido principal */}
            <section className='layout__content'>
                <Outlet />
            </section>

            {/* Barra lateral */}
            <Sidebar />
        </>
    )
}
