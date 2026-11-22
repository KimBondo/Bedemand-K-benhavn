/**
 * Anmeldelser – to ordrette Google-anmeldelser, vist lige under opkaldsknappen.
 * Ingen stjerner eller gennemsnit – kun citaterne, navnet og et link til Google-profilen.
 * Ret ikke i citaterne. (QR-koden til at skrive en anmeldelse ligger i AnmeldelseBoks.tsx.)
 */

const CITATER = [
  {
    tekst:
      "Vil varmt anbefale Kim bedemand København. Det mest givende menneske i en svær situation. Hjalp mig helt fantastisk da jeg mistede min mand, og bagefter har jeg også spurgt om råd.",
    navn: "Anne Grethe O.",
  },
  {
    tekst:
      "Min familie og jeg kan kun give Kim Bondo vores varmeste anbefalinger. I den svære tid, hvor vi skulle tage afsked, blev vi mødt med stor omsorg, respekt og forståelse.",
    navn: "Lone G.",
  },
];

export default function Anmeldelser() {
  return (
    <section aria-labelledby="anmeldelser-titel" style={{ background: "#F9F8F6", padding: "8px 24px 48px" }}>
      <div style={{ maxWidth: "880px", margin: "0 auto" }}>
        <h2
          id="anmeldelser-titel"
          style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 26px)", color: "#2F3E46", textAlign: "center", margin: "0 0 20px" }}
        >
          Det siger familierne
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          {CITATER.map((c) => (
            <figure
              key={c.navn}
              style={{ margin: 0, background: "#ffffff", border: "1px solid #e0dcd6", borderLeft: "3px solid #3D6B4F", borderRadius: "4px", padding: "18px 20px" }}
            >
              <blockquote style={{ margin: 0, fontFamily: "'Open Sans', sans-serif", fontSize: "15px", lineHeight: 1.7, color: "#3d4f5a" }}>
                «{c.tekst}»
              </blockquote>
              <figcaption style={{ marginTop: "10px", fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#5a7a6a" }}>
                — {c.navn}, Google-anmeldelse
              </figcaption>
            </figure>
          ))}
        </div>
        <p style={{ textAlign: "center", margin: "18px 0 0", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>
          <a
            href="https://maps.google.com/?cid=18270352265939613039"
            target="_blank"
            rel="noopener"
            style={{ color: "#3D6B4F", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" }}
          >
            Læs anmeldelserne på Google
          </a>
        </p>
      </div>
    </section>
  );
}
