import { useState, useEffect } from "react"

const useIsOnline = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)
    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        })

        window.addEventListener('online', () => {
            setOnlineStatus(true);
        })
    }, [])

    return onlineStatus;
}

export default useIsOnline;