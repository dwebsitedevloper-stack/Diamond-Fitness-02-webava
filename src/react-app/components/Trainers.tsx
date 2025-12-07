import { Star } from 'lucide-react';

export default function Trainers() {
  const trainers = [
    {
      name: 'Alexandra Sterling',
      title: 'Elite Transformation Expert',
      specialty: 'Strength & Conditioning',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop',
      rating: 5.0
    },
    {
      name: 'Marcus Diamond',
      title: 'Luxury Fitness Instructor',
      specialty: 'HIIT & Performance',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop',
      rating: 5.0
    },
    {
      name: 'Sophia Grace',
      title: 'Wellness & Balance Coach',
      specialty: 'Yoga & Mindfulness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      rating: 5.0
    },
    {
      name: 'James Platinum',
      title: 'Premium Performance Coach',
      specialty: 'Athletic Training',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop',
      rating: 5.0
    }
  ];

  return (
    <section id="trainers" className="py-32 ice-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 text-crystal"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Diamond Trainer Profiles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Meet our elite team of certified fitness professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-6 hover:crystal-glow transition-all duration-500 group animate-fadeInUp hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div className="w-full h-80 relative">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="absolute top-4 right-4 glass-strong px-3 py-1.5 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-semibold text-gray-800">{trainer.rating}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-1 text-gray-800" style={{ fontFamily: 'Playfair Display' }}>
                {trainer.name}
              </h3>
              <p className="text-blue-600 font-medium mb-2 text-sm">
                {trainer.title}
              </p>
              <p className="text-gray-600 text-sm font-light">
                {trainer.specialty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
