import { Dispatch, SetStateAction, useCallback, useState } from "react"

type PopupControl = "show" | "set" | "end"
type PopupWindowState = readonly [PopupControl,
    Dispatch<SetStateAction<PopupControl>>, {
        readonly show: () => void;
        readonly end: () => void;
        readonly reset: () => void;
    }]
// type UsePopupWindow = (defaultValue: PopupControl) => PopupWindowState
const usePopupWindow = (defaultValue: PopupControl = "set"): PopupWindowState => {
    const [popupControl, setPopupControl] = useState<PopupControl>(defaultValue)
    const show = useCallback(() => {
        setPopupControl("show")
    }, [])
    const end = useCallback(() => {
        setPopupControl("end")
    }, [])
    const reset = useCallback(() => {
        setPopupControl("set")
    }, [])
    return [popupControl, setPopupControl, { show, end, reset }] as const
}

export default usePopupWindow