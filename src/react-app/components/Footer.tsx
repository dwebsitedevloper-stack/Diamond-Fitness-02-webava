import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
              <span className="text-2xl font-semibold" style={{ fontFamily: 'Playfair Display' }}>
                Diamond Fitness
              </span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              Elite luxury fitness experience with premium facilities and expert trainers.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                <Youtube className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['About', 'Gym Areas', 'Equipment', 'Trainers'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Programs
            </h3>
            <ul className="space-y-3">
              {['Diamond Transformation', 'Personal Training', 'Group Classes', 'Wellness Program'].map((program) => (
                <li key={program}>
                  <a href="#programs" className="text-gray-400 hover:text-white transition-colors font-light">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Contact
            </h3>
            <ul className="space-y-3 text-gray-400 font-light">
              <li>123 Diamond Avenue</li>
              <li>Luxury District, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>info@diamondfitness.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 font-light">
          <p>&copy; 2025 Diamond Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
