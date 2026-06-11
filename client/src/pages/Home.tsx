/**
 * Bedemand København — Landing Page
 * Design: Nordic Quietism
 * Palette: #F9F8F6 bg | #2F3E46 text | #84A98C CTA | #DDD8D0 divider
 * Fonts: Lora (headings) + Open Sans (body)
 * Layout: 100vh Hero → 50/50 Distribution Portal
 * Interaction policy: NO animations on load. ONE permitted interaction: 200ms button hover.
 */

export default function Home() {
  return (
    <div style={{ backgroundColor: "#F9F8F6", minHeight: "100vh" }}>
      {/* ─── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: "560px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/manus-storage/hero-landscape_26c60fba.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.38)",
          }}
        />

        {/* Header / Nav */}
        <header
          style={{
            position: "relative",
            zIndex: 10,
            padding: "32px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              color: "#ffffff",
              letterSpacing: "0.04em",
            }}
          >
            Bedemand København
          </span>
        </header>

        {/* Hero text — centered */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <h1
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 600,
              fontSize: "clamp(28px, 5vw, 52px)",
              color: "#ffffff",
              letterSpacing: "0.02em",
              lineHeight: 1.25,
              marginBottom: "24px",
              maxWidth: "800px",
            }}
          >
            Velkommen til Bedemand København
          </h1>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 22px)",
              color: "rgba(255,255,255,0.90)",
              lineHeight: 1.65,
              maxWidth: "640px",
            }}
          >
            To selvstændige bedemænd med ét fælles mål: At skabe en værdig og rolig afsked.
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            paddingBottom: "40px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "1px",
              height: "48px",
              backgroundColor: "rgba(255,255,255,0.5)",
            }}
          />
        </div>
      </section>

      {/* ─── SECTION 2: DISTRIBUTION PORTAL ─────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#F9F8F6",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Section intro */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "72px",
            }}
          >
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#84A98C",
                marginBottom: "16px",
              }}
            >
              Vælg din bedemand
            </p>
            <h2
              style={{
                fontFamily: "'Lora', serif",
                fontWeight: 600,
                fontSize: "clamp(24px, 3vw, 36px)",
                color: "#2F3E46",
                letterSpacing: "0.02em",
                lineHeight: 1.3,
                marginBottom: "20px",
              }}
            >
              To bedemænd. Ét fælles engagement.
            </h2>
            <div
              style={{
                width: "48px",
                height: "2px",
                backgroundColor: "#84A98C",
                margin: "0 auto",
              }}
            />
          </div>

          {/* 50/50 Columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              backgroundColor: "#DDD8D0",
            }}
            className="portal-grid"
          >
            {/* ── Column 1: Marie Thjellesen ── */}
            <DirectorColumn
              name="Marie Thjellesen"
              title="Bedemand"
              bio="Med min baggrund som jordemoder og familieterapeut ser jeg det som et smukt privilegie at støtte jer i livets sværeste overgang. Min opgave er at lytte til jeres ønsker og guide jer med dyb omsorg og faglig omhu. Jeg skaber overblikket og rammen, så I får en personlig og smuk afsked."
              address="Holbergsgade 26, 1. tv., 1057 København K"
              phone="29 29 66 89"
              phoneLink="tel:29296689"
              callLabel="Ring direkte til Marie"
              websiteLabel="Gå til Maries hjemmeside"
              websiteHref="#"
              initials="MT"
            />

            {/* ── Column 2: Kim Bondo ── */}
            <DirectorColumn
              name="Kim Bondo"
              title="Bedemand"
              bio="For mig er det en hjertesag at møde jer med dyb omsorg, nærvær og en uforstyrrelig ro, når livet er sværest. Min vigtigste opgave er at skabe et trygt og rummeligt frirum midt i sorgen. Jeg bærer alt det praktiske og logistiske for jer i baggrunden, så I kan finde fred til at tage en kærlig afsked."
              address="Vandtårnsvej 62A, 2860 Søborg"
              phone="22 21 14 37"
              phoneLink="tel:22211437"
              callLabel="Ring direkte til Kim"
              websiteLabel="Gå til Kims hjemmeside"
              websiteHref="#"
              initials="KB"
            />
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────────── */}
      <footer
        style={{
          backgroundColor: "#2F3E46",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "14px",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.75,
          }}
        >
          © {new Date().getFullYear()} Bedemand København &nbsp;·&nbsp; To selvstændige bedemænd
        </p>
      </footer>

      {/* Responsive styles */}
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
  address: string;
  phone: string;
  phoneLink: string;
  callLabel: string;
  websiteLabel: string;
  websiteHref: string;
  initials: string;
}

function DirectorColumn({
  name,
  title,
  bio,
  address,
  phone,
  phoneLink,
  callLabel,
  websiteLabel,
  websiteHref,
  initials,
}: DirectorColumnProps) {
  return (
    <div
      style={{
        backgroundColor: "#F9F8F6",
        padding: "56px 48px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Portrait placeholder */}
      <div
        style={{
          width: "100%",
          aspectRatio: "3/4",
          maxHeight: "380px",
          backgroundColor: "#E8E4DF",
          marginBottom: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontFamily: "'Lora', serif",
            fontSize: "56px",
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
            fontSize: "12px",
            color: "#A8B8A1",
            marginTop: "12px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Portræt følger
        </span>
      </div>

      {/* Name & Title */}
      <h3
        style={{
          fontFamily: "'Lora', serif",
          fontWeight: 600,
          fontSize: "clamp(20px, 2.5vw, 26px)",
          color: "#2F3E46",
          letterSpacing: "0.02em",
          lineHeight: 1.3,
          marginBottom: "8px",
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#84A98C",
          marginBottom: "28px",
        }}
      >
        {title}
      </p>

      {/* Biography */}
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "16px",
          lineHeight: 1.75,
          color: "#4A5C63",
          marginBottom: "36px",
          flex: 1,
        }}
      >
        {bio}
      </p>

      {/* Contact block — separated by divider */}
      <div
        style={{
          borderTop: "1px solid #DDD8D0",
          paddingTop: "28px",
          marginBottom: "32px",
        }}
      >
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            color: "#2F3E46",
            marginBottom: "8px",
          }}
        >
          Tlf: {phone}
        </p>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "15px",
            color: "#5C6E74",
            lineHeight: 1.5,
          }}
        >
          {address}
        </p>
      </div>

      {/* CTA Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <a href={phoneLink} className="btn-primary">
          {callLabel}
        </a>
        <a href={websiteHref} className="btn-secondary">
          {websiteLabel}
        </a>
      </div>
    </div>
  );
}
