import relojHero from './images/Reloj2.png'
import userNoB from '../img/user-nob.png'


export function Hero() {  

return(

<>
<div className="antialiased bg-gray-100 dark:bg-gray-900 flex relative z-20 items-center overflow-hidden">

<div className="container mx-auto px-6 flex relative py-16 ">

    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 xl:pl-10 xl:pt-5">            
        
            <h1 className="uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none mb-5 dark:text-gray-200">
                Be on
                <span className="text-5xl sm:text-7xl">
                    Time
                </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 ">
                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
            </p>

        <div className="flex mt-8">
            <a href="#" 
            className="uppercase text-xs  font-semibold py-2 px-2 rounded-lg bg-pink-500 border-2 border-transparent text-white  mr-4 hover:bg-pink-600 transition duration-">
                Get started
            </a>
            <a href="#" 
            className="uppercase text-xs  font-semibold py-2 px-2 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500  hover:bg-pink-600 transition duration-300 hover:text-white ">
                Read more
            </a>
        </div>

    </div>

    {/* HERO IMAGE */}
    <div className=" sm:block w-1/2 sm:w-1/3 lg:w-3/5 relative">
        <img src={relojHero} className="max-w-xs md:max-w-sm m-auto"/>
    </div>
    

    <div className="absolute bottom-8 md:bottom-12 w-full ">

        <div className="container m-auto px-6 flex items-end justify-between  lg:pl-10 lg:pr-20 xl:pl-14 xl:pr-28 ">

            <div className="hidden space-x-4 md:flex md:items-center">

                <img className="w-14 h-14 rounded-full object-cover" src={userNoB} alt="robot"/>

                <div className="text-gray-600 dark:text-gray-300">
                    <span className="text-sm">Question ?</span>
                    <p className="font-semibold text-gray-700 dark:text-gray-200 cursor-pointer">Talk to our assistant</p>
                </div>

            </div>

            <div>
                <a href="#" 
                className="text-2xl hidden sm:inline md:hidden lg:inline text-gray-700 hover:text-pink-600 dark:text-gray-200 dark:hover:text-pink-600 transition duration-300 ">
                    <i className="uil uil-facebook-f"></i>
                </a>

                <a href="#" 
                className="text-2xl hidden sm:inline md:hidden lg:inline text-gray-700 hover:text-pink-600 dark:text-gray-200 dark:hover:text-pink-600 transition duration-300">
                    <i className="uil uil-instagram"></i>
                </a>
                
            </div>                

        </div>
    </div>

    


</div>
</div>
        
        </>
    )
}