"use client";
import {default as NextLink} from "next/link";
import { useRecoilValue } from "recoil";
import { relativePrefixState } from "../../states/state";

export default function Link({children, href}) {
    const relativePrefix = useRecoilValue(relativePrefixState);

    return (
        <NextLink 
            href={relativePrefix + href}
        >
            {children}
        </NextLink>
    )
}