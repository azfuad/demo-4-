import { ShoppingBag, User, Menu, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  return (
    <nav className="h-16 bg-white border-b border-gray-200 sticky top-0 z-50 flex items-center px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Menu className="md:hidden text-on-surface" />
          <h1 className="font-display text-2xl md:text-3xl font-black text-primary tracking-tighter cursor-pointer">
            KITCHEN
          </h1>
          
          <div className="hidden md:flex items-center gap-2 ml-8 text-sm font-bold text-on-surface hover:text-primary cursor-pointer transition-colors">
            <MapPin size={18} className="text-primary" />
            <span>FIND A KITCHEN</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex flex-col items-end mr-4">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Your total</span>
            <span className="text-primary font-black">$0.00</span>
          </div>
          
          <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer relative">
            <ShoppingBag size={22} className="text-on-surface" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white font-bold">
              0
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-pill cursor-pointer transition-colors">
            <User size={20} className="text-on-surface" />
            <span className="text-sm font-bold">LOGIN</span>
          </div>
          
          <Button className="hidden md:flex px-6 py-2 text-sm">
            ORDER NOW
          </Button>
        </div>
      </div>
    </nav>
  );
}
