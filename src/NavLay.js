import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function NavLay() {
    return (
        <>
            <div>
                <nav>
                    <Link to="Demo23">Product</Link>
                    <Link to="about">About Us</Link>
                </nav>
            </div>
            <Outlet />
        </>
    )
}
