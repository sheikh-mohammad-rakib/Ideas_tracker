import { useState } from "react";
import { useUser } from "../lib/context/user";
import { useIdeas } from "../lib/context/ideas";

export function Home() {
  const user = useUser();
  const ideas = useIdeas();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      await ideas.add({ userId: user.current.$id, title, description });
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 pb-10">
    {/* ...existing code... */}
      {/* Show the submit form to logged in users. */}
      {user.current ? (
        <section className="mb-8 bg-white/80 p-6 rounded-lg shadow-lg border border-purple-300">
          <h2 className="text-lg font-bold mb-4 text-purple-700">Submit Idea</h2>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              className="border border-pink-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/90"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              className="border border-pink-300 rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/90"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="self-end px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded shadow hover:from-purple-600 hover:to-pink-600 transition"
            >
              Submit
            </button>
          </form>
        </section>
      ) : (
        <section className="mb-8 bg-white/80 p-6 rounded-lg shadow-lg border border-pink-300 text-center">
          <p className="text-pink-600 font-semibold">Please login to submit an idea.</p>
        </section>
      )}
      <section className="bg-white/80 p-6 rounded-lg shadow-lg border border-blue-300">
        <h2 className="text-lg font-bold mb-4 text-blue-700">Latest Ideas</h2>
        <ul className="space-y-4">
          {ideas.current.map((idea) => (
            <li key={idea.$id} className="p-4 rounded-lg bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow flex flex-col gap-2">
              <strong className="text-purple-700 text-base">{idea.title}</strong>
              <p className="text-gray-700">{idea.description}</p>
              {/* Show the remove button to idea owner. */}
              {user.current && user.current.$id === idea.userId && (
                <button
                  type="button"
                  onClick={() => ideas.remove(idea.$id)}
                  className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded hover:from-pink-600 hover:to-purple-600 transition"
                >
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
