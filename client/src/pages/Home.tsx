import SEO from "@/components/SEO";

/**
 * Bedemand København og Nordsjælland — Landing Page
 * Design: Nordic Quietism
 * Layout: Hero landscape fills the entire viewport as a fixed background.
 *         A dark overlay sits on top.
 *         The header, welcome text, and distribution portal all live
 *         inside a single scrollable column over that background.
 * Interaction policy: NO animations on load. ONE permitted interaction: 200ms button hover.
 */

import SchemaOrg from "@/components/SchemaOrg";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#1a3a6b",
      }}
    >
     <SEO
       title="Bedemand København og Nordsjælland – Personlig og nærværende hjælp"
        description="To selvstændige bedemænd i København og Nordsjælland. Marie Thjellesen og Kim Bondo hjælper jer med bisættelse, begravelse og afsked — med nærvær, ro og gennemsigtige priser."
       url="https://bedemandkobenhavn.dk/"
        image="https://bedemandkbh-8wuvn9as.manus.space/manus-storage/kim-beach-solo_609d5ab7.png"
      />
      <SchemaOrg type="WebSite" />
      {/* ─── SOLID BLUE BACKGROUND ───────────────────────────────────────── */}

      {/* ─── SCROLLABLE CONTENT ──────────────────────────────────────────── */}
      <main style={{ position: "relative", zIndex: 2 }}>


        {/* ── HERO TEXT ── */}
        <div
          style={{
            textAlign: "center",
            padding: "48px 24px 72px",
          }}
        >
          <h1
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(26px, 4.5vw, 50px)",
              color: "#ffffff",
              letterSpacing: "0.02em",
              lineHeight: 1.25,
              marginBottom: "20px",
            }}
          >
            Velkommen til Bedemand København og Nordsjælland
          </h1>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(15px, 1.8vw, 20px)",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.65,
              maxWidth: "580px",
              margin: "0 auto",
            }}
          >
            To selvstændige bedemænd med ét fælles mål: At skabe en værdig og rolig afsked.
          </p>
        </div>

        {/* ── DISTRIBUTION PORTAL ── */}
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {/* Section label */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#ffffff",
                marginBottom: "14px",
              }}
            >
              Hvem vil du/I tale med?
            </p>
            <div
              style={{
                width: "40px",
                height: "1px",
                backgroundColor: "rgba(255,255,255,0.3)",
                margin: "0 auto",
              }}
            />
          </div>

          {/* 50/50 columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
            className="portal-grid"
          >
            <DirectorColumn
              name="Marie Thjellesen"
              title="Bedemand"
              bio="Med min faglige baggrund som jordemoder og familieterapeut og i mit arbejde som bedemand, er det vigtigste for mig at tilbyde jer; ro og nærvær, tryghed og forudsigelighed. At skabe en tydelig ramme, så I får den afsked I ønsker."
              bioClosing="Jeg er med jer hele vejen."
              address="Holbergsgade 26, 1. tv., 1057 København K"
              phone="29 29 66 89"
              phoneLink="tel:29296689"
              callLabel="Ring direkte til Marie"
              websiteLabel="Gå til Maries hjemmeside"
              websiteHref="https://mariesbegravelser.dk/"
              initials="MT"
              portraitSrc="https://bedemandkbh-8wuvn9as.manus.space/manus-storage/marie-portrait-new_3f60d1bf.jpeg"
              portraitAlt="Marie Thjellesen – Bedemand"
              portraitSrcSet="https://bedemandkbh-8wuvn9as.manus.space/manus-storage/marie-portrait-new_3f60d1bf_464w_7461174f.webp 464w, https://bedemandkbh-8wuvn9as.manus.space/manus-storage/marie-portrait-new_3f60d1bf_930w_aaa60cf2.webp 930w, https://bedemandkbh-8wuvn9as.manus.space/manus-storage/marie-portrait-new_3f60d1bf_1400w_c06def5b.webp 1400w"
            />
            <DirectorColumn
              name="Kim Bondo"
              title="Bedemand"
              bio="For mig er det en hjertesag at møde jer med nærvær, ro og en dyb tillid til, at også de tungeste stunder bærer mening i sig. Min vigtigste opgave er at skabe et roligt og rummeligt frirum, hvor I kan være i jeres sorg. Jeg bærer alt det praktiske og logistiske for jer i baggrunden, så I kan finde fred til en kærlig afsked."
              address="Vandtårnsvej 62A, 2860 Søborg"
              phone="22 21 14 37"
              phoneLink="tel:22211437"
              callLabel="Ring direkte til Kim"
              websiteLabel="Gå til Kims hjemmeside"
              websiteHref="/kim-bondo"
              initials="KB"
              portraitSrc="https://bedemandkbh-8wuvn9as.manus.space/manus-storage/kim-bondo-portrait-neutral-bg_dfb527d8.png"
              portraitAlt="Kim Bondo – Bedemand"
              portraitSrcSet="https://bedemandkbh-8wuvn9as.manus.space/manus-storage/kim-bondo-portrait-neutral-bg_dfb527d8_464w_fad65f06.webp 464w, https://bedemandkbh-8wuvn9as.manus.space/manus-storage/kim-bondo-portrait-neutral-bg_dfb527d8_930w_0ebe7e5b.webp 930w, https://bedemandkbh-8wuvn9as.manus.space/manus-storage/kim-bondo-portrait-neutral-bg_dfb527d8_1400w_7b940c54.webp 1400w"
            />
          </div>
        </div>

        {/* ── BEDEMAND KOBENHAVN FEATURED ── */}
        <section
          style={{
            background: "rgba(255,255,255,0.05)",
            borderTop: "1px solid rgba(255,255,255,0.10)",
            padding: "40px 24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.12em",
              color: "#3D6B4F",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Søger du bedemand i København eller Nordsjælland?
          </p>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "15px",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "20px",
              lineHeight: 1.6,
            }}
          >
            Kim Bondo og Marie Thjellesen dækker hele København og Nordsjælland — tilgængelig hele døgnet.
          </p>

        </section>

        {/* ── FOOTER ── */}
        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            padding: "32px 24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.40)",
              lineHeight: 1.75,
            }}
          >
            © {new Date().getFullYear()} Bedemand København og Nordsjælland &nbsp;·&nbsp; To selvstændige bedemænd
          </p>
        </footer>
      </main>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .portal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ─── Director Column Component ─────────────────────────────────────────── */
interface DirectorColumnProps {
  name: string;
  title: string;
  bio: string;
  bioClosing?: string;
  address: string;
  phone: string;
  phoneLink: string;
  callLabel: string;
  websiteLabel: string;
  websiteHref: string;
  initials: string;
  portraitSrc?: string;
  portraitAlt?: string;
  portraitSrcSet?: string;
}

function DirectorColumn({
  name,
  title,
  bio,
  bioClosing,
  address,
  phone,
  phoneLink,
  callLabel,
  websiteLabel,
  websiteHref,
  initials,
  portraitSrc,
  portraitAlt,
  portraitSrcSet,
}: DirectorColumnProps) {
  return (
    <div
      style={{
        backgroundColor: "rgba(249, 248, 246, 0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        padding: "48px 40px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Portrait */}
      <div
       style={{
         width: "100%",
         aspectRatio: "3/4",
          maxHeight: "480px",
         backgroundColor: "#E0DDD8",
          marginBottom: "28px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      {portraitSrc ? (
        <picture style={{ width: "100%", height: "100%", display: "block" }}>
          {portraitSrcSet && (
            <source
              srcSet={portraitSrcSet}
              type="image/webp"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 464px"
            />
          )}
          <img
            src={portraitSrc}
            alt={portraitAlt || name}
            fetchPriority="high"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
        </picture>
        ) : (
          <>
            <span
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "52px",
                fontWeight: 600,
                color: "#A8B8A1",
                letterSpacing: "0.04em",
              }}
            >
              {initials}
            </span>
            <span
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "11px",
                color: "#A8B8A1",
                marginTop: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Portræt følger
            </span>
          </>
        )}
      </div>

      {/* Name & Title */}
      <h2
        style={{
          fontFamily: "'Lora', serif",
          fontWeight: 600,
          fontSize: "clamp(19px, 2vw, 24px)",
          color: "#2F3E46",
          letterSpacing: "0.02em",
          lineHeight: 1.3,
          marginBottom: "6px",
        }}
      >
        {name}
      </h2>
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "12px",
          fontWeight: 600,
         letterSpacing: "0.12em",
         textTransform: "uppercase",
         color: "#4A7A55",
         marginBottom: "24px",
        }}
      >
        {title}
      </p>

      {/* Biography */}
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "#4A5C63",
          marginBottom: "32px",
          flex: 1,
        }}
      >
        {bio}
        {bioClosing && <span style={{ display: 'block', marginTop: '20px' }}>{bioClosing}</span>}
      </p>

      {/* Contact block */}
      <div
        style={{
          borderTop: "1px solid #DDD8D0",
          paddingTop: "24px",
          marginBottom: "28px",
        }}
      >
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "15px",
            fontWeight: 600,
            color: "#2F3E46",
            marginBottom: "6px",
          }}
        >
          Tlf: {phone}
        </p>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
         fontSize: "14px",
         color: "#3d4f5a",
         lineHeight: 1.5,
          }}
        >
          {address}
        </p>
      </div>

      {/* CTA Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <a href={phoneLink} className="btn-primary">
          {callLabel}
        </a>
        <a href={websiteHref} className="btn-secondary" target={websiteHref.startsWith('/') ? '_self' : '_blank'} rel="noopener noreferrer">
          {websiteLabel}
        </a>
      </div>
    </div>
  );
}
