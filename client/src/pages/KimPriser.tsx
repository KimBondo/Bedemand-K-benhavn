import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import KimNav from "@/components/KimNav";
import ContactForm from "@/components/ContactForm";


/**
 * Kim Bondo – Komplet Prisliste
 * Design: Nordic Quietism — same tokens as KimBondo.tsx
 * Tone: nærværende, præcis og tryghedsskabende
 */


const s = {
  page: { fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 } as React.CSSProperties,
  wrap: { maxWidth: "760px", margin: "0 auto", padding: "0 32px 80px" } as React.CSSProperties,
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, display: "block", marginBottom: "12px" },
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 30px)", color: "#2F3E46", marginBottom: "20px", marginTop: "0", lineHeight: 1.25 } as React.CSSProperties,
  h3: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(18px, 2.5vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" } as React.CSSProperties,
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "16px", lineHeight: 1.85, color: "#3d5260", marginBottom: "16px" } as React.CSSProperties,
  small: { fontFamily: "'Open Sans', sans-serif", fontSize: "14px", lineHeight: 1.75, color: "#5a7080", marginBottom: "12px" } as React.CSSProperties,
  hr: { border: "none", borderTop: "1px solid #e0dcd6", margin: "56px 0" } as React.CSSProperties,
  price: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "22px", color: "#3D6B4F" } as React.CSSProperties,
  li: { fontFamily: "'Open Sans', sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#3d5260", marginBottom: "4px" } as React.CSSProperties,
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px", fontFamily: "'Open Sans', sans-serif", fontSize: "15px", fontWeight: 600 } as React.CSSProperties,
};


function PricePackage({
  label,
  title,
  price,
  subtitle,
  items,
  note,
  linkAfter,
}: {
  label: string;
  title: string;
  price: string;
  subtitle: string;
  items: string[];
  note?: string;
  linkAfter?: boolean;
}) {
  return (
    <section style={{ marginBottom: "56px" }}>
      <span style={s.label}>{label}</span>
      <h3 style={s.h3}>{title}</h3>
      <p style={s.price}>{price}</p>
      <p style={{ ...s.body, marginTop: "8px" }}>{subtitle}</p>
      <ul style={{ paddingLeft: "20px", margin: "16px 0 0" }}>
        {items.map((item, i) => (
          <li key={i} style={s.li}>
            {item}
          </li>
        ))}
      </ul>
      {note && (
        <p style={{ ...s.small, marginTop: "16px", fontStyle: "italic" }}>{note}</p>
      )}
      {linkAfter && (
        <p style={{ marginTop: "16px" }}>
          <a href="/produkter/" style={{ color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px", fontSize: "15px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>
            Se hele udvalget med priser her →
          </a>
        </p>
      )}
    </section>
  );
}


function PriceTable({ rows }: { rows: [string, string][] }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "24px", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>
      <tbody>
        {rows.map(([label, price], i) => (
          <tr key={i} style={{ borderBottom: "1px solid #e0dcd6" }}>
            <td style={{ padding: "10px 0", color: "#3d5260", lineHeight: 1.6 }}>{label}</td>
            <td style={{ padding: "10px 0", textAlign: "right", fontWeight: 600, color: "#2F3E46", whiteSpace: "nowrap", paddingLeft: "16px" }}>{price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


export default function KimPriser() {
  return (
    <div role="main" style={s.page}>
      <SEO
        title="Priser – Bedemand Kim Bondo, København"
        description="Bisættelse fra 19.500 kr., begravelse fra 21.500 kr. Alle enkeltpriser samlet ét sted. Ingen skjulte gebyrer. Ring 22 21 14 37."
        url="https://www.bedemandkobenhavn.dk/priser/"
        image="/images/kim-beach-solo_609d5ab7.webp"
      />
      <SchemaOrg
        type="both"
        breadcrumbs={[
          { name: "Forside", url: "https://www.bedemandkobenhavn.dk/" },
          { name: "Priser", url: "https://www.bedemandkobenhavn.dk/priser/" },
        ]}
      />


      {/* ── HEADER ── */}
      <header style={{ background: "#F9F8F6", padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px", borderBottom: "1px solid #e0dcd6", position: "relative" }}>
        <style>{`
  @media (max-width: 768px) {
    .mobile-call-btn {
      display: inline-flex !important;
      align-items: center;
      gap: 8px;
      background: #3D6B4F;
      color: #fff;
      font-family: 'Open Sans', sans-serif;
      font-weight: 700;
      font-size: 15px;
      padding: 10px 20px;
      border-radius: 3px;
      text-decoration: none;
      letter-spacing: 0.04em;
      white-space: nowrap;
    }
  }
`}</style>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <a href="/" style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2, textDecoration: "none" }}>Bedemand København og Nordsjælland</a>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Priser</span>
        </div>
        <KimNav />
        {/* ── MOBIL RING-KNAP (kun synlig på mobil) ── */}
        <a
          href="tel:22211437"
          style={{ display: "none" }}
          className="mobile-call-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Ring op
        </a>
      </header>


      {/* ── HERO ── */}
      <div style={{ background: "#2F3E46", padding: "64px 32px 56px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={{ ...s.label, color: "#A8C5A0" }}>Priser</span>
          <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 42px)", color: "#ffffff", lineHeight: 1.2, marginBottom: "20px", marginTop: 0 }}>
            Priser
          </h1>
          <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.75)", marginBottom: "24px", lineHeight: 1.6 }}>
            "Prisgennemsigtighed er ikke et tilbud. Det er en ret."
          </p>
          <a href="tel:22211437" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "12px 28px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
            Ring 22 21 14 37 — hele døgnet
          </a>
        </div>
      </div>


      {/* ── CONTENT ── */}
      <div style={s.wrap}>


        {/* ── INTRO ── */}
        <section style={{ paddingTop: "56px", marginBottom: "56px" }}>
          <h2 style={s.h2}>Derfor står priserne her</h2>
          <p style={s.body}>
            Da jeg begyndte som bedemand, undrede jeg mig over én ting: hvorfor var det så svært at finde ud af, hvad en begravelse kostede?
          </p>
          <p style={s.body}>
            Branchen har i årtier oplyst priser først ved det fysiske møde — på et tidspunkt, hvor pårørende er sårbare, pressede og sjældent i stand til at sammenligne. Det har jeg valgt at gøre anderledes.
          </p>
          <p style={{ ...s.body, fontWeight: 600, color: "#2F3E46" }}>
            Her står alt: mine priser, mine tillæg, og de udgifter jeg ikke selv bestemmer over. Jeg er ikke den billigste bedemand i København. Men jeg er den, der fortæller jer hele regnestykket, inden I beslutter jer.
          </p>
        </section>


        <hr style={s.hr} />


        {/* ── DE TRE FORLØB ── */}
        <h2 style={s.h2}>De tre forløb</h2>


        <PricePackage
          label="Bisættelse"
          title="Den enkle bisættelse"
          price="Fra 19.500 kr."
          subtitle="Ceremoni i kirke eller kapel, hvorefter afdøde kremeres. Prisen gælder hverdage."
          items={[
            "Møde hjemme hos jer eller på telefon — som I ønsker",
            "Basiskiste",
            "Natururne",
            "Klargøring, påklædning og ilægning i kiste",
            "Tre rustvognskørsler: til kisteophold, videre til ceremonien og derfra til krematoriet",
            "Kontakt til kordegn, præst, krematorium og kirkegård",
            "Anmodning ved Kirkeministeriet",
            "Ansøgning om begravelseshjælp på jeres vegne",
            "Jeg er selv til stede ved højtideligheden",
          ]}
          note="Købt som enkeltposter koster det 20.250 kr. Samlet sparer I 750 kr."
          linkAfter={true}
        />


        <PricePackage
          label="Begravelse"
          title="Den enkle begravelse"
          price="Fra 21.500 kr."
          subtitle="Kisten sænkes i jorden efter ceremonien. Prisen gælder hverdage."
          items={[
            "Møde hjemme hos jer eller på telefon",
            "Massiv fyr — kiste i fyrretræ med knaster",
            "Klargøring, påklædning og ilægning i kiste",
            "Tre rustvognskørsler: til kisteophold, videre til ceremonien og derfra til graven",
            "Kontakt til kordegn, præst og kirkegård",
            "Anmodning ved Kirkeministeriet",
            "Ansøgning om begravelseshjælp på jeres vegne",
            "Jeg er selv til stede ved højtideligheden",
            "Udlægning af blomster på graven",
          ]}
          note="Købt som enkeltposter koster det 21.900 kr. Samlet sparer I 400 kr."
          linkAfter={true}
        />


        <section style={{ marginBottom: "56px" }}>
          <span style={s.label}>Afsked uden ceremoni</span>
          <h3 style={s.h3}>Afsked uden ceremoni</h3>
          <p style={s.price}>13.550 kr.</p>
          <p style={{ ...s.body, marginTop: "8px" }}>
            Afdøde køres direkte til krematoriet uden forudgående højtidelighed.
          </p>
          <p style={s.body}>
            Prisen er sat, så den svarer til den maksimale begravelseshjælp i 2026. Havde afdøde ingen formue af betydning, dækker hjælpen altså min regning fuldt ud. Har afdøde efterladt opsparing, nedsættes hjælpen — det siger jeg til jer med det samme, så I ved, hvor I står.
          </p>
          <ul style={{ paddingLeft: "20px", margin: "16px 0 0" }}>
            {[
              "Basiskiste",
              "Natururne",
              "Klargøring, påklædning og ilægning i kiste",
              "Rustvognskørsel til krematoriet",
              "Kontakt til kordegn, krematorium og kirkegård",
              "Anmodning ved Kirkeministeriet",
              "Ansøgning om begravelseshjælp på jeres vegne",
            ].map((item, i) => (
              <li key={i} style={s.li}>{item}</li>
            ))}
          </ul>
          <p style={{ ...s.body, marginTop: "16px" }}>
            <strong>Vælger I en anden kiste eller urne, betaler I kun forskellen.</strong>{" "}
            <a href="/produkter/" style={{ color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px", fontWeight: 600 }}>
              Se hele udvalget med priser her →
            </a>
          </p>
        </section>


        <hr style={s.hr} />


        {/* ── AFTEN/WEEKEND ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={s.h2}>Aften, weekend og helligdage</h2>
          <p style={s.body}>
            Uden for normal arbejdstid skal jeg have en hjælper med til at bære og løfte. Det koster mig mere, og derfor er der et tillæg på 50 % på afhentning og kørsel. Tillægget gælder efter kl. 16 på hverdage samt i weekender og på helligdage. Falder afhentningen og den første kørsel uden for arbejdstiden, svarer det til 2.250 kr.
          </p>
          <p style={s.body}>
            Det står her, fordi I skal kunne regne det ud selv — ikke opdage det på fakturaen.
          </p>
          <p style={s.body}>
            Og en ting, som få ved: er der ikke noget, der haster, kan afdøde ofte blive, hvor vedkommende er, til næste morgen. Mange familier foretrækker det — der bliver tid til at sige farvel i ro. Så bortfalder tillægget. Det taler vi om, når I ringer.
          </p>
          <p style={s.body}>
            Afhentning i private hjem koster 1.200 kr. ekstra, fordi det kræver mere tid og altid to personer.
          </p>
        </section>


        <hr style={s.hr} />


        {/* ── KOMMUNALE TAKSTER ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={s.h2}>Udgifter, der ikke går til mig</h2>
          <p style={s.body}>
            Krematorium og kirkegård betales til kommunen. De priser bestemmer jeg ikke over, men I skal kende dem. Her er Københavns Kommunes takster for 2026:
          </p>
          <PriceTable rows={[
            ["Kremering, voksen", "3.075 kr."],
            ["Gravning af urnegrav", "1.199 kr."],
            ["Gravning af kistegrav, 3 m²", "7.055 kr."],
            ["Kisteopbevaring, pr. påbegyndt uge", "272 kr."],
            ["Leje af kapel, ½ time", "1.154 kr."],
            ["Orgelspil og sang, ½ time", "1.352 kr."],
          ]} />
          <p style={s.body}>
            Dertil kommer erhvervelse af selve gravstedet, gravsten og eventuel vedligeholdelse. Bor I i en anden kommune, gælder andre takster — dem finder jeg for jer.
          </p>
          <p style={{ ...s.body, background: "#EAF2ED", borderLeft: "3px solid #3D6B4F", padding: "16px 20px", borderRadius: "2px" }}>
            <strong>Læg mærke til én ting:</strong> en begravelse i kistegrav koster 5.856 kr. mere i gravning end en bisættelse i urnegrav. Det er der ingen, der fortæller på forhånd.
          </p>
          <p style={s.body}>
            Jeg regner jeres konkrete tal sammen, inden I siger ja til noget. Og jeg søger begravelseshjælpen for jer — den modregnes direkte på fakturaen, så I ikke skal lægge ud.
          </p>
          <p style={{ marginBottom: "0" }}>
            <a href="/hvad-koster-en-begravelse/" style={s.link}>Hvad koster en begravelse? Se den fulde gennemgang af alle udgifter →</a>
          </p>
          <p style={{ marginBottom: "0", marginTop: "10px" }}>
            <a href="/begravelseshjaelp/" style={s.link}>Begravelseshjælp: hvem kan få den, og hvor meget? →</a>
          </p>
        </section>


        <hr style={s.hr} />


        {/* ── BLOMSTER OG GRAVSTEN ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={s.h2}>Blomster og gravsten</h2>
          <p style={s.body}>
            I kan bestille blomster og gravsten hvor som helst. Jeg hjælper gerne og har leverandører, jeg stoler på — men I skal ikke føle jer bundet til mine.
          </p>
        </section>


        <hr style={s.hr} />


        {/* ── ALLE ENKELTPRISER ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={s.h2}>Alle enkeltpriser</h2>


          <h3 style={{ ...s.h3, marginTop: "32px" }}>Kister og urner</h3>
          <p style={{ marginBottom: "12px" }}>
            <a href="/produkter/" style={{ color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px", fontSize: "15px", fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>
              Se hele udvalget med billeder og priser her →
            </a>
          </p>
          <p style={{ ...s.small, marginBottom: "32px" }}>Kister fra 6.000 kr. · Urner fra 950 kr.</p>


          <h3 style={{ ...s.h3, marginTop: "32px" }}>Klargøring, afhentning og transport</h3>
          <PriceTable rows={[
            ["Klargøring af kiste, afhentning og ilægning", "2.500 kr."],
            ["Tillæg ved afhentning i private hjem", "1.200 kr."],
            ["Rustvognskørsel, én kørsel inkl. 20 km", "2.000 kr."],
            ["Urnekørsel fra krematorie til kirkegårdskontor", "900 kr."],
            ["Blomsterkørsel og udlægning på kirkegård", "900 kr."],
          ]} />
          <p style={{ ...s.small, fontStyle: "italic", marginBottom: "32px" }}>50 % tillæg efter kl. 16 på hverdage samt weekender og helligdage.</p>


          <h3 style={{ ...s.h3, marginTop: "32px" }}>Honorar</h3>
          <PriceTable rows={[
            ["Ved begravelse eller bisættelse", "4.500 kr."],
            ["Ved afsked uden ceremoni", "3.500 kr."],
          ]} />
          <p style={{ ...s.body, marginBottom: "32px" }}>
            Honoraret dækker al kontakt med jer gennem hele forløbet, alt papirarbejde — anmeldelse til hjemsogn og ansøgning om begravelseshjælp — samt koordinering med myndigheder, kirker, kapeller og krematorier.
          </p>


          <h3 style={{ ...s.h3, marginTop: "32px" }}>Blomster og pynt</h3>
          <PriceTable rows={[
            ["Kistepynt, lille", "2.500 kr."],
            ["Kistepynt, mellem", "3.000 kr."],
            ["Kistepynt, stor", "3.500 kr."],
            ["Blomsterkrans eller blomsterhjerte", "2.500 kr."],
            ["Silkebånd — \"en sidste hilsen\"", "300 kr."],
            ["10 farvelroser til rustvognen", "500 kr."],
          ]} />


          <h3 style={{ ...s.h3, marginTop: "32px" }}>Øvrige ydelser</h3>
          <PriceTable rows={[
            ["Fremvisning i kapel", "900 kr."],
            ["Dødsannonce, udarbejdelse og indrykning", "400 kr. + avisens pris"],
            ["Sangblade fra ekstern leverandør", "400 kr. + tilbud indhentes"],
          ]} />
        </section>


        <hr style={s.hr} />


        {/* ── DØDSANNONCER ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={s.h2}>Dødsannoncer</h2>
          <p style={s.body}>
            Jeg hjælper gerne med indrykning af dødsannonce i trykte aviser og på portalen Afdøde.dk — så I ikke skal bekymre jer om det praktiske i en i forvejen svær tid.
          </p>
        </section>


        {/* ── SANGBLADE ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={s.h2}>Sangblade</h2>
          <p style={s.body}>
            Mange ønsker at synge sange, der ikke fremgår af Den Danske Salmebog. Jeg hjælper med udarbejdelse af trykte sanghæfter, så de helt rigtige sange kan synges til ceremonien.
          </p>
        </section>


        <hr style={s.hr} />


        {/* ── MIN SIDSTE VILJE ── */}
        <section style={{ background: "#fff", border: "1px solid #e0dcd6", borderRadius: "4px", padding: "40px 36px", marginBottom: "56px" }}>
          <span style={s.label}>Gratis hjemmebesøg</span>
          <h2 style={{ ...s.h2, marginBottom: "16px" }}>Min Sidste Vilje</h2>
          <p style={s.body}>
            De fleste udskyder samtalen. Men det er en gave til ens børn at have taget stilling i forvejen.
          </p>
          <p style={s.body}>
            Jeg kommer hjem til jer og hjælper med at skrive ønskerne ned: hvad der skal ske, hvad det koster, hvem der skal ringes til. Det tager en time, og så er det ordnet. Det koster ingenting, og der er ingen forpligtelse bagefter.
          </p>
          <a href="tel:22211437" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 32px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", marginTop: "8px" }}>
          Ring 22 21 14 37
          </a>
        </section>


        {/* ── KONTAKTFORMULAR ── */}
        <section style={{ background: "#fff", border: "1px solid #e0dcd6", borderRadius: "4px", padding: "40px 36px", marginBottom: "56px" }}>
          <span style={s.label}>Skriv til mig</span>
          <h2 style={{ ...s.h2, marginBottom: "8px" }}>Har du spørgsmål til priserne?</h2>
          <p style={{ ...s.body, marginBottom: "28px" }}>
            Udfyld formularen, så ringer jeg tilbage på et tidspunkt, der passer dig. Ingen forpligtelse.
          </p>
          <ContactForm variant="priser" />
        </section>


      </div>
    </div>
  );
}
