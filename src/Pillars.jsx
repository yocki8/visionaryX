import pillar1 from "/src/assets/images/pillars/pillar1.webp";
import pillar2 from "/src/assets/images/pillars/pillar2.webp";
import pillar3 from "/src/assets/images/pillars/pillar3.webp";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Pillar = ({ pillarNo }) => {
    const image = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    let pillarSrc;
    switch (pillarNo) {
        case 1:
            pillarSrc = pillar1;
            break;
        case 2:
            pillarSrc = pillar2;
            break;
        case 3:
            pillarSrc = pillar3;
    }

    useGSAP(() => {
        gsap.from(image.current, {
            y: 200,
            opacity: 0,
            duration: 0.2 + pillarNo * 0.4,
            animation: "ease-out",
            scrollTrigger: {
                trigger: image.current,
                start: `top 75%`,
                // markers: true,
                // toggleActions: 'restart none none none',
            },
        });
    });

    return (
        <img
            ref={image}
            src={pillarSrc}
            className={pillarNo !== 3 ? "absolute" : ""}
        ></img>
    );
};

export default function Pillars() {
    return (
        <div className="m-24 h-[550px] w-full md:h-[750px] ">
            <div className="m-auto w-fit">
                <p className="text-base uppercase tracking-[0.5rem]">
                    Enabled by
                </p>
                <h1 className="text-[4rem]">3 Pillars</h1>
            </div>
            <div className="m-auto w-[min(90%,600px)]  -translate-y-20 md:-translate-y-60 ">
                <Pillar pillarNo={1} />
                <Pillar pillarNo={2} />
                <Pillar pillarNo={3} />
            </div>
        </div>
    );
}
