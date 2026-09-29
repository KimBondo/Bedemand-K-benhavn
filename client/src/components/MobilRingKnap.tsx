/**
 * MobilRingKnap – fast "Ring til Kim"-bjælke i bunden af skærmen, kun på mobil.
 * Telefonen er den vigtigste vej ind, så knappen skal altid være inden for rækkevidde.
 * Ligger under cookie-banneret (z-index), så banneret stadig kan besvares.
 */
export default function MobilRingKnap() {
  return (
    <>
      <style>{`
        .mobil-ringknap { display: none; }
        @media (max-width: 768px) {
          .mobil-ringknap {
            display: flex;
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9000;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: #3D6B4F;
            color: #ffffff;
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            font-size: 17px;
            letter-spacing: 0.03em;
            text-decoration: none;
            padding: 14px 16px calc(14px + env(safe-area-inset-bottom));
            box-shadow: 0 -2px 12px rgba(0,0,0,0.15);
          }
          body { padding-bottom: calc(56px + env(safe-area-inset-bottom)); }
        }
      `}</style>
      <a href="tel:22211437" className="mobil-ringknap" aria-label="Ring til Kim Bondo på 22 21 14 37">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        Ring til Kim · 22 21 14 37
      </a>
    </>
  );
}
