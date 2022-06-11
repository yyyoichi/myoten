import { ReactNode } from "react"
import FadeIn from "../anime/FadeIn"
import OverWrap from "../atom/OverWrap"

import styles from "../../styles/PopupWindow.module.css"

type Props = {
    children: ReactNode,
    onClick: () => void,
    show: boolean
}
function PopupWindow({ children, onClick, show }: Props) {
    // console.log(popupControl, setPopupControl)
    return (
        <FadeIn toggle={show} display={!show} duration={500}>
            <OverWrap>
                <div className={styles.tapScreen} onClick={onClick}>
                </div>
                {children}
            </OverWrap>
        </FadeIn>
    )
}

export default PopupWindow