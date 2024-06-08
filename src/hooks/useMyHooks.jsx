import { useEffect, useState } from "react"

const useMyHook = (url) => {
    
    const [data, setData] = useState(null)
    const [isErr, setIsErr] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(respont => {
                if(!respont.ok){
                    throw Error("Tidak bisa melakukan fetching ke " + url)
                }
                return respont.json()
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setIsErr(null)
            })
            .catch(err => {
                setIsErr(err.message)
                setIsLoading(false)
            })
        }, 3000);
    }, [url])

    return {data, isErr, isLoading}
}

export default useMyHook;