
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PortfolioCard } from "./PortfolioCard";

interface MobileCarouselProps {
    items: {
        image: string;
        caption?: string;
        className?: string; // Optional custom class for the card
        imageClassName?: string; // Optional custom class for the image
        onClick?: () => void;
    }[];
    className?: string; // For container styling
}

export function MobileCarousel({ items, className = "" }: MobileCarouselProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className={`md:hidden overflow-hidden ${className}`}>
            <Carousel
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: 3000,
                        stopOnInteraction: true,
                    }),
                ]}
                className="w-full"
            >
                <CarouselContent className="">
                    {items.map((item, index) => (
                        <CarouselItem key={index}>
                            <PortfolioCard
                                image={item.image}
                                caption={item.caption}
                                className={`w-full ${item.className || "h-[400px]"}`}
                                imageClassName={item.imageClassName}
                                onClick={item.onClick}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-6">
                    {items.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${current === index + 1 ? "bg-white w-6" : "bg-white/30 w-2 hover:bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </Carousel>
        </div>
    );
}
