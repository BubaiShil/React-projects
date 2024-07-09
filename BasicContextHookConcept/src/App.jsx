//import { useState } from 'react'
import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import { ContextProvider } from './Contexts/Login'


function App() {
  const [user, setUser] = useState(null);

  return (
    <ContextProvider value={{user, setUser}}>
    <div>
        <h2>CONTEXT api</h2>
        <Login/>
        <Profile/>
    </div>
    </ContextProvider>
  )
}

export default App
