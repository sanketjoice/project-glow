import{r as x,u as o,G as i,j as e}from"./index-DeiNhbD2.js";import{l as p}from"./PG-Skin logo-dark-DVfkW0ss.js";import{l as m}from"./chevron-left-DpDrQOb-.js";import{c as d}from"./close-DXkSve_M.js";import{g}from"./gem-green-MAGxC3Bt.js";const f="/project-glow/assets/mother-BPx69Fjz.svg";function N(){const[s,c]=x.useState(""),r=o(),{gender:a}=x.useContext(i);if(a!=="female")return e.jsx(Navigate,{to:"",replace:!0});if(a!=="female")return r(""),null;const l=()=>{r("/project-glow/hormonal")};return e.jsx("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:e.jsxs("div",{className:"w-[390px] h-[680px] overflow-auto rounded-xl shadow-lg flex flex-col bg-[#F4F7F2]",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-4",children:[e.jsx("img",{src:m,className:"text-gray-700 w-[24px] h-[24px] cursor-pointer",alt:"Left Arrow"}),e.jsx("img",{src:p,alt:"GlowSkin Logo",className:"w-[110px] h-[28px]"}),e.jsx("img",{src:d,className:"text-gray-700 w-[24px] h-[24px] cursor-pointer",alt:"Close Icon"})]}),e.jsx("div",{className:"flex justify-center items-center mt-4 space-x-2",children:[1,2,3].map((t,n)=>e.jsx("div",{className:`w-[24px] h-[24px] text-white rounded-full py-[2px] 
                px-[7px] text-[14px] leading-[22px] justify-center text-center border ${t<=3?"bg-black":"bg-gray-300"}`,children:t},n))}),e.jsxs("div",{className:"flex flex-col items-center px-6 text-center",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"bg-[#F0F7EF] rounded-full p-4",children:e.jsx("img",{src:f,alt:"Pregnancy Icon",className:"w-[70px] h-[70px]"})}),e.jsx("h1",{className:"mt-4 w-[240px] text-[24px] leading-[30px] text-start font-semibold text-[#303030]",children:"Are you pregnant or breastfeeding?"})]}),e.jsx("div",{className:"flex flex-col gap-[12px] mt-8 w-[330px]",children:["Yes","No"].map(t=>e.jsx("button",{onClick:()=>c(t),className:`py-[10px] px-[24px] h-[42px] border rounded-full text-[16px] font-medium ${s===t?"border-black bg-gray-200":"border-[#303030] bg-transparent"}`,children:t},t))})]}),e.jsxs("div",{className:"mt-auto mb-6 flex justify-between px-6",children:[e.jsx("button",{className:"text-[16px] text-gray-500 underline",onClick:l,children:"Skip"}),e.jsxs("button",{className:`w-[188px] py-[12px] h-[48px] rounded-[6px] shadow-lg flex items-center justify-center gap-1 text-[16px] ${s?"bg-black text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,onClick:l,disabled:!s,children:["Earn 1 x"," ",e.jsx("img",{src:g,alt:"Gem Icon",className:"w-[20px] h-[20px]"})]})]})]})})}export{N as default};
