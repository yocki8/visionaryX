import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

function Card({ children, forWho, headLine, id }) {
    const card = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(card.current, {
            scale: 0.94 + id * 0.015,
            stagger: 0.001,
            scrollTrigger: {
                trigger: card.current,
                start: "top top",
                end: "bottom top",
                animate: "ease-in",
                scrub: true,
            },
        });
    });

    return (
        <li
            ref={card}
            className="border-1 sticky w-[min(90%,650px)] rounded-lg border border-[#2F2F2F] bg-[#101010] px-7 py-10 "
            style={{
                top: `calc(70px + ${id * 5.5}rem)`,
                boxShadow: "0 -10px 100px black",
            }}
        >
            <h1 className="text-3xl">{forWho}</h1>
            <h2 className="cGray mt-2 text-xl">{headLine}</h2>
            <p className="mt-5 font-thin leading-7">{children}</p>
        </li>
    );
}

export default function StockingCards() {
    return (
        <>
            <ul className="grid place-items-center *:mb-14">
                <Card
                    forWho={"For founders"}
                    headLine={"Scale your orgs & products"}
                    id={0}
                >
                    Design your revenue roadmap,{" "}
                    <span className="cGray">go from Pre-PMF to Series A.</span>{" "}
                    Soundboard with founders{" "}
                    <span className="cGray">
                        from Pre-PMF to Series B with ~$20M in revenue.
                    </span>{" "}
                    Build your growth team{" "}
                    <span className="cGray">
                        - get access to a pool 1,600+ top growth talent.
                    </span>
                </Card>
                <Card
                    forWho={"For leaders"}
                    headLine={"Scale your orgs & products"}
                    id={1}
                >
                    Design your revenue roadmap,{" "}
                    <span className="cGray">go from Pre-PMF to Series A.</span>{" "}
                    Soundboard with founders{" "}
                    <span className="cGray">
                        from Pre-PMF to Series B with ~$20M in revenue.
                    </span>{" "}
                    Build your growth team{" "}
                    <span className="cGray">
                        - get access to a pool 1,600+ top growth talent.
                    </span>
                </Card>
                <Card
                    forWho={"For mid-managers"}
                    headLine={"Scale your orgs & products"}
                    id={2}
                >
                    Design your revenue roadmap,{" "}
                    <span className="cGray">go from Pre-PMF to Series A.</span>{" "}
                    Soundboard with founders{" "}
                    <span className="cGray">
                        from Pre-PMF to Series B with ~$20M in revenue.
                    </span>{" "}
                    Build your growth team{" "}
                    <span className="cGray">
                        - get access to a pool 1,600+ top growth talent.
                    </span>
                </Card>
                <Card
                    forWho={"For operator"}
                    headLine={"Scale your orgs & products"}
                    id={3}
                >
                    Design your revenue roadmap,{" "}
                    <span className="cGray">go from Pre-PMF to Series A.</span>{" "}
                    Soundboard with founders{" "}
                    <span className="cGray">
                        from Pre-PMF to Series B with ~$20M in revenue{" "}
                    </span>{" "}
                    Build your growth team{" "}
                    <span className="cGray">
                        - get access to a pool 1,600+ top growth talent.
                    </span>
                </Card>
            </ul>
        </>
    );
}
