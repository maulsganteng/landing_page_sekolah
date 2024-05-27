import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

const Header = () => {
    return (
        <header className='bg-dark text-white py-3'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1>SMK TI BAZMA</h1>
                    <nav>
                        <a href='#home' className='text-white mx-2 '>Home</a>
                        <a href='#profile' className='text-white mx-2'>Profile Sekolah</a>
                        <a href='#contact' className='text-white mx-2'>Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;