import { useState, useRef, useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
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
  const triggerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null,
  );

  useEffect(() => {
    if (!isVisible || !triggerRef.current) return;

    const updatePosition = () => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();

      let top = 0;
      const left = rect.left + rect.width / 2;

      if (position === "top") {
        top = rect.top - 12; // Gap
      } else {
        top = rect.bottom + 12; // Gap
      }

      setCoords({ top: top + window.scrollY, left: left + window.scrollX });
    };

    updatePosition();

    // Update position on every frame to handle moving elements (like in LogoLoop)
    let rafId: number;
    const loop = () => {
      updatePosition();
      rafId = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isVisible, position]);

  return (
    <div
      ref={triggerRef}
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible &&
        coords &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="absolute z-[9999] pointer-events-none"
            style={{
              top: coords.top,
              left: coords.left,
              transform: `translateX(-50%) ${
                position === "top" ? "translateY(-100%)" : ""
              }`,
            }}
          >
            <div className="animate-[crt-flicker_0.15s_infinite]">
              <div className="bg-black border-2 border-white p-0 shadow-[4px_4px_0px_#00ff4133] px-5 items-center text-center flex ">
                <div className="p-2 text-[12px] text-white text-center w-fit  font-bold leading-tight uppercase tracking-tighter">
                  {text}
                </div>
              </div>
              <div
                className={`w-2.5 h-2.5 bg-black absolute left-1/2 -translate-x-1/2 rotate-45 ${
                  position === "top"
                    ? "-bottom-1.5 border-r-2 border-b-2 border-white"
                    : "-top-[5.5px] border-t-2  border-l-2 border-white"
                }`}
              ></div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default RetroTooltip;
