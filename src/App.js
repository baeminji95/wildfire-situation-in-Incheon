import { useEffect, useState } from "react"
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import StartPage from "./components/SartPage"
import Header from "./components/Header";
import InfoPage from "./components/info page/InfoPage";
import ErrorPage from "./components/ErrorPage";
import GuidePage from "./components/guide page/GuidePage";
import EffectPage from "./components/EffectPage";

export default function App() {
  // 선택한 지역코드
  const [selectedLocal, setSelectedLocal] = useState(null);
  // 요청해서 받은 프로미스 객체 저장
  const [data, setData] = useState(null);
  //error 저장
  const [error, setError] = useState(null);
  // 로딩중일때 스피너를 위한 state
  const [isLoading, setIsLoding] = useState(false);
  // 로드시 오버레이 핸들링하기 위한  state
  const [startOverlay, setStartOverlay] = useState(true);
  const [open, setOpen] = useState(false);
  //guide page
  const [guideNum, setGuideNum] = useState(0);

  // 이동
  const navigate = useNavigate();

  // //스테이트 추적
  // console.log("요청받은 데이터 ", data);
  // console.log("구/군 코드 ", selectedLocal);

  // 선택한 지역코드(selectdLocal)이 변경되면 데이터 요청
  useEffect(() => {
    if (selectedLocal) {
      fetchData();
    }
  }, [selectedLocal]);


  //첫 시작 or 리로드시 지나가는 화면 핸들링 state 업데이트
  useEffect(() => {
    setOpen(true);
    setStartOverlay(true);

    setTimeout(() => {
      setStartOverlay(false);
    }, 500)

    setTimeout(() => {
      setOpen(false);
    }, 2000)
  }, [])

  //데이터 요청 함수
  async function fetchData() {
    //주소
    let gugunUrl = "https://apis.data.go.kr/1400377/forestPoint/forestPointListSigunguSearch"
    //쿼리
    gugunUrl += "?ServiceKey=" + process.env.REACT_APP_API_KEY //api 키를 노출시키지 않기위해 env(환경변수)에 저장한 key를 불러옴
    gugunUrl += "&PageNo=1"
    gugunUrl += "?numOfRows=10"
    gugunUrl += "&_type=json"
    gugunUrl += `&localAreas=28${selectedLocal}`
    gugunUrl += "&upplocalcd=28"
    gugunUrl += "&excludeForecast=0"


    //주소 확인
    // console.log(gugunUrl);

    try {
      // 초기화
      setIsLoding(true);
      setError(null);

      //요청해서 res함수에 저장
      const res = await fetch(gugunUrl, {});
      // res를 json으로 변경후 data 스테이트에 저장
      setData(await res.json());

    } catch (error) {
      //에러 발생하면 errorPage로 이동
      setError(error);
      navigate("errorPage");
    } finally {
      // 로딩중? 스테이트 false로 변경(실패하든 성공하든 변경해야하기 때문) 
      setIsLoding(false);
    }
  }

  return (
    <>
      {/* Router는 index.js에 씀. 이유:여기서 useNavigate쓰려고 */}
      <div className="max-w-screen max-h-screen">
        {/* 해더는 어느 페이지로 가든 존재하기때문에 Routes안에 들어가지 않음 */}
        <Header setGuideNum={setGuideNum} />

        {/* 로드될 때 뜨는 이미지 */}
        {open && <EffectPage startOverlay={startOverlay} />}

        <Routes>
          <Route
            path="/wildfire-situation-in-Incheon"
            element={
              <StartPage setSelectedLocal={setSelectedLocal} />
            }
          />


          <Route
            path="/infoPage"
            element={
              <InfoPage
                data={data}
                selectedLocal={selectedLocal}
                setSelectedLocal={setSelectedLocal}
                isLoading={isLoading}
              />
            }
          />

          <Route path="/errorPage"
            element={
              <ErrorPage error={error} />
            }
          />

          <Route path="/guide"
            element={<GuidePage guideNum={guideNum} setGuideNum={setGuideNum} />}
          />
        </Routes>
      </div>

    </>
  )
}