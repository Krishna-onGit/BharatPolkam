import { Navbar } from "../components/Navbar";
import { ProjectsGrid } from "../components/ProjectsGrid";

export function Performance() {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <div className="pb-20" style={{ paddingTop: '140px' }}>
                <div className="px-8 md:px-[120px] mb-10">

                    <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                        Featured performances in films, music videos, and commercial projects.
                    </p>
                </div>
                <ProjectsGrid category="performance" />
            </div>
        </div>
    );
}
