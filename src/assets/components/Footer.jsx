import React from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import facebookLogo from "./Project Glow - Design Assets/Icons/icons8-facebook-logo-64.png";
import instaLogo from "./Project Glow - Design Assets/Icons/icons8-instagram-logo-30.png";
import xLogo from "./Project Glow - Design Assets/Icons/icons8-x-logo-50.png";
import tiktokLogo from "./Project Glow - Design Assets/Icons/icons8-tiktok-50.png";

export default function Footer(){
    return(
        <>
        <div className="container max-w-[1440px] max-h-[170px] mb-10">
                <div className="flex justify-between">
                    <img src={logo} alt="logo" className="w-[200px] ml-40 h-[50px]" />
                    <li className="flex gap-4">
                        <ul className="text-[14px]">Project Glow Skin for Business </ul>
                        <ul className="text-[14px]">Affiliates</ul>
                        <ul className="text-[14px]">Terms & Policies</ul>
                        <ul className="text-[14px]">Contact Us</ul>
                    </li>
                </div>
                <div className="pt-10 flex justify-between">
                    <p className="text-[12px] text-[#9E9E9E] ml-40">©2024 Project Glow Skin Co. All Rights Reserved. </p>
                    <div className="flex gap-2">
                        <img src={facebookLogo} alt="fblogo" className="w-[36px]" />
                        <img src={instaLogo} alt="instalogo" className="w-[32px] h-[32px] rounded-full" />
                        <img src={xLogo} alt="xlogo" className="w-[32px] h-[32px] rounded-full"/>
                        <img src={tiktokLogo} alt="tiktoklogo" className="w-[32px] h-[32px] rounded-full"/>
                    </div>
                </div>
        </div>
        </>
    )
}
