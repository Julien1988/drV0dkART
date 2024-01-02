'use client'

import {ParallaxProvider, useParallax} from "react-scroll-parallax";

const Component = () => {
    const parallax = useParallax<HTMLDivElement>({
        scale: [0, 1]
    });

    return (
        <div className={'h-screen text-8xl flex justify-center items-center bg-pink-800'}>
            <div className={'animate-wiggle'}>
                <div
                    className={'transition ease-in-out delay-300 duration-700 hover:scale-75 hover:rotate-3'}>
                    <div ref={parallax.ref} className={''}>
                        <h1><span
                            className={'rubik'}>DrV0dk</span><span
                            className={'permanent'}>.</span><span className={'lacquer'}>ART</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default function Title() {
    return (

        <ParallaxProvider>
            <Component/>
        </ParallaxProvider>


    );
}