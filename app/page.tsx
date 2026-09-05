"use client";

import { useEffect, useState } from "react";

const photographs = [
  ["059A4984-sm-scaled.jpg", "Desert Passage", "American Southwest", "hero"],
  ["059A3895-HDR-2.jpg", "Rattlesnake Canyon", "Arizona", "portrait"],
  ["059A3402.jpg", "Virgin River", "Zion National Park", "landscape"],
  ["059A3130.jpg", "Jenny Lake", "Grand Teton", "landscape"],
  ["059A2358.jpg", "Pigeon Point", "California Coast", "portrait"],
  ["059A2215.jpg", "Autumn Forest", "Northern California", "landscape"],
  ["059A4161-HDR.jpg", "Canyon Light", "Arizona", "portrait"],
  ["059A4038-HDR.jpg", "Stone & Sky", "Utah", "landscape"],
  ["059A3908-HDR.jpg", "The Narrows", "Zion National Park", "portrait"],
  ["059A1789.jpg", "Pacific Morning", "Half Moon Bay", "landscape"],
  ["059A1491.jpg", "Beach Walk", "Half Moon Bay", "portrait"],
  ["059A1476.jpg", "Low Tide", "Half Moon Bay", "landscape"],
  ["059A1046.jpg", "Redwood Silence", "California", "portrait"],
  ["059A0766.jpg", "After Dark", "Golden Gate", "landscape"],
  ["059A0119.jpg", "Last Light", "Half Moon Bay", "hero"],
  ["halfmoombayselfiedited80.jpg", "On the Road", "California", "portrait"],
  ["059A4984-small-1-1024x650.jpg", "Open Country", "The West", "landscape"],
] as const;

export default function Home() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (active === null) return;
      if (event.key === "ArrowRight") setActive((active + 1) % photographs.length);
      if (event.key === "ArrowLeft") setActive((active - 1 + photographs.length) % photographs.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return <main>
    <header className="logo-header">
      <a href="#gallery" aria-label="Julius Mueller photography home">
        <img src="/logo.png" alt="Julius Mueller — Landscape, Travel, California" />
      </a>
    </header>
    <section className="gallery" id="gallery" aria-label="Selected photography">
      {photographs.map(([file, title, place, shape], index) => <button className={`photo-card ${shape}`} key={file} onClick={() => setActive(index)} aria-label={`View ${title}`}>
        <img src={`/photos/${file}`} alt={`${title}, ${place}`} loading={index < 3 ? "eager" : "lazy"} />
      </button>)}
    </section>

    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={photographs[active][1]} onClick={() => setActive(null)}>
      <button className="close" onClick={() => setActive(null)} aria-label="Close image">×</button>
      <button className="previous" onClick={e => { e.stopPropagation(); setActive((active - 1 + photographs.length) % photographs.length); }} aria-label="Previous image">←</button>
      <img src={`/photos/${photographs[active][0]}`} alt={`${photographs[active][1]}, ${photographs[active][2]}`} onClick={e => e.stopPropagation()} />
      <button className="next" onClick={e => { e.stopPropagation(); setActive((active + 1) % photographs.length); }} aria-label="Next image">→</button>
    </div>}
  </main>;
}
