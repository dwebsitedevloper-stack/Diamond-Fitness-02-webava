import { Sparkles, Zap, Heart, Trophy, TrendingUp } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Sparkles,
      title: 'Diamond Transformation',
      duration: '12 Weeks',
      description: 'Complete body transformation with personalized nutrition and training',
      features: ['Personal Training', 'Meal Planning', 'Body Composition Analysis', 'Weekly Check-ins']
    },
    {
      icon: Zap,
      title: 'Premium Personal Training',
      duration: 'Ongoing',
      description: 'One-on-one coaching tailored to your specific fitness goals',
      features: ['Custom Workouts', 'Form Coaching', 'Progress Tracking', 'Flexible Scheduling']
    },
    {
      icon: Heart,
      title: 'Wellness & Balance Program',
      duration: '8 Weeks',
      description: 'Holistic approach combining fitness, mindfulness, and recovery',
      features: ['Yoga Classes', 'Meditation', 'Nutrition Guidance', 'Stress Management']
    },
    {
      icon: Trophy,
      title: 'Sculpt & Tone',
      duration: '6 Weeks',
      description: 'Targeted training for lean muscle development and definition',
      features: ['Resistance Training', 'Cardio Conditioning', 'Body Sculpting', 'Flexibility Work']
    },
    {
      icon: TrendingUp,
      title: 'High-End Conditioning',
      duration: '10 Weeks',
      description: 'Advanced athletic performance and conditioning program',
      features: ['HIIT Workouts', 'Plyometrics', 'Speed Training', 'Endurance Building']
    }
  ];

  return (
    <section id="programs" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 text-crystal"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Premium Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Expertly designed programs to help you achieve your fitness aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="glass rounded-3xl p-8 hover:crystal-glow transition-all duration-300 animate-fadeInUp animate-float hover-shine"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: `${3 + index * 0.5}s`
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800" style={{ fontFamily: 'Playfair Display' }}>
                    {program.title}
                  </h3>
                  <span className="text-sm font-medium text-blue-600 glass px-3 py-1 rounded-full">
                    {program.duration}
                  </span>
                </div>
                
                <p className="text-gray-600 font-light mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <ul className="space-y-3">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full mt-8 glass-strong hover:crystal-glow py-3 rounded-xl transition-all duration-300 font-medium text-gray-800">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
