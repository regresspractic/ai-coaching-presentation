import { SlideDeck } from "./components/SlideDeck";
import { presentationSlides } from "./slides/content";
import { renderSlide } from "./slides/renderSlide";

export default function App() {
  return (
    <SlideDeck>
      {presentationSlides.map((slide, i) => (
        <div key={i} className="slide-root">
          {renderSlide(slide)}
        </div>
      ))}
    </SlideDeck>
  );
}
