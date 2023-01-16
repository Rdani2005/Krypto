import React from 'react'

const Nav = () => {
    return (
        <nav className='flex justify-between py-9'>
            <h1 className='font-sans font-bold text-trihead'>
                KRYPTO
            </h1>
            <div className="md:flex font-sans text-trihead hidden">
                <a href="#" className='mr-5'>Home</a>
                <a href="#" className='mr-5'>Pricing</a>
                <a href="#" className='mr-5'>Contact</a>
                <a href="#">Buy NFTs</a>
            </div>
        </nav>
    )
}

export default Nav