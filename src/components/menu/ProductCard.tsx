import { motion } from 'motion/react';
import { MenuItem } from '../../data/menu';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Flame } from 'lucide-react';

interface ProductCardProps {
  item: MenuItem;
}

export function ProductCard({ item }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col h-full hover:shadow-card-hover transition-all group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {item.badge && <Badge variant={item.badge === 'NEW' ? 'warning' : 'primary'}>{item.badge}</Badge>}
          {item.spicy && (
            <div className="bg-red-600 text-white p-1 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
              <Flame size={18} fill="currentColor" />
            </div>
          )}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-display text-xl mb-2 text-on-surface leading-tight">
          {item.name}
        </h3>
        <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-primary font-display text-2xl font-bold">
            ${item.price.toFixed(2)}
          </span>
          <Button variant="outline" className="px-5 py-2 text-sm">
            ADD
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
