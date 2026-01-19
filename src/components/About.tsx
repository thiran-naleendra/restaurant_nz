import { Users, ShoppingBag, MapPin } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'Perfect for family gatherings and celebrations'
    },
    {
      icon: ShoppingBag,
      title: 'Takeaway Available',
      description: 'Quick pickup for busy schedules'
    },
    {
      icon: MapPin,
      title: 'Locally Sourced',
      description: 'Supporting NZ farmers and producers'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-[#FF6B35]">KiwiBites</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Welcome to KiwiBites, Auckland's favourite spot for fresh, flavourful dining.
              We're passionate about bringing you the best fusion cuisine using locally sourced
              ingredients and authentic recipes passed down through generations.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Whether you're looking for a quick takeaway lunch, a family dinner, or catering
              for your next event, we've got you covered with our diverse menu of Kiwi favourites
              and international delights.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#FF6B35] to-[#2EC4B6] rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant interior"
                className="rounded-2xl shadow-xl h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chef cooking"
                className="rounded-2xl shadow-xl h-64 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh ingredients"
                className="rounded-2xl shadow-xl h-64 object-cover -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy customers"
                className="rounded-2xl shadow-xl h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
