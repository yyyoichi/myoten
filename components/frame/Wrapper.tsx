import React, { ReactNode } from "react";
import styles from "../../styles/Fram.module.css";
import Header from "./Header";
import Footer from "./Footer"
import FlexSpace from "../atom/flex/FlexSpace";
export default function Wrapper({ children }: { children: ReactNode }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            {children}
            <FlexSpace marginDirection={"marginTop"}>
                <Footer />
            </FlexSpace>
        </div>
    )
}