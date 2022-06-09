import { createContext, useContext } from "react";

/**
 * @returns [useContext, Provider]
 */
export default function createTypeContext<T>() {
    const cxt = createContext<T | undefined>(undefined)
    function useCxt() {
        const c = useContext(cxt)
        if(!c) throw new Error("useCtx must be inside a Provider with a value")
        return c
    }
    return [useCxt, cxt.Provider] as const
}
