import { useState, useEffect } from "react";
import { motion } from "motion/react";
import heroImg from "figma:asset/a646bbb4d6fcdaf85d12e4939e9e530c83df9f16.png";
import arrowIcon from "figma:asset/f6f1e1dc19a712398208a43583dabbd5babb46fc.png";

export function HeroSection() {
  const [revealComplete, setRevealComplete] = useState(false);
  // touch/mobile related states
  const [isTouch, setIsTouch] = useState(false);
  const [showMobileHint, setShowMobileHint] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealComplete(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // detect touch devices and show a brief hint
  useEffect(() => {
    const touchDetected =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    setIsTouch(!!touchDetected);
    if (touchDetected) {
      setShowMobileHint(true);
      const hideTimer = setTimeout(() => setShowMobileHint(false), 3000);
      return () => clearTimeout(hideTimer);
    }
  }, []);

  // device orientation parallax (small, performant)
  useEffect(() => {
    function handleOrientation(e: DeviceOrientationEvent) {
      // small clamped values
      const gamma = e.gamma ?? 0; // left/right (-90..90)
      const beta = e.beta ?? 0; // front/back (-180..180)
      const x = Math.max(-1, Math.min(1, gamma / 30));
      const y = Math.max(-1, Math.min(1, beta / 30));
      setTilt({ x, y });
    }
    if (isTouch && typeof window !== "undefined" && "DeviceOrientationEvent" in window) {
      window.addEventListener("deviceorientation", handleOrientation, true);
      return () => window.removeEventListener("deviceorientation", handleOrientation);
    }
  }, [isTouch]);

  const numberOfPanels = 7;
  const panels = Array.from({ length: numberOfPanels }, (_, i) => i);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* background now has slight mobile parallax via inline transform */}
        <motion.img
          src={heroImg}
          alt="Bharat Polkam"
          className="w-full h-full object-cover"
          aria-hidden={!revealComplete}
          // gentle transform based on device tilt (scaled for a subtle effect)
          style={{
            transform: `translate(${tilt.x * 8}px, ${tilt.y * 6}px) scale(1.02)`,
            transition: "transform 220ms linear",
          }}
        />
        {/* Bottom Gradient with Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

      {/* Blur mask effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] backdrop-blur-[2px]" />
      </div>

      {/* Vertical Flip Panels Animation */}
      <div className="absolute inset-0 flex">
        {panels.map((index) => (
          <motion.div
            key={index}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.645, 0.045, 0.355, 1.0],
            }}
            className="flex-1 bg-black origin-top"
            style={{ transformOrigin: "top" }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-[120px] pt-12 pb-6">
        {/* Top Right Contact Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: revealComplete ? 1 : 0,
            scale: revealComplete ? 1 : 0.8,
          }}
          transition={{ duration: 0.6, delay: 2.3 }}
          className="flex justify-end"
        ></motion.div>

        {/* Bottom Left Content */}
        <div
          className="mt-auto w-full pb-10 md:gap-10"
          // allow tap anywhere on the content region to toggle extra details on mobile
          onClick={() => {
            if (isTouch) setShowDetails((s) => !s);
          }}
        >
          <div className="flex items-end justify-between gap-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: revealComplete ? 1 : 0,
                y: revealComplete ? 0 : 30,
              }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="font-['PP_Neue_Montreal:Book',sans-serif] text-4xl md:text-6xl lg:text-[82px] text-white mb-4"
              // small tap feedback for touch devices
              whileTap={{ scale: 0.98 }}
              role="heading"
              aria-level={1}
            >
              Bharat Polkam
            </motion.h1>
          </div>

          <div className="flex items-end justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: revealComplete ? 1 : 0,
                y: revealComplete ? 0 : 20,
              }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="font-['PP_Neue_Montreal:Book',sans-serif] text-base md:text-lg lg:text-[22px] text-white/80 max-w-2xl leading-relaxed tracking-wide"
              whileTap={{ scale: 0.995 }}
            >
              Acting, directing, creating — from narrative to nuance. <br />
              Crafting visuals where emotion meets execution.
            </motion.p>
            </div>
            
            <div className="flex items-end justify-end pb-10 md:pb-0 ">
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: revealComplete ? 1 : 0,
                y: revealComplete ? 0 : 20,
              }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="font-['PP_Neue_Montreal:Book',sans-serif] text-xs md:text-sm lg:text-lg text-white/80 leading-relaxed tracking-wide whitespace-nowrap"
            >
              {isTouch ? (
                <span role="button" aria-label="Tap to explore">
                  <img
                    src={arrowIcon}
                    alt=""
                    className="w-[20px] h-[20px] animate-bounce inline-block mr-2 md:mr-3 rotate-90 "
                    aria-hidden="true"
                  />
                  <span className="sr-only">Tap to explore</span>
                </span>
              ) : (
                "Scroll to Explore ↓"
              )}
            </motion.p>
            </div>

          {/* extra details revealed on tap for mobile (or remain visible on desktop) */}
          {/*
            showDetails gives mobile users a way to access hover/tooltip content via tap.
            On desktop we keep it always hidden unless you want it visible by default.
          */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={ showDetails ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 } }
            transition={{ duration: 0.35 }}
            className="overflow-hidden max-w-2xl text-white/70 mt-4"
            aria-hidden={!showDetails}
          >
            <p className="text-sm leading-relaxed">
              {isTouch
                ? "Tip: Tap again to hide details. Use your device motion for subtle background movement."
                : "Hover interactions are available on non-touch devices."}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mobile hint: short-lived helper because tooltips/hover don't exist on touch */}
      {isTouch && showMobileHint && (
        <div className="pointer-events-none fixed left-1/2 bottom-6 -translate-x-1/2 z-20">
          <div className="bg-black/70 text-white text-xs px-3 py-2 rounded-full shadow-lg">
            Tap anywhere to reveal more
          </div>
        </div>
      )}
    </section>
  );
}
