import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header or navigation bar */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/login" className="hover:underline">Login</a>
            </li>
            <li>
              <a href="/signup" className="hover:underline">Sign Up</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content area where child routes will be rendered */}
      <main >
        <Outlet /> {/* This will render the current route's component */}
      </main>

      {/* Footer or additional layout elements */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 </p>
      </footer>
    </div>
  );
}

export default App;

