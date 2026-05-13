import { useEffect, useState } from "react";

type Pillar = { label: string };

type Props = {
  pillars: Pillar[];
};

export function CinematicField({ pillars }: Props) {
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [phase, setPhase] = useState(() => (reduceMotion ? pillars.length : 0));

  useEffect(() => {
    if (reduceMotion) {
      setPhase(pillars.length);
      return;
    }
    setPhase(0);
    const steps: ReturnType<typeof setTimeout>[] = [];
    const base = 1000;
    const step = 2600;
    for (let i = 0; i < pillars.length; i += 1) {
      steps.push(
        setTimeout(() => setPhase((p) => Math.max(p, i + 1)), base + i * step),
      );
    }
    return () => steps.forEach(clearTimeout);
  }, [pillars, reduceMotion]);

  return (
    <section
      className="cinematic-field"
      aria-label="Визуальный слайд: масштаб систем"
    >
      <div className="cinematic-field-aurora" aria-hidden />
      <div className="cinematic-field-aurora cinematic-field-aurora--slow" aria-hidden />
      <div className="cinematic-field-horizon" aria-hidden />
      <div className="cinematic-field-grid" aria-hidden />

      <div className="cinematic-field-pillars">
        {pillars.map((p, i) => (
          <div
            key={p.label}
            className={`cinematic-pillar ${i < phase ? "is-active" : ""}`}
          >
            <span className="cinematic-pillar-label">{p.label}</span>
            <div className="cinematic-pillar-stem" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  );
}
