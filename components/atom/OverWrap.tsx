import { ReactNode } from "react";

type Props = {
    children: ReactNode,
    backgroundColor?: string
}

export default function OverWrap({ children, backgroundColor }: Props) {
    return <div style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "100",
        height: "110vmax",
        width: "100vw",
        backgroundColor: backgroundColor || "#a9a9a9cc"
    }}>
        {children}
    </div>
}