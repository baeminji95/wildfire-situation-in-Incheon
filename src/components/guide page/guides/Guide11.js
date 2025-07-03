import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../svg/incheon_logo.svg";

export default function Guide10() {
  return (
    <article className="relative flex flex-col w-full h-full">
      {/* 메인 (모형) */}
      <div className="m-auto bg-center bg-no-repeat relative text-[1.4rem] font-semibold flex flex-col gap-2 items-center text-border text-[#0079C1] text-center">
        가이드가 끝났습니다.
        <Link to="/wildfire-situation-in-Incheon" className="text-[#0079C1] text-lg font-semibold mt-10">
          시작페이지로 돌아가기
        </Link>
      </div>
    </article>
  );
}
