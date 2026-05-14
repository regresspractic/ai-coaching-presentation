import { SlideDeck } from "../components/SlideDeck";
import { presentationSlides } from "../slides/content";
import { renderSlide } from "../slides/renderSlide";
import { BackgroundParticles } from "../components/BackgroundParticles";

export function PresentationApp() {
  return (
    <>
      <BackgroundParticles />
      <SlideDeck>
        {presentationSlides.map((slide, i) => (
          <div key={i} className="slide-root">
            {renderSlide(slide)}
          </div>
        ))}
      </SlideDeck>
    </>
  );
}
