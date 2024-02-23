import MembershipPara from "./components/MembershipPara";
import StockingCards from "./components/StockingCards";

export default function Header2() {
    return (
        <div className="grid place-items-center">
            <MembershipPara />
            <StockingCards />
            <div className="h-[1000px]"></div>
        </div>
    );
}
