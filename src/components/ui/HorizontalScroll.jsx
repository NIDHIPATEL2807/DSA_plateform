import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(sectionsRef.current, {
      xPercent: -100 * (sectionsRef.current.length - 1), // Move full width per section
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        scrub: 1,
        pin: true,
        end: () => `+=${container.offsetWidth}`
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <div className="flex w-[500vw] h-screen">
        {["#F64747", "#22A7F0", "#F9690E", "#9B59B6", "#03C9A9"].map(
          (color, index) => (
            <section
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="w-screen h-screen flex items-center justify-center text-white text-3xl font-bold"
              style={{ background: color }}
            >
              Section {index + 1}
            </section>
          )
        )}
      </div>
    </div>
  );
};

export default HorizontalScroll;
