import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex flex-wrap gap-1 justify-end">
          {item.badges.map(badge => (
            <span
              key={badge}
              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                badge === 'veg' ? 'bg-green-500 text-white' :
                badge === 'spicy' ? 'bg-red-500 text-white' :
                badge === 'new' ? 'bg-[#FFD166] text-gray-900' :
                'bg-[#2EC4B6] text-white'
              }`}
            >
              {badge === 'veg' ? '🌱 VEG' :
               badge === 'spicy' ? '🌶️ SPICY' :
               badge === 'new' ? '✨ NEW' :
               '✓ HALAL'}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl text-gray-900 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#FF6B35]">
            ${item.price.toFixed(2)}
          </span>
          <span className="text-xs text-gray-500">GST incl.</span>
        </div>
      </div>
    </div>
  );
}
