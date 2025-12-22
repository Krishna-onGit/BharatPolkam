import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Project, getProjectImage } from "../data/projects";

interface BentoPortfolioCardProps {
    project: Project;
    bgImage: string;
    onClick: (project: Project) => void;
}

export function BentoPortfolioCard({ project, bgImage, onClick }: BentoPortfolioCardProps) {
    const { title, subtitle } = project;
    const projectImage = getProjectImage(title);
    const displayImage = projectImage || bgImage;

    return (
        <motion.div
            onClick={(e) => {
                e.preventDefault();
                onClick(project);
            }}
            className="group relative overflow-hidden rounded-[12px] shadow-lg cursor-pointer hover:shadow-2xl hover:shadow-black/50 transition-shadow duration-300"
            style={{
                height: '100%',
                minHeight: '250px',
                borderRadius: '12px',
                // Fix for border-radius clipping with transforms
                WebkitMaskImage: '-webkit-radial-gradient(white, black)'
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${displayImage})` }}
            />

            {/* Overlay - Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-t from-black/90 via-black/70 to-transparent transition-colors duration-300 group-hover:from-black/95 group-hover:via-black/80" />

            {/* Content Layer */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 shadow-black/50 drop-shadow-md">
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-sm md:text-base text-white/80 shadow-black/50 drop-shadow-sm">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Arrow Icon */}
            <div className="absolute bottom-4 right-4 z-20 text-white text-xl md:text-2xl opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={24} />
            </div>
        </motion.div>
    );
}
