import { Weight, Activity, Target, TrendingUp } from 'lucide-react';

export default function Equipment() {
  const categories = [
    {
      icon: Weight,
      title: 'Strength Machines',
      items: ['Cable Machines', 'Smith Machines', 'Leg Press', 'Chest Press'],
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&h=300&fit=crop'
    },
    {
      icon: Activity,
      title: 'Cardio Machines',
      items: ['Treadmills', 'Ellipticals', 'Rowing Machines', 'Bikes'],
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=300&fit=crop'
    },
    {
      icon: Target,
      title: 'Free Weights',
      items: ['Dumbbells', 'Barbells', 'Kettlebells', 'Weight Plates'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop'
    },
    {
      icon: TrendingUp,
      title: 'Functional Training',
      items: ['TRX Bands', 'Medicine Balls', 'Battle Ropes', 'Plyometric Boxes'],
      image: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="equipment" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 text-crystal"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Crystal Equipment Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            The finest selection of professional-grade fitness equipment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl overflow-hidden hover:crystal-glow transition-all duration-300 group animate-fadeInUp hover-shine"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl crystal-border bg-gradient-to-br from-blue-50 to-white flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800" style={{ fontFamily: 'Playfair Display' }}>
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 font-light flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
