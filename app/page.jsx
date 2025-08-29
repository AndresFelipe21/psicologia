import Hero from "./components/hero"
import Navbar from "./components/navbar"

export default function HomePage (){
    return (
        <main className="font-sans">
            <Navbar />
            <Hero />
        </main>
    )
}