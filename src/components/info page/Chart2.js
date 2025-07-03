import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

export default function Chart2({ data }) {
    const [page, setPage] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    //뷰포트 너비 width에 저장
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    //창 크기가 바뀔 때 마다 뷰포트 너비 감지
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const item = data?.response.body.items?.item;
    console.log(item);
    const chartData = data?.response.body.items.item?.
        map(item => (
            [
                { name: '낮음', value: item?.d1 },
                { name: '다소 높음', value: item?.d2 },
                { name: '높음', value: item?.d3 },
                { name: '매우 높음', value: item?.d4 },
            ]
        ))
    // console.log(chartData);

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x +4} y={y} fill="white" textAnchor={x > cx ? 'center' : 'end'} dominantBaseline="central"
                className='text-[0.75rem] smPlus:text-base duration-500'>
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const COLORS = ['#00B1B0', '#0079C1', '#FD8D64', '#FF4545'];

    const charts = chartData?.map((item) => (
        <div className='w-[180px] h-[130px] smPlus:w-[200px] smPlus:h-[200px]'>

            <PieChart
                width={width > 700 ? 200 : 195}
                height={width > 700 ? 180 : 130}>
                <Pie
                    data={item}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={width > 700 ? 80 : 60}
                    fill="#8884d8"
                    label={renderCustomizedLabel}
                >
                    {item.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip/>
            </PieChart>
        </div>
    ))


    return (
        chartData &&
        <article>
            <div className='flex flex-col smPlus:flex-row'>
                <div className='w-[180px] h-[130px] smPlus:w-[200px] smPlus:h-[200px] overflow-hidden'
                >
                    <div className='w-[4600px] h-[130px]
                    smPlus:w-[6900px] smPlus:h-[200px]  duration-500 flex'
                        style={{
                            translate: width > 700 ? - 200 * page : - 180 * page,
                        }}
                    >
                        {charts}
                    </div>
                </div>

                <div className='inline-grid grid-rows-2 grid-cols-2 
                smPlus:grid-cols-1 smPlus:grid-rows-4
                smPlus:h-24 my-auto
            p-1 text-[#004974] duration-500 text-[0.8rem]'>
                    <div className='flex items-center gap-1'>
                        <div className='w-2 h-2 bg-[#00B1B0]'></div>
                        <p>낮음</p>
                    </div>
                    <div className='flex items-center justify-end gap-1 '>
                        <div className='w-2 h-2 bg-[#0079C1]'></div>
                        <p>다소 높음</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='w-2 h-2 bg-[#FD8D64]'></div>
                        <p>높음</p>
                    </div>
                    <div className='flex items-center gap-1  justify-end'>
                        <div className='w-2 h-2 bg-[#FF4545]'></div>
                        <p>매우 높음</p>
                    </div>
                </div>
            </div>

            <div className='flex gap-3 justify-center text-[#004974]'>
                <button onClick={() => setPage(page - 1)}
                    disabled={page === 0}
                    className='disabled:invisible fill-[#004974]'
                >
                    <svg
                        className='w-3'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 
                        192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 
                        256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                        />
                    </svg>
                </button>

                <p>{item[page].analdate + ':00'}</p>

                <button onClick={() => setPage(page + 1)}
                    disabled={page === chartData.length - 1}
                    className='disabled:invisible fill-[#004974]'
                >
                    <svg
                        className='w-3'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512">
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 
                        192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 
                        256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        />
                    </svg>
                </button>
            </div>
        </article>
    )
}
