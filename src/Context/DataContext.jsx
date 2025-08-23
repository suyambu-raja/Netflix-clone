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
                cards, setCards, slidingCards, setSlidingCards,
                authc, setAuthc, signOut, setSignOut
            }}
        >{children}</DataContext.Provider>
    )
}



export default DataContext;

/*  {
   "adult": false,
   "backdrop_path": "/zNriRTr0kWwyaXPzdg1EIxf0BWk.jpg",
   "genre_ids": [
       878,
       12,
       28
   ],
   "id": 1234821,
   "original_language": "en",
   "original_title": "Jurassic World Rebirth",
   "overview": "Five years after the events of Jurassic World Dominion, covert operations expert Zora Bennett is contracted to lead a skilled team on a top-secret mission to secure genetic material from the world's three most massive dinosaurs. When Zora's operation intersects with a civilian family whose boating expedition was capsized, they all find themselves stranded on an island where they come face-to-face with a sinister, shocking discovery that's been hidden from the world for decades.",
   "popularity": 554.8251,
   "poster_path": "/1RICxzeoNCAO5NpcRMIgg1XT6fm.jpg",
   "release_date": "2025-07-01",
   "title": "Jurassic World Rebirth",
   "video": false,
   "vote_average": 6.378,
   "vote_count": 1649
} */