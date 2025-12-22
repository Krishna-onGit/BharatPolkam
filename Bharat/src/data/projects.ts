import directionBg from '../assets/direction-bg.png';
import performanceBg from '../assets/performance-bg.png';
import productionBg from '../assets/production-bg.png';

export type ProjectCategory = 'direction' | 'performance' | 'production';

export interface Project {
    id: string;
    title: string;
    subtitle?: string;
    link?: string;
    category: ProjectCategory;
    className?: string; // For grid spans
}

export const sectionBackgrounds: Record<ProjectCategory, string> = {
    direction: directionBg,
    performance: performanceBg,
    production: productionBg,
};

// Start: Dynamic Image Loading Logic
const projectImages = import.meta.glob('../assets/projectimgs/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });

export function getProjectImage(title: string): string | undefined {
    // Navigate through the glob results to find a matching filename
    for (const path in projectImages) {
        // Extract filename from path (e.g., "../assets/projectimgs/My Project.jpg" -> "My Project.jpg")
        const fileName = path.split('/').pop();
        if (!fileName) continue;

        // Check if the filename starts with the exact title followed by a dot (extension)
        // This ensures "Project A" matches "Project A.jpg" but not "Project A Part 2.jpg"
        if (fileName.toLowerCase().startsWith(`${title.toLowerCase()}.`)) {
            return projectImages[path] as string;
        }
    }
    return undefined;
}
// End: Dynamic Image Loading Logic

export const projects: Project[] = [
    // Direction
    {
        id: 'd1',
        title: 'Shubman × Bowlers Announcement Film',
        subtitle: 'Gill Goes Bowler Mode',
        link: 'https://www.instagram.com/reel/DPjP0kUiHaX/?igsh=MWJlZGJnbGpvZHhucw==',
        category: 'direction',
        className: 'md:col-span-2 md:row-span-2', // Large item
    },
    {
        id: 'd2',
        title: 'Battleground Season 1',
        subtitle: 'Campaign Launch',
        link: 'https://share.google/X7OFihMTKfQtas9r7',
        category: 'direction',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 'd3',
        title: 'Shiny Coat Film',
        subtitle: 'Played in theatres and OTT',
        link: 'https://www.instagram.com/reel/DSFhPfgiO87/?igsh=MXdxbnh2NXNtbXFqeA==',
        category: 'direction',
        className: 'md:col-span-1 md:row-span-2', // Tall item
    },
    {
        id: 'd4',
        title: 'Alex to the Rescue Film',
        subtitle: 'Played in theatres and OTT',
        link: 'https://www.instagram.com/reel/DRhNVEaiPif/?igsh=MWxwaTdkbDFodGJrbQ==',
        category: 'direction',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 'd5',
        title: 'Aar Paar Footwear TVC Film',
        subtitle: 'Commercial',
        link: 'https://www.instagram.com/reel/DMhR7VRos-f/?igsh=MXM2NnM5OXkzanRwZg==',
        category: 'direction',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 'd6',
        title: 'Aar Paar Footwear TVC Film 2',
        subtitle: 'Campaign Variation',
        link: 'https://www.instagram.com/reel/DLpK_5gIA8g/?igsh=MW1oaWd5MTV1NTM4cw==',
        category: 'direction',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 'd7',
        title: 'Aar Paar Footwear TVC Film 3',
        subtitle: 'Campaign Variation 2',
        link: 'https://www.instagram.com/reel/DMhTJmqo_xz/?igsh=azI0c2huYWoyZTQ1',
        category: 'direction',
        className: 'md:col-span-1 md:row-span-1',
    },

    // Performance
    {
        id: 'p1',
        title: 'Mathafod Music Video',
        subtitle: 'Music Video',
        link: 'https://youtu.be/0SQrgvVDIFQ?si=3gyXruhG4pw4zSoN',
        category: 'performance',
        className: 'md:col-span-2 md:row-span-1', // Wide
    },
    {
        id: 'p2',
        title: 'Chakva Shortfilm',
        subtitle: 'Short Film',
        link: 'https://youtu.be/c9xsRG0sIgk?si=w9gOlmghQ4NyXSmn',
        category: 'performance',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 'p3',
        title: '5 Star Ad',
        subtitle: 'Commercial',
        link: 'https://youtu.be/NV5gj-RS7o8?si=KMQ_FYCSzqokHjEU',
        category: 'performance',
        className: 'md:col-span-1 md:row-span-2', // Tall
    },
    {
        id: 'p4',
        title: 'Anhoni Shortfilm Scene',
        subtitle: 'Dramatic Scene',
        link: 'https://youtube.com/shorts/k842ZdhMWDI?si=LVok3swA5pq6uFzn',
        category: 'performance',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 'p5',
        title: 'Sunny Mitthu Pilot Episode Friend Role',
        subtitle: 'Friend Role',
        link: 'https://youtu.be/5uhdqfHWuAA?si=uMVDVZ7DsDBIzZ3V',
        category: 'performance',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 'p6',
        title: 'Fight Sequence',
        subtitle: 'Action',
        link: 'https://youtu.be/62Jr53F91QI?si=nqZehdL_aZDk36wg',
        category: 'performance',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 'p7',
        title: 'Sunny Mitthu Pilot Episode Short Scene',
        subtitle: 'Short Scene',
        link: 'https://www.instagram.com/reel/DJ3kGR7h6-M/?igsh=NmZudm5zZDBxeW9m',
        category: 'performance',
        className: 'md:col-span-1 md:row-span-1',
    },

    // Production
    {
        id: 'pr1',
        title: 'Ambani',
        subtitle: 'Event Coverage',
        link: undefined, // No link in MD
        category: 'production',
        className: 'md:col-span-2 md:row-span-2',
    },
    {
        id: 'pr2',
        title: 'Dance Deewane Season 4',
        subtitle: 'Reality Show',
        link: 'https://www.instagram.com/p/C3X7fPIRL4x/?igsh=M3Z5am53NnFsZzE4',
        category: 'production',
        className: 'md:col-span-1 md:row-span-2',
    },
    {
        id: 'pr3',
        title: 'MTV Hustle 3.0',
        subtitle: 'Show Coverage',
        link: 'https://share.google/images/vllmIhIvdF4qqgha1',
        category: 'production',
        className: 'md:col-span-1 md:row-span-1',
    },
];
