import React from 'react'
import heroImage from '../../Assets/hero.png'
const Hero = () => {
    return (
        <section className='grid grid-cols-2 '>
            <div className="flex justify-center flex-col">
                <h1 className='text-header font-bold leading-[100%]'>
                    Discover and collect rare NFTs
                </h1>
                <p className="text-paragraph">the most secure marketplace for buying and selling unique crypto assets.</p>
                <div className="mt-5 flex">

                    <a href="#" className='font-sans font-semibold text-trihead tracking-[10%] transition-all hover:bg-bg-color hover:border hover:border-light-color  mr-5 w-[258px] h-[73px] bg-main-color flex  justify-center  items-center rounded-full'>BUY NFTS</a>
                    <a href="#" className='font-sans font-semibold text-trihead tracking-[10%] transition-all hover:bg-light-color w-[258px] h-[73px] border border-main-color flex  justify-center  items-center rounded-full'>SELL NFTS</a>
                </div>
            </div>
            <div className="flex">
                <img src={heroImage} alt="Hero" className='w-full' />
            </div>
        </section>
    )
}

export default Hero