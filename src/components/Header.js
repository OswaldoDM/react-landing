import { useEffect, useState } from 'react'

export function Header() {

	const [theme, setTheme] = useState('light')
	const [isActive, setIsActive] = useState(false);
	

	useEffect(() => {
	 
		theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')		
		 

	}, [theme])


	const handleThemeSwitch = () => {

		
		setTheme(theme === 'dark' ? 'light' : 'dark')
		
		isActive === false ? setIsActive(true) : setIsActive(false)

	}


    return(

        <>
<nav className="antialiased bg-gray-100 shadow shadow-gray-100 w-100 px-8 md:px-auto dark:bg-gray-900">

	<div className="container mx-auto md:h-16 h-28 md:px-4 flex items-center justify-between flex-wrap md:flex-nowrap ">
		
		<div className="text-pink-500 md:order-1">

			
			<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
				stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
					d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />					
			</svg>

		</div>

		<div className="text-gray-500 dark:text-gray-200 order-3 w-full md:w-auto md:order-2">
			<ul className="flex font-semibold text-sm justify-between">
                
				<li className="md:px-4 md:py-2 text-pink-500"><a href="#">Home</a></li>				
				<li className="md:px-4 md:py-2 hover:text-pink-400"><a href="#about">About</a></li>
                <li className="md:px-4 md:py-2 hover:text-pink-400"><a href="#watches">Watches</a></li>
				<li className="md:px-4 md:py-2 hover:text-pink-400"><a href="#reviews">Reviews</a></li>
			</ul>
		</div>

		

		<div className="order-2 md:order-3 flex items-center space-x-5">

			<button 
				className="w-12 h-4 xl:w-14 xl:h-5 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
				onClick={handleThemeSwitch}>

				<div					
					className={!isActive ? 
					"w-6 h-6 xl:w-8 xl:h-8 relative rounded-full transition duration-500 transform bg-gray-100 -translate-x-2 p-1 text-pink-500" 
					: "w-6 h-6 xl:w-8 xl:h-8 relative rounded-full transition duration-500 transform bg-gray-900 translate-x-full p-1 text-white"}>

					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path 
					strokeLinecap="round" 
					strokeLinejoin="round" 
					strokeWidth="2" 
					d={!isActive ?
					"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"} />
					</svg>
					
				</div>

			</button>

			<a 
			href="#contact" 
			className="px-2 py-2 text-xs lg:px-3 lg:text-sm bg-pink-500 hover:bg-pink-600 font-semibold transition duration-300 text-gray-50 rounded-xl flex items-center ">             
                Contact Us
            </a>
		</div>
        
	</div>
</nav>

        </>
    )
}


