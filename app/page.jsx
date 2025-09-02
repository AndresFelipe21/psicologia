import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";

export default function HomePage () {
    return (
        <main className="font-sans">
            <Navbar />
            <Hero/>
            <Services/>
        </main>
    )    
}