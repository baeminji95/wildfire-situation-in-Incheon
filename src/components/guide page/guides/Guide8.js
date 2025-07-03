import { ReactComponent as Logo } from "../../../svg/incheon_logo.svg";

export default function Guide6() {
  return (
    <article className="relative flex flex-col w-full h-full">
      {/* 헤더 (모형) */}
      <div className="w-full z-10 h-14 flex justify-between items-center px-4 text-border text-[#0079C1] font-bold text-[1.1rem] shadow-md relative bg-[#DDEFFB]">
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-black/50 z-50"></div>

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
          <p className="text-[0.9rem] w-full text-center font-semibold text-[#0079C1]">
            인천광역시 계양구의
            <br />
            산림 면적 :{" "}
            <span className="text-[1rem] text-[#05B2B1]">455 ㎢</span>
          </p>
          <div className="h-[70%] bg-guide3_3 bg-contain  bg-no-repeat"></div>
        </div>

        <div className="bg-guide3_1 col-span-5 bg-contain bg-no-repeat z-50 md:bg-contain relative">
          {/* 설명 말풍선 */}
          <p className="absolute w-full bottom-[110%] left-1/2 -translate-x-1/2 text-[#0079C1] px-2 py-1 z-30 bg-white flex justify-center items-center text-[0.9rem] tooltip5">
						해당지역의 산불 위험지수의 최댓값과 최솟값 그리고 표준값을 알려주는 그래프입니다.
						<br/>
            X축은 현재부터 3일간의 데이터를 3시간 간격의 날짜와 시간,
						Y축은 산불 위험 지수를나타냅니다.
          </p>
        </div>
      </div>
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/40"></div>
    </article>
  );
}
