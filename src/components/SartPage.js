import Locals from "./Locals"

export default function StartPage({ setSelectedLocal }) {
    return (
        <main className="w-screen h-screen max-w-screen max-h-screen pt-20 bg-[#DDEFFB] flex items-center">
            <div
                className="grow w-[500px] max-w-[500px] min-h-[610px] overflow-hidden
                md:max-w-[768px] md:w-[768px] 
        mx-auto  relative">
            {/* 지도 svg들 */}
                <Locals className="absolute inset-0"
                    setSelectedLocal={setSelectedLocal} />
            </div>
        </main>
    )
}