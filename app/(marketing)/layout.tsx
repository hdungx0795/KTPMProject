import { Footer } from "./footer";
import { Headers } from "./header";

type Props = {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return(
        <div className="min-h-screen flex flex-col">
            <Headers />
            <main className="flex-1 flex flex-col items-center justify-center">
                { children }
            </main>
            <Footer />
        </div>
    );
};

export default MarketingLayout;