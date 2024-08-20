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

    const seekSong = async (e)=>{
        //console.log(e);
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / SongBg.current.offsetWidth)*audioRef.current.duration)
        
    }

    const PreviousSong = async ()=>{
        if (track.id>0) {
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play()
            setPlayStatus(true)
        }
    }


    const NextSong = async ()=>{
        if (track.id<songsData.length-1) {
            await setTrack(songsData[track.id+1]);
            await audioRef.current.play()
            setPlayStatus(true)
        }
    }


    const SongPlayId = async(id)=>{
        await setTrack(songsData[id]);
        await audioRef.current.play()
        setPlayStatus(true)
    }
    

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
            SongBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration*100))+"%"
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
        Pause,
        SongPlayId,
        PreviousSong,
        NextSong,
        seekSong
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