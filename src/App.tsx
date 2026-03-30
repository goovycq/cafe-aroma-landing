/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Menu, X, Instagram, Facebook, Twitter, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Espresso Intenso",
    description: "Café puro con cuerpo y aroma profundo, extraído a la perfección.",
    price: "$2.50",
    image: "https://picsum.photos/seed/espresso/400/300"
  },
  {
    id: 2,
    name: "Cappuccino Clásico",
    description: "Equilibrio perfecto de espresso, leche vaporizada y espuma densa.",
    price: "$3.50",
    image: "https://picsum.photos/seed/cappuccino/400/300"
  },
  {
    id: 3,
    name: "Latte Macchiato",
    description: "Capas sedosas de leche caliente y café premium con un toque de vainilla.",
    price: "$4.00",
    image: "https://picsum.photos/seed/latte/400/300"
  },
  {
    id: 4,
    name: "Muffin de Arándanos",
    description: "Horneado diariamente con fruta fresca y un toque de limón.",
    price: "$2.75",
    image: "https://picsum.photos/seed/muffin/400/300"
  },
  {
    id: 5,
    name: "Tarta de Queso",
    description: "Receta artesanal con base de galleta crujiente y mermelada de frutos rojos.",
    price: "$4.50",
    image: "https://picsum.photos/seed/cheesecake/400/300"
  },
  {
    id: 6,
    name: "Croissant de Mantequilla",
    description: "Hojaldre francés auténtico, dorado y crujiente por fuera, tierno por dentro.",
    price: "$2.25",
    image: "https://picsum.photos/seed/croissant/400/300"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white">
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-coffee-medium p-2 rounded-full text-cream group-hover:rotate-12 transition-transform">
              <Coffee size={24} />
            </div>
            <span className="font-serif text-2xl font-bold text-coffee-dark tracking-tight">Café Aroma</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Inicio', 'Menú', 'Contacto'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-coffee-medium hover:text-accent font-medium transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-coffee-medium text-cream px-6 py-2 rounded-full hover:bg-coffee-light transition-all shadow-md hover:shadow-lg">
              Reservar
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-coffee-dark" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Inicio', 'Menú', 'Contacto'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="text-3xl font-serif text-coffee-dark hover:text-accent"
              >
                {item}
              </a>
            ))}
            <button className="bg-coffee-medium text-cream px-8 py-3 rounded-full text-xl">
              Reservar
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/coffee-shop/1920/1080" 
            alt="Café Aroma Atmosphere" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-serif text-6xl md:text-8xl text-cream leading-tight mb-6">
              El aroma que <br />
              <span className="italic text-accent">despierta</span> tus sentidos
            </h1>
            <p className="text-cream/80 text-xl md:text-2xl mb-10 font-light leading-relaxed">
              Descubre la mejor selección de granos artesanales en un ambiente acogedor diseñado para tus mejores momentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#menú"
                className="bg-accent text-coffee-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2 group"
              >
                Ver Menú <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contacto"
                className="border border-cream/30 backdrop-blur-sm text-cream px-10 py-4 rounded-full font-bold text-lg hover:bg-cream/10 transition-all text-center"
              >
                Visítanos
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/10 blur-3xl rounded-full -mb-20 -mr-20"></div>
      </section>

      {/* Menu Section */}
      <section id="menú" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-coffee-dark mb-4">Nuestra Selección</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-coffee-medium/70 max-w-xl mx-auto">
              Cada taza es una historia. Cada bocado, una experiencia artesanal preparada con pasión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {menuItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-coffee-medium/5"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-coffee-dark/80 backdrop-blur-md text-cream px-4 py-1 rounded-full font-bold">
                    {item.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-coffee-dark mb-2">{item.name}</h3>
                  <p className="text-coffee-medium/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-coffee-dark text-cream relative overflow-hidden">
        {/* Background texture/pattern could go here */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Hablemos de Café</h2>
              <p className="text-cream/60 text-lg mb-10 leading-relaxed">
                ¿Tienes alguna pregunta o quieres reservar para un evento especial? Estamos aquí para escucharte.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-xl text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Ubicación</h4>
                    <p className="text-cream/60">Calle de los Aromas 123, Ciudad Gourmet</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-xl text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Teléfono</h4>
                    <p className="text-cream/60">+34 900 123 456</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-xl text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-cream/60">hola@cafearoma.com</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2rem] text-coffee-dark shadow-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-coffee-medium/50">Nombre</label>
                    <input 
                      type="text" 
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-coffee-medium/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-coffee-medium/50">Email</label>
                    <input 
                      type="email" 
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-coffee-medium/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-coffee-medium/50">Mensaje</label>
                  <textarea 
                    rows={4} 
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full px-4 py-3 rounded-xl border border-coffee-medium/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-coffee-medium text-cream py-4 rounded-xl font-bold text-lg hover:bg-coffee-light transition-all shadow-lg">
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream py-16 border-t border-coffee-medium/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="bg-coffee-medium p-2 rounded-full text-cream">
                <Coffee size={20} />
              </div>
              <span className="font-serif text-xl font-bold text-coffee-dark">Café Aroma</span>
            </div>

            <div className="flex gap-8">
              <a href="#" className="text-coffee-medium hover:text-accent transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-coffee-medium hover:text-accent transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-coffee-medium hover:text-accent transition-colors"><Twitter size={24} /></a>
            </div>

            <p className="text-coffee-medium/50 text-sm">
              © 2026 Café Aroma. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
