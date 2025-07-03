import { Link, useNavigate } from "react-router-dom"

export default function ErrorPage({ error }) {
    const navigate = useNavigate();
    //에러 없으면 시작 페이지로
    if(!error) navigate("/");

    return (
        <main className="w-screen h-screen max-w-screen max-h-screen pt-20 bg-[#DDEFFB] inline-gird grid-cols-2 px-5">
            <article className="pt-20 mx-auto text-center flex flex-col gap-5">
                <div>
                    <h2 className="text-xl font-semibold">죄송합니다. 문제가 발생하였습니다</h2>
                    <p>
                        {error}
                    </p>
                </div>
                <Link
                    to="/"
                    className="text-[#0079C1] text-lg font-semibold"
                >
                    시작페이지로 돌아가기
                </Link>
            </article>
        </main>
    )
}