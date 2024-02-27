import gsap from "gsap";
import number1 from "/src/assets/images/numbers/1.svg";
import companiesLogo1 from "/src/assets/images/section1-companies-logo-1.png";
import cycle3 from "/src/assets/images/section1-grid-3cycle.webp";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Headline = () => {
    return (
        <div className="mx-auto w-fit  text-center">
            <img className="m-auto h-[8rem] " src={number1} alt="numb" />
            <h1
                style={{
                    WebkitTextStroke: "2px white",
                    fontFamily: "tiempeos",
                }}
                className=" text-[84px] leading-[1.2em] text-[rgba(255,255,255,0)] md:text-[6rem]"
            >
                Learning
            </h1>
            <p className="  font-medium leading-[3rem]">
                A → Z of revenue growth.
            </p>
        </div>
    );
};

const SmallCard = () => {
    return (
        <div className="p-10">
            <h2 className="w-fit rounded-full border px-3 py-[0.37rem] text-sm">
                Live Experience
            </h2>
            <div className="my-7">
                <h1 className="text-2xl font-bold">Customer Acquistion</h1>
                <p className="mt-4 text-xl">
                    Learn how top internet companies acquire first 100 → 1M →
                    10M users.
                </p>
            </div>
            <div>
                <h1 className="cGray text-lg">Case studies include</h1>
                <img className="mt-3" src={companiesLogo1}></img>
            </div>
        </div>
    );
};

const BigCard1 = () => {
    return (
        <div className="col-span-2 justify-between p-8 md:flex">
            <div className="grid items-center md:w-[55%] ">
                <h2 className="w-fit rounded-full border px-3 py-[0.37rem] text-sm">
                    Live Experience
                </h2>
                <div className="mt-7">
                    <h1 className="text-2xl font-bold">Customer Acquistion</h1>
                    <p className="mt-4 text-[1.2rem] leading-7">
                        Learn how to build and evolve your growth model at every
                        product stage, setup your experimentation engine &
                        design your growth org to solve the right input levers.
                    </p>
                </div>
            </div>

            <div className="mt-4 grid place-items-center md:mt-0">
                <img className="h-60" src={cycle3}></img>
            </div>
        </div>
    );
};

const Section1Grid = () => {
    const ele = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(ele.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ele.current,
                start: "-50px 80%",
            },
        });
    });
    return (
        <div ref={ele} className="mx-auto my-8 w-[95%] max-w-[800px]">
            <h1 className="cGray m-auto my-12 w-[60%] text-center font-extralight">
                Get access to learning programs across product building,
                distribution, strategy & leadership.
            </h1>

            <div className="grid-cols-2 grid-rows-4 gap-6 *:my-4 *:h-fit *:rounded-xl *:border *:bg-[#181818] md:grid md:*:my-0 md:*:border-none">
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <BigCard1 />
            </div>
        </div>
    );
};

export default function Section1() {
    return (
        <section className="w-full text-xl ">
            <Headline />
            <Section1Grid />
        </section>
    );
}
