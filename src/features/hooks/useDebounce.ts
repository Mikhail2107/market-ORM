import { useEffect, useState } from "react";


export function useDebonce<T>(value: T, delay: number) {
    const [debounce, setDebounce] = useState(value)
    
    useEffect((
        
    ) => {
        const timer = setTimeout(() => {
            setDebounce(value)
        }, delay)
        return () => {
          clearTimeout(timer)
        }
    }, [value, delay]);

    return debounce
}