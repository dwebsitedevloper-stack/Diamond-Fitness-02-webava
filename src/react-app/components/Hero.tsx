import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden ice-gradient">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-200/20"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 3 + 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 glass rounded-full">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-700">Premium Fitness Experience</span>
          </div>
          
          <h1 
            className="text-6xl md:text-8xl font-bold mb-6 diamond-shimmer"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Elite Luxury<br />
            <span className="text-crystal">Fitness Club</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
            Experience the pinnacle of wellness in our crystal-clean, state-of-the-art facility
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group glass-strong hover:crystal-glow px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2">
              <span className="font-medium text-gray-800">Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="glass px-8 py-4 rounded-full transition-all duration-300 hover:crystal-glow">
              <span className="font-medium text-gray-700">Book a Tour</span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-20 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="relative glass rounded-3xl p-2 crystal-glow hover-shine">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop"
              alt="Luxury gym interior"
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
