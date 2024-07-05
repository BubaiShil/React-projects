import { useState ,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(6)
  const [CharAllowed,setCharAllowed] = useState(false)
  const [NumberAllowed,setNumberAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passRef = useRef(null)

  const updatePass = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    
    if(NumberAllowed){
      str += "123456789"
    }

    if(CharAllowed){
      str += "!@#$%^&*~"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass+=str.charAt(char)
    }

    setPassword(pass)

  },[length,CharAllowed,NumberAllowed,setPassword])


  const copyToClipboard = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  
  useEffect(()=>{
    updatePass()
  },[length,CharAllowed,NumberAllowed,updatePass])
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <input
          type="text"
          value={password}
          ref={passRef}
          readOnly
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <div
          className="bg-blue-500 text-white text-center py-2 rounded cursor-pointer mb-4"
          onClick={copyToClipboard}
        >
          Copy
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Length: {length}</label>
          <input
            type="range"
            min={0}
            max={56}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="text-gray-700 mr-2">Special Characters</label>
          <input
            type="checkbox"
            checked={CharAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="form-checkbox"
          />
        </div>
        <div className="flex items-center">
          <label className="text-gray-700 mr-2">Numbers</label>
          <input
            type="checkbox"
            checked={NumberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="form-checkbox"
          />
        </div>
      </div>
    </div>
  )
}

export default App
