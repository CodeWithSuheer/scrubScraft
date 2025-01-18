import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Dr. Jessica Lee",
    role: "Cardiologist",
    rating: 5,
    comment:
      "ScrubsCraft scrubs are a game-changer! The fabric is incredibly comfortable, and the fit is perfect for long shifts.",
    avatar:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/img06.png?v=1737191604",
  },
  {
    id: 2,
    name: "Nurse David Thompson",
    role: "ER Nurse",
    rating: 5,
    comment:
      "I love how durable these scrubs are. They've held up great after countless washes and still look professional.",
    avatar:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/img04.png?v=1737191604",
  },
  {
    id: 3,
    name: "Dr. Samantha Patel",
    role: "Pediatrician",
    rating: 4,
    comment:
      "The variety of colors and patterns is fantastic. My young patients love the fun designs!",
    avatar:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/img06.png?v=1737191604",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          What Our Customers Are Saying
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: review.id * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
