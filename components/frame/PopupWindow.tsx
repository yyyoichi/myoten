import { ReactNode } from "react"
import FadeIn from "../anime/FadeIn"
import OverWrap from "../atom/OverWrap"

type Props = {
    children: ReactNode,
    onClick: () => void,
    show: boolean
}
function PopupWindow(props: Props) {
    // console.log(popupControl, setPopupControl)
    return (
        <FadeIn toggle={props["show"]} display={!props["show"]} duration={500}>
            <OverWrap>
                <div style={{height: "100%"}} onClick={props["onClick"]}>
                    {props.children}
                </div>
            </OverWrap>
        </FadeIn>
    )
}

export default PopupWindow