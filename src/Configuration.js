import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Demo23 from './Demo23';
import About from './About';
import NavLay from './NavLay';
export default function Configuration() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavLay />}>
                    <Route path="/Demo23" element={<Demo23 />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
