import * as Icons from 'lucide-react';
import { CATEGORIES } from '../../data/menu';
import { motion } from 'motion/react';

interface CategoryBarProps {
  activeCategory: string;
  onSelect: (id: string) => void;
}

export function CategoryBar({ activeCategory, onSelect }: CategoryBarProps) {
  return (
    <div className="sticky top-16 z-20 bg-surface/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-8 py-4">
          {CATEGORIES.map((cat) => {
            const IconComponent = (Icons as any)[cat.icon];
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                className={`flex flex-col items-center gap-1 min-w-[70px] transition-colors group relative`}
              >
                <div className={`p-3 rounded-full transition-all ${
                  isActive ? 'bg-primary text-white shadow-lg scale-110' : 'bg-white text-on-surface-variant group-hover:bg-primary-container group-hover:text-primary'
                }`}>
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <span className={`text-[10px] font-bold tracking-widest uppercase mt-1 ${
                  isActive ? 'text-primary' : 'text-on-surface-variant'
                }`}>
                  {cat.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-4 left-0 right-0 h-1 bg-primary"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
