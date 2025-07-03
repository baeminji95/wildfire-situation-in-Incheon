import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Map, MapMarker, Polygon } from "react-kakao-maps-sdk";

import { ReactComponent as DropDown } from "../../svg/dropDown.svg";
import { ReactComponent as HelpBtn } from "../../svg/help_button.svg";
import { INCHEON } from "../../DATA/INCHEON";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Spinner from "../Spinner";

export default function InfoPage({
  data,
  selectedLocal,
  setSelectedLocal,
  isLoading,
}) {
  // 지역 선택 select 드롭다운박스 열고 닫고
  const [open, setOpen] = useState(false);
  // 차트 간의? 설명 모달
  const [guideOpen, setGuideOpen] = useState("");
  const [guideNum, setGuideNum] = useState(0);
  const navigate = useNavigate();

  //스테이트 확인
  // console.log(localData);
  // console.log(selectedLocal)

  useEffect(() => {
    if (!selectedLocal) {
      return navigate("/");
      // 새로고침 되면 시작페이지로 넘긴다.
    }
  });

  // 선택한 로컬의 좌표, 폴리곤 등을 담을 변수
  const localData = INCHEON.find((sigun) => sigun.num === selectedLocal);

  // 셀렉트 드롭다운 박스
  const localList = (
    <div className="relative w-[6.6rem] text-[#00B1B0] ">
      {/* 드롭다운 박스 열 버튼 */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex gap-3 justify-between items-center px-1"
      >
        {localData?.name}
        <span>
          <DropDown
            className={`w-3 fill-[#00B1B0] duration-500 ${
              open && "-scale-y-100"
            }`}
          />
        </span>
      </button>
      {/* 드롭다운 박스 */}
      <div
        className={`z-10 absolute top-[110%] w-full overflow-hidden duration-500
            ${open ? "max-h-[265px]" : "max-h-0"}
            `}
      >
        <ul className="border border-[#00B1B0] bg-white">
          {INCHEON.filter((local) => local.num !== selectedLocal).map(
            (data, index) => (
              <li
                key={`polygon_${data.num}_${index}`}
                className={`${
                  index !== 8 && "border-b"
                } border-[#04505067] py-[1px] px-1 hover:bg-[#00B1B0] hover:text-white`}
                onClick={() => {
                  setSelectedLocal(data.num);
                  setOpen(false);
                }}
              >
                {data.name}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );

  //꺾은선 그래프 설명서
  const chart1_guide = (
    <div className="w-[400px] mx-auto overflow-hidden">
      <div
        className="flex w-[1200px] duration-500"
        style={{ translate: -400 * guideNum }}
      >
        {/* 0 */}
        <div className="w-[400px] h-[420px] pb-5 bg-[#DDEFFB] flex flex-col justify-between items-center">
          <div className="w-[350px] h-[300px] bg-cover bg-chart1_1"></div>
          <p className="px-4 text-[#004974] text-center">
            현재 지역의 전체 산림중 산불 위험지수가
            <br />
            <span className="text-[#F89A78] font-semibold"> 가장 높은 곳</span>
            과,
            <span className="text-[#05B2B1] font-semibold">
              {" "}
              가장 낮은 곳
            </span>{" "}
            그리고 <span className="text-[#898989] font-semibold">표준값</span>
            을
            <br />
            보여주는 그래프 입니다.
          </p>
        </div>
        {/* 1 */}
        <div className="w-[400px] h-[420px] py-3 pb-5 bg-[#DDEFFB] flex flex-col justify-between items-center">
          <div className="w-[340px] h-[265px] bg-cover bg-chart1_2"></div>
          <p className="px-4 text-[#004974] text-center">
            <span className="text-[#0079C1] font-semibold"> Y축</span>은{" "}
            <span className="text-[#0079C1] font-semibold"> 산불 위험지수</span>
            ,<span className="text-[#FF9345] font-semibold"> X축</span>은{" "}
            <span className="text-[#FF9345] font-semibold"> 기준 시간</span>
            입니다.
            <br />
            <span className="text-[#0079C1] font-semibold"> 산불 위험지수</span>
            는 0에서 100사이의 값을 갖습니다.
            <span className="text-[#FF9345] font-semibold"> 기준 시간</span>은
            현재부터 3일간, 3시간 간격입니다.
          </p>
        </div>
        {/* 2 */}
        <div className="w-[400px] h-[420px] pt-1 pb-5 bg-[#DDEFFB] flex flex-col justify-between items-center">
          <div className="w-[350px] h-[300px] bg-cover bg-chart1_3"></div>
          <p className="px-4 text-[#004974] text-center">
            그래프 <span className="text-[#FF9345] font-semibold"> X축</span>의
            각각의 분기점에 마우스를 올리면
            <br />
            정확한 수치를 알 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );

  const chart2_guide = (
    <div className="w-[400px] mx-auto overflow-hidden">
      <div
        className="flex w-[1600px] duration-500"
        style={{ translate: -400 * guideNum }}
      >
        {/* 0 */}
        <div className="w-[400px] h-[420px] pb-5 bg-[#DDEFFB] flex flex-col justify-between items-center">
          <div className="w-[400px] h-[300px] bg-cover bg-chart2_1"></div>
          <p className="px-4 text-[#004974] text-center">
            산불 위험지수를 백분률로 나타낸 차트입니다.
            <br />
            산불 위험지수는 날씨 등의 대기상태, 산림의 지형과 상태 등을 고려하여
            정해집니다.
            <br />
          </p>
        </div>

        {/* 1 */}
        <div className="w-[400px] h-[420px] pb-5 bg-[#DDEFFB] flex flex-col justify-between items-center">
          <div className="w-[400px] h-[300px] bg-cover bg-chart2_1"></div>
          <p className="px-4 text-[#004974] text-center">
            위의 예시를 기준으로 전체 산림 중
            <br />
            <span className="text-[#05B2B1] font-semibold"> 34%</span>는{" "}
            <span className="text-[#05B2B1] font-semibold">낮은 위험도</span>,{" "}
            <span className="text-[#3477BB] font-semibold">37%</span>는{" "}
            <span className="text-[#3477BB] font-semibold">
              다소 높은 위험도
            </span>
            ,<span className="text-[#F89A78] font-semibold"> 22%</span>는{" "}
            <span className="text-[#F89A78] font-semibold">높은 위험도</span>,{" "}
            <span className="text-[#EB554E] font-semibold">7%</span>는{" "}
            <span className="text-[#EB554E] font-semibold">
              매우 높은 위험도
            </span>
            <br />로 예보 되었습니다.
          </p>
        </div>

        {/* 2 */}
        <div className="w-[400px] h-[420px] pb-5 bg-[#DDEFFB] flex flex-col justify-between items-center">
          <div className="w-[400px] h-[300px] bg-cover bg-chart2_3"></div>
          <p className="px-4 text-[#004974] text-center">
            차트의 기준시간은 차트아래에 위치해 있습니다.
            <br />
            위 예시의 기준시간은
            <br />
            2024년 5월 7일 02시00분입니다.
          </p>
        </div>

        {/* 3 */}
        <div className="w-[400px] h-[420px] pb-5 bg-[#DDEFFB] flex flex-col justify-between items-center">
          <div className="w-[390px] h-[290px] bg-cover bg-chart2_3"></div>
          <p className="px-4 text-[#004974] text-center">
            기준 시간의 양옆에 위치한 버튼으로
            <br />
            다른 시간대의 데이터를 확인하실 수 있습니다.
            <br />
            데이터는 3시간 간격으로 있으며,
            <br />
            현재부터 최대 3일 후까지 보실 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <main
      className="w-screen h-screen max-w-[1100px] max-h-screen mx-auto pt-20 bg-[#DDEFFB] px-5 duration-500
        grid grid-cols-info grid-rows-info
        sm:grid-cols-sminfo smPlus:grid-cols-lginfo"
    >
      {/* 시(고정) / 구,군 select */}
      <article className="py-5 text-[1.1rem] font-semibold text-[#0079C1] inline-flex items-end gap-4 col-span-2">
        <h2 className="text-[1.2rem]">인천광역시</h2>
        {localList}
      </article>
      {/* 지도 */}
      <article className="w-[260px] sm:w-[300px] smPlus:w-full h-[300px] duration-500">
        {localData && (
          <Map
            center={{ lat: localData.centerLat, lng: localData.centerLng }}
            style={{ width: "100%", height: "100%" }}
            level={localData.level}
          >
            {localData &&
              localData.polygon?.map((area, index) => (
                <Polygon
                  key={`polygon_${index}`}
                  path={area}
                  strokeWeight={2}
                  strokeColor={"#FF9345"}
                  strokeOpacity={1}
                  strokeStyle={"solid"}
                  fillColor={"#FF9345"}
                  fillOpacity={0.6}
                />
              ))}
            <MapMarker position={{ lat: localData.lat, lng: localData.lng }}>
              <div className="mx-autoo">{localData.name}</div>
            </MapMarker>
          </Map>
        )}
      </article>

      {/* 차트2(파이차트), 산림 면적 */}
      <article className="w-full flex flex-col items-center justify-between text-[#004974]">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <p className="w-full text-center font-semibold">
              {data?.response.body.items.item[0].doname +
                " " +
                data?.response.body.items.item[0].sigun +
                "의 "}
              <br className="smPlus:hidden" />
              산림 면적 :{" "}
              <span className="text-[1.2rem] text-[#05B2B1]">
                {data?.response.body.items.item[0].area}㎢
              </span>
            </p>
            <div className="relative">
              <p className="font-semibold text-center">산불 위험 예보 지수</p>
              <Chart2 data={data} isLoading={isLoading} />
              <button
                className="w-6 md:w-8 duration-500 fill-[#004974]/60 hover:fill-[#004974] absolute -right-3 -top-1"
                onClick={() => {
                  setGuideOpen("chart2");
                  setGuideNum(0);
                }}
              >
                <HelpBtn />
              </button>
            </div>
          </>
        )}
      </article>

      {/* 꺾은선 차트 */}
      <article className="max-w-screen h-[92%] col-span-2 relative">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Chart1 data={data} isLoading={isLoading} />
            <button
              className="w-6 md:w-8 duration-500 fill-[#004974]/60 hover:fill-[#004974] absolute right-0 top-0"
              onClick={() => {
                setGuideOpen("chart1");
                setGuideNum(0);
              }}
            >
              <HelpBtn />
            </button>
          </>
        )}
      </article>

      {/* ? 설명 */}
      {guideOpen && (
        <article className="fixed inset-0 z-20 flex justify-center items-center">
          {/* 모달 */}
          <div
            className="w-full h-full bg-black/50 absolute inset-0"
            onClick={() => setGuideOpen("")}
          >
            <button className="absolute top-20 right-0 px-2 text-[2rem] text-white font-bold">
              ×
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* 이전버튼 */}
            <button
              type="button"
              className="w-[20px] h-40 fill-white disabled:opacity-0 z-999"
              onClick={() => setGuideNum(guideNum - 1)}
              disabled={guideNum === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 
                        192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 
                        256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                />
              </svg>
            </button>

            {guideOpen === "chart1" ? chart1_guide : chart2_guide}

            {/* 다음 버튼 */}
            <button
              type="button"
              className="w-[20px] h-40 disabled:opacity-0 z-999 fill-white"
              onClick={() => setGuideNum(guideNum + 1)}
              disabled={(guideOpen === "chart1" ? 2 : 3) === guideNum}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 
                        192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 
                        256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                />
              </svg>
            </button>
          </div>
        </article>
      )}
    </main>
  );
}
