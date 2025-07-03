import { useState, useEffect } from "react";

import Guide0 from "./guides/Guide0"
import Guide1 from "./guides/Guide1"
import Guide2 from "./guides/Guide2"
import Guide3 from "./guides/Guide3"
import Guide4 from "./guides/Guide4"
import Guide5 from "./guides/Guide5"
import Guide6 from "./guides/Guide6"
import Guide7 from "./guides/Guide7"
import Guide8 from "./guides/Guide8"
import Guide9 from "./guides/Guide9"
import Guide10 from "./guides/Guide10"
import Guide11 from "./guides/Guide11"

export default function GuidePage({ guideNum, setGuideNum }) {
   // 현재 페이지 번호 상태
   const [width, setWidth] = useState(window.innerWidth - 80);

   // 가이드 컴포넌트
   const guideArray = [<Guide0 />, <Guide1 />, <Guide2 />, <Guide3 />,<Guide4 />,<Guide5 />,<Guide6 />,<Guide7 />,<Guide8 />,<Guide9 />,<Guide10 />,<Guide11 />,];
   //스테이트 확인
   console.log(guideNum);
   console.log(width);

   //뷰포트 너비 width에 저장
   const handleResize = () => {
      setWidth(window.innerWidth - 80);
   };

   //창 크기가 바뀔 때 마다 뷰포트 너비 감지
   useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);


   const guideCerousel = (
      <>
         <div className="max-w-[800px] h-[30rem] mx-auto"
         style={{width : width}}
         >
            <div className="h-full flex duration-1000"
               style={{
                  width: 800 * guideArray.length,
                  translate: width > 800 ? -800 * guideNum : -width * guideNum
               }}
            >
               {guideArray.map((component, index) => (
                  <div
                     key={`guide_${index}`}
                     // padding 속성의 변하는 시간 추가 (transition-all duration-1000)
                     className="max-w-[800px] h-full transition-all duration-1000"
                     style={{
                        width: width,
                        scale: guideNum === index ? "100%" : "30%" // 현재 페이지일 때 기존의 크기 유지, 아닐 때(보이지 않는 페이지 일 때) padding = 10%으로 작게
                     }}
                  >
                     {component}
                  </div>
               ))
               }
            </div>
         </div>
      </>
   )


   return (
      <main className="max-w-4xl h-screen mx-auto relative flex justify-center items-center overflow-hidden pt-20">
         {/* 이전버튼 */}
         <button
            type="button"
            className="w-[30px] h-1/2 fill-[#0079C1] disabled:invisible z-999"
            onClick={() => setGuideNum(guideNum - 1)}
            disabled={guideNum === 0}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 320 512">
               <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 
                        192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 
                        256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
               />
            </svg>
         </button>

         {/* 페이지 */}
         {guideCerousel}

         {/* 다음 버튼 */}
         <button
            type="button"
            className="w-[30px] h-1/2 disabled:invisible z-999 fill-[#0079C1]"
            onClick={() => setGuideNum(guideNum + 1)}
            disabled={guideArray.length - 1 === guideNum}
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 320 512">
               <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 
                        192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 
                        256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
               />
            </svg>
         </button>
      </main>
   )
}

// import { useState, useEffect } from "react";

// import Guide0 from "./guides/Guide0"
// import Guide1 from "./guides/Guide1"
// import Guide2 from "./guides/Guide2"



// export default function GuidePage() {
// 	// 현재 페이지 번호 상태
// 	const [pageCount, setPageCount] = useState(0);
// 	const [width, setWidth] = useState(window.innerWidth - 80);

// 	const guideArray = [<Guide0 />, <Guide1 />, <Guide2 />];

// 	//스테이트 확인
// 	console.log(pageCount);
// 	console.log(width);

// 	//뷰포트 너비
// 	const handleResize = () => {
// 		setWidth(window.innerWidth - 80);
// 	};

// 	useEffect(() => {
// 		window.addEventListener("resize", handleResize);
// 		return () => {
// 			window.removeEventListener("resize", handleResize);
// 		};
// 	}, []);


// 	const guideCerousel = (
// 		<>
// 			<div className="max-w-[800px] h-[30rem] m-10 overflow-hidden"
// 				style={{
// 					width: width
// 				}}
// 			>
// 				<div className="h-full flex duration-500"
// 					style={{
// 						width: width * guideArray.length,
// 						maxWidth: 800 * guideArray.length,
// 						translate: width > 800 ? -800 * pageCount : -width * pageCount
// 					}}
// 				>
// 					{guideArray.map((component, index) => (
// 						<div
// 							key={`guide_${index}`}
// 							className="max-w-[800px] h-full"
// 							style={{ width: width }}
// 						>
// 							{component}
// 						</div>
// 					))
// 					}
// 				</div>
// 			</div>
// 		</>

// 	)


// 	return (
// 		<main className="max-w-4xl h-screen mx-auto relative flex items-center overflow-hidden border pt-20">
// 			{/* 이전버튼 */}
// 			<button
// 				type="button"
// 				className="w-[30px] h-full absolute left-1 fill-[#0079C1] disabled:invisible z-999"
// 				onClick={() => setPageCount(pageCount - 1)}
// 				disabled={pageCount === 0}>
// 				<svg
// 					xmlns="http://www.w3.org/2000/svg"
// 					viewBox="0 0 320 512">
// 					<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192
// 										192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3
// 										256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
// 					/>
// 				</svg>
// 			</button>

// 			{/* 페이지 */}
// 			{guideCerousel}

// 			{/* 다음 버튼 */}
// 			<button
// 				type="button"
// 				className="w-[30px] h-full absolute right-1 disabled:invisible z-999 fill-[#0079C1]"
// 				onClick={() => setPageCount(pageCount + 1)}
// 				disabled={guideArray.length - 1 === pageCount}
// 			>
// 				<svg
// 					xmlns="http://www.w3.org/2000/svg"
// 					viewBox="0 0 320 512">
// 					<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192
// 										192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7
// 										256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
// 					/>
// 				</svg>
// 			</button>
// 		</main>
// 	)
// }