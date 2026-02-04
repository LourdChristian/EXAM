import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ReviewDetail() {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("reviews");
    if (stored) {
      const found = JSON.parse(stored).find((r) => r.id === parseInt(id));
      if (found) setReview(found);
    }
  }, [id]);

  if (!review) return <p className="text-center mt-20 text-white">Review not found</p>;

  return (
    <section className="min-h-screen flex flex-col items-center px-6 py-12 bg-gray-900">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
      >
        ← Back
      </button>
      <div className="bg-gray-800 p-8 rounded-xl shadow-md max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-white mb-4">{review.name}</h1>
        <p className="text-gray-300 mb-4">{review.message}</p>
        <p className="text-gray-400 text-sm">{review.date}</p>
      </div>
    </section>
  );
}

export default ReviewDetail;
