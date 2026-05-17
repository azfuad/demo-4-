import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center overflow-hidden bg-surface-container">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-1 bg-primary"></span>
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Limited Time Offer</span>
          </div>
          <h1 className="font-display text-6xl lg:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter mb-6">
            HOT. FRESH. <br />
            <span className="text-primary">FAMOUS.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md mb-8 leading-relaxed">
            Experience the original taste of our signature secret recipe chicken, 
            made fresh in our kitchen just for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="px-10 py-4 text-lg">
              VIEW DEALS
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" className="px-10 py-4 text-lg">
              OUR MENU
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=1200" 
              alt="Crispy Chicken Bucket"
              className="w-full h-auto drop-shadow-2xl rounded-2xl transform rotate-3"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-0"></div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400 rounded-full flex items-center justify-center p-4 text-black text-center font-black leading-none text-xl shadow-xl z-20"
          >
            ORDER NOW & SAVE!
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
