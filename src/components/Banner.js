import airbnb from '../img/clients/airbnb.svg'
import apple from '../img/clients/Apple.svg'
import coty from '../img/clients/coty.svg'
import Microsoft from '../img/clients/Microsoft.svg'
import tencent from '../img/clients/tencent.svg'

export function Banner() {

    return(

<>
<section className="bg-gray-100 dark:bg-gray-900 ">
<div className="antialiased hidden lg:inline py-16 dark:bg-gray-900">
    <div className="container mx-auto pt-12 pb-12 px-6 space-y-8 text-gray-500 md:px-12 lg:px-32 dark:bg-gray-900">

        <div className="mb-8">
            <h6 className="text-lg² text-pink-500 font-bold text-center">Trusted by +5 giants</h6>
        </div>

        <div className="overflow-x-auto scrollbar-transparent lg:overflow-hidden ">
            <div className="-mx-6 px-6 flex items-center space-x-6 lg:justify-between md:space-x-12  "> 

                <img src={airbnb}
                loading="lazy" 
                className="grayscale transition hover:grayscale-0 cursor-pointer " alt="logo" width="150px" height="150px"/>

                <img src={coty}
                loading="lazy" 
                className="grayscale transition hover:grayscale-0 cursor-pointer " alt="logo"width="150px" height="150px"/>

                <img src={apple}
                loading="lazy" 
                className="grayscale transition hover:grayscale-0 cursor-pointer" alt="logo"width="80px" height="80px"/>

                <img src={Microsoft}
                loading="lazy" 
                className="grayscale transition hover:grayscale-0 cursor-pointer " alt="logo"width="150px" height="150px"/>

                <img src={tencent} 
                loading="lazy" 
                className="grayscale transition hover:grayscale-0 cursor-pointer " alt="logo"width="150px" height="150px"/>
                
                
            </div>
        </div>

    </div>
</div>
</section>
        
</>
    )
}