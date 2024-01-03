'use client'
import {Parallax, ParallaxProvider} from "react-scroll-parallax";


/*startScroll={2000}
                endScroll={2500}*/

// @ts-ignore
function Item({item}) {

    if (item.id % 2 !== 0) {
        return (
            <li className={'py-4'}>
                <Parallax
                    translateX={['-400%', '0%']}
                    speed={-5}
                    startScroll={1000}
                    endScroll={2500}
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
                translateX={['400%', '0%']}
                speed={-5}
                startScroll={2000}
                endScroll={2500}
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
            <div className={'h-1/2 w-screen bg-[#2f2d2d]'}>
                <ul className={'flex flex-col justify-center items-center h-full text-white -translate-y-48'}>

                    {

                        listServices.map(item => (<Item item={item}/>))
                    }

                </ul>
            </div>
        </ParallaxProvider>

    );
}