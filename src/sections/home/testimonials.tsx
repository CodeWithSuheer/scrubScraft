import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";

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
  {
    id: 4,
    name: "Nurse David Thompson",
    role: "ER Nurse",
    rating: 5,
    comment:
      "I love how durable these scrubs are. They've held up great after countless washes and still look professional.",
    avatar:
      "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/img04.png?v=1737191604",
  },
  {
    id: 5,
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
    <section className="py-20 text-white bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-center text-4xl sm:text-4xl font-bold mb-10"
        >
          What Our Customers Are Saying
        </motion.h2>
      </div>

      <div className="Marquee">
        <Marquee direction="left" className="testimonial_marquee mt-14">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: review.id * 0.1 }}
              className="bg-white text-gray-800 border rounded-lg shadow-lg p-6 max-w-sm mx-10 py-6"
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
        </Marquee>
      </div>
    </section>
  );
}
