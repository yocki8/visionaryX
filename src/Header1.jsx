import headerLogo from "./assets/images/header-logo.svg";
import headerCompaniesLogo from "./assets/images/header-companies-logo.png";
import headerBackground from "./assets/images/header-background.webp";
import SliderStrip from "./components/SliderStrip";
import "animate.css";
import MemberButton from "./components/MemberButton";

export default function Header1() {
    return (
        <div
            className=" grid w-full place-items-center gap-y-10 bg-cover"
            style={{ backgroundImage: `Url(${headerBackground})` }}
        >
            <div className="grid place-items-center ">
                <img
                    src={headerLogo}
                    alt="header-logo"
                    className="m-8 h-[140px]"
                />
                <p className=" max-w-[500px] text-center font-[Gilroy] text-[20px]">
                    Structured learning, curated community & orbit changing
                    outcomes – in one membership.
                </p>
            </div>

            <div
                className="h-[1.2px] w-[300px] rounded-[100%] bg-white"
                style={{
                    background: "linear-gradient(to right,black,white,black",
                }}
            ></div>

            <div className="overflow-hidden rounded-[10px] border border-solid border-white p-[2px]">
                <MemberButton />
            </div>

            <div className="grid place-items-center">
                <p className="text-xl">
                    Join Leaders at marquee Internet companies
                </p>
                <img src={headerCompaniesLogo} className="h-56" />
            </div>

            <SliderStrip flag={false} />
            <SliderStrip flag={true} />
        </div>
    );
}
