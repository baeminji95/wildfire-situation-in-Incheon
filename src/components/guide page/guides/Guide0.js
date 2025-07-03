import { ReactComponent as Logo } from "../../../svg/incheon_logo.svg"

export default function Guide0() {
	return (
		<article className="relative flex flex-col w-full h-full">

			{/* 헤더 (모형) */}
			<div className="w-full h-14 flex justify-between items-center px-4 text-border text-[#0079C1] font-bold text-[1.1rem] shadow-md">
				<div className="relative flex gap-2 z-20 bg-[#DDEFFB] p-1">
					<Logo className="w-7" />
					<div>
						인천시
						<span className="text-[#DD0303]"> 산불 </span>
						위험 예보</div>

					{/* 설명 말풍선 */}
					<p className="absolute top-[150%] left-1/2 -translate-x-1/2 w-full px-2 py-1 z-30 bg-white flex justify-center items-center text-[0.9rem] tooltip1">
						인천광역시의 전체지도가 있는 첫번째 페이지로 이동하고 싶으시다면, 로고를 클릭해 주세요.
					</p>
				</div>

				<div className="text-[1.4rem]">?</div>
			</div>
			{/* 메인 (모형) */}
			<div className="w-full h-full -z-10 grow bg-guide1 bg-contain bg-center bg-no-repeat"></div>

			{/* 오버레이 */}
			<div className="absolute inset-0 bg-black/40"></div>
		</article>
	)
}