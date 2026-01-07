import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const FloatingEmoji = () => {
    const emojiRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const emoji = emojiRef.current;
        const container = containerRef.current;
        if (!emoji || !container) return;

        // Small delay to ensure DOM is ready
        const ctx = gsap.context(() => {
            // Set initial position
            gsap.set(emoji, {
                xPercent: -50,
                yPercent: -50,
            });

            // Create GSAP animation that moves the emoji diagonally across the viewport
            gsap.fromTo(
                emoji,
                {
                    left: "85%",
                    top: "5%",
                    rotation: 0,
                    scale: 0.8,
                },
                {
                    left: "15%",
                    top: "95%",
                    rotation: 720,
                    scale: 1.8,
                    ease: "none",
                    scrollTrigger: {
                        trigger: document.documentElement,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 2,
                        invalidateOnRefresh: true,
                    },
                }
            );
        }, container);

        // Cleanup on unmount
        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none overflow-hidden"
            style={{ zIndex: 1 }}
        >
            <div
                ref={emojiRef}
                className="absolute pointer-events-none select-none"
                style={{
                    opacity: 0.08,
                    fontSize: "clamp(100px, 20vw, 250px)",
                    filter: "blur(2px)",
                    willChange: "transform, left, top",
                }}
            >
                {/* Love + AI combination emoji */}
                <div className="relative flex items-center justify-center">
                    <span className="inline-block">💝</span>
                    <span
                        className="absolute -top-4 -right-4 text-[0.5em]"
                        style={{ filter: "hue-rotate(200deg)" }}
                    >
                        🤖
                    </span>
                    <span
                        className="absolute -bottom-2 -left-2 text-[0.35em]"
                    >
                        ✨
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FloatingEmoji;

