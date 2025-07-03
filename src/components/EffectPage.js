import { ReactComponent as Logo } from "../svg/incheon_logo.svg"

export default function EffectPage({ startOverlay}) {
    return (
        <article className={`fixed w-screen h-screen max-w-screen max-h-screen  bg-[#DDEFFB] duration-[2s] z-50 pointer-events-none
        ${startOverlay ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full h-full bg-effectPage bg-center bg-cover flex justify-center opacity-80 items-center">
                <Logo className="w-24 opacity-100" />
            </div>
        </article>
    )
}