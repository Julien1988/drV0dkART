'use client'

import {ParallaxProvider, useParallax} from "react-scroll-parallax";

const Component = () => {
    const parallax = useParallax<HTMLDivElement>({
        scale: [0, 1]
    });

    return (
        <div ref={parallax.ref} className={''}>
            <h1><span
                className={'rubik'}>DrV0dk</span><span
                className={'permanent'}>.</span><span className={'lacquer'}>ART</span>
            </h1>
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