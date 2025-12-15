import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState, FormEvent, ChangeEvent } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });

  // Handle name input - only alphabets and spaces
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only letters and spaces
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setFormData({ ...formData, name: value });
    }
  };

  // Handle phone number input - only digits, max 10
  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only digits and limit to 10
    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, number: value });
    }
  };

  // Handle message input
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, message: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate phone number length
    if (formData.number.length !== 10) {
      setFormStatus("Error: Phone number must be exactly 10 digits");
      setTimeout(() => setFormStatus(""), 3000);
      return;
    }

    setIsSubmitting(true);
    setFormStatus("");

    const searchParams = new URLSearchParams();
    searchParams.append("name", formData.name);
    searchParams.append("number", formData.number);
    searchParams.append("message", formData.message);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw7MM5zpd7V_N7tb06JRgkeWAs6IDK2ZXIeeLxIKfu6TQilcidM4E7Uelf1Ar6x0zAJPA/exec",
        {
          method: "POST",
          body: searchParams,
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        setFormStatus("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", number: "", message: "" });

        // Clear status message after 3 seconds
        setTimeout(() => {
          setFormStatus("");
        }, 3000);
      } else {
        setFormStatus(`Error: ${result.error || "Something went wrong"}`);

        // Clear error message after 3 seconds
        setTimeout(() => {
          setFormStatus("");
        }, 3000);
      }
    } catch (error) {
      setFormStatus(
        `Error: ${error instanceof Error ? error.message : "Failed to submit"}`
      );

      // Clear error message after 3 seconds
      setTimeout(() => {
        setFormStatus("");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 ice-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 text-crystal"
            style={{ fontFamily: "Playfair Display" }}
          >
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Ready to begin your transformation? Contact us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 lg:p-12 animate-fadeInUp">
            <h3
              className="text-3xl font-semibold mb-8 text-gray-800"
              style={{ fontFamily: "Playfair Display" }}
            >
              Send us a Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleNameChange}
                  required
                  disabled={isSubmitting}
                  className="w-full glass-strong rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 disabled:opacity-50"
                  placeholder="John Doe"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Only letters and spaces allowed
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.number}
                  onChange={handleNumberChange}
                  required
                  disabled={isSubmitting}
                  className="w-full glass-strong rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 disabled:opacity-50"
                  placeholder="1234567890"
                />
                <p className="text-xs text-gray-500 mt-1">
                  10 digits only ({formData.number.length}/10)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={handleMessageChange}
                  rows={5}
                  required
                  disabled={isSubmitting}
                  className="w-full glass-strong rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-none disabled:opacity-50"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              {/* Status Message */}
              {formStatus && (
                <div
                  className={`p-4 rounded-xl text-center font-medium ${
                    formStatus.includes("Error")
                      ? "bg-red-100 text-red-700 border border-red-300"
                      : "bg-green-100 text-green-700 border border-green-300"
                  }`}
                >
                  {formStatus}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div
            className="space-y-8 animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="glass rounded-3xl p-8">
              <h3
                className="text-3xl font-semibold mb-6 text-gray-800"
                style={{ fontFamily: "Playfair Display" }}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl crystal-border bg-gradient-to-br from-blue-50 to-white flex items-center justify-center flex-shrink-0">
                    <MapPin
                      className="w-6 h-6 text-blue-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600 font-light">
                      123 Diamond Avenue
                      <br />
                      Luxury District, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl crystal-border bg-gradient-to-br from-blue-50 to-white flex items-center justify-center flex-shrink-0">
                    <Phone
                      className="w-6 h-6 text-blue-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600 font-light">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl crystal-border bg-gradient-to-br from-blue-50 to-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600 font-light">
                      info@diamondfitness.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl crystal-border bg-gradient-to-br from-blue-50 to-white flex items-center justify-center flex-shrink-0">
                    <Clock
                      className="w-6 h-6 text-blue-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                    <p className="text-gray-600 font-light">
                      Mon-Fri: 5:00 AM - 11:00 PM
                      <br />
                      Sat-Sun: 6:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass rounded-3xl overflow-hidden h-80">
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin
                    className="w-12 h-12 text-blue-400 mx-auto mb-3"
                    strokeWidth={1.5}
                  />
                  <p className="text-gray-600 font-light">Map View</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
