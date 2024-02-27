import { useRef } from "react";
import MemberButton from "./components/MemberButton";
import navbarLogo from "/src/assets/images/navbar-logo.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const NavbarButton = ({ name }) => {
    const underLine = useRef(null);
    const { contextSafe } = useGSAP();

    const onEnter = contextSafe(() => {
        gsap.to(underLine.current, {
            width: "100%",
        });
    });

    const onLeave = contextSafe(() => {
        gsap.to(underLine.current, {
            width: "0%",
        });
    });
    return (
        <li
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="transition duration-200 hover:text-white"
        >
            <button>{name}</button>
            <div
                ref={underLine}
                className="mt-1 h-[1px] w-0 bg-blue-500"
            ></div>
        </li>
    );
};

export default function Navbar() {
    const nav = useRef();
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(nav.current, {
            opacity: 0,
            stagger: 10,
            scrollTrigger: {
                trigger: nav.current,
                start: "900px center",
                end: "1100px center",
                scrub: true,
            },
        });
    });

    return (
        <nav
            ref={nav}
            className="fixed z-10 md:flex hidden w-full items-center justify-between px-14 py-3 backdrop-blur-lg "
        >
            <div>
                <img className="h-10" src={navbarLogo}></img>
            </div>
            <div>
                <ul className="cGray hidden gap-7 text-[0.8rem] md:flex ">
                    <NavbarButton name={"learning"} />
                    <NavbarButton name={"Community"} />
                    <NavbarButton name={"Outcomes"} />
                    <NavbarButton name={"ELEVATE"} />
                    <NavbarButton name={"For Teams"} />
                    <NavbarButton name={"Limited Experience"} />
                    <NavbarButton name={"Library"} />
                    <NavbarButton name={"CRAFTs"} />
                    <NavbarButton name={"Login"} />
                </ul>
            </div>
            <MemberButton />
        </nav>
    );
}
