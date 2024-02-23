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

        console.log(text);
        gsap.to(text.chars, {
            color: "white",
            stagger: 0.1,
            scrollTrigger: {
                trigger: para.current,
                start: "top 80%",
                end: "bottom 80%",
                scrub: true,
            },
        });
    });

    return (
        <p
            ref={para}
            className="my-40  lg:w-[max(48%,700px)] text-center text-[max(5vw,4rem)] font-semibold leading-[max(6rem,7vw)] text-[#575757]"
        >
            Membership built for ambitious founders, marketing, product &
            business leaders
        </p>
    );
}
