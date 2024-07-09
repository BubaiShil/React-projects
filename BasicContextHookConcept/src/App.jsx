//import { useState } from 'react'
import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import { ContextProvider } from './Contexts/Login'


function App() {
  const [user, setUser] = useState(null);

  return (
    <ContextProvider value={{ user, setUser }}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-8">CONTEXT API</h2>
        <div className="bg-white p-6 rounded shadow-md w-96">
          <Login />
        </div>
        <div className="bg-white p-6 rounded shadow-md w-96 mt-4">
          <Profile />
        </div>
      </div>
    </ContextProvider>
  )
}

export default App
