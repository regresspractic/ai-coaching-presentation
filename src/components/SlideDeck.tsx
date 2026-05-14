import {
  Children,
  type ReactNode,
  type TouchEvent,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";

type Direction = "next" | "prev" | null;

type DeckState = {
  index: number;
  direction: Direction;
};

type DeckAction =
  | { type: "go"; delta: number; count: number }
  | { type: "set"; index: number; count: number };

function deckReducer(state: DeckState, action: DeckAction): DeckState {
  if (action.type === "go") {
    const next = state.index + action.delta;
    if (next < 0 || next >= action.count) return state;
    return {
      index: next,
      direction: action.delta > 0 ? "next" : "prev",
    };
  }
  const clamped = Math.max(0, Math.min(action.index, action.count - 1));
  if (clamped === state.index) return state;
  return {
    index: clamped,
    direction: clamped > state.index ? "next" : "prev",
  };
}

function parseSlideHash(slideCount: number): number {
  if (slideCount <= 0) return 0;
  const raw = window.location.hash.replace(/^#/, "");
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 1) return 0;
  return Math.min(slideCount - 1, Math.floor(n) - 1);
}

function writeSlideHash(index: number) {
  const next = `#${index + 1}`;
  if (window.location.hash !== next) {
    window.history.replaceState(null, "", next);
  }
}

async function toggleFullscreen() {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch {
    /* ignore — политика браузера или отсутствие API */
  }
}

type SlideDeckProps = {
  children: ReactNode;
};

export function SlideDeck({ children }: SlideDeckProps) {
  const slides = useMemo(() => Children.toArray(children), [children]);
  const count = slides.length;
  const touchStartX = useRef<number | null>(null);

  const [{ index, direction }, dispatch] = useReducer(
    deckReducer,
    count,
    (slideCount: number) => ({
      index: parseSlideHash(slideCount),
      direction: "next" as Direction,
    }),
  );

  const go = useCallback(
    (delta: number) => {
      dispatch({ type: "go", delta, count });
    },
    [count],
  );

  useEffect(() => {
    if (count === 0) return;
    if (index >= count) {
      dispatch({ type: "set", index: count - 1, count });
    }
  }, [count, index]);

  useEffect(() => {
    if (count === 0) return;
    writeSlideHash(index);
  }, [count, index]);

  useEffect(() => {
    const onHashChange = () => {
      if (count === 0) return;
      const fromHash = parseSlideHash(count);
      dispatch({ type: "set", index: fromHash, count });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable=true]")) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "Home") {
        e.preventDefault();
        dispatch({ type: "set", index: 0, count });
      }
      if (e.key === "End") {
        e.preventDefault();
        dispatch({ type: "set", index: count - 1, count });
      }
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        void toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, count]);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;
    const end = e.changedTouches[0]?.clientX ?? start;
    const dx = end - start;
    const threshold = 56;
    if (dx < -threshold) go(1);
    else if (dx > threshold) go(-1);
  };

  const animationClass =
    direction === "prev" ? "slide-anim--enter-prev" : "slide-anim--enter-next";

  if (count === 0) {
    return (
      <div className="deck deck--empty">
        <p className="deck-empty-msg">Нет слайдов: передайте children в SlideDeck.</p>
      </div>
    );
  }

  return (
    <div className="deck" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className={`slide-frame ${animationClass}`} key={index}>
        {slides[index]}
      </div>

      <footer className="deck-chrome" aria-hidden="false">
        <div className="deck-chrome-row">
          <div className="deck-progress">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`deck-dot ${i === index ? "is-active" : ""}`}
                aria-label={`Слайд ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => dispatch({ type: "set", index: i, count })}
              />
            ))}
          </div>
          <p className="deck-hint">
            F — полный экран · в URL номер слайда (#1 … #{count})
          </p>
          <div className="deck-controls">
            <button
              type="button"
              className="deck-btn"
              aria-label="Назад"
              disabled={index === 0}
              onClick={() => go(-1)}
            >
              Назад
            </button>
            <span className="deck-counter">
              {index + 1} / {count}
            </span>
            <button
              type="button"
              className="deck-btn"
              aria-label="Вперед"
              disabled={index === count - 1}
              onClick={() => go(1)}
            >
              Вперед
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
