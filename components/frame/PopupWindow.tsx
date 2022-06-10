import { ReactNode } from "react"
import { PopupWindowState, usePopupWindow } from "../../lib/popup/usePopupWindow"

type Props = {
    children: ReactNode,
    popupWindowState?: PopupWindowState
}
function PopupWindow(props: Props) {
    const [popupControl, setPopupControl, funcs] = props["popupWindowState"] || usePopupWindow("set")
    // console.log(popupControl, setPopupControl)
    return (
        <div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default PopupWindow