import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { ReactComponent as Ganghwa } from "../map_svg/강화군.svg"
import { ReactComponent as Gyeyang } from "../map_svg/계양구.svg"
import { ReactComponent as Namdong } from "../map_svg/남동구.svg"
import { ReactComponent as Dong } from "../map_svg/동구.svg"
import { ReactComponent as Michuhol } from "../map_svg/미추홀구.svg"
import { ReactComponent as Bupyeong } from "../map_svg/부평구.svg"
import { ReactComponent as Seo } from "../map_svg/서구.svg"
import { ReactComponent as Yeonsu } from "../map_svg/연수구.svg"
import { ReactComponent as Ongjin } from "../map_svg/옹진군.svg"
import { ReactComponent as Jung } from "../map_svg/중구.svg"


// 구군 이름, 지역코드과 absoulte로 이동시킬 값을 담은 객체들
const BTN_DATA = [
        { name: "강화군", num: "710", top: "33%", left: "37%", mTop: "27%", mLeft: "39%" },
        { name: "계양군", num: "245", top: "48%", left: "82%", mTop: "48%", mLeft: "82%" },
        { name: "남동구", num: "200", top: "67%", left: "82%", mTop: "74%", mLeft: "82%" },
        { name: "동구", num: "140", top: "59%", left: "68%", mTop: "63%", mLeft: "68%" },
        { name: "미추홀구", num: "177", top: "63%", left: "70%", mTop: "69%", mLeft: "70%" },
        { name: "부평구", num: "237", top: "57%", left: "79%", mTop: "60%", mLeft: "79%" },
        { name: "서구", num: "260", top: "46%", left: "70%", mTop: "46%", mLeft: "69%" },
        { name: "연수구", num: "185", top: "68%", left: "72%", mTop: "77%", mLeft: "71%" },
        { name: "옹진군", num: "720", top: "70%", left: "33%", mTop: "72%", mLeft: "29%" },
        { name: "중구", num: "110", top: "54%", left: "44%", mTop: "56%", mLeft: "45%" },
]

export default function Locals({ setSelectedLocal }) {
        //호버된 지역 담을 스테이트
        const [hoverLocal, setHoverLocal] = useState("");
        const navigate = useNavigate();

        // 지역명 뽑아서 버튼으로 만들기
        const buttons = BTN_DATA.map(data => (
                <button
                        key={data.num}
                        className={`absolute top-[${data.top}] left-[${data.left}] 
                md:top-[${data.mTop}] md:left-[${data.mLeft}]
                font-semibold duration-500 text-border
                md:text-[1.3rem]
                ${hoverLocal === data.name && "z-10"}`}
                        //△△△ 호버된지역 state인 hoverLocal과 같은 이름이면 z-index를 높여 해당 지역만 위로 올라가도록 만듬
                        disabled={hoverLocal === "동구"}
                        onMouseOver={() => setHoverLocal(data.name)}
                        onMouseLeave={() => setHoverLocal("")}

                        onClick={() => {
                                //클릭하면 selectedLocal 업데이트
                                setSelectedLocal(data.num);
                                // 그리고 infoPage로 이동
                                navigate("/infoPage");
                        }}
                >
                        {data.name}
                </button>
        ))

        return (
                <>
                        {/* hover background : 지역에 호버하면 나타날 반투명 배경  */}
                        <div className={`fixed left-0 top-0 w-screen h-screen duration-300 ${hoverLocal && "z-10 bg-black/40"}`}></div>

                        {/* maps(svg) */}
                        <Ganghwa className={`absolute duration-500
            w-[43.2%] top-[19%] left-[15.7%] 
            md:w-[40.8%] md:top-[7.4%] md:left-[18.5%]
            ${hoverLocal === "강화군" && "z-10"}`}
                        />

                        <Gyeyang className={`absolute duration-500
            w-[16%] top-[45%] left-[79.4%]
            md:w-[16%] md:top-[42.5%] md:left-[78.5%]
            ${hoverLocal === "계양구" && "z-10"}`}
                        />

                        <Namdong className={`absolute duration-500
            w-[17%] top-[62%] left-[77.3%]
            md:w-[16%] md:top-[67.6%] md:left-[76.9%]
            ${hoverLocal === "남동구" && "z-10"}`}
                        />
                        <Dong className={`absolute duration-500
            w-[6.5%] top-[59.2%] left-[67.4%]
            md:w-[6.2%] md:top-[63.5%]
            ${hoverLocal === "동구" && "z-10"}`}
                        />
                        <Michuhol className={`absolute duration-500
            w-[9.5%] top-[60.7%] left-[70.8%]
            md:w-[9%] md:top-[65.5%]
            ${hoverLocal === "미추홀구" && "z-10"}`}
                        />
                        <Bupyeong className={`absolute duration-500
            w-[12.5%] top-[55%] left-[78.2%]
            md:w-[12%] md:top-[57.3%] md:left-[77.8%]
            ${hoverLocal === "부평구" && "z-10"}`}
                        />
                        <Seo className={`absolute duration-500
            w-[23.5%] top-[38.25%] left-[61.2%]
            md:w-[22%] md:top-[33.2%] md:left-[61.9%]
            ${hoverLocal === "서구" && "z-10"}`}
                        />
                        <Yeonsu className={`absolute duration-500
            w-[11.5%] top-[66.7%] left-[70.7%]
            md:w-[11%] md:top-[74.3%] md:left-[70.5%]
            ${hoverLocal === "연수구" && "z-10"}`}
                        />
                        <Ongjin className={`absolute duration-500
            w-[58%] top-[58%] left-[5%]
            md:w-[55.8%] md:top-[52.8%] md:left-[0.5%]
            ${hoverLocal === "옹진군" && "z-10"}`}
                        />
                        <Jung className={`absolute duration-500
            w-[39.5%] top-[47.9%] left-[33.2%] 
            md:w-[37.27%] md:top-[47%] md:left-[35.1%]
            ${hoverLocal === "중구" && "z-10"}`}
                        />

                        {/* 지역명 버튼 */}
                        {buttons}

                        {hoverLocal === "동구" &&
                                <div className="absolute top-[59%] left-[17%] 
                                md:top-[63%] md:left-[35%]
                                z-10 rounded-sm inline-block p-4 bg-white duration-500 tooltip2">
                                        동구는 산림이 없습니다.<br /> 다른 지역을 선택해 주세요.
                                </div>
                        }

                        {/* <button class={`absolute top-[33%] left-[37%] 
                    md:top-[27%] md:left-[39%]
                    font-semibold duration-500 text-border
                    md:text-[1.3rem]
                    ${hoverLocal === "강화군" && "z-10"}
                    `}>강화군</button>
            <button class={`absolute top-[48%] left-[82%] 
                    md:top-[48%] md:left-[82%]
                    font-semibold duration-500 text-border
                    md:text-[1.3rem]
                    ${hoverLocal ==="계양구" && "z-10"}
                    `}>계양구</button>
            <button class={`absolute top-[67%] left-[82%] 
                    md:top-[74%] md:left-[82%]
                    font-semibold duration-500 text-border
                    md:text-[1.3rem]
                    ${hoverLocal === "남동구" && "z-10"}
                    `}>남동구</button>
            <button class={`absolute top-[59%] left-[68%] 
                    md:top-[63%] md:left-[68%]
                    font-semibold duration-500 text-border
                    md:text-[1.3rem]
                    ${hoverLocal === "동구" && "z-10"}
                    `}>동구</button>
            <button class={`absolute top-[63%] left-[70%] 
                    md:top-[69%] md:left-[70%]
                    font-semibold duration-500 text-border
                    md:text-[1.3rem]
                    ${hoverLocal === "미추홀구" && "z-10"}
                    `}>미추홀구</button>
            <button class={`absolute top-[57%] left-[79%] 
                    md:top-[60%] md:left-[79%]
                    font-semibold duration-500 text-border
                    md:text-[1.3rem]
                    ${hoverLocal === "부평구" && "z-10"}
                    `}>부평구</button>
            <button class={`absolute top-[46%] left-[70%] 
                    md:top-[46%] md:left-[69%]
                    font-semibold duration-500 text-border
                    md:text-[1.3rem]
                    ${hoverLocal === "서구" && "z-10"}
                    `}>서구</button>
            <button class={`absolute top-[68%] left-[72%] 
                    md:top-[77%] md:left-[71%]
                    font-semibold duration-500 text-border
                    md:text-[1.3rem]
                    ${hoverLocal === "연수구" && "z-10"}
                    `}>연수구</button>
            <button class={`absolute top-[70%] left-[33%] 
                    md:top-[72%] md:left-[29%]
                    font-semibold duration-500 text-border
                    md:text-[1.3rem]
                    ${hoverLocal === "옹진군" && "z-10"}
                    `}>옹진군</button><button class={`absolute top-[54%] left-[44%] 
                    md:top-[56%] md:left-[45%]
                    font-semibold duration-500 text-border
                    md:text-[1.3rem]
                    ${hoverLocal === "중구" && "z-10"}
                    `}>중구</button> */}
                </>
        )
}