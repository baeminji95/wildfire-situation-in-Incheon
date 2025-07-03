import { ReactComponent as Logo } from "../../../svg/incheon_logo.svg";

export default function Guide8() {
  return (
    <article className="relative flex flex-col w-full h-full">
      {/* 헤더 (모형) */}
      <div className="w-full z-10 h-14 flex justify-between items-center px-4 text-border text-[#0079C1] font-bold text-[1.1rem] shadow-md relative bg-[#DDEFFB]">
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-black/45 z-50"></div>

        <div className="flex gap-2 p-1">
          <Logo className="w-7" />
          <div>
            인천시
            <span className="text-[#DD0303]"> 산불 </span>
            위험 예보
          </div>
        </div>

        <div className="text-[1.4rem] px-2 ">?</div>
      </div>

      {/* 메인 (모형) */}
      <div className="w-full max-w-[500px] mx-auto h-full inline-grid grid-cols-5 grid-rows-24-1fr-1fr p-4 gap-5">
        <div className="w-44 h-6 col-span-5 font-semibold inline-flex gap-3 bg-[#DDEFFB]">
          <div className="text-[#0079C1] bg-[#DDEFFB]">인천광역시</div>
          <div className="w-[5rem] relative flex items-center justify-between text-[#00B1B0] bg-[#DDEFFB] ">
            계양구
          </div>
        </div>

        <div className="h-[10rem] bg-guide3_2 col-span-3 bg-cover"></div>

        <div className="col-span-2">
          <p className="text-[0.9rem] w-full text-center font-semibold text-[#0079C1] bg-[#DDEFFB]">
            인천광역시 계양구의
            <br />
            산림 면적 :{" "}
            <span className="text-[1rem] text-[#05B2B1]">455 ㎢</span>
          </p>
          <div className="h-[70%] bg-guide4_3 bg-contain bg-no-repeat relative z-10"></div>
        </div>

        <div className="bg-guide4_1 col-span-5 bg-contain bg-no-repeat  relative z-20">
          {/* 설명 말풍선 */}
          <p className="absolute w-[17rem] bottom-[110%] right-0 text-[#0079C1] px-2 py-1 z-30 bg-white flex justify-center items-center text-[0.9rem]">
						각 차트의 물음표 버튼을 클릭하시면 더 자세한 설명을 보실 수 있습니다.
          </p>
        </div>
      </div>
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/50"></div>
    </article>
  );
}
