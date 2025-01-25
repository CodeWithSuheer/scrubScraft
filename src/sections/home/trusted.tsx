import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";

const reviews = [
  {
    name: "Dr. Sarah Johnson",
    role: "Pediatrician",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    text: "The most comfortable scrubs I've ever worn. Perfect for long shifts.",
    rating: 5,
  },
  {
    name: "Dr. Michael Chen",
    role: "Surgeon",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
    text: "Premium quality that maintains its professional look even after multiple washes.",
    rating: 5,
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Pediatrician",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    text: "The most comfortable scrubs I've ever worn. Perfect for long shifts.",
    rating: 5,
  },
  {
    name: "Dr. Michael Chen",
    role: "Surgeon",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
    text: "Premium quality that maintains its professional look even after multiple washes.",
    rating: 5,
  },
  {
    name: "Nurse Emma Wilson",
    role: "ER Nurse",
    image:
      "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80",
    text: "Finally found scrubs that combine style with functionality. Absolutely love them!",
    rating: 5,
  },
];

export default function Trusted() {
  return (
    <>
      <section className="pt-20 pb-12 bg-gray-50">
        <div className="container mx-auto px-0">
          <div className="text-center max-w-3xl mx-auto mb-16 px-4 sm:px-0">
            <h2 className="text-4xl font-bold mb-6">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Here's what our customers have to
              say about their ScrubsCraft experience.
            </p>
          </div>

          <div className="Marquee">
            <Marquee direction="left" className="testimonial_marquee mt-14 pb-10">
              {reviews.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl max-w-md mx-6 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
}
