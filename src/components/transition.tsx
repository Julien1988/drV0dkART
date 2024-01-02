'use client'

import {Parallax, ParallaxProvider} from "react-scroll-parallax";


// @ts-ignore
export default function Transition({color}) {

    return (
        <ParallaxProvider>
            <Parallax translateX={[200, 0]} className={`${color} w-full h-screen`}>
            </Parallax>
        </ParallaxProvider>

    );
}