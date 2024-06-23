import { atom } from "recoil";

const prefixState = atom({
    key : 'prefixState',
    default : process.env.NODE_ENV === "production"
        ? `https://pageName` 
        : "", 
})

const relativePrefixState = atom({
    key : 'relativePrefixState',
    default : process.env.NODE_ENV === "production"
        ? `/me`
        : ``,
})

export {
    prefixState,
    relativePrefixState,
};