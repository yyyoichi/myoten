import { ReactNode } from "react"
import OverWrap from "../atom/OverWrap"

type Props = {
    children: ReactNode,
    onClick: () => void
}
function PopupWindow(props: Props) {
    // console.log(popupControl, setPopupControl)
    return (
        <OverWrap>
            <div onClick={props["onClick"]}>
                {props.children}
            </div>
        </OverWrap>
    )
}

export default PopupWindow