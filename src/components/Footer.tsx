import { Phone, Mail, MapPin, Instagram, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B1320] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] to-[#2EC4B6] rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-[#FF6B35]">Kiwi</span>
                <span className="text-[#2EC4B6]">Bites</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Fresh, flavourful dining in the heart of Auckland CBD. Your favourite spot for premium casual dining.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#2EC4B6] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FFD166]">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Menu', 'Specials', 'Gallery', 'About', 'Location', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FFD166]">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Thursday</li>
              <li className="text-white">11:00am - 9:30pm</li>
              <li className="mt-3">Friday - Saturday</li>
              <li className="text-white">11:00am - 10:00pm</li>
              <li className="mt-3">Sunday</li>
              <li className="text-white">11:00am - 9:30pm</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FFD166]">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#2EC4B6] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Queen Street<br />
                  Auckland CBD, 1010<br />
                  New Zealand
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                <a href="tel:+6499999999" className="text-gray-400 hover:text-white transition-colors">
                  09 999 9999
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FFD166] flex-shrink-0" />
                <a href="mailto:hello@kiwibites.co.nz" className="text-gray-400 hover:text-white transition-colors">
                  hello@kiwibites.co.nz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 KiwiBites Restaurant. All rights reserved. All prices in NZD, GST included.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-[#FF6B35] mx-1 fill-current" /> in Auckland, NZ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
