import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../svg/incheon_logo.svg";
import { useState } from "react";

export default function Header({ setGuideNum }) {
  // 주소 쿼리 알려주는 함수
  const location = useLocation();

  // 주소의 path네임이 guide인지 확인.
  // 이유: guide면 제목(?)에 가이드 붙여줄거임
  const isGuide = location.pathname.indexOf("guide") === 1;

  //스테이트 추적
  // console.log(location)
  // console.log(isGuide)

  //사이드바 state
  const [open, setOpne] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-40 bg-[#DDEFFB] w-full h-20 flex justify-between items-center px-5 shadow-md">
        <Link
          to="/"
          className="inline-flex items-center gap-4"
          onClick={() => setOpne(false)}
        >
          <Logo className="w-10 h-10" />
          <h1 className="text-[1.5rem] font-bold text-border text-[#0079C1]">
            인천시
            <span className="text-[#DD0303]"> 산불 </span>
            위험 예보
            {/* 현재 위치가 guied면 나타남 */}
            {isGuide && <span> 가이드</span>}
          </h1>
        </Link>
        {/* 도움말 */}
        <div>
          <button
            className="text-[1.8rem] font-bold text-border text-[#0079C1]"
            //현재상태와 반대로 업데이트
            onClick={() => setOpne(!open)}
          >
            {/* open 상태에 따라 변화 */}
            {open ? "×" : "?"}
          </button>
        </div>
      </header>

      {/* side bar */}
      <div
        className={`fixed inset-0 top-20 ${
          open ? "z-30" : "-z-10"
        } duration-500`}
      >
        {/* overlay */}
        <div
          className={`w-full h-full bg-black/30 ${!open && "hidden"}`}
          // 오버레이 클릭하면 닫기
          onClick={() => setOpne(false)}
        ></div>

        {/* side bar */}
        <div
          className={`w-[18rem] h-full absolute top-0 ${
            open ? "right-0" : "-right-[18rem]"
          } duration-500`}
          onClick={() => setOpne(false)}
        >
          <div className="w-full h-full p-10 bg-[#DDEFFB]">
            <ul className="font-bold text-[1.1rem] text-[#0079C1] text-border flex flex-col gap-4">
              <li>
                <Link to="guide" onClick={() => setGuideNum(0)}>전체 가이드</Link>
              </li>
              <li>
                <Link to="/guide" onClick={() => setGuideNum(3)}>시작 페이지 설명</Link>
              </li>
              <li>
                <Link to="/guide" onClick={() => setGuideNum(4)}>
                  정보 페이지 설명
                </Link>
                <ol className="flex flex-col gap-1 pl-2 pt-1 text-[#00B1B0]">
                  <li>
                    <Link onClick={() => setGuideNum(6)}>1. 산림 면적</Link>
                  </li>
                  <li>
                    <Link onClick={() => setGuideNum(7)}>2. 파이차트</Link>
                  </li>
                  <li>
                    <Link onClick={() => setGuideNum(8)}>3. 그래프</Link>
                  </li>
                </ol>
              </li>
              <li>
                <Link to="/guide" onClick={() => setGuideNum(10)}>
                  에러페이지 설명
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
