import { useState } from "react";
import { type ReactNode } from "react";
import { Info } from "lucide-react";

interface RetroTooltipProps {
  text: string;
  children: ReactNode;
  position: "top" | "bottom";
}

const RetroTooltip = ({
  text,
  children,
  position = "top",
}: RetroTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const positionClasses: Record<"top" | "bottom", string> = {
    top: "bottom-full mb-3 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-3 left-1/2 -translate-x-1/2",
  };

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute z-[500] pointer-events-none ${positionClasses[position]}`}
        >
          <div className="animate-[crt-flicker_0.15s_infinite]">
            <div className="bg-[#000] border-2 border-[#00ff41] p-0 shadow-[4px_4px_0px_#00ff4133] min-w-[140px]">
              <div className="bg-[#00ff41] text-[#000] text-[8px] font-black px-2 py-1 flex justify-between items-center uppercase">
                <span>[DATA_TAG]</span>
                <Info size={10} />
              </div>
              <div className="p-2 text-[10px] text-white font-bold leading-tight uppercase tracking-tighter">
                {text}
              </div>
            </div>
            <div className="w-2.5 h-2.5 bg-[#000] border-r-2 border-b-2 border-[#00ff41] absolute left-1/2 -translate-x-1/2 -bottom-1 rotate-45"></div>
          </div>
        </div>
      )}
    </div>
  );
};
