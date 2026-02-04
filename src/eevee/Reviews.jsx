import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
      date: new Date().toLocaleString(),
    };

    const updated = [...reviews, newReview];
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));
    setName("");
    setMessage("");
  };

  return (
    <motion.section
      className="min-h-screen bg-gray-900 px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="mb-14 text-center">
        <h1 className="text-5xl font-extrabold text-white">
          User <span className="text-cyan-400">Feedback</span>
        </h1>
        <p className="mt-3 text-gray-400">
          Hear what others say about my work or leave your own review.
        </p>
      </div>

      {/* Layout */}
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-cyan-400/20 bg-black/40 p-8 shadow-xl shadow-cyan-500/10 backdrop-blur-sm"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-2xl font-bold text-white">
            Write a Review
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 w-full rounded-lg border border-gray-700 bg-gray-800/70 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <textarea
            placeholder="Tell us what you think..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mb-6 w-full rounded-lg border border-gray-700 bg-gray-800/70 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500 py-3 font-bold text-white transition hover:bg-cyan-600"
          >
            Submit Review
          </button>
        </motion.form>

        {/* Reviews / Empty State */}
        <div className="flex flex-col justify-center">
          {reviews.length === 0 ? (
            <p className="text-center italic text-gray-400">
              No feedback yet. Be the first!
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {reviews.map((r) => (
                <motion.div
                  key={r.id}
                  className="cursor-pointer rounded-xl border border-gray-700 bg-gray-800/70 p-6 transition hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => navigate(`/reviews/${r.id}`)}
                >
                  <h3 className="text-xl font-bold text-white">{r.name}</h3>
                  <p className="mt-2 line-clamp-3 text-gray-300">
                    {r.message}
                  </p>
                  <p className="mt-3 text-sm text-gray-400">{r.date}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default Reviews;
