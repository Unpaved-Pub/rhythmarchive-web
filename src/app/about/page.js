"use client";
import dynamic from "next/dynamic";
const BackgroundImage = dynamic(() => import('../../../components/layout/BackgroundImage'), {ssr: false});

export default function About() {
    return (
        <div className="main">
            <BackgroundImage />

            <div
                style={{
                    padding : 40,
                }}
            >
                this page shows briefview of this game
                <br/>
                but not readied yet
            </div>

        </div>
    )
}