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
  const [menuOpen, setMenuOpen] = useState(false);
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
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Julius Mueller home">JM<span>—</span>PHOTO</a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /></button>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="mailto:hello@juliusmueller.com">Contact</a>
      </nav>
    </header>

    <section className="intro" id="top">
      <p className="eyebrow">Landscape · Travel · California</p>
      <h1>Chasing the quiet<br />between <em>light</em> and land.</h1>
      <div className="intro-footer"><p>Selected photographs from the American West—wide horizons, patient light, and the places that stay with you.</p><a href="#work">Explore the work <span>↓</span></a></div>
    </section>

    <section className="gallery" id="work" aria-label="Selected photography">
      {photographs.map(([file, title, place, shape], index) => <button className={`photo-card ${shape}`} key={file} onClick={() => setActive(index)} aria-label={`View ${title}`}>
        <img src={`/photos/${file}`} alt={`${title}, ${place}`} loading={index < 3 ? "eager" : "lazy"} />
        <span className="photo-shade" /><span className="photo-number">{String(index + 1).padStart(2, "0")}</span><span className="photo-meta"><strong>{title}</strong><small>{place}</small></span>
      </button>)}
    </section>

    <section className="about" id="about"><p className="eyebrow">Behind the lens</p><div><h2>Drawn to open roads,<br />wild weather, and <em>honest</em> moments.</h2><p>I’m Julius, a photographer documenting landscapes and fleeting moments across California and beyond. My work is about slowing down enough to notice what the light is doing.</p><a href="mailto:hello@juliusmueller.com">Start a conversation ↗</a></div></section>

    <footer><span>© {new Date().getFullYear()} Julius Mueller</span><span>California, USA</span><a href="#top">Back to top ↑</a></footer>

    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={photographs[active][1]} onClick={() => setActive(null)}>
      <button className="close" onClick={() => setActive(null)} aria-label="Close image">Close ×</button>
      <button className="previous" onClick={e => { e.stopPropagation(); setActive((active - 1 + photographs.length) % photographs.length); }} aria-label="Previous image">←</button>
      <img src={`/photos/${photographs[active][0]}`} alt={`${photographs[active][1]}, ${photographs[active][2]}`} onClick={e => e.stopPropagation()} />
      <div className="lightbox-caption"><strong>{photographs[active][1]}</strong><span>{photographs[active][2]} · {active + 1}/{photographs.length}</span></div>
      <button className="next" onClick={e => { e.stopPropagation(); setActive((active + 1) % photographs.length); }} aria-label="Next image">→</button>
    </div>}
  </main>;
}
