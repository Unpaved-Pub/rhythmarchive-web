"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackgroundImage({src, darken=0.5, height=900}) {
    
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

    return (
        <div style={{
            position : 'absolute',    
            left : "0%",
        }}>
            <Image src={src}  width={width} height={height}
                style={{
                    position : 'absolute',
                    zIndex : -2,
                    objectFit : 'cover',
                }}
            />
            <div style={{
                position : 'absolute',
                width : width,
                height : height,
                background : '#000000',
                zIndex : -1,
                opacity : darken,
            }}/>
        </div>
        
    )
}