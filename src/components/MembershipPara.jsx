import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function MembershipPara() {
    const para = useRef();
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const text = new SplitType(para.current, { types: "chars,words" });

        gsap.to(text.chars, {
            color: "white",
            stagger: 0.1,
            scrollTrigger: {
                trigger: para.current,
                start: "top 70%",
                end: "bottom 70%",
                scrub: true,
                // markers: true,
            },
        });
    });

    return (
        <p
            ref={para}
            className="my-40 w-[min(90%,900px)] text-center text-[max(5vw,3.5rem)] font-semibold leading-[max(6rem,7vw)] text-[#575757]"
        >
            Membership built for ambitious founders, marketing, product &
            business leaders
        </p>
    );
}
