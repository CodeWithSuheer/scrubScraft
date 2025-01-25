import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto px-4 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Have questions? We're here to help. Contact our customer support
                team anytime.
              </p>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-600">1-800-SCRUBS</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">support@scrubscraft.com</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-gray-600">
                      123 Medical Drive, Healthcare City, HC 12345
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-white p-4 sm:p-8 rounded-2xl border border-gray-200 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Phone
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
