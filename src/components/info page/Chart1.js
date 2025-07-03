import { useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
    Label,
} from 'recharts';
import Spinner from '../Spinner';

// 산불 위험 예보 지수 최댓값 , 평균 , 최솟값 (3일 분량으로 각 1일 마다 3개 이상)

export default function Chart1({ data }) {
    // document 넓이 상태
    const [pageWidth, setPageWidth] = useState(window.innerWidth);
    // 차트 간격 상태
    const [gap, setGap] = useState(0);

    //스테이트 확인
    console.log(pageWidth);
    console.log(gap);

    const itmes = data?.response.body.items.item;

    
    // document 크기가 바뀔 때 pageWidth  업데이트
    useEffect(() => {
        window.addEventListener('resize', () => {
            setPageWidth(window.innerWidth)
        })
    }, [])
    
    useEffect(() => {
        // document 크기에 따라 차트 날짜 간격 변경
        if (pageWidth > 1600) {
            setGap(1);
        } else if (pageWidth > 900) {
            setGap(2);
        } else if (pageWidth > 700) {
            setGap(3);
        } else {
            setGap(4);
        }
    },[pageWidth])
    
    const rechartsData = itmes?.
        map((data, index) => (
            {
                name: data.analdate.slice(6, 7) + "월" +
                    data.analdate.slice(8, 10) + "일 " +
                    data.analdate.slice(11, 13) + ":00",
                산불위험예보지수최댓값: data.maxi === 0 ? data.meanavg + 10 : data.maxi,
                산불위험예보지수표준값: data.meanavg,
                산불위험예보지수최솟값: data.mini
            }))

    //차트데이터 확인
    // console.log(rechartsData);

    return (
        <ResponsiveContainer
            className='w-full h-full mt-4 text-xs font-bold overflow-y-auto relative -left-4'
        >
            <LineChart
                data={rechartsData}
            >
                <Line name='산불위험지수 최댓값' type="monotone" strokeWidth="2" dataKey="산불위험예보지수최댓값" stroke="#FD8D64 " />
                <Line name='산불위험지수 표준값' type="monotone" strokeWidth="2" dataKey="산불위험예보지수표준값" stroke="#888888" />
                <Line name='산불위험지수 최솟값' type="monotone" strokeWidth="2" dataKey="산불위험예보지수최솟값" stroke="#00B1B0" />
                <Legend verticalAlign="bottom" height={36} />
                <CartesianGrid
                    stroke="#0079C1"
                    className='opacity-40'
                    strokeDasharray="3 3"
                />
                <XAxis dataKey="name" interval={gap}
                    stroke='#0079C1' className='opacity-60' />
                <YAxis stroke='#0079C1' className='opacity-60'>
                </YAxis>
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    )
}

