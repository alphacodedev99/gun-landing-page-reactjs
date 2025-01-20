// icons
import { FaRegSun, FaMoon } from 'react-icons/fa';

function NavbarComponent({ darkMode, setDarkMode }) {
	return (
		<nav className='flex items-center justify-between p-5 z-20 relative'>
			<h1 className='text-[#111827] text-[24px] font-bold dark:text-white'>Gun!</h1>

			<ul className='flex items-center space-x-5'>
				<li className=' text-[#111827] py-1 border-b border-[#111827] font-medium cursor-pointer text-[20px] dark:text-white dark:border-white'>
					Tentang
				</li>
				<li className=' text-[#111827] py-1  font-medium cursor-pointer text-[20px] dark:text-white'>Portfolio</li>
			</ul>

			<div>
				{darkMode ? (
					<FaRegSun size='30' className='cursor-pointer' onClick={() => setDarkMode(!darkMode)} color='white'/>
				) : (
					<FaMoon size='30' className='cursor-pointer' onClick={() => setDarkMode(!darkMode)}  />
				)}
			</div>
		</nav>
	);
}

export default NavbarComponent;
