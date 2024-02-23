import { useState } from "react";
import Header from "./Header.jsx";
import Sections from "./Sections.jsx";
import Footer from "./Footer.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="h-full min-h-dvh overflow-hidden bg-[#3b444b] bg-black font-[Gilroy] text-white">
            <Header />
            <Sections />
            <Footer />
        </div>
    );
}

export default App;
