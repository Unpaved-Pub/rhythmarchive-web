import Image from "next/image";

export default function BackgroundImage({src}) {
    
    const width = 2560;
    const height = 900;

    return (
        <>
            <Image src="/wallpaper.png"  width={width} height={height}
                style={{
                    position : 'absolute',
                    zIndex : -2,
                }}
            />
            <div style={{
                position : 'absolute',
                width : width,
                height : height,
                background : '#000000',
                zIndex : -1,
                opacity : 0.5,
            }}/>
        </>
        
    )
}