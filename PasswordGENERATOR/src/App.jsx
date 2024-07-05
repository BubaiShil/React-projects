import { useState ,useCallback,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [CharAllowed,setCharAllowed] = useState(false)
  const [NumberAllowed,setNumberAllowed] = useState(false)
  const [password,setPassword] = useState("")


  const updatePass = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(CharAllowed){
      str += "!@#$%^&*~"
    }
    if(NumberAllowed){
      str += "123456789"
    }

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass+=str.charAt(char)
    }

    setPassword(pass)

  },[length,CharAllowed,NumberAllowed,setPassword])


  useEffect(()=>{
    updatePass()
  },[length,CharAllowed,NumberAllowed])
  
  return (
    <>
      <div>
        <input type="text" value={password} />
      </div>
       <div>
        <button type="button">Copy</button>
       </div>
       <div>
        <label>Length{length}</label>
        <input type="range" min={5} max={56} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
        
       </div>
       <div>
        <label>Special Charater</label>
        <input type="checkbox" defaultChecked={CharAllowed} onChange={()=>{setCharAllowed((prev)=> !prev)}} />
       </div>
       <div>
        <label >Numbers</label>
        <input type="checkbox" defaultChecked={NumberAllowed} onChange={()=>{setNumberAllowed((prev)=> !prev)}}/>
       </div>
    </>
  )
}

export default App
