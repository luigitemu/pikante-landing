import { useEffect, useRef, useState } from 'react';

export default function PrepVideo() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && playing) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [playing]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="prep-video reveal">
      <div className="prep-video-frame">
        <video
          ref={ref}
          src="/assets/prep-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="prep-video-overlay">
          <span className="prep-video-tag">Reel · 00:08 al primer trago</span>
          <div className="prep-video-controls">
            <button
              onClick={toggle}
              aria-label={playing ? 'Pausar' : 'Reproducir'}
              className="pv-btn"
              type="button"
            >
              {playing ? (
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 4l14 8-14 8z" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleMute}
              aria-label={muted ? 'Activar sonido' : 'Silenciar'}
              className="pv-btn"
              type="button"
            >
              {muted ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M11 5L6 9H3v6h3l5 4z" />
                  <line x1="22" y1="9" x2="16" y2="15" />
                  <line x1="16" y1="9" x2="22" y2="15" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M11 5L6 9H3v6h3l5 4z" />
                  <path d="M19 12a4 4 0 0 0-2-3.5" />
                  <path d="M22 12a8 8 0 0 0-3-6.2" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <aside className="prep-video-side">
        <span className="mono accent">Look · Sound · Feel</span>
        <h3>
          Mírala
          <br />
          <em>en acción.</em>
        </h3>
        <p>
          Del refrigerador al brindis en menos de lo que tarda un meme en hacerse viral. Sirve,
          mezcla, prende todo.
        </p>
      </aside>
    </div>
  );
}
