'use client'
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

// @ts-ignore
function Item({item}) {

    if (item.id % 2 !== 0) {
        return (
            <li className={'py-4'}>
                <Parallax
                    translateX={['-100', '50']}
                    speed={-5}
                >
                    <p className={'lacquer text-3xl'}>
                        {item.text}
                    </p>
                </Parallax>
            </li>
        );
    }
    return (
        <li className={'py-4'}>
            <Parallax
                translateX={['100', '-50']}
                speed={-5}
            >
                <p className={'lacquer text-3xl'}>
                    {item.text}
                </p>
            </Parallax>
        </li>
    );
}

export default function Services() {
    const listServices = [{id: 1, text: 'Drawing'}, {id: 2, text: 'Illustration'}, {
        id: 3,
        text: 'Web dev & design'
    }, {id: 4, text: 'and more...'}]
    let listKey = 0;
    return (
        <ParallaxProvider>
            <div className={'h-full w-full bg-[#2f2d2d] z-50 absolute overflow-hidden '}>
                <ul className={'flex flex-col justify-center items-center h-full text-white md:pb-16 '}>
                    {
                        listServices.map(item => (<Item item={item} key={item.id}/>))
                    }
                </ul>
            </div>
        </ParallaxProvider>

    );
}