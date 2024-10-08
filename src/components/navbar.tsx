import { auth } from '@/auth'
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
import Logo from './logo';
import MenuBtn from './menu-btn';

const Navbar = async () => {
    const session = await auth();
    return (
        <nav className=' h-20 shadow-md'>
            <div className='max-w-screen-xl mx-auto h-full flex  justify-between items-center px-4'>
                    <Logo />
                {session?.user ? (
                    <MenuBtn/>
                )
                    : (
                        <div className="flex gap-x-5">
                            <Link href={'/login'}>
                                <Button>Log in</Button>
                            </Link>
                            <Link href={'/register'}>
                                <Button>Register</Button>
                            </Link>
                        </div>
                    )}
            </div>
        </nav>
    )
}

export default Navbar