import { useState } from "react";
import { useUser } from "../lib/context/user";

export function Login() {
  const user = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="max-w-md mx-auto bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-6 rounded-lg shadow-lg mt-10 border border-pink-300">
      <h1 className="text-xl font-extrabold mb-4 text-center text-purple-700 drop-shadow">Login or Register</h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          className="border border-purple-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/90"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          className="border border-purple-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/90"
        />
        <div className="flex gap-2 justify-end">
          <button
            type="button"
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded shadow hover:from-purple-600 hover:to-pink-600 transition"
            onClick={() => user.login(email, password)}
          >
            Login
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded shadow hover:from-blue-600 hover:to-purple-600 transition"
            onClick={() => user.register(email, password)}
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
