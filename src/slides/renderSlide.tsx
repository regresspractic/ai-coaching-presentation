import type { Slide } from "./types";
import { CinematicBeats } from "./cinematic/CinematicBeats";
import { CinematicField } from "./cinematic/CinematicField";

export function renderSlide(slide: Slide) {
  switch (slide.kind) {
    case "hero":
      return (
        <section className="slide-inner slide-inner--hero">
          {slide.kicker ? (
            <p className="slide-kicker">{slide.kicker}</p>
          ) : null}
          <h1 className="slide-title">{slide.title}</h1>
          {slide.subtitle ? (
            <p className="slide-subtitle">{slide.subtitle}</p>
          ) : null}
        </section>
      );
    case "bullets":
      return (
        <section className="slide-inner slide-inner--bullets">
          <h2 className="slide-heading">{slide.title}</h2>
          <ul className="slide-list">
            {slide.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      );
    case "split":
      return (
        <section className="slide-inner slide-inner--split">
          <h2 className="slide-heading">{slide.title}</h2>
          {slide.lead ? <p className="slide-lead">{slide.lead}</p> : null}
          <div className="slide-columns">
            <article className="slide-column">
              <h3 className="slide-column-title">{slide.left.heading}</h3>
              <p className="slide-column-body">{slide.left.body}</p>
            </article>
            <article className="slide-column">
              <h3 className="slide-column-title">{slide.right.heading}</h3>
              <p className="slide-column-body">{slide.right.body}</p>
            </article>
          </div>
        </section>
      );
    case "cinematicBeats":
      return (
        <CinematicBeats lines={slide.lines} finale={slide.finale} />
      );
    case "cinematicField":
      return <CinematicField pillars={slide.pillars} />;
    default:
      return null;
  }
}
