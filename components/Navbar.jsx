import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center bg-purple-400 h-13 px-5'>
                <Link href='/' className='font-bold text-lg'>BITLINKS</Link>
                <ul className='flex justify-center items-center gap-5  text-black font-bold'>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/about'><li>About</li></Link>
                    <Link href='/shorten'><li>Shorten</li></Link>
                    <Link href='/contact'><li>Contact Us</li></Link>
                    <li className='flex gap-3'>
                        <Link href='/shorten'><button className='bg-black text-white font-bold  rounded-lg py-2 px-2 '>Try now</button></Link>
                        <Link href='/github'><button className='bg-black text-white font-bold  rounded-lg py-2 px-2'>GiThub</button></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
