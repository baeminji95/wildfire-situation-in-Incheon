import { ReactComponent as Logo } from "../../../svg/incheon_logo.svg"

export default function Guide2() {
	return(
		<article className="relative flex flex-col w-full h-full bg-[#878F96]">
		{/* 헤더 (모형) */}
		<div className="w-full z-10 h-14 flex justify-between items-center px-4 text-border text-[#0079C1] font-bold text-[1.1rem] shadow-md relative bg-[#DDEFFB]">

			{/* 오버레이 */}
			<div className="absolute inset-0 bg-black/50 z-50"></div>

			<div className="flex gap-2 p-1">
				<Logo className="w-7" />
				<div>
					인천시
					<span className="text-[#DD0303]"> 산불 </span>
					위험 예보</div>
			</div>

			<div className="text-[1.4rem] px-2 ">
				?

			</div>
		</div>
		{/* 메인 (모형) */}
		<div className="grow bg-guide2 bg-contain bg-center bg-no-repeat relative">
			{/* 설명 말풍선 */}
			<p className="absolute top-5 left-5 w-[11rem] px-2 py-1 z-30 bg-white flex justify-center items-center text-[0.9rem] font-semibold text-[#0079C1]">
				지역을 선택하시면 해당지역의 산불 위험지수를 알 수 있습니다.
			</p>
		</div>
	</article>
	)
}