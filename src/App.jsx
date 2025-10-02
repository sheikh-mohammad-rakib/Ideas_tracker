import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { UserProvider, useUser } from "./lib/context/user";
import { IdeasProvider } from "./lib/context/ideas";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 text-gray-900 pb-10">
      <UserProvider>
        <IdeasProvider>
          <Navbar />
          <main className="max-w-2xl mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </IdeasProvider>
      </UserProvider>
    </div>
  );
}

function Navbar() {
  const user = useUser();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg mb-6 rounded-b-lg">
      <a href="/" className="text-xl font-extrabold text-white drop-shadow">Idea Tracker</a>
      <div className="flex items-center gap-4">
        {user.current ? (
          <>
            <span className="text-sm text-white/80 font-medium">{user.current.email}</span>
            <button
              type="button"
              className="px-3 py-1 bg-white/20 text-white rounded hover:bg-white/40 transition font-semibold border border-white"
              onClick={() => user.logout()}
            >
              Logout
            </button>
          </>
        ) : (
          <a
            href="/login"
            className="px-3 py-1 bg-white/20 text-white rounded hover:bg-white/40 transition font-semibold border border-white"
          >
            Login
          </a>
        )}
      </div>
    </nav>
  );
}

export default App;
