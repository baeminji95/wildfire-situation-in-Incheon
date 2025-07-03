import { ReactComponent as Logo } from "../../../svg/incheon_logo.svg"

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

				<div className="text-[1.4rem] px-2 bg-[#DDEFFB] z-20 relative">
					?
					{/* 설명 말풍선 */}
					<p className="absolute w-[10rem] top-0 right-[170%] px-2 py-1 z-30 bg-white flex justify-center items-center text-[0.9rem] tooltip2">
						물음표 버튼을 누르시면 가이드 목록을 볼 수 있습니다.
					</p>
				</div>
			</div>
			{/* 메인 (모형) */}
			<div className="w-full h-full -z-10 grow bg-guide1 bg-contain bg-center bg-no-repeat"></div>

			{/* 오버레이 */}
			<div className="absolute inset-0 bg-black/40"></div>
		</article>
	)
}