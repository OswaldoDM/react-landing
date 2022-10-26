import user1 from '../img/user1.webp'
import user3 from '../img/user3.webp'
import user2 from '../img/user2.png'

export function Reviews() {

    return(

<>

<div className="py-16 bg-gray-100 dark:bg-gray-900" id="reviews">

    <div className="container m-auto px-6 text-gray-600 md:px-12 lg:px-0 2xl:px-24">

        <h2 className="mb-12 text-center text-3xl text-gray-900 dark:text-gray-200 font-black md:text-5xl">Reviews</h2>

        <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">


            <div className="row-span-2 p-6 border border-gray-100 dark:border-gray-900  rounded-xl bg-gray-50 dark:bg-gray-900 text-center sm:p-8">
                <div className="h-full flex flex-col justify-center space-y-4">
                <img className="w-20 h-20 mx-auto rounded-full" src={user2} alt="user avatar" height="220" width="220" loading="lazy"/>
                <p className="text-gray-600 md:text-xl dark:text-gray-300"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                <div>
                    <h6 className="text-lg font-semibold leading-none text-gray-900">Dana Harris</h6>
                    <span className="text-xs text-gray-500 dark:text-gray-300">Product Designer</span>
                </div>
                </div>
            </div>


            <div className="p-6 border border-gray-100 dark:border-gray-900 rounded-xl bg-gray-50 dark:bg-gray-900 sm:flex sm:space-x-8 sm:p-8">
                <img className="w-20 h-20 mx-auto rounded-full" src={user1} alt="user avatar" height="220" width="220" loading="lazy"/>
                <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p className="text-gray-600 dark:text-gray-300"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                <div>
                    <h6 className="text-lg font-semibold leading-none text-gray-900">John Dickinson</h6>
                    <span className="text-xs text-gray-500 dark:text-gray-300">Graphic Designer</span>
                </div>
                </div>
            </div>


            <div className="p-6 border border-gray-100 dark:border-gray-900 rounded-xl bg-gray-50 dark:bg-gray-900 sm:flex sm:space-x-8 sm:p-8">
                <img className="w-20 h-20 mx-auto rounded-full" src={user3} alt="user avatar" height="220" width="220" loading="lazy"/>
                <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p className="text-gray-600 dark:text-gray-300"> <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                <div>
                    <h6 className="text-lg font-semibold leading-none text-gray-900">Charles Mustaine</h6>
                    <span className="text-xs text-gray-500 dark:text-gray-300">Programmer</span>
                </div>
                </div>
            </div>

        </div>

    </div>

</div>
                                
        
</>
    )
}