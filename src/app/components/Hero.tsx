import Image from "next/image";

import logo from '../../../public/images/sofy-logo.png';

export default function Hero() {
    return (
        <header className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2" />
            <div className="mx-auto">
                <div className="relative sm:overflow-hidden h-screen mt--mobile">
                    <div className="relative px-4 pt-16 sm:pb-6 sm:pt-24 lg:pt-32 lg:px-8 flex justify-center w-4/5 m-auto">
                        <Image id='logo' width={800} src={logo} alt="Sofy Piñatas" className='h-1/4' />
                    </div>
                    <div className='lg:hidden'>
                        <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-5xl  font-semibold tracking-wide text-orange-600">
                            <span className="block text-white legend--text-shadow">La vida es mejor con una piñata.</span>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}