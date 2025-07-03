import { ReactComponent as Logo } from "../../../svg/incheon_logo.svg"
import { ReactComponent as DropDown } from "../../../svg/dropDown.svg";

export default function Guide1() {
    return (
        <article className="relative flex flex-col w-full h-full">
            {/* 헤더 (모형) */}
            <div className="w-full h-14 flex justify-between items-center px-4 text-border text-[#0079C1] font-bold text-[1.1rem] shadow-md">
                <div className="relative flex gap-2">
                    <Logo className="w-7" />
                    <div>
                        인천시
                        <span className="text-[#DD0303]"> 산불 </span>
                        위험 예보</div>

                </div>

                <div className="text-[1.4rem] px-2 bg-[#DDEFFB]">
                    ?
                </div>
            </div>
            {/* 메인 (모형) */}
            <div className="w-full max-w-[500px] mx-auto h-full inline-grid grid-cols-5 grid-rows-24-1fr-1fr p-4 gap-5">

                <div className="w-44 h-6 col-span-5 font-semibold inline-flex gap-3 bg-[#DDEFFB]">
                    <div className="text-[#0079C1] bg-[#DDEFFB]">인천광역시</div>
                    <div className="w-[5rem] relative flex items-center justify-between text-[#00B1B0] bg-[#DDEFFB] ">계양구
                        <span>
                            <DropDown className="w-3 fill-[#00B1B0]" />
                        </span>
                    </div>
                </div>

                <div className="h-[10rem] bg-guide3_2 col-span-3 bg-cover bg-center relative">
                </div>

                <div className="col-span-2">
                    <p className="text-[0.9rem] w-full text-center font-semibold text-[#0079C1]">
                        인천광역시 계양구의
                        <br />
                        산림 면적 :{" "}
                        <span className="text-[1rem] text-[#05B2B1]">
                            455 ㎢
                        </span>
                    </p>
                    <div className="h-[70%] bg-guide3_3 bg-contain bg-center bg-no-repeat z-10 relative">
                        {/* 설명 말풍선 */}
                        <p className="absolute w-[12rem] top-1/2 -translate-y-1/2 right-[110%] text-[#0079C1] px-2 py-1 z-30 bg-white flex justify-center items-center text-[0.9rem] tooltip4">
                            현재 지역의 산림 면적을 기준으로 위험도를 표시한 차트 입니다.
                        </p>
                    </div>
                </div>

                <div className="bg-guide3_1 col-span-5 bg-cover bg-no-repeat md:bg-contain"></div>

            </div>
            {/* 오버레이 */}
            <div className="absolute inset-0 bg-black/40"></div>
        </article>
    )
}