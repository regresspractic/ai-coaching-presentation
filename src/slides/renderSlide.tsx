import type { Slide } from "./types";
import { CinematicBeats } from "./cinematic/CinematicBeats";
import { CinematicField } from "./cinematic/CinematicField";

export function renderSlide(slide: Slide) {
  switch (slide.kind) {
    case "hero":
      return (
        <section className="slide-inner slide-inner--hero">
          {slide.image ? (
            <div className="slide-hero-image-wrap">
              <img
                src={slide.image}
                alt="Speaker"
                className="slide-hero-image"
              />
            </div>
          ) : null}
          {slide.kicker ? (
            <p className="slide-kicker">{slide.kicker}</p>
          ) : null}
          <h1 className="slide-title slide-title--breathing">{slide.title}</h1>
          {slide.subtitle ? (
            <p className="slide-subtitle">{slide.subtitle}</p>
          ) : null}
        </section>
      );
    case "speakers":
      return (
        <section className="slide-inner slide-inner--wide">
          {slide.title ? <h2 className="slide-heading">{slide.title}</h2> : null}
          <div className="speaker-grid">
            {slide.speakers.map((speaker) => (
              <article className="speaker-card" key={speaker.name}>
                <img
                  className={`speaker-photo ${
                    speaker.imageVariant === "wide" ? "speaker-photo--wide" : ""
                  }`}
                  src={speaker.image}
                  alt={speaker.name}
                />
                <div className="speaker-copy">
                  {speaker.role ? (
                    <p className="speaker-role">{speaker.role}</p>
                  ) : (
                    <div className="speaker-role-spacer" aria-hidden />
                  )}
                  <h2>{speaker.name}</h2>
                  {speaker.bio ? <p>{speaker.bio}</p> : null}
                  {speaker.instagram ? (
                    <a
                      className="instagram-link"
                      href={speaker.instagram}
                      target="_blank"
                      rel="noopener"
                      onClick={(event) => {
                        event.preventDefault();
                        window.open(
                          speaker.instagram,
                          "instagramProfile",
                          "popup=yes,width=520,height=760,noopener",
                        );
                      }}
                    >
                      Instagram
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      );
    case "cards":
      return (
        <section className="slide-inner slide-inner--wide">
          <h2 className="slide-heading">{slide.title}</h2>
          <div className="cards-grid">
            {slide.cards.map((card) => (
              <article className="feature-card" key={card.title}>
                {card.image ? (
                  <div className="feature-logo-wrap">
                    <img
                      className="feature-logo"
                      src={card.image}
                      alt={`Логотип ${card.title}`}
                    />
                  </div>
                ) : null}
                <h3 style={{ color: card.accent }}>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
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
    case "quote":
      return (
        <section className="slide-inner slide-inner--quote">
          <h2 className="slide-heading">{slide.title}</h2>
          <p className="quote-body">{slide.body}</p>
          {slide.emphasis ? (
            <p className="quote-emphasis">{slide.emphasis}</p>
          ) : null}
        </section>
      );
    case "tools":
      return (
        <section className="slide-inner slide-inner--wide">
          <h2 className="slide-heading">{slide.title}</h2>
          <div className="tools-grid">
            {slide.tools.map((tool) => (
              <article className="tool-card" key={tool.name}>
                <img className="tool-logo" src={tool.image} alt="" />
                <div>
                  <h3 style={{ color: tool.accent }}>{tool.name}</h3>
                  <p>{tool.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      );
    case "case":
      return (
        <section className="slide-inner slide-inner--wide">
          <h2 className="slide-heading">{slide.title}</h2>
          <div className="case-grid">
            <article className="case-panel">
              <p className="case-label">Было</p>
              <div className="case-before">
                {slide.beforeImage ? (
                  <img
                    className="case-before-image"
                    src={slide.beforeImage}
                    alt={slide.beforeAlt ?? "Исходное изображение"}
                  />
                ) : null}
                <span>{slide.before}</span>
              </div>
            </article>
            <article className="case-panel">
              <p className="case-label">Стало</p>
              <img
                className="case-image"
                src={slide.afterImage}
                alt={slide.afterAlt}
              />
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
