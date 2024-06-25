"use client";
import { Image as NextImage } from "next";
import { useRecoilValue } from "recoil";
import { prefixState } from "../../states/state";

export default function Image(src, width, height, alt) {
    const prefix = useRecoilValue(prefixState);

    return (
        <NextImage
            src={prefix + src} 
            width={width}
            height={height}
            alt={alt ? alt : "null"}
        />
    )
}