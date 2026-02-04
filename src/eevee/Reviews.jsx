import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("reviews");
    if (!stored) {
      localStorage.setItem("reviews", JSON.stringify([]));
    } else {
      setReviews(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;
    const newReview = {
      id: Date.now(),
      name,
      message,
      date: new Date().toLocaleString()
    };
    const updated = [...reviews, newReview];
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));
    setName("");
    setMessage("");
  };

  return (
    <section className="min-h-screen px-6 py-12 bg-gray-900 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-white mb-8">Reviews</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-gray-800 p-6 rounded-xl shadow-md mb-12"
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Leave a Review</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <textarea
          placeholder="Your Review"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          type="submit"
          className="bg-cyan-500 text-white px-6 py-3 rounded-md font-bold hover:bg-cyan-600 transition"
        >
          Submit
        </button>
      </form>

      <div className="w-full max-w-5xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition"
            onClick={() => navigate(`/reviews/${r.id}`)}
          >
            <h3 className="font-bold text-xl text-white">{r.name}</h3>
            <p className="text-gray-300 mt-2 line-clamp-3">{r.message}</p>
            <p className="text-gray-400 text-sm mt-2">{r.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
