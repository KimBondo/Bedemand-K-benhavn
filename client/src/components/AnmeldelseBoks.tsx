/**
 * Lille, diskret afsnit med link og QR-kode til en Google-anmeldelse.
 * Kun passivt: ingen pop-ups, påmindelser eller stjerner.
 */
const ANMELDELSE_URL = "https://g.page/r/CW91ldyVVI39EBM/review";

export default function AnmeldelseBoks() {
  return (
    <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
      <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", lineHeight: 1.7, color: "#7a8f99", margin: "0 0 16px" }}>
        Har I lyst til at fortælle andre om jeres oplevelse, kan I gøre det{" "}
        <a href={ANMELDELSE_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#3D6B4F", fontWeight: 600 }}>
          her
        </a>{" "}
        – men kun hvis det føles rigtigt for jer.
      </p>
      <a href={ANMELDELSE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "120px", margin: "0 auto" }}>
        <img
          src="/images/anmeldelse-google-qr.svg"
          width={120}
          height={120}
          loading="lazy"
          alt="QR-kode til at skrive en anmeldelse af Bedemand København på Google"
          style={{ display: "block", width: "120px", height: "120px" }}
        />
      </a>
    </div>
  );
}
