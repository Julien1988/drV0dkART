'use client'

import {Parallax, ParallaxProvider} from "react-scroll-parallax";
import Image from 'next/image'

const Skull = () => {

    return (


        <div className="relative bg-amber-600 top">

            <Image
                className="w-screen z-10 absolute"
                src='/skull/skull_top.png'
                width={300}
                height={300}
                alt="Picture of the author"/>


            <Image
                className="w-screen z-10"
                src='/skull/skull_bot.png'
                width={300}
                height={300}
                alt="Picture of the author"/>


        </div>
    );
}

export default function Welcome() {
    return (
        <ParallaxProvider>
            {/*bg-[#302c2f]*/}
            <Parallax translateX={[200, -200]} className={'z-50 bg-amber-600 w-full'}>
                <div className={'h-screen w-screen'}>

                    <Parallax speed={-5} scale={[0, 1.5]}>
                        <h2 className={'rubik-doodle-triangles text-pink-800 text-2xl text-center pt-24 '}>Welcome
                            to
                            the
                            weird</h2>
                    </Parallax>
                </div>
            </Parallax>


        </ParallaxProvider>

    );
}