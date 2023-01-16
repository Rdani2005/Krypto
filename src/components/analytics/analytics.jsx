import React from 'react'
import { features } from '../../data'

const Analytics = () => {
    return (
        <section className='flex flex-col mt-28'>
            {
                features.map((feature, i) => (
                    <div className='flex '>
                        {
                            i % 2 !== 0 ? (
                                <>
                                    <div className="flex flex-col">
                                        <h3 className='font-sans font-semibold text-trihead tracking-[10%] text-light-color'>{feature.heading}</h3>
                                        <h2 className='font-sans text-subhead font-bold leading-[100%]'>{feature.title}</h2>
                                        <p className='text-paragraph '>{feature.description}</p>
                                        <a className='font-sans font-semibold text-trihead tracking-[10%] mt-28 transition-all hover:bg-bg-color hover:border hover:border-light-color  mr-5 w-[258px] h-[73px] bg-main-color flex  justify-center  items-center rounded-full' href="">View Our Pricing</a>
                                    </div>
                                    <img src={feature.image} alt="Feature img" />
                                </>
                            ) : (
                                <>
                                    <img src={feature.image} alt="Feature img" />
                                    <div className="flex flex-col">
                                        <h3 className='font-sans font-semibold text-trihead tracking-[10%] text-light-color'>{feature.heading}</h3>
                                        <h2 className='font-sans text-subhead font-bold leading-[100%]'>{feature.title}</h2>
                                        <p className='text-paragraph '>{feature.description}</p>
                                        <a className='font-sans font-semibold text-trihead tracking-[10%] mt-28 transition-all hover:bg-bg-color hover:border hover:border-light-color  mr-5 w-[258px] h-[73px] bg-main-color flex  justify-center  items-center rounded-full' href="">View Our Pricing</a>
                                    </div>
                                </>
                            )
                        }
                    </div>
                ))
            }
        </section>
    )
}

export default Analytics