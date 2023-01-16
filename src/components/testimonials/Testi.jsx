import React from 'react'
import { testimonials } from '../../data'

const Testi = () => {
    return (
        <section className='text-center mt-28'>
            <h3 className='font-sans font-semibold text-trihead tracking-[10%] text-light-color'>TESTIMONIALS</h3>
            <h2 className='font-sans text-subhead font-bold leading-[100%]'>Read What Others Have to Say</h2>
            <div className="flex justify-around my-52">
                {
                    testimonials.map((testimonial, i) => (
                        <div className="relative bg-[#13124F] flex flex-col items-center w-[345px] rounded-xl p-12" key={i}>
                            <img src={testimonial.image} alt="profile" className='rounded-full absolute top-[-50%]' />
                            <h2 className='font-sans font-semibold text-trihead tracking-[10%]'>{testimonial.name}</h2>
                            <p>{testimonial.says}</p>
                        </div>
                    ))
                }
            </div>
        
        </section>
    )
}

export default Testi