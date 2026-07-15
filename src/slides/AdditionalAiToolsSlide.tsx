import { useEffect, useRef } from "react";
import type { AiToolsDemoSlide } from "./types";
import "./aiToolsDemo.css";

type AdditionalAiToolsSlideProps = {
  slide: AiToolsDemoSlide;
};

export function AdditionalAiToolsSlide({ slide }: AdditionalAiToolsSlideProps) {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const videos = videoRefs.current;
    return () => {
      videos.forEach((video) => {
        if (!video) return;
        video.pause();
        video.currentTime = 0;
      });
    };
  }, []);

  const pauseOtherVideos = (activeIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (!video || index === activeIndex) return;
      video.pause();
    });
  };

  return (
    <section className="slide-inner slide-inner--ai-tools-demo">
      <div className="ai-tools-demo-copy">
        <p className="slide-kicker">Дополнительный инструментарий</p>
        <h2 className="slide-heading">{slide.title}</h2>
      </div>

      <div className="ai-tools-demo-stage">
        <div className="ai-tools-demo-videos">
          {slide.videos.map((video, index) => (
            <article
              className={`ai-tools-demo-video-card ai-tools-demo-video-card--${
                video.emphasis ?? "secondary"
              }`}
              key={video.src}
            >
              <video
                ref={(element) => {
                  videoRefs.current[index] = element;
                }}
                src={video.src}
                controls
                playsInline
                preload="metadata"
                onPlay={() => pauseOtherVideos(index)}
              />
              <div className="ai-tools-demo-video-caption">
                <span>{video.label}</span>
                <strong>{video.title}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="ai-tools-demo-categories" aria-label="Категории AI-инструментов">
          {slide.categories.map((category, index) => (
            <article className="ai-tools-demo-category" key={category.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{category.title}</h3>
                <p>{category.tools}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
