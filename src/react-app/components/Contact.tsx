import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 ice-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 text-crystal"
            style={{ fontFamily: 'Playfair Display' }}
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
            <h3 className="text-3xl font-semibold mb-8 text-gray-800" style={{ fontFamily: 'Playfair Display' }}>
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full glass-strong rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full glass-strong rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full glass-strong rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full glass-strong rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full glass-strong rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-none"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="glass rounded-3xl p-8">
              <h3 className="text-3xl font-semibold mb-6 text-gray-800" style={{ fontFamily: 'Playfair Display' }}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl crystal-border bg-gradient-to-br from-blue-50 to-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600 font-light">
                      123 Diamond Avenue<br />
                      Luxury District, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl crystal-border bg-gradient-to-br from-blue-50 to-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600 font-light">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl crystal-border bg-gradient-to-br from-blue-50 to-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600 font-light">info@diamondfitness.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl crystal-border bg-gradient-to-br from-blue-50 to-white flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                    <p className="text-gray-600 font-light">
                      Mon-Fri: 5:00 AM - 11:00 PM<br />
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
                  <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-3" strokeWidth={1.5} />
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
