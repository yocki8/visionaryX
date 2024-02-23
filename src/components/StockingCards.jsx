import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

function Card1() {
    return (
        <li className="border-1 w-[650px] rounded-xl border border-[#2F2F2F] bg-[#101010] px-7 py-10">
            <h1 className="text-4xl">For founders</h1>
            <h2 className="mt-5 text-2xl text-[#77777c]">
                Scale your orgs & products.
            </h2>
            <p>
                Design your revenue roadmap,{" "}
                <span className="text-[#77777c]">
                    go from Pre-PMF to Series A
                </span>
                . Soundboard with founders from Pre-PMF to Series B with ~$20M
                in revenue. Build your growth team - get access to a pool 1,600+
                top growth talent.
            </p>
        </li>
    );
}
function Card2({ forWho, headline, para }) {
    return <li></li>;
}
function Card3({ forWho, headline, para }) {
    return <li></li>;
}
function Card4({ forWho, headline, para }) {
    return <li></li>;
}

export default function StockingCards() {
    return (
        <ul className="grid place-items-center">
            <Card1 />
        </ul>
    );
}
