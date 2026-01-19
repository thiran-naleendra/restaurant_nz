import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
  const hours = [
    { day: 'Monday', time: '11:00am - 9:30pm' },
    { day: 'Tuesday', time: '11:00am - 9:30pm' },
    { day: 'Wednesday', time: '11:00am - 9:30pm' },
    { day: 'Thursday', time: '11:00am - 9:30pm' },
    { day: 'Friday', time: '11:00am - 10:00pm' },
    { day: 'Saturday', time: '11:00am - 10:00pm' },
    { day: 'Sunday', time: '11:00am - 9:30pm' }
  ];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit <span className="text-[#2EC4B6]">Us</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find us in the heart of Auckland CBD
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-96 lg:h-full rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12686.82579524768!2d174.76085!3d-36.84846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%20CBD%2C%20Auckland%201010!5e0!3m2!1sen!2snz!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KiwiBites Location"
            ></iframe>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Address</h3>
                  <p className="text-gray-600">
                    123 Queen Street<br />
                    Auckland CBD<br />
                    Auckland 1010, New Zealand
                  </p>
                  <a
                    href="https://maps.google.com/?q=Auckland+CBD+New+Zealand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-[#FF6B35] text-white rounded-lg hover:bg-[#ff8555] transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2EC4B6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-4">Opening Hours</h3>
                  <div className="space-y-2">
                    {hours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{item.day}</span>
                        <span className="text-gray-600">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FFD166] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Phone Orders</h3>
                  <p className="text-gray-600 mb-3">Call us to place your order</p>
                  <a
                    href="tel:+6499999999"
                    className="inline-block px-4 py-2 bg-[#FFD166] text-gray-900 font-bold rounded-lg hover:bg-[#ffd980] transition-colors"
                  >
                    09 999 9999
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
