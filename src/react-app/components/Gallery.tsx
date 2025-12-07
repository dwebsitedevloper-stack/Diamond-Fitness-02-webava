export default function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      title: 'Strength Training Zone'
    },
    {
      url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=800&fit=crop',
      title: 'Premium Cardio Area'
    },
    {
      url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop',
      title: 'Yoga Studio'
    },
    {
      url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop',
      title: 'Modern Equipment'
    },
    {
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
      title: 'Personal Training'
    },
    {
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=800&fit=crop',
      title: 'Free Weights Section'
    },
    {
      url: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=600&h=400&fit=crop',
      title: 'Functional Training'
    },
    {
      url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop',
      title: 'Elite Coaching'
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 text-crystal"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Experience the elegance of our crystal-clean facilities
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-6 animate-fadeInUp hover-shine"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass rounded-2xl overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Playfair Display' }}>
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
