import imgForwardButton from "figma:asset/f6f1e1dc19a712398208a43583dabbd5babb46fc.png";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      <h2 className="font-['PP_Neue_Montreal:Book',sans-serif] text-2xl md:text-[40px] text-white">
        {title}
      </h2>
      <div className="size-[40px] md:size-[60px] flex-shrink-0">
        <img
          src={imgForwardButton}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}