import { ReactNode } from "react";
type Props = {
    ratio: number,
    children: ReactNode
}
export default function FlexRatio({ ratio, children }: Props) {
    return (
        <div style={{ flex: ratio }}>
            {children}
        </div>
    )
}