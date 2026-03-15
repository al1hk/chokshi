/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Instagram, Facebook, Twitter, Sparkles } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for staggered reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <div className="min-h-screen font-sans bg-[var(--color-brand-bg)] text-[var(--color-brand-dark)] selection:bg-[var(--color-brand-teal)] selection:text-white overflow-x-hidden">
      
      {/* --- GLOBAL FRAME BORDER --- */}
      <div className="fixed inset-0 pointer-events-none border-[8px] md:border-[16px] border-[var(--color-brand-light)] z-50 mix-blend-overlay"></div>

      {/* --- NAVBAR --- */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-[#0A0908]/95 backdrop-blur-md border-b border-[var(--color-brand-gold)]/20 shadow-xl' 
            : 'py-6 md:py-8 bg-gradient-to-b from-black/60 to-transparent'
        }`}
      >
        <div className="grid grid-cols-3 items-center w-full max-w-[1600px] mx-auto">
          {/* Left: Mobile Menu & Desktop Links */}
          <div className="flex items-center justify-start">
            <button className="md:hidden text-[var(--color-brand-gold)] hover:opacity-70 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            <div className="hidden md:flex space-x-8 lg:space-x-12 text-[10px] lg:text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-brand-light)]">
              <a href="#" className="hover:text-[var(--color-brand-gold)] transition-colors">Home</a>
              <a href="#shop" className="hover:text-[var(--color-brand-gold)] transition-colors">Shop</a>
              <a href="#about" className="hover:text-[var(--color-brand-gold)] transition-colors">About</a>
            </div>
          </div>
          
          {/* Center: Logo */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className={`font-script tracking-wider text-[var(--color-brand-gold)] transition-all duration-500 leading-tight ${isScrolled ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'}`}>Chokshi</span>
            <span className={`tracking-[0.4em] uppercase text-[var(--color-brand-light)] opacity-70 transition-all duration-500 ${isScrolled ? 'text-[6px] md:text-[7px] mt-0.5' : 'text-[7px] md:text-[8px] mt-1'}`}>Fragrance</span>
          </div>

          {/* Right: Contact & Cart */}
          <div className="flex items-center justify-end space-x-6 lg:space-x-12 text-[10px] lg:text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-brand-light)]">
            <a href="#contact" className="hover:text-[var(--color-brand-gold)] transition-colors hidden md:block">Contact</a>
            <a href="#" className="hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-2 group">
              <ShoppingBag size={15} className="group-hover:-translate-y-0.5 transition-transform" />
              <span className="hidden sm:inline">Cart (0)</span>
            </a>
          </div>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 px-8 md:px-16 lg:px-24 overflow-hidden bg-[#0A0908] text-[var(--color-brand-light)]">
        
        {/* Massive Background Typography */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-serif text-[var(--color-brand-light)] whitespace-nowrap pointer-events-none z-0 select-none"
        >
          CHOKSHI
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-[1600px] mx-auto relative z-10">
          
          {/* Left: Editorial Typography */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 z-20 mt-12 lg:mt-0"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
              <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[var(--color-brand-gold)]">N° 01</span>
              <div className="w-16 h-[1px] bg-[var(--color-brand-gold)]/50"></div>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-serif text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-tight mb-10 relative z-20">
              <span className="block italic font-light text-[var(--color-brand-gold)] pr-12 transform -translate-x-2">Dark</span>
              <span className="block ml-8 md:ml-16">Velvet</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-6 font-light tracking-wide opacity-90">Seduction.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-sm leading-[1.8] mb-12 max-w-sm font-light opacity-70 text-balance">
              Luxury long-lasting fragrances crafted for men & women. Premium quality signature scents delivered nationwide across Pakistan.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex items-center gap-8">
              <button className="bg-[var(--color-brand-gold)] text-[#0A0908] px-8 py-4 text-[10px] font-medium tracking-[0.3em] uppercase hover:bg-white transition-colors duration-500 flex items-center gap-4 group shadow-2xl shadow-[var(--color-brand-gold)]/20">
                <span>Discover</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-medium tracking-[0.2em] uppercase opacity-50">Starting from</span>
                <span className="text-sm font-serif italic text-[var(--color-brand-gold)]">$210.00</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: The Hero Image */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center h-full min-h-[500px] lg:min-h-[80vh] z-10 mt-12 lg:mt-0">
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-20 w-full max-w-md lg:max-w-lg h-[60vh] lg:h-[75vh] rounded-t-full overflow-hidden border border-[var(--color-brand-gold)]/20 shadow-2xl shadow-black/50"
            >
              <img 
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop" 
                alt="Premium Dark Perfume" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Fade out at the bottom to blend into the dark background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent opacity-90 pointer-events-none"></div>
            </motion.div>

            {/* Vertical Micro Copy */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute top-1/4 -right-6 flex flex-col items-center gap-6 z-30 hidden lg:flex"
            >
              <div className="[writing-mode:vertical-rl] text-[9px] font-medium tracking-[0.4em] uppercase text-[var(--color-brand-gold)]">
                Crafted in Pakistan
              </div>
              <div className="w-[1px] h-16 bg-[var(--color-brand-gold)]/30"></div>
              <div className="[writing-mode:vertical-rl] text-[9px] font-medium tracking-[0.3em] uppercase opacity-50 rotate-180">
                Vol. 100ml / 3.4 fl.oz
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        >
          <span className="text-[8px] font-medium tracking-[0.4em] uppercase opacity-40">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-brand-gold)]/50 to-transparent"
          ></motion.div>
        </motion.div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-32 px-8 md:px-16 lg:px-24 bg-[var(--color-brand-light)] border-y border-black/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left: Decorative Teal Block */}
          <motion.div variants={itemVariants} className="relative h-[600px] w-full flex items-center justify-center p-8 group">
            <div className="absolute inset-0 bg-[var(--color-brand-teal)] rounded-t-full transform transition-transform duration-1000 group-hover:scale-[1.02]"></div>
            <div className="relative z-10 w-full h-full border border-[var(--color-brand-gold)]/30 rounded-t-full flex flex-col items-center justify-center gap-8 p-10 text-center">
              <Sparkles size={24} className="text-[var(--color-brand-gold)] opacity-70" />
              <span className="font-script text-[var(--color-brand-light)] text-6xl md:text-7xl opacity-90 leading-none">Chokshi</span>
              <div className="w-16 h-[1px] bg-[var(--color-brand-gold)]/50"></div>
              <span className="text-[var(--color-brand-light)] text-xs font-medium tracking-[0.4em] uppercase opacity-70">Perfumery<br/><br/>Pakistan</span>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div variants={itemVariants} className="max-w-xl">
            <h4 className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--color-brand-gold)] mb-6">Our Craft</h4>
            <h2 className="font-serif text-5xl md:text-6xl mb-10 leading-[1.1] tracking-tight text-balance">Luxury Long-Lasting Fragrances</h2>
            <div className="space-y-6 text-sm leading-relaxed font-light opacity-80 mb-12">
              <p>
                At Chokshi Fragrance, we believe that a perfume is more than just a scent; it is an invisible garment that dresses the soul. We specialize in premium quality, signature scents crafted for both men and women.
              </p>
              <p>
                Join our community of over 2,300 fragrance enthusiasts. We meticulously select the finest ingredients to create olfactory masterpieces that linger in memory, with nationwide delivery across Pakistan.
              </p>
            </div>
            <button className="border-b border-[var(--color-brand-dark)] pb-1 text-xs font-medium tracking-[0.2em] uppercase hover:text-[var(--color-brand-gold)] hover:border-[var(--color-brand-gold)] transition-colors">
              Follow @chokshi_fragrance
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- PRODUCTS SECTION --- */}
      <section id="shop" className="py-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h4 className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--color-brand-gold)] mb-6">The Collection</h4>
            <h2 className="font-serif text-5xl md:text-6xl tracking-tight">Signature Scents</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {[
              {
                name: "Midnight Rose",
                notes: "Damask Rose, Oud, Vanilla",
                price: "$185",
                image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop"
              },
              {
                name: "Velvet Amber",
                notes: "Amber, Sandalwood, Bergamot",
                price: "$210",
                image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000&auto=format&fit=crop"
              },
              {
                name: "Luminous Citrus",
                notes: "Neroli, Mandarin, White Musk",
                price: "$160",
                image: "https://images.unsplash.com/photo-1615486171448-4af418c85b54?q=80&w=1000&auto=format&fit=crop"
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative bg-[var(--color-brand-light)] border border-black/5 pt-20 pb-12 px-8 flex justify-center items-center h-[450px] mb-8 transition-all duration-500 group-hover:border-[var(--color-brand-gold)]/30 group-hover:shadow-2xl group-hover:shadow-[var(--color-brand-gold)]/5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-auto object-contain mix-blend-multiply drop-shadow-xl transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Quick Add Button (Appears on hover) */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <button className="bg-[var(--color-brand-dark)] text-white px-6 py-2 rounded-full text-[10px] font-medium tracking-widest uppercase hover:bg-[var(--color-brand-teal)] transition-colors flex items-center gap-2 whitespace-nowrap">
                      <ShoppingBag size={12} /> Add to Cart
                    </button>
                  </div>
                </div>
                
                {/* Text Container */}
                <div className="text-center px-4 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl mb-3 tracking-wide">{product.name}</h3>
                  <p className="text-xs text-[var(--color-brand-dark)] opacity-60 font-light mb-4 flex-1">{product.notes}</p>
                  <span className="font-medium text-sm">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-24 text-center"
          >
            <button className="border border-[var(--color-brand-dark)] px-12 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[var(--color-brand-dark)] hover:text-[var(--color-brand-light)] transition-colors">
              View All Products
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-[var(--color-brand-dark)] text-[var(--color-brand-light)] pt-32 pb-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 pr-8">
            <span className="font-script text-6xl tracking-wider block mb-4 text-[var(--color-brand-gold)]">Chokshi</span>
            <span className="text-xs tracking-[0.4em] uppercase opacity-60 block mb-8">Fragrance</span>
            <p className="text-sm font-light leading-relaxed opacity-70 mb-6 max-w-sm">
              Luxury Long-Lasting Fragrances. Crafted for Men & Women. Premium Quality | Signature Scents.
            </p>
            <div className="flex items-center gap-4 mb-10 text-xs font-light opacity-60">
              <span><strong>25</strong> Posts</span>
              <span>•</span>
              <span><strong>2,392</strong> Followers</span>
            </div>
            <div className="flex space-x-5">
              <a href="https://instagram.com/chokshi_fragrance" target="_blank" rel="noreferrer" className="text-[var(--color-brand-light)] opacity-50 hover:opacity-100 hover:text-[var(--color-brand-gold)] transition-all flex items-center gap-2">
                <Instagram size={20} strokeWidth={1.5} />
                <span className="text-xs tracking-wider">@chokshi_fragrance</span>
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-brand-gold)] mb-8">Explore</h4>
            <ul className="space-y-5 text-sm font-light opacity-70">
              <li><a href="#" className="hover:opacity-100 hover:text-[var(--color-brand-gold)] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:opacity-100 hover:text-[var(--color-brand-gold)] transition-colors">The Collection</a></li>
              <li><a href="#" className="hover:opacity-100 hover:text-[var(--color-brand-gold)] transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:opacity-100 hover:text-[var(--color-brand-gold)] transition-colors">Journal</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-brand-gold)] mb-8">Support</h4>
            <ul className="space-y-5 text-sm font-light opacity-70">
              <li><a href="#" className="hover:opacity-100 hover:text-[var(--color-brand-gold)] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-100 hover:text-[var(--color-brand-gold)] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:opacity-100 hover:text-[var(--color-brand-gold)] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 hover:text-[var(--color-brand-gold)] transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-brand-gold)] mb-8">Newsletter</h4>
            <p className="text-sm font-light opacity-70 mb-8">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent border-b border-[var(--color-brand-light)]/20 py-3 pr-10 text-sm focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors placeholder:text-[var(--color-brand-light)]/30 font-light"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--color-brand-light)]/50 group-hover:text-[var(--color-brand-gold)] transition-colors">
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1400px] mx-auto pt-8 border-t border-[var(--color-brand-light)]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-light tracking-widest uppercase opacity-50">
          <p>&copy; {new Date().getFullYear()} Chokshi Fragrance. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
