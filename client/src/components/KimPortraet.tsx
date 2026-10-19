/**
 * Kims runde portræt ved den første ring-knap på landingssiderne.
 * Samme billede og stil som på forsiden.
 */
export default function KimPortraet({ align = "center", mork = false }: { align?: "center" | "left"; mork?: boolean }) {
  return (
    <figure style={{ margin: align === "center" ? "0 auto 20px" : "0 0 20px", display: "flex", flexDirection: "column", alignItems: align === "center" ? "center" : "flex-start" }}>
      <picture>
        <source type="image/webp" srcSet="/images/kim-bondo-bedemand-portraet-464w.webp 464w" sizes="96px" />
        <img
          src="/images/kim-bondo-bedemand-portraet-464w.jpg"
          width={96}
          height={96}
          alt="Kim Bondo, selvstændig bedemand"
          loading="lazy"
          decoding="async"
          style={{ width: "96px", height: "96px", borderRadius: "50%", objectFit: "cover", objectPosition: "center 25%", display: "block", boxShadow: "0 4px 16px rgba(47,62,70,0.15)" }}
        />
      </picture>
      <figcaption style={{ marginTop: "8px", fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: mork ? "rgba(255,255,255,0.75)" : "#7a8f99" }}>
        Kim Bondo, bedemand
      </figcaption>
    </figure>
  );
}
