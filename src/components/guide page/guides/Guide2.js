import { ReactComponent as Logo } from "../../../svg/incheon_logo.svg"

export default function Guide2() {
   return (
      <article className="relative flex flex-col w-full h-full">

         {/* 헤더 (모형) */}
         <div className="w-full h-14 flex justify-between items-center px-4 text-border text-[#0079C1] font-bold text-[1.1rem] shadow-md relative z-10">
            <div className="relative flex gap-2">
               <Logo className="w-7" />
               <div>
                  인천시
                  <span className="text-[#DD0303]"> 산불 </span>
                  위험 예보</div>

            </div>

            <div className="text-[1.4rem] px-2 bg-[#DDEFFB] relative z-40">
               ?
            </div>
         </div>
         {/* 메인 (모형) */}
         <div className="w-full h-full grow bg-guide1 bg-contain bg-center bg-no-repeat">
               {/* 설명 말풍선 */}
               <p className="absolute w-[10rem] top-16 right-48 px-2 py-1 z-999 bg-white flex justify-center items-center text-[0.9rem] tooltip2 text-[#0079C1] font-bold">
                  가이드 목록에는 전체 가이드와 시작 페이지 및 면적, 그래프, 차트에 관한 설명을 보실 수 있습니다. 
               </p>


               {/* side bar */}
               <div className="w-[10rem] h-full absolute z-50 top-12 right-0 duration-500">
                  <div className="w-full h-full p-5 bg-[#DDEFFB]">
                     <ul className="font-bold text-[0.8rem] text-[#0079C1] text-border flex flex-col gap-4">
                        <li>
                           전체 가이드
                        </li>
                        <li>
                           시작 페이지 설명
                        </li>
                        <li>
                           정보 페이지 설명
                           <ol className="flex flex-col gap-1 pl-2 pt-1 text-[#00B1B0]">
                              <li>
                                 1. 산림 면적
                              </li>
                              <li>
                                 2. 파이차트
                              </li>
                              <li>
                                 3. 그래프
                              </li>
                           </ol>
                        </li>
												<li>에러페이지 설명</li>
                     </ul>
                  </div>
               </div>
            </div>

         {/* 오버레이 */}
         <div className="absolute inset-0 bg-black/40 z-20"></div>
      </article>
   )
}