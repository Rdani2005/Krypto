import React from 'react'
import { footer_info } from '../../data'

const Footer = () => {
    return (
        <footer className='flex flex-col md:flex-row justify-center md:justify-between mt-24'>
            <div className="font-semibold text-center text-[18px] mb-5">
                <h1>KRYPTO</h1>
            </div>
            {
                footer_info.map((info, i) => (
                    <div className="flex relative flex-col mb-14 text-center" key={i}>
                        <h1 className='font-semibold text-[14px] mb-5'>{info.title}</h1>
                        {
                            info.links.map((link, i) => (
                                <a href="#" className='font-normal text-[14px] mb-2'>{link}</a>
                            ))
                        }
                    </div>
                ))
            }
            <div className="flex flex-col relative text-center mb-20">
                <h1 className='font-semibold text-[14px]'>Join Our Newsletter</h1>
                <input placeholder='Email' type="text" className='w-full bg-[#13124F]  rounded-full mt-5 outline-none p-2' />
                <button className='absolute right-0 top-11 px-5 py-2 bg-main-color rounded-full font-sans font-normal tracking-[10%]'>SUBMIT</button>
            </div>
        </footer>
    )
}

export default Footer