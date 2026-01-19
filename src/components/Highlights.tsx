import { Heart, Leaf, ShoppingBag } from 'lucide-react';

export default function Highlights() {
  const highlights = [
    {
      icon: Heart,
      title: 'Kiwi-Friendly',
      description: 'Loved by locals! We serve Kiwi favourites with a delicious twist.',
      color: '#FF6B35'
    },
    {
      icon: Leaf,
      title: 'Fresh Local Ingredients',
      description: 'We source the finest local produce to bring you authentic flavours.',
      color: '#2EC4B6'
    },
    {
      icon: ShoppingBag,
      title: 'Fast Takeaway',
      description: 'Quick service without compromising quality. Perfect for busy Aucklanders!',
      color: '#FFD166'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
                  style={{ backgroundColor: `${highlight.color}20`, borderColor: highlight.color, borderWidth: 2 }}
                >
                  <Icon className="w-10 h-10" style={{ color: highlight.color }} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
