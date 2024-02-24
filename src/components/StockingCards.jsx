import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

function Card({ children, forWho, headLine }) {
    return (
        <li className="border-1 w-[650px] rounded-lg border border-[#2F2F2F] bg-[#101010] px-7 py-10 ">
            <h1 className="text-3xl">{forWho}</h1>
            <h2 className="mt-2 text-xl text-[#77777c]">{headLine}</h2>
            <p className="mt-5 font-thin leading-7">{children}</p>
        </li>
    );
}

export default function StockingCards() {
    return (
        <ul className="grid place-items-center gap-20">
            <Card
                forWho={"For founders"}
                headLine={"Scale your orgs & products"}
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
                forWho={"For founders"}
                headLine={"Scale your orgs & products"}
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
                forWho={"For founders"}
                headLine={"Scale your orgs & products"}
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
                forWho={"For founders"}
                headLine={"Scale your orgs & products"}
            >
                    Design your revenue roadmap,{" "}
                    <span className="cGray">go from Pre-PMF to Series A.</span>{" "}
                    Soundboard with founders{" "}
                    <span className="cGray">
                        from Pre-PMF to Series B with ~$20M in revenue             </span>{" "}
                    Build your growth team{" "}
                    <span className="cGray">
                        - get access to a pool 1,600+ top growth talent.
                    </span>
            </Card>
        </ul>
    );
}
