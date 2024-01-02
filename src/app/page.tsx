import Title from "@/components/title";
import Transition from "@/components/transition";
import Welcome from "@/components/welcome";

export default function Home() {
    return (
        <main className={'bg-pink-800 overflow-hidden'}>
            <Title/>


            <Transition color='bg-amber-600'/>
            <Welcome/>
            <div className={'h-screen w-screen bg-blue-400'}>TEST</div>
        </main>
    )
}
