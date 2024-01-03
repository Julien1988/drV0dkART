'use client'

import {Parallax, ParallaxProvider} from "react-scroll-parallax";


// @ts-ignore
function ListItem({text}) {
    return (
        <li>
            <p>{text}</p>
        </li>
    );
}

export default function Contact() {
    const listContact = ['email : julienbroens@gmail.com', 'x : @V0dka', 'insta : drV0dk.ART']

    return (
        <ParallaxProvider>
            <div className={'bg-[#2f2d2d] h-[150vh] w-screen relative'}>
                <div className={'z-[99] relative flex flex-col justify-center translate-y-96'}>
                    <h2 className={'megrim text-pink-800 text-8xl text-center pb-8'}>Contact</h2>

                    <ul className={' bg-[#2f2d2d] text-white lacquer text-xl mx-4 p-8'}>
                        {
                            listContact.map((item) =>
                                <ListItem text={item}/>
                            )
                        }

                    </ul>
                </div>
                <Parallax translateX={[0, -200]}>
                    <div className={'h-[150vh] w-[2000em]  flex overflow-hidden'}>
                        <div className={'bg-white w-3 h-full block'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full '}></div>
                        <div className={'bg-white w-3 h-full  block'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full block'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full '}></div>
                        <div className={'bg-white w-3 h-full  block'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full block'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full '}></div>
                        <div className={'bg-white w-3 h-full  block'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full block'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full '}></div>
                        <div className={'bg-white w-3 h-full  block'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full block'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full '}></div>
                        <div className={'bg-white w-3 h-full  block'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full block'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full '}></div>
                        <div className={'bg-white w-3 h-full  block'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                        <div className={'bg-white w-3 h-full'}></div>
                        <div className={'bg-[#2f2d2d] w-3 h-full'}></div>
                    </div>
                </Parallax>
            </div>
        </ParallaxProvider>

    )
}