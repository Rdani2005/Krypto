import React from 'react'

const Ready = () => {
    return (
        <section>
            <div className='rounded-2xl w-full md:w-4/5 bg-gradient-to-r from-secundary-color to-light-color mx-auto flex justify-center p-10 flex-col text-center'>
                <h3 className='font-sans font-semibold text-trihead tracking-[10%] text-[#000] mb-5'>
                    ARE YOU READY?
                </h3>
                <h2 className='font-sans text-subhead font-bold leading-[100%] mb-14'>
                    Be A Part Of The Next Big Thing
                </h2>
                <a href="#" className='font-sans font-semibold text-trihead tracking-[10%] transition-all hover:bg-[#0A0A0A] mx-auto w-[258px] h-[73px] bg-[#1E1E1E] flex  justify-center  items-center rounded-full'>
                    GET STARTED
                </a>
            </div>
        </section>
    )
}

export default Ready