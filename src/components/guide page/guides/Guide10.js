import { ReactComponent as Logo } from "../../../svg/incheon_logo.svg";

export default function Guide9() {
  return (
    <article className="relative flex flex-col w-full h-full shadow-md">
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
      <div className="w-full h-full flex justify-center grow">
        <div className="pt-20 mx-auto text-center flex flex-col gap-5">
          <div>
            <div className="text-xl font-semibold">
              죄송합니다. 문제가 발생하였습니다
            </div>
            <div>"error message"</div>
          </div>
          <div to="/wildfire-situation-in-Incheon" className="text-[#0079C1] text-lg font-semibold relative">
            시작페이지로 돌아가기
          {/* 설명 말풍선 */}
          <p className="w-[20rem] absolute top-[200%] left-1/2 -translate-x-1/2 px-2 py-1 z-40 bg-white flex justify-center items-center text-[0.9rem] font-semibold text-[#0079C1] tooltip1">
            에러 페이지가 나온다면 뒤로가기, F5 혹은 
						<br/>
						로고를 클릭, 새로고침을 통해 
						<br/>
						첫 페이지로 이동하실 수 있습니다.
          </p>
          </div>
        </div>
      </div>
    </article>
  );
}
