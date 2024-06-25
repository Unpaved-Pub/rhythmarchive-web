import "./globals.css";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import RecoilRootWrapper from "../../wrappers/RecoilRootWrapper";

export const metadata = {
    title: "Rhythm Archive",
    description: "Rhythm Archive official page.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
        <head>
            <title>Rhythm Archive</title>
        </head>
        
        <body className={``}>
            <Header />
            <div className={``}>
            <RecoilRootWrapper>
                {children}
            </RecoilRootWrapper>
            </div>
            <Footer />
        </body>
        </html>
    );
}
