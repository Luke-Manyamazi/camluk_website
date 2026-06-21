import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 100, suffix: "+",  label: "Projects Delivered" },
  { value: 5,   suffix: "+",  label: "Years Experience" },
  { value: 6,   suffix: "",   label: "Core Services" },
  { value: 24,  suffix: "/7", label: "Support Available" },
];

function Counter({ value, suffix }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start    = performance.now();
    const tick     = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease     = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="border-y border-border/60 bg-card/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border/40">
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="px-8 py-10 lg:py-12"
            >
              <div className="text-4xl lg:text-5xl font-black font-mono text-primary tracking-tighter mb-1">
                <Counter value={value} suffix={suffix} />
              </div>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
