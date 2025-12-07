import { Check, Crown, Gem, Star } from 'lucide-react';

export default function Membership() {
  const tiers = [
    {
      name: 'Silver',
      icon: Star,
      price: '99',
      period: 'month',
      description: 'Perfect for getting started with premium fitness',
      features: [
        'Gym access 6am-10pm',
        'All equipment access',
        'Group classes (5/month)',
        'Locker facility',
        'Free WiFi',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Platinum',
      icon: Crown,
      price: '199',
      period: 'month',
      description: 'Enhanced experience with exclusive benefits',
      features: [
        '24/7 gym access',
        'All equipment access',
        'Unlimited group classes',
        'Personal locker',
        'Guest privileges (2/month)',
        'Nutrition consultation',
        'Spa & recovery access',
        'Priority booking'
      ],
      popular: true
    },
    {
      name: 'Diamond Elite',
      icon: Gem,
      price: '399',
      period: 'month',
      description: 'Ultimate luxury fitness membership',
      features: [
        'VIP 24/7 access',
        'Private training zone',
        'Unlimited classes',
        'Personal trainer (4 sessions)',
        'Unlimited guests',
        'Complimentary spa treatments',
        'Concierge service',
        'Premium parking',
        'Meal prep service',
        'Recovery suite access'
      ],
      popular: false
    }
  ];

  return (
    <section id="membership" className="py-32 ice-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 text-crystal"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Membership Tiers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Choose the perfect membership level for your fitness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={index}
                className={`glass rounded-3xl p-8 transition-all duration-300 animate-fadeInUp hover-shine relative ${
                  tier.popular ? 'crystal-glow ring-2 ring-blue-400 scale-105' : 'hover:crystal-glow'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="glass-strong px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl ${
                    tier.popular 
                      ? 'bg-gradient-to-br from-blue-400 to-blue-600' 
                      : 'crystal-border bg-gradient-to-br from-blue-50 to-white'
                  } flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 ${tier.popular ? 'text-white' : 'text-blue-600'}`} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2 text-gray-800" style={{ fontFamily: 'Playfair Display' }}>
                    {tier.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 font-light mb-6">
                    {tier.description}
                  </p>
                  
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-crystal" style={{ fontFamily: 'Playfair Display' }}>
                      ${tier.price}
                    </span>
                    <span className="text-gray-600 ml-2">/{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl transition-all duration-300 font-semibold ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-400/50'
                    : 'glass-strong hover:crystal-glow text-gray-800'
                }`}>
                  Get Started
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
