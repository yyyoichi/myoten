import { ReactNode } from "react";

export default function OverWrap({ children }: { children: ReactNode }) {
    return <div style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "100",
        height: "110vmax",
        width: "100vw",
        backgroundColor: "#a9a9a9cc"
    }}>
        {children}
    </div>
}