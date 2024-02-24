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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Marquee
            className="-mt-4"
            speed={flag ? 10 : 15}
            direction={flag ? "right" : "left"}
            pauseOnClick={true}
            gradient={true}
            gradientColor="black"
        >
            {tempData.map((person) => {
                return (
                    <div
                        key={person.id}
                        className="cards mx-2 flex h-56 w-[430px] overflow-hidden rounded-xl bg-[#101010]  font-[Arial]  "
                    >
                        <img
                            className="w-[38%] object-cover"
                            src={person.imageUrl}
                            alt="Person"
                        />
                        <div className="grid items-center p-5">
                            <div>
                                <h1 className="text-2xl">{person.name}</h1>
                                <h1>{person.job}</h1>
                            </div>
                            <p className="text-gray-400">
                                {person.achievement}
                            </p>
                        </div>
                    </div>
                );
            })}
        </Marquee>
    );
}
