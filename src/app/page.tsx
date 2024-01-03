import Title from "@/components/title";
import Transition from "@/components/transition";
import Welcome from "@/components/welcome";
import Services from "@/components/services";
import Contact from "@/components/contact";

export default function Home() {
    return (
        <main className={'bg-pink-800 overflow-hidden'}>
            <Title/>
            <Transition color='bg-[#2f2d2d]'/>
            <Welcome/>
            <Services/>
            <Contact/>
        </main>
    )
}
