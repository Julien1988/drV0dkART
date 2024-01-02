'use client'

import Image from 'next/image'
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

function Skull() {

    return (
        <ParallaxProvider>

            <div className={'relative flex justify-center'}>
                <Image className={'absolute'}
                       src='/skull/skull_top.png'
                       width={300}
                       height={300}
                       alt="Picture of the author"/>
                <Parallax translateY={[0, 100]}
                          easing="easeInQuad"
                >
                    <Image src='/skull/skull_bot.png'
                           width={300}
                           height={300}
                           alt="Picture of the author"/>

                </Parallax>
            </div>
        </ParallaxProvider>

    );
}

export default function Welcome() {
    return (
        <div className={'bg-amber-600 h-[200vh] w-screen'}>
            <div className={'pt-24'}>
                <h2 className={'rubik-doodle-triangles text-pink-800 text-4xl text-center'}>Welcome to the weird</h2>
            </div>
            <Skull/>
        </div>
    )
}