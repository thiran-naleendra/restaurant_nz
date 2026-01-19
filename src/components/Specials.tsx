import { Sparkles } from 'lucide-react';
import { menuItems } from '../data/menuData';
import MenuCard from './MenuCard';

export default function Specials() {
  const featuredItems = menuItems.filter(item => item.featured);

  return (
    <section id="specials" className="py-20 bg-gradient-to-br from-[#0B1320] to-[#1a2332]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#FFD166]/10 border border-[#FFD166]/30 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-[#FFD166]" />
            <span className="text-[#FFD166] font-medium">Limited Time</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Today's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FFD166]">Specials</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't miss out on these chef-selected favourites!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
