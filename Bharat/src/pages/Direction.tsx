import { Navbar } from "../components/Navbar";
import { ProjectsGrid } from "../components/ProjectsGrid";

export function Direction() {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <div className="pb-20 pt-[140px]">
                <div className="px-8 md:px-[120px] mb-2">

                    <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                        A collection of directorial works showcasing visual storytelling and creative vision.
                    </p>
                </div>
                <ProjectsGrid category="direction" />
            </div>
        </div>
    );
}
