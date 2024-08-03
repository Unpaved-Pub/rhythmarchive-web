"use client";
import { useEffect, useState } from "react";
import BackgroundImage from "../layout/BackgroundImage";

const TitleText = function({children}) {
    return (
        <div 
            style={{
                fontWeight : 'bold', 
                fontSize : 20,
                lineHeight : 2.5,
            }}
        >
            {children}
        </div>
    )
}

const BodyText = function({children}) {
    return (
        <div 
            style={{
                fontWeight : 'normal', 
                fontSize : 14,
                lineHeight : 2.0,
            }}
        >
            {children}
        </div>
    )
}

export default function Info() {
    
    const [width, setWidth] = useState(1920);

    useEffect(() => {
        if (typeof window !== 'undefined') {

            const handleResize = () => {
                setWidth(window.innerWidth);
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        } else {
            return () => window.removeEventListener("resize", () => {
                return null
            });
        }
    }, []);

    const minHeight = 1440;

    return (
        <>
            <div style={{minHeight : minHeight}}>
                <BackgroundImage src={'/wallpaper2.jpg'} darken={0.8} height={minHeight}/>

                <div
                    style={{
                        padding : 50,
                        color : 'white',
                        textAlign : 'left',
                        width : window.innerWidth,

                        display : 'flex',
                        flexDirection : 'column',
                        alignItems : 'start',
                        fontFamily : 'CoreDream',
                    }}
                >
                    <TitleText>
                        About this Game
                    </TitleText>

                    <BodyText>
                        이 게임은 블루아카이브 음악을 사용하여 만들어진 리듬게임입니다.
                        <br/>
                        
                    </BodyText>
                </div>
            </div>
        </>
    )
}