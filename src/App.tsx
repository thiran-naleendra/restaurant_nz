import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import MenuSection from './components/MenuSection';
import Specials from './components/Specials';
import Gallery from './components/Gallery';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
      <MenuSection />
      <Specials />
      <Gallery />
      <About />
      <Location />
      <Contact />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;
