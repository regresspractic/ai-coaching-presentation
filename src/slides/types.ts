export type HeroSlide = {
  kind: "hero";
  kicker?: string;
  title: string;
  subtitle?: string;
};

export type BulletsSlide = {
  kind: "bullets";
  title: string;
  items: string[];
};

export type SplitSlide = {
  kind: "split";
  title: string;
  lead?: string;
  left: { heading: string; body: string };
  right: { heading: string; body: string };
};

/** Поэтапный текст, кинематографичные паузы (тайминги в компоненте). */
export type CinematicBeatsSlide = {
  kind: "cinematicBeats";
  lines: string[];
  finale?: boolean;
};

/** Атмосферный слайд: мало текста, акцент на визуале. */
export type CinematicFieldSlide = {
  kind: "cinematicField";
  pillars: { label: string }[];
};

export type Slide =
  | HeroSlide
  | BulletsSlide
  | SplitSlide
  | CinematicBeatsSlide
  | CinematicFieldSlide;
