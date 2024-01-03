'use client'

import Image from 'next/image'
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

function Skull() {

    return (
        <ParallaxProvider>

            <div className={'relative flex justify-center'}>
                <Image className={'absolute z-30'}
                       src='/skull/skull_top.png'
                       width={300}
                       height={300}
                       alt="Picture of the author"/>

                <Parallax translateY={[0, 100]}
                          speed={4}
                          easing="easeInQuad"
                >
                    <h2 className={'rubik-glitch text-center translate-y-24 text-white text-2xl'}>Think out of the
                        box</h2>
                    <Image className={'-translate-y-10 z-30'}
                           src='/skull/skull_bot.png'
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
        <div className={'bg-[#2f2d2d] h-screen w-screen pb-64'}>
            <div className={'pt-24 pb-12'}>
                <h2 className={'rubik-doodle-triangles text-pink-800 text-4xl text-center'}>Welcome to the weird</h2>
            </div>
            <Skull/>
        </div>
    )
}