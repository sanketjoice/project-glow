import React from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";

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
                <div className="pt-16">
                    <p className="text-[12px] text-[#9E9E9E] ml-40">©2024 Project Glow Skin Co. All Rights Reserved. </p>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
        </div>
        </>
    )
}