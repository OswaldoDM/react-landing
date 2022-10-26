import ec2 from '../img/e2.jpg'
import a1 from '../img/a1.webp'
import a2 from '../img/a2.webp'
import a3 from '../img/a3.webp'
import noB1 from '../img/noB1.png'
import noB2 from '../img/noB2.png'
import noB3 from '../img/noB3.png'
import noB4 from '../img/noB4.png'







export function Watches() {

    return(

<>

<div className="antialiased pt-32 bg-gray-100 dark:bg-gray-900" id="watches">
			<h2 className="text-3xl font-black tracking-tight text-center sm:text-5xl dark:text-gray-200">Our Watches</h2>
			<p className="max-w-3xl mx-auto mt-4  text-center text-md sm:text-xl text-gray-700 dark:text-gray-200">Quando cetero his ne, eum admodum sapientem ut.</p>
</div>

<section className="antialiased text-gray-600 pb-20 bg-gray-100 dark:bg-gray-900">

  <div className="container px-32 py-24 mx-auto">

    <div className="flex flex-wrap -m-4">

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">

        <a className="block relative h-48 rounded overflow-hidden pt-4">
          <img alt="ecommerce" className="object-contain object-center w-full h-[78%] block" src={noB1}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 dark:text-gray-300 text-xs tracking-widest title-font mb-1 text-center">Classic</h3>
          <h2 className="text-gray-900 title-font dark:text-gray-200 text-lg font-medium text-center">Classic Black</h2>
          <p className="mt-1 text-center dark:text-gray-300">$16.00</p>
        </div>

      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-[75%] block" src={noB2}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 dark:text-gray-300 text-xs tracking-widest title-font mb-1 text-center">Sport</h3>
          <h2 className="text-gray-900 title-font dark:text-gray-200 text-lg font-medium text-center">Sport Beige</h2>
          <p className="mt-1 text-center dark:text-gray-300">$21.15</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-[75%] block" src={noB3}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 dark:text-gray-300 text-xs tracking-widest title-font mb-1 text-center">Sport</h3>
          <h2 className="text-gray-900 title-font dark:text-gray-200 text-lg font-medium text-center">Sport White</h2>
          <p className="mt-1 text-center dark:text-gray-300">$12.00</p>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden pb-6">
          <img alt="ecommerce" className="object-contain object-center w-full h-[85%] block" src={noB4}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 dark:text-gray-300 text-xs tracking-widest title-font mb-1 text-center">Elegant</h3>
          <h2 className="text-gray-900 title-font dark:text-gray-200 text-lg font-medium text-center">Elegant Woman</h2>
          <p className="mt-1 text-center dark:text-gray-300">$18.40</p>
        </div>
      </div>

    </div>    

  </div>

    <div className="flex justify-center items-center">
      <a 
      href="#" 
      className="uppercase py-2 px-3 font-semibold rounded-lg bg-pink-500 border-2 border-transparent text-white text-xs mr-4 hover:bg-pink-600 transition duration-300">
          Shop Now
      </a>
    </div>
</section>
        
</>
    )
}