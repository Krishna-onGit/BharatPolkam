import { useRef, useState, useEffect, Children, cloneElement, isValidElement } from "react";
import { motion } from "motion/react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  staggerChildren?: boolean;
}

export function AnimatedSection({ children, className = "", id, staggerChildren = false }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isInView]);

  if (!staggerChildren) {
    return (
      <motion.section
        ref={ref}
        id={id}
        className={className}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.section>
    );
  }

  const childrenArray = Children.toArray(children);

  return (
    <section ref={ref} id={id} className={className}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
        >
          {child}
        </motion.div>
      ))}
    </section>
  );
}
