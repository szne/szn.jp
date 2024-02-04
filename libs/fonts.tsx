import { Noto_Sans_JP } from "next/font/google";
import { Quicksand } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

const body_font = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--body-font",
    display: "swap",
});

const display_font = Josefin_Sans({
    subsets: ["latin"],
    variable: "--display-font",
    display: "swap",
});

export {body_font, display_font}