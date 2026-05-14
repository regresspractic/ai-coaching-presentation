import type { CSSProperties } from "react";
import type { Slide } from "./types";
import { CinematicBeats } from "./cinematic/CinematicBeats";
import { CinematicField } from "./cinematic/CinematicField";

function SeminarIcon({ kind }: { kind: "funnel" | "visual" | "session" }) {
  if (kind === "funnel") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden>
        <path d="M14 15h36L37 32v13l-10 5V32L14 15Z" />
        <path d="M21 21h22" className="seminar-icon-shine" />
      </svg>
    );
  }

  if (kind === "visual") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden>
        <rect x="17" y="20" width="30" height="24" rx="5" />
        <path d="M22 39l8-9 6 6 4-4 7 7" className="seminar-icon-cutout" />
        <circle cx="40" cy="27" r="3.5" className="seminar-icon-cutout" />
        <path d="M19 15h26" className="seminar-icon-shine" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden>
      <path d="M18 18h28a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H31l-11 7v-7h-2a6 6 0 0 1-6-6V24a6 6 0 0 1 6-6Z" />
      <path d="M22 28h20M22 36h13" className="seminar-icon-shine" />
    </svg>
  );
}

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
    case "seminar":
      return (
        <section className="slide-inner slide-inner--seminar">
          <div className="seminar-copy">
            <p className="slide-kicker">Практикум</p>
            <h2 className="seminar-title">{slide.title}</h2>
            <p className="seminar-lead">{slide.lead}</p>
          </div>
          <div className="seminar-grid">
            {slide.items.map((item) => (
              <article
                className="seminar-card"
                key={item.title}
                style={{ "--seminar-accent": item.accent } as CSSProperties}
              >
                <div className="seminar-icon">
                  <SeminarIcon kind={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      );
    case "cosmicCta":
      return (
        <section className="slide-inner slide-inner--cosmic">
          <div className="cosmic-copy">
            <p className="slide-kicker">ИИ уже здесь</p>
            <h2 className="cosmic-title">{slide.title}</h2>
            <div className="cosmic-links" aria-label="Контакты">
              {slide.links.map((link) => (
                <a
                  className="cosmic-link"
                  href={link.url}
                  target="_blank"
                  rel="noopener"
                  key={link.url}
                >
                  <span>{link.label}</span>
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          </div>
          <div className="cosmic-stage" aria-hidden>
            <div className="cosmic-star-field">
              {Array.from({ length: 18 }, (_, index) => (
                <span key={index} />
              ))}
            </div>
            <div className="cosmic-orbit cosmic-orbit--outer" />
            <div className="cosmic-orbit cosmic-orbit--inner" />
            <div className="cosmic-ai-core">
              <span>AI</span>
            </div>
            <div className="cosmic-panel cosmic-panel--one">
              <span />
              <i />
              <i />
              <i />
            </div>
            <div className="cosmic-panel cosmic-panel--two">
              <span />
              <i />
            </div>
            <div className="cosmic-comet" />
          </div>
        </section>
      );
    case "mythReality":
      return (
        <section className="slide-inner slide-inner--myth">
          <div className="myth-grid" aria-hidden>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="myth-card myth-card--false">
            <p className="myth-label">Заблуждение</p>
            <h2>{slide.myth}</h2>
          </div>
          <div className="myth-card myth-card--true">
            <p className="myth-label">Реальность</p>
            <h2>{slide.reality}</h2>
          </div>
          <div className="myth-points">
            {slide.points.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </section>
      );
    case "superintelligence":
      return (
        <section className="slide-inner slide-inner--super">
          <div className="super-ring" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <div className="super-copy">
            <p className="slide-kicker">Следующий порог</p>
            <h2 className="super-title">{slide.title}</h2>
            <p className="super-lead">{slide.lead}</p>
          </div>
          <div className="super-side">
            <div className="super-year">2027</div>
            <p>{slide.forecast}</p>
          </div>
          <p className="super-question">{slide.question}</p>
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
