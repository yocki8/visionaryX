import { useState } from "react";
import Header from "./Header.jsx";
import Sections from "./Sections.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className=" h-full bg-black font-[gilroy] text-white">
            <Navbar />
            <Header />
            <Sections />
            <Footer />
        </div>
    );
}

export default App;
