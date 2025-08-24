import { createContext, useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [cards, setCards] = useState([])
    const [slidingCards, setSlidingCards] = useState(0)
    const [authc, setAuthc] = useState(true)
    const [signOut, setSignOut] = useState(true)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        onAuthStateChanged(auth, async (user) => {
            if (user) {
                console.log("Logged In")
                navigate('/')
            } else {
                console.log("Logged Out")
                navigate('/authPage')
            }

        })
    }, [])

    return (

            <DataContext.Provider
                value={{
                    cards, setCards, slidingCards, setSlidingCards,loading, setLoading,
                    authc, setAuthc, signOut, setSignOut
                }}
            >{children}</DataContext.Provider>
    )
}



export default DataContext;
