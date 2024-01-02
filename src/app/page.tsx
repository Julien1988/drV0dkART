import Title from "@/component/title";

export default function Home() {
    return (
        <main className={'bg-pink-800 overflow-hidden'}>
            <div className={'h-screen text-8xl flex justify-center items-center'}>
                <div className={'animate-wiggle'}>
                    <div
                        className={'transition ease-in-out delay-300 duration-700 hover:scale-75 hover:rotate-3'}>
                        <Title/>
                    </div>
                </div>


            </div>

            <div className={'bg-gray-800 h-screen'}></div>
        </main>
    )
}
