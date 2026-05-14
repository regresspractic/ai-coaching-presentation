export type HeroSlide = {
  kind: "hero";
  kicker?: string;
  title: string;
  subtitle?: string;
  image?: string;
};

export type SpeakerSlide = {
  kind: "speakers";
  title?: string;
  speakers: {
    name: string;
    role?: string;
    bio?: string;
    image: string;
    imageVariant?: "portrait" | "wide";
    instagram?: string;
    intentionallySparse?: boolean;
  }[];
};

export type CardsSlide = {
  kind: "cards";
  title: string;
  cards: {
    title: string;
    body: string;
    image?: string;
    accent?: string;
  }[];
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

export type QuoteSlide = {
  kind: "quote";
  title: string;
  body: string;
  emphasis?: string;
};

export type ToolsSlide = {
  kind: "tools";
  title: string;
  tools: {
    name: string;
    body: string;
    image: string;
    accent?: string;
  }[];
};

export type CaseSlide = {
  kind: "case";
  title: string;
  before: string;
  beforeImage?: string;
  beforeAlt?: string;
  afterImage: string;
  afterAlt: string;
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
  | SpeakerSlide
  | CardsSlide
  | BulletsSlide
  | SplitSlide
  | QuoteSlide
  | ToolsSlide
  | CaseSlide
  | CinematicBeatsSlide
  | CinematicFieldSlide;
