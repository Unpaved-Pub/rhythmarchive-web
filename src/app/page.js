'use client';
import Image from "next/image";
import BackgroundImage from "../../components/layout/BackgroundImage";
import { useState } from "react";
import Info from "../../components/info/info";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Logo = function() {
    return (
        <Image src="/logo_white.png" width={400}  height={100} style={{objectFit : 'cover'}}/>
    )
}

const DownloadButton = function() {

    const DownloadImage = function() {
        return (
            // <i class="fa-solid fa-download"></i>
            <FontAwesomeIcon icon={faDownload} size='2xl' style={{paddingRight : 10}}/>
        )    
    }


    return (
        <>
            <button
                style={{
                    width : 300,
                    
                    padding : 10,
                    borderRadius : 50,
                    
                    backgroundColor : "transparent",
                    border : '1px solid white',           
                    fontFamily : 'GyeonggiTitle',
                    color : 'white',

                }}
            >
                <div
                    style={{
                        display : 'flex',
                        flexDirection : 'row',
                        alignItems : 'center',
                        justifyContent : 'center',
                        gap : 5,
                    }}
                >

                    <DownloadImage />
                    <div
                        style={{
                            display : 'flex',
                            flexDirection : 'column',
                        }}
                    >
                        <div style={{fontSize : 20}}>
                            {/* Download App */}
                            Register Alpha-test
                        </div>
                        <div>google play</div>
                    </div>
                </div>
                </button>
            </>
        )
    }

export default function Home() {

    const [padding, SetPadding] = useState(20);

    return (
        <main className={'main'}>
            <BackgroundImage src={'/wallpaper.png'} darken={0.6}/>
            <div style={{
                    color : 'white',
                    padding : padding,
                    alignItems : 'center',
                    display : 'flex',
                    flexDirection : 'column',

                    padding : 50,
                    height : 900,
                }}
            >
                <Logo />
                <div style={{fontSize : 20}}>
                    블루아카이브 Rhythm Game [Rhythm Archive]
                </div>
                <br />
                <div
                    style={{
                        fontFamily : 'CoreDream'
                    }}
                >
                    본 게임과 웹사이트는 수익을 창출하지 않으며, 모든 권리는 <span style={{fontWeight : 'bold'}}>넥슨게임즈, MX Studio</span>에 있습니다.
                </div>
                <div style={{padding : 80}}>
                    <DownloadButton />
                </div>
            </div>
            <hr></hr>

            <div>
                <Info />
            </div>
        </main>
    );
}
