"use client"
import { UserButton, SignInButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggler } from './ui/ThemeToggler';
import { Button } from './ui/button';

const Header = () => {
    const {isSignedIn} = useUser();
  return (
    <header className="flex items-center justify-between">
        <Link href="/" className='flex items-center space-x-2'>
            <div className='bg-[#018cfeec] w-fit'> 
                <Image 
                    src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
                    alt="cloud cube logo"
                    className='invert'
                    height={50}
                    width={50}
                />
            </div>
            <h1 className='font-bold text-2xl'>CloudCube</h1>
        </Link>
        <div className='px-5 flex space-x-2 items-center'>
            <ThemeToggler />
            {
                isSignedIn ? (
                    <UserButton afterSignOutUrl="/" />
                ) : (
                    <SignInButton afterSignInUrl="/dashboard" mode="modal">
                        <Button className="font-semibold text-lg">Sign In</Button>
                    </SignInButton>
                )
            }
        </div>
    </header>
  )
}

export default Header