import reloj1 from '../img/reloj1.jpg'

export function AboutUs() {

    return(

<>
<section className="pt-1 sm:pt-20 bg-gray-100 dark:bg-gray-900 antialiased" >
	<div className="container max-w-xl py-12 mx-auto space-y-24 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-black tracking-tight text-center sm:text-5xl dark:text-gray-200" id="about">About Us</h2>
			<p className="max-w-3xl mx-auto mt-4 text-md sm:text-xl text-center text-gray-700 dark:text-gray-200">Quando cetero his ne, eum admodum sapientem ut.</p>
		</div>
		

		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center lg:px-5 xl:px-0">

				<div className="lg:col-start-2">

					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-200 ml-6">The best smart watch manufacturer</h3>

					<p className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 ml-6">
                        Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.
                    </p>

					<div className="mt-12 space-y-12">

						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md text-pink-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-200">Excellent connectivity</h4>
								<p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
							</div>
						</div>

						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md text-pink-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-200">Connect with your smartphone</h4>
								<p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p>
							</div>
						</div>

						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md text-pink-600">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>

							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-200">Verbal commands whenever you want</h4>
								<p className="mt-2 text-sm sm:text-basetext-gray-700 dark:text-gray-300">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
							</div>                            

						</div>

                        <div className= "flex ml-14">

                            <a href="/" 
                            aria-label="" 
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-pink-600 dark:text-pink-400">
                                More about us
                                <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                                </svg>
                            </a>
                            
                        </div>
					</div>
				</div>

				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src={reloj1} alt="watch" className="mx-auto rounded-lg shadow-lg" />
				</div>

			</div>
		</div>
	</div>
</section>
 
        
        
</>
    )
}