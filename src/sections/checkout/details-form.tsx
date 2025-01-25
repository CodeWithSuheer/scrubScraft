import { useState, useRef } from "react";
import { validateForm } from "./validateForm";
import toast from "react-hot-toast";

export default function DetailsForm() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
    postal_code: "",
    address: "",
  });

  const initialFormState = {
    fullname: "",
    email: "",
    phone: "",
    city: "",
    postal_code: "",
    address: "",
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validateForm(formData);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      const data = await response.json();
      console.log("Order successful:", data);
      alert("Order placed successfully!");

      setFormData(initialFormState);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting order. Please try again.");
    }
  };

  return (
    <div className="px-2 py-10 text-gray-900 md:px-2">
      <div className="flow-root">
        <div className="-my-6 divide-y divide-gray-200">
          <div className="py-0">
            <h3
              id="contact-info-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Contact Information
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-5">
              <div className="mb-3 grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-4">
                <input
                  name="fullname"
                  type="text"
                  placeholder="Enter Full Name"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-white text-[#333] w-full text-md border rounded-md border-gray-400 focus:border-gray-500 outline-none placeholder:text-gray-400 transition-shadow duration-200 focus:shadow-md"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-white text-[#333] w-full text-md border rounded-md border-gray-400 focus:border-gray-500 outline-none placeholder:text-gray-400 transition-shadow duration-200 focus:shadow-md"
                  required
                />
                <input
                  name="phone"
                  type="number"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-white text-[#333] w-full text-md border rounded-md border-gray-400 focus:border-gray-500 outline-none placeholder:text-gray-400 transition-shadow duration-200 focus:shadow-md"
                  required
                />
                <input
                  name="city"
                  type="text"
                  placeholder="Enter City Name"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-white text-[#333] w-full text-md border rounded-md border-gray-400 focus:border-gray-500 outline-none placeholder:text-gray-400 transition-shadow duration-200 focus:shadow-md"
                  required
                />
                <input
                  name="postal_code"
                  type="number"
                  placeholder="Enter Postal Code"
                  value={formData.postal_code}
                  onChange={handleInputChange}
                  className="px-4 py-3 bg-white text-[#333] w-full text-md border rounded-md border-gray-400 focus:border-gray-500 outline-none placeholder:text-gray-400 transition-shadow duration-200 focus:shadow-md"
                  required
                />
              </div>

              <textarea
                rows={4}
                name="address"
                placeholder="Enter Shipping Address"
                value={formData.address}
                onChange={handleInputChange}
                className="px-4 py-3 bg-white text-[#333] w-full text-md border rounded-md border-gray-400 focus:border-gray-500 outline-none placeholder:text-gray-400 transition-shadow duration-200 focus:shadow-md"
                required
              ></textarea>

              <div className="buttons">
                <button
                  type="submit"
                  className="mt-5 py-3 text-center hover:bg-primary/90 bg-primary text-white w-full rounded-md"
                >
                  Order Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
