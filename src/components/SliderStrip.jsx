import { useState } from "react";
import React from "react";
import Marquee from "react-fast-marquee";
import person1 from "/src/assets/images/persons/person1.png";
import person2 from "/src/assets/images/persons/person2.png";
import person3 from "/src/assets/images/persons/person3.png";
import person4 from "/src/assets/images/persons/person4.png";

const tempData = [
    {
        // imageUrl: "/src/assets/images/persons/person1.png",
        imageUrl: person1,
        id: 0,
        name: "Siddhant",
        job: "Co-Founder, FabHotels",
        achievement:
            "Helping developers convert design to code. In the $1M in $5 AMM journey",
    },
    {
        imageUrl: person2,
        id: 1,
        name: "Siddhant",
        job: "Co-Founder, FabHotels",
        achievement:
            "Helping developers convert design to code. In the $1M in $5 AMM journey",
    },
    {
        imageUrl: person3,
        id: 2,
        name: "Siddhant",
        job: "Co-Founder, FabHotels",
        achievement:
            "Helping developers convert design to code. In the $1M in $5 AMM journey",
    },
    {
        imageUrl: person4,
        name: "Siddhant",
        id: 3,
        job: "Co-Founder, FabHotels",
        achievement:
            "Helping developers convert design to code. In the $1M in $5 AMM journey",
    },
    {
        imageUrl: "/src/assets/images/persons/person5.png",
        id: 4,
        name: "Siddhant",
        job: "Co-Founder, FabHotels",
        achievement:
            "Helping developers convert design to code. In the $1M in $5 AMM journey",
    },
];

export default function SliderStrip({ flag }) {
    const media768 = window.innerWidth < 768 ? "false" : "true";

    console.log(media768);
    return (
            
            <Marquee
                className="-mt-4"
                speed={flag ? 10 : 15}
                direction={flag ? "right" : "left"}
                pauseOnClick={true}
                gradient={window.innerWidth > 768}
                gradientColor="black"
            >
                {tempData.map((person) => {
                    return (
                        <div
                            key={person.id}
                            className={`cards mx-2 w-[220px] overflow-hidden rounded-xl bg-[#101010] font-[Arial] md:flex md:h-56  md:w-[420px] ${flag ? "mt-16" : ""}`}
                        >
                            <img
                                className="w-auto object-cover md:w-[38%]"
                                src={person.imageUrl}
                                alt="Person"
                            />
                            <div className="grid items-center p-5">
                                <div>
                                    <h1 className="text-2xl">{person.name}</h1>
                                    <h1>{person.job}</h1>
                                </div>
                                <p className="mt-2 text-gray-400 md:mt-0">
                                    {person.achievement}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </Marquee>
    );
}
