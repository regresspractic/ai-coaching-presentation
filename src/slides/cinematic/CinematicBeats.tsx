import { useEffect, useRef, useState } from "react";

const REVEAL_MS = 1750;
const HOLD_MS = 4000;
const INITIAL_MS = 1200;

type Props = {
  lines: string[];
  /** Чуть дольше паузы на финальном слайде акта */
  finale?: boolean;
};

export function CinematicBeats({ lines, finale }: Props) {
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [visible, setVisible] = useState(() =>
    reduceMotion ? lines.length : 0,
  );
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    if (reduceMotion) {
      setVisible(lines.length);
      return;
    }

    setVisible(0);

    const hold = finale ? HOLD_MS + 900 : HOLD_MS;

    const schedule = (idx: number, delay: number) => {
      const t = setTimeout(() => {
        setVisible((v) => Math.max(v, idx + 1));
      }, delay);
      timers.current.push(t);
    };

    let cursor = INITIAL_MS;
    for (let i = 0; i < lines.length; i += 1) {
      schedule(i, cursor);
      cursor += REVEAL_MS + hold;
    }

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [lines, finale, reduceMotion]);

  return (
    <section
      className="cinematic-beats"
      aria-label="Слайд с поэтапным появлением текста"
    >
      <div className="cinematic-beats-vignette" aria-hidden />
      <div className="cinematic-beats-scan" aria-hidden />
      <div className="cinematic-beats-lines">
        {lines.map((line, i) => {
          const isShown = i < visible;
          const isCurrent = visible > 0 && i === visible - 1;
          const isPast = !reduceMotion && isShown && !isCurrent;
          return (
            <p
              key={`${i}-${line}`}
              className={[
                "cinematic-beat",
                isShown ? "is-visible" : "",
                isPast ? "is-past" : "",
                isCurrent ? "is-current" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {line}
            </p>
          );
        })}
      </div>
    </section>
  );
}
