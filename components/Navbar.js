
"use client"
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/img/logo.png'
import {AiOutlineClose} from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import {signOut, useSession} from 'next-auth/react'

const Navbar = () => {
    const [userData, setUserData] = useState({})
    const {data: session, status} = useSession();

    const pathname = usePathname();

    const [showDropdown, setShowDropdown] = useState(false)

    async function fetchUser() {
        try {
            const res = await fetch(`/api/user/${session?.user?._id}`);

            const resData = await res.json();

            setUserData(resData)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUser();
    },[session?.user?._id])

    const handleShowDropdown = () => setShowDropdown(prev => true)
    const handleHideDropdown = () => setShowDropdown(prev => false)
  return (
    <div className='container py-2 mt-4 h-16 flex items-center justify-between'>
        <Link href="/">
            <h2>
                Nazzain<span className='special-word'>Web.</span>
            </h2>
        </Link>

        <ul className='flex items-center gap-3'>
            <li>
                <Link href="/blog" className={ pathname === '/blog' ? "text-primaryColor font-bold" : ""}>Blog</Link>
            </li>

            {
                session?.user ? (
                    <>
                        <li>
                            <Link href="/create-blog"  className={ pathname === '/create-blog' ? "text-primaryColor font-bold" : ""}>Create</Link>
                        </li>
                       
                            <div className='relative'>
                                <Image 
                                    onClick={handleShowDropdown}
                                    src={userData?.avatar?.url ? userData?.avatar?.url :logo }
                                    alt='avatar'
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                    className='w-10 h-10 rounded-full cursor-pointer'
                                />

                                {showDropdown && (
                                    <div className='absolute top-0 right-0 bg-primaryColorLight '>
                                        <AiOutlineClose onClick={handleHideDropdown} className='w-full cursor-pointer' />
                                        <button onClick={() => {signOut(); handleHideDropdown();}}>Logout</button>
                                        <Link onClick={handleHideDropdown} href={`/user/${session?.user?._id.toString()}`}>Profile</Link>
                                    </div>
                                )}
                            </div>
                       
                    </>
                ) : (
                    <>
                        <li>
                            <Link href="/login"  className={ pathname === '/login' ? "text-primaryColor font-bold" : ""}>Log In</Link>
                        </li>
                        <li>
                            <Link href="/signup"  className={ pathname === '/signup' ? "text-primaryColor font-bold" : ""}>Sign Up</Link>
                        </li>
                       
                       
                        
                        
                    </>
                )
            }


        </ul>
    </div>
  )
}

export default Navbar
