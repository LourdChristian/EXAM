import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ReviewDetail() {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("reviews");
    if (stored) {
      const found = JSON.parse(stored).find(
        (r) => r.id === parseInt(id)
      );
      if (found) setReview(found);
    }
  }, [id]);

  if (!review) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900">
        <p className="text-gray-400">Review not found</p>
      </div>
    );
  }

  return (
    <motion.section
      className="min-h-screen bg-gray-900 px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Back Button */}
      <div className="mx-auto mb-8 max-w-3xl">
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-white transition hover:bg-cyan-600"
        >
          ← Back
        </button>
      </div>

      {/* Review Card */}
      <motion.div
        className="mx-auto max-w-3xl rounded-2xl border border-cyan-400/20 bg-black/40 p-10 shadow-xl shadow-cyan-500/10 backdrop-blur-sm"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-4 text-3xl font-extrabold text-white">
          {review.name}
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-gray-300">
          {review.message}
        </p>

        <p className="text-sm text-gray-400">{review.date}</p>
      </motion.div>
    </motion.section>
  );
}

export default ReviewDetail;
