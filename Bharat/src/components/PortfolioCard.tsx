import { useState } from "react";
import { motion } from "motion/react";

interface PortfolioCardProps {
  image: string;
  caption?: string;
  className?: string;
  tooltip?: string;
  onClick?: () => void;
}

export function PortfolioCard({ image, caption, className = "", tooltip = "View more", onClick }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-[18px] shadow-[0px_0px_30px_0px_rgba(120,120,120,0.1)] cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={caption || "Portfolio item"}
          className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
        />
      </div>

      {/* Bottom Gradient with Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

      {/* Blur mask effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] backdrop-blur-[2px]" />

      {/* Caption */}
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <p className="font-['Inter:Light',sans-serif] text-[22px] text-white tracking-[-0.44px] leading-normal">
            {caption}
          </p>
        </div>
      )}

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 pointer-events-none"
      >
        <p className="text-white font-['PP_Neue_Montreal:Book',sans-serif] text-sm whitespace-nowrap">
          {tooltip}
        </p>
      </motion.div>

      {/* Hover glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,255,255,0.1)] pointer-events-none"
      />
    </motion.div>
  );
}
