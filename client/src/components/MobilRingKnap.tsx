/**
 * MobilRingKnap – fast bjælke i bunden af skærmen, kun på mobil.
 * Venstre: «Ring» (tel:+4528146011). Højre: «Ring mig op», som åbner den korte formular.
 * Telefonen er den vigtigste vej ind, så den står først og fylder mest.
 * Cookie-banneret ligger på mobil lige over bjælken, så begge altid kan trykkes på.
 */
import { aabnRingMigOp } from "./RingMigOp";

export default function MobilRingKnap() {
  return (
    <>
      <style>{`
        .mobil-ringbjaelke { display: none; }
        @media (max-width: 768px) {
          .mobil-ringbjaelke {
            display: flex;
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9000;
            background: #3D6B4F;
            box-shadow: 0 -2px 12px rgba(0,0,0,0.15);
            padding-bottom: env(safe-area-inset-bottom);
          }
          .mobil-ringknap, .mobil-ringopknap {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            color: #ffffff;
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            font-size: 16px;
            letter-spacing: 0.02em;
            text-decoration: none;
            padding: 14px 10px;
            min-height: 56px;
            box-sizing: border-box;
          }
          .mobil-ringknap { flex: 1.35; }
          .mobil-ringopknap {
            flex: 1;
            background: #2F5540;
            border: none;
            border-left: 1px solid rgba(255,255,255,0.25);
            cursor: pointer;
          }
          body { padding-bottom: calc(56px + env(safe-area-inset-bottom)); }
        }
        @media (max-width: 360px) {
          .mobil-ringknap, .mobil-ringopknap { font-size: 14px; padding: 14px 6px; }
        }
      `}</style>
      <div className="mobil-ringbjaelke">
        <a href="tel:+4528146011" className="mobil-ringknap" aria-label="Ring til mig på 28 14 60 11">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true" style={{ flexShrink: 0 }}>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Ring 28 14 60 11
        </a>
        <button type="button" className="mobil-ringopknap" onClick={aabnRingMigOp}>
          Ring mig op
        </button>
      </div>
    </>
  );
}
