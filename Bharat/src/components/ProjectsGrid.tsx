import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Dialog from "@radix-ui/react-dialog";
import { ExternalLink } from "lucide-react";
import { projects, ProjectCategory, sectionBackgrounds, Project } from "../data/projects";
import { BentoPortfolioCard } from "./BentoPortfolioCard";
import { Button } from "./ui/button";

interface ProjectsGridProps {
    category: ProjectCategory;
}

const getBentoClassName = (index: number, total: number): string => {
    // 4 Projects Pattern
    if (total === 4) {
        if (index === 0) return "md:col-span-2 md:row-span-2"; // Large
        if (index === 3) return "md:col-span-2 md:row-span-1"; // Wide
        return "md:col-span-1 md:row-span-1"; // Medium
    }

    // 6 Projects Pattern
    if (total === 6) {
        if (index === 0) return "md:col-span-1 md:row-span-2"; // Tall
        if (index === 1) return "md:col-span-2 md:row-span-1"; // Wide
        return "md:col-span-1 md:row-span-1";
    }

    // Default/Fallback logic for robust bento feel if no specific count match
    const isLarge = index === 0;
    const isWide = index === 1 || index % 7 === 0;
    const isTall = index === 2 || index % 5 === 0;

    if (isLarge) return "md:col-span-2 md:row-span-2";
    if (isWide) return "md:col-span-2 md:row-span-1";
    if (isTall) return "md:col-span-1 md:row-span-2";

    return "md:col-span-1 md:row-span-1";
};

export function ProjectsGrid({ category }: ProjectsGridProps) {
    const categoryProjects = projects.filter((p) => p.category === category);
    const bgImage = sectionBackgrounds[category];
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: (i: number) => ({
            opacity: 0,
            x: i % 2 === 0 ? -50 : 50, // Even: left, Odd: right
            y: 20
        }),
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut" as const
            }
        },
    };

    const gridCols = category === 'production' ? 'md:grid-cols-3' : 'md:grid-cols-4';

    return (
        <>
            <motion.div
                className={`grid grid-cols-1 ${gridCols} grid-flow-dense gap-4 md:gap-6 lg:gap-8 px-6 md:px-12 lg:px-[120px] pb-8 pt-2 md:pb-12 md:pt-4 max-w-7xl mx-auto auto-rows-[150px]`}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
            >
                {categoryProjects.map((project, index) => {
                    // Use redundant logic: prefer explicit className, fallback to calculated
                    const bentoClass = project.className || getBentoClassName(index, categoryProjects.length);

                    return (
                        <motion.div
                            key={project.id}
                            custom={index}
                            variants={item}
                            className={`${bentoClass} h-full`}
                        >
                            <BentoPortfolioCard
                                project={project}
                                bgImage={bgImage}
                                onClick={(p: Project) => setSelectedProject(p)}
                            />
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Global Dialog for the grid */}
            <Dialog.Root open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <Dialog.Portal>
                    <Dialog.Overlay
                        className="fixed inset-0 bg-black/40 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
                        style={{ zIndex: 60 }}
                    />
                    <Dialog.Content
                        className="fixed left-[50%] top-[50%] z-[61] flex flex-col items-center w-[90%] max-w-md translate-x-[-50%] translate-y-[-50%] gap-6 p-6 md:p-8 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 border border-white/20 bg-white/10 backdrop-blur-xl focus:outline-none"
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 61,
                            borderRadius: '16px', // Fixed border radius
                            // Fix for border-radius clipping
                            WebkitMaskImage: '-webkit-radial-gradient(white, black)'
                        }}
                    >
                        <div className="flex flex-col gap-2 text-center">
                            <Dialog.Title className="text-xl font-bold leading-tight text-white mb-2">
                                {selectedProject && `Open "${selectedProject.subtitle || selectedProject.title}" in new tab?`}
                            </Dialog.Title>
                            <Dialog.Description className="text-sm font-medium text-white/70 mb-4">
                                You are about to be redirected to an external site.
                            </Dialog.Description>
                        </div>

                        <div className="flex gap-4">
                            {/* Confirm Button - LEFT */}
                            {selectedProject?.link ? (
                                <Button asChild className="px-8 py-4 bg-white text-black font-semibold rounded-full border-2 border-transparent transition-all duration-200 ease-out hover:bg-gray-200 hover:scale-105">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setSelectedProject(null)}
                                    >
                                        Confirm
                                    </a>
                                </Button>
                            ) : (
                                <Button disabled className="px-8 py-4 text-gray-400 font-semibold rounded-full border-2 border-transparent bg-gray-200 cursor-not-allowed">
                                    No Link
                                </Button>
                            )}

                            {/* Cancel Button - RIGHT */}
                            <Button
                                onClick={() => setSelectedProject(null)}
                                className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white transition-all duration-200 ease-out hover:bg-white/10 hover:scale-105"
                            >
                                Cancel
                            </Button>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}
