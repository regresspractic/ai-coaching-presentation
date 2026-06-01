import { useEffect, useLayoutEffect, useState } from "react";
import LandingPage from "./landing/LandingPage";
import { PresentationApp } from "./presentation/PresentationApp";

function isDeckHash(): boolean {
  const raw = window.location.hash.slice(1);
  if (!raw || raw === "landing" || raw === "top") return false;
  if (raw === "deck") return true;
  return /^\d+$/.test(raw);
}

export default function App() {
  const [deck, setDeck] = useState(isDeckHash);

  useEffect(() => {
    const onHash = () => setDeck(isDeckHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useLayoutEffect(() => {
    document.body.classList.toggle("landing-mode", !deck);
  }, [deck]);

  if (deck) {
    return (
<PresentationApp />
    );
  }

  return <LandingPage />;
}
