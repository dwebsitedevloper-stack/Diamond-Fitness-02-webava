import { Dumbbell, Heart, Users, Zap } from 'lucide-react';

export default function GymAreas() {
  const areas = [
    {
      icon: Dumbbell,
      title: 'Elite Strength Zone',
      description: 'Premium equipment for serious strength training and muscle building',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop'
    },
    {
      icon: Zap,
      title: 'Crystal Cardio Section',
      description: 'State-of-the-art cardio machines with entertainment systems',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop'
    },
    {
      icon: Heart,
      title: 'Diamond Yoga & Wellness Studio',
      description: 'Serene space for yoga, meditation, and mindfulness practices',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop'
    },
    {
      icon: Users,
      title: 'Premium Personal Training Area',
      description: 'Private zones for one-on-one coaching and specialized training',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="gym-areas" className="py-32 ice-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 text-crystal"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Premium Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Every zone is meticulously designed to provide the ultimate training environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="glass rounded-3xl overflow-hidden hover:crystal-glow transition-all duration-500 group animate-fadeInUp hover-shine"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Playfair Display' }}>
                    {area.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
