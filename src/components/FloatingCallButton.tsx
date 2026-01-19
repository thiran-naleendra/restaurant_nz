import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+6499999999"
      className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#ff8555] rounded-full shadow-2xl flex items-center justify-center z-40 hover:scale-110 transition-transform duration-200 animate-pulse md:hidden"
      aria-label="Call Now"
    >
      <Phone className="w-7 h-7 text-white" />
    </a>
  );
}
