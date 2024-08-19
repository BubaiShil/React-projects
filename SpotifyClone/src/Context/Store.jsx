import { useContext, createContext, useRef, useState ,useEffect} from "react"
import { songsData } from "../assets/assets"

export const StoreContext = createContext(null)

export const ContextProvider = (props) => {


    const audioRef = useRef()
    const SongBar = useRef()
    const SongBg = useRef()
    const [track, setTrack] = useState(songsData[1])
    const [playStatus, setPlayStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime : {
            second: 0,
            minute: 0
        },
        totalTime : {
            second: 0,
            minute: 0
        }
    })


    const Play=()=>{
        audioRef.current.play()
        setPlayStatus(true)
    }

    const Pause=()=>{
        audioRef.current.pause()
        setPlayStatus(false)
    }

    useEffect(() => {
      setTimeout(() => {

        audioRef.current.ontimeupdate=()=>{
            setTime({
                currentTime : {
                    second: Math.floor(audioRef.current.currentTime % 60),
                    minute: Math.floor(audioRef.current.currentTime / 60)
                },
                totalTime : {
                    second: Math.floor(audioRef.current.duration % 60),
                    minute: Math.floor(audioRef.current.duration / 60)
                }
            })
        }
      }, 1000);
    }, [audioRef])
    

    const ContextValue = {
        audioRef,
        SongBar,
        SongBg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        Play,
        Pause
    }


    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default function useStore() {
    return useContext(StoreContext)
}