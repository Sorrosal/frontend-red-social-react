import React from 'react'
import Nav from './Nav'

export default function Header() {
    return (
        <header className="layout__navbar">

            <div className="navbar__header">
                <a href="#" className="navbar__title">BLOCKGRAM</a>
            </div>
            <Nav />
        </header>
    )
}
