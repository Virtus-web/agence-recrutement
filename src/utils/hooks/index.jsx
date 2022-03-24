import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context' 

export function useFetch(url) {

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        if (!url) return
            
            setLoading(true) //On vient le déclarer ici car avec les bloc try et catch il faut pouvoir le mettre en amont
            async function fetchData() {
                
                try {
                    const response = await fetch(url)
                    const data = await response.json()
                    setData(data)
                } catch (err) {
                    console.log(err)
                    setError(true)

                } finally {
                    setLoading(false)
                }
            }

        // setLoading(true) On le déclare plus haut l13
        fetchData()
    }, [url])

    return { isLoading, data, error }

}

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}
