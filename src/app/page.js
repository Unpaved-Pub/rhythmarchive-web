'use client';
import Image from "next/image";
import Link from "../../components/Common/link";
import BackgroundImage from "../../components/layout/BackgroundImage";
import { useState } from "react";

function DownloadButton() {
    return (
        <>
            <button
                style={{
                    width : 300,
                    padding : 10,
                    
                    borderRadius : 50,
                    
                    backgroundColor : "transparent",
                    border : '2px solid white',                    
                }}
            >
                <div 
                    style={{
                        fontSize : 20,
                        color : 'white',
                    }}
                >
                    {/* Download App */}
                    Register Alpha-test
                </div>
                <div
                    style={{
                        color : 'white',
                    }}
                >
                    google play
                </div>
                </button>
            </>
        )
    }

export default function Home() {

    const [padding, SetPadding] = useState(20);

    return (
        <main className={'main'}
            style={{
                // backgroundColor : 'red'     // 일코용 스크린
            }}
        >
            <BackgroundImage />
            <div style={{
                    color : 'white',
                    padding : padding,
                    alignItems : 'center',
                    display : 'flex',
                    flexDirection : 'column'
                }}
            >
                hello everyone.
                <br />
                <br />
                <br />
                <DownloadButton />
            </div>
        </main>
    );
}
