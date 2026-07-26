import SEO from "@/components/SEO";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 24px", textAlign: "center" }}>
      <SEO
        title="Side ikke fundet – Bedemand Kim Bondo"
        description="Siden du leder efter findes ikke. Gå tilbage til forsiden og find hjælp til bisættelse og begravelse i København."
        noindex={true}
      />
      <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase", marginBottom: "16px" }}>
        Fejl 404
      </p>
      <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", color: "#2F3E46", marginBottom: "16px", lineHeight: 1.2 }}>
        Siden blev ikke fundet
      </h1>
      <p style={{ fontSize: "clamp(15px, 1.6vw, 18px)", color: "#5a7a6a", maxWidth: "500px", lineHeight: 1.7, marginBottom: "40px" }}>
        Den side du leder efter eksisterer ikke eller er blevet flyttet. Gå tilbage til forsiden for at finde hjælp til bisættelse og begravelse.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
        <button
          onClick={() => setLocation("/")}
          style={{ background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "15px", padding: "14px 32px", borderRadius: "3px", border: "none", cursor: "pointer", letterSpacing: "0.04em" }}
        >
          Gå til forsiden
        </button>
        <a
          href="/kim-bondo"
          style={{ display: "inline-block", background: "transparent", color: "#2F3E46", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 32px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", border: "1.5px solid #b0b8bc" }}
        >
          Bedemand Kim Bondo
        </a>
      </div>
      <p style={{ marginTop: "48px", fontSize: "14px", color: "#3D6B4F" }}>
        Brug for hjælp? Ring på <a href="tel:22211437" style={{ color: "#3D6B4F", textDecoration: "none", fontWeight: 600 }}>22 21 14 37</a>
      </p>
    </div>
  );
}
