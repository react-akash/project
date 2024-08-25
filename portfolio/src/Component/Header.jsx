import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
		<div className='Header bg-black text-white  w-100 '>
			<ul className=' d-flex justify-content-center align-items-center h-100 w-100 gap-5 list-unstyled'>
				<li>
					<Link
						to='/'
						className=' text-decoration-none text-white'>
						Home
					</Link>
				</li>
				<li>
					<Link
						to='/about'
						className=' text-decoration-none text-white'>
						About
					</Link>
				</li>
				<li>
					<Link
						to='/Projects'
						className=' text-decoration-none text-white'>
						Projects
					</Link>
				</li>
				<li>
					<Link
						to='/contact'
						className=' text-decoration-none text-white'>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Header