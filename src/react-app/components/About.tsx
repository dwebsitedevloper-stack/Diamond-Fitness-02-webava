import { Award, Users, Trophy, Star } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Premium Excellence',
      description: 'World-class facilities with cutting-edge equipment and pristine environments'
    },
    {
      icon: Users,
      title: 'Elite Trainers',
      description: 'Certified experts dedicated to your transformation and wellness goals'
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: 'Join thousands who have achieved their fitness dreams with our programs'
    },
    {
      icon: Star,
      title: 'Luxury Amenities',
      description: 'Spa-quality facilities, premium products, and exclusive member benefits'
    }
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 text-crystal"
            style={{ fontFamily: 'Playfair Display' }}
          >
            The Diamond Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Where luxury meets performance. Our state-of-the-art facility offers an unparalleled 
            fitness experience designed for those who demand excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:crystal-glow transition-all duration-300 animate-fadeInUp hover-shine group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Playfair Display' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '10K+', label: 'Members' },
            { value: '50+', label: 'Expert Trainers' },
            { value: '24/7', label: 'Access' },
            { value: '15+', label: 'Years Excellence' }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fadeInUp" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
              <div className="text-4xl md:text-5xl font-bold text-crystal mb-2" style={{ fontFamily: 'Playfair Display' }}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
