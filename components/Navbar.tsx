"use client"

import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from 'react'
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'

const Navbar = () => {
	const isUserLogin = true
	
	const [providers,setProviders] = useState(null)
	const [toggledropdown,setToggleDropdown] = useState(false)

	useEffect(() => {
		const setProviders = async () => {
			const response = await getProviders()
			setProviders(response)
		}

		setProviders()
	},[])
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href='/' className="flex gap-2 flex-center">
            <Image 
                src='/assets/images/logo.svg' 
                alt='logo svg' 
                width={30} 
                height={30} 
                className="object-contain" 
            />
			<p className="logo_text"> Promptify </p>
        </Link>
		
		{/* Desktop navigation */}
		<div className="sm:flex hidden">
			{
				isUserLogin ? (
					<div className="flex gap-3 md:gap-5">
						<Link href='/create-prompt' className="black_btn">
							Create Post
						</Link>
						<button type="button" onClick={signOut} className="outline_btn">
							Sign out 
						</button>
						<Link href='/profile'>
							<Image 
								src='/assets/images/logo.svg'
								width={37}
								height={37}
								alt="profile image"
								className="rounded-full"
							/>
						</Link>
					</div>) : (
					<> 
						{
							providers && Object.values(providers).map((provider) => (
								<button
									type="button"
									key={provider.name}
									className=""
									onClick={() => signIn(provider.id)}
								>
									Sign In								
								</button>
							))
						}
					</>
				)
			}
		</div>

		{/* Mobile navigation */}
		<div className="sm:hidden flex relaive">
			{
				isUserLogin ? (
					<div className="flex"> 
						<Image 
							src='/assets/images/logo.svg'
							width={37}
							height={37}
							alt="profile image"
							className="rounded-full"
							onClick={() => setToggleDropdown((prev) => !prev)}
						/>

							{
								toggledropdown && <div className="dropdown">
									<Link 
										href='/profile'
										className="dropdown_link"
										onClick={() => setToggleDropdown(false)}
									>
										My profile
									</Link>
									<Link 
										href='/create-prompt'
										className="dropdown_link"
										onClick={() => setToggleDropdown(false)}
									>
										Create Prompt
									</Link>
									<button 
										type='button'
										onClick={() => {
											setToggleDropdown(false)
											signOut()
										}}
										className="mt-5 w-full black_btn"
									>
										Sign Out
									</button>
								</div>
							}
					</div> ) : (
						<> 
						{
							providers && Object.values(providers).map((provider) => (
								<button
									type="button"
									key={provider.name}
									className=""
									onClick={() => signIn(provider.id)}
								>
									Sign In								
								</button>
							))
						}
					</>
				)
			}
		</div>
    </nav>
  )
}

export default Navbar