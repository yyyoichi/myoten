import { ReactNode } from "react"

type MarginDirection = "marginRight" | "marginLeft" | "marginButton" | "marginTop"
type Props = {
    children: ReactNode
    marginDirection: MarginDirection
}
export default function FlexSpace({marginDirection, children}: Props) {
    let o: {[key in MarginDirection]: 0 | "auto"} = {
        marginRight: 0,
        marginLeft: 0,
        marginTop: 0,
        marginButton: 0
    }
    o[marginDirection] = "auto";
    return <div style={o}>
        {children}
    </div>
}