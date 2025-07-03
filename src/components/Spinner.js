import {ReactComponent as Logo} from "../svg/incheon_logo.svg"

export default function Spinner() {
    return(
        <div className="w-full h-full flex justify-center items-center animate-spin">
            <Logo className="w-20"/>
        </div>
    )
}