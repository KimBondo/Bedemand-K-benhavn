import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import KimNav from "@/components/KimNav";
import ContactForm from "@/components/ContactForm";
import KimPortraet from "@/components/KimPortraet";


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




function PriceTable({ rows }: { rows: [string, string][] }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "24px", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>
      <tbody>
        {rows.map(([label, price], i) => (
          <tr key={i} style={{ borderBottom: "1px solid #e0dcd6" }}>
            <td style={{ padding: "10px 0", color: "#3d5260", lineHeight: 1.6 }}>{label}</td>
            <td style={{ padding: "10px 0", textAlign: "right", fontWeight: 600, color: "#2F3E46", whiteSpace: price.length > 20 ? "normal" : "nowrap", paddingLeft: "16px" }}>{price}</td>
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
        description="Priser: bisættelse uden ceremoni 9.995 kr., begravelse fra 13.495 kr. og bisættelse med ceremoni fra 14.995 kr. Ring til mig på 28 14 60 11."
        url="https://www.bedemandkobenhavn.dk/priser/"
        image="/images/kim-bondo-rustvogn-kyst.webp"
      />
      <SchemaOrg
        type="both"
        priceOffers
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
          href="tel:+4528146011"
          style={{ display: "none" }}
          className="mobile-call-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Ring til mig
        </a>
      </header>


      {/* ── HERO ── */}
      <div style={{ background: "#2F3E46", padding: "64px 32px 56px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={{ ...s.label, color: "#A8C5A0" }}>Priser</span>
          <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 42px)", color: "#ffffff", lineHeight: 1.2, marginBottom: "20px", marginTop: 0 }}>
            Priser på bisættelse og begravelse i København og Nordsjælland
          </h1>
          <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.75)", marginBottom: "24px", lineHeight: 1.6 }}>
            Her står mine priser – og de udgifter, der ikke går til mig.
          </p>
          <KimPortraet align="left" mork />
          <a href="tel:+4528146011" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "12px 28px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em" }}>
            Ring til mig på 28 14 60 11
          </a>
          <div style={{ marginTop: "36px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
            {[
              { navn: "Bisættelse uden ceremoni", pris: "9.995 kr.", href: "#uden-ceremoni" },
              { navn: "Begravelse", pris: "Fra 13.495 kr.", href: "#begravelse" },
              { navn: "Bisættelse med ceremoni", pris: "Fra 14.995 kr.", href: "#bisaettelse" },
            ].map((p) => (
              <a key={p.href} href={p.href} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", gap: "4px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "3px", padding: "14px 18px", textDecoration: "none" }}>
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8C5A0" }}>{p.navn}</span>
                <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "20px", color: "#ffffff", whiteSpace: "nowrap" }}>{p.pris}</span>
              </a>
            ))}
          </div>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)", marginTop: "12px", marginBottom: 0 }}>
            Alle priser er inkl. moms og gælder hverdage. Tryk for at se, hvad der er med i prisen – eller <a href="/prisberegner/" style={{ color: "#A8C5A0", fontWeight: 600, textDecoration: "underline" }}>regn jeres eget overslag ud</a>.
          </p>
        </div>
      </div>


      {/* ── CONTENT ── */}
      <div style={s.wrap}>


        {/* ── INTRO ── */}
        <section style={{ paddingTop: "56px", marginBottom: "56px" }}>
          <h2 style={s.h2}>Derfor står priserne her</h2>
          <p style={s.body}>
            Jeg vil gerne, at I kan se, hvad en afsked koster, før I ringer – i ro og i jeres eget tempo.
          </p>
          <p style={{ ...s.body, fontWeight: 600, color: "#2F3E46" }}>
            Her står mine priser, mine tillæg og de udgifter, jeg ikke selv bestemmer over. Jeg regner det hele sammen med jer, inden I beslutter jer.
          </p>
        </section>


        <hr style={s.hr} />


        {/* ── DE TRE PAKKER ── */}
        <h2 style={s.h2}>Mine tre pakker</h2>
        <p style={s.body}>
          Pakkepriserne er så lave, som jeg kan gøre dem. Tilvalg står for sig selv længere nede. Alle priser er inkl. moms og gælder hverdage.
        </p>

        <section id="uden-ceremoni" style={{ marginBottom: "56px", scrollMarginTop: "24px" }}>
          <span style={s.label}>Bisættelse uden ceremoni</span>
          <h3 style={s.h3}>Bisættelse uden ceremoni</h3>
          <p style={s.price}>9.995 kr.</p>
          <p style={{ ...s.body, marginTop: "8px" }}>Afdøde køres direkte til krematoriet uden forudgående højtidelighed. Én samlet pris.</p>
          <p style={{ ...s.body, fontWeight: 700, color: "#2F3E46", marginBottom: "4px" }}>Det er med i prisen</p>
          <ul style={{ paddingLeft: "20px", margin: "8px 0 0" }}>
            {[
            "Mit honorar og telefonmøde med jer",
            "Anmodning om ligbrænding til afdødes sogn",
            "Ansøgning om begravelseshjælp, som trækkes fra på fakturaen",
            "Kontakt til krematorium og kirkegård",
            "Klargøring, påklædning og ilægning i en umalet basiskiste",
            "Urne",
            "Én rustvognskørsel til krematoriet, inkl. de første 25 km fra Søborg",
            ].map((item, i) => (
              <li key={i} style={s.li}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="begravelse" style={{ marginBottom: "56px", scrollMarginTop: "24px" }}>
          <span style={s.label}>Begravelse</span>
          <h3 style={s.h3}>Begravelse</h3>
          <p style={s.price}>Fra 13.495 kr.</p>
          <p style={{ ...s.body, marginTop: "8px" }}>Kisten sænkes i jorden efter ceremonien.</p>
          <p style={{ ...s.body, fontWeight: 700, color: "#2F3E46", marginBottom: "4px" }}>Det er med i prisen</p>
          <ul style={{ paddingLeft: "20px", margin: "8px 0 0" }}>
            {[
            "Mit honorar og al kontakt med jer gennem forløbet",
            "Telefonmøde med jer",
            "Anmodning om begravelse til afdødes sogn",
            "Ansøgning om begravelseshjælp, som trækkes fra på fakturaen",
            "Udarbejdelse af dødsannonce (avisens pris kommer oveni)",
            "Kontakt til kordegn, præst, kirke eller kapel og kirkegård",
            "Klargøring, påklædning og ilægning i kiste",
            "Klassisk hvid kiste",
            "Én rustvognskørsel, inkl. de første 25 km. På hverdage kan vi ofte køre direkte fra hospitalets kapel til kirken",
            "Jeg er selv til stede ved højtideligheden",
            "Jeg pynter kisten uden gebyr, når blomsterne bestilles gennem mig",
            "Familien må gerne se afdøde ved kisteilægningen, når afdøde hentes hjemme, på plejehjem eller på hospice",
            ].map((item, i) => (
              <li key={i} style={s.li}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="bisaettelse" style={{ marginBottom: "56px", scrollMarginTop: "24px" }}>
          <span style={s.label}>Bisættelse med ceremoni</span>
          <h3 style={s.h3}>Bisættelse med ceremoni</h3>
          <p style={s.price}>Fra 14.995 kr.</p>
          <p style={{ ...s.body, marginTop: "8px" }}>Ceremoni i kirke eller kapel, hvorefter afdøde kremeres. Det samme som begravelse, plus natururne, kontakt til krematoriet og to kørsler.</p>
          <p style={{ ...s.body, fontWeight: 700, color: "#2F3E46", marginBottom: "4px" }}>Det er med i prisen</p>
          <ul style={{ paddingLeft: "20px", margin: "8px 0 0" }}>
            {[
            "Mit honorar og al kontakt med jer gennem forløbet",
            "Telefonmøde med jer",
            "Anmodning om ligbrænding til afdødes sogn",
            "Ansøgning om begravelseshjælp, som trækkes fra på fakturaen",
            "Udarbejdelse af dødsannonce (avisens pris kommer oveni)",
            "Kontakt til kordegn, præst, kirke eller kapel, krematorium og kirkegård",
            "Klargøring, påklædning og ilægning i kiste",
            "Klassisk hvid kiste",
            "Natururne",
            "To rustvognskørsler, inkl. de første 25 km pr. tur: fra kapel til ceremoni og derfra til krematoriet",
            "Jeg er selv til stede ved højtideligheden",
            "Jeg pynter kisten uden gebyr, når blomsterne bestilles gennem mig",
            "Familien må gerne se afdøde ved kisteilægningen, når afdøde hentes hjemme, på plejehjem eller på hospice",
            ].map((item, i) => (
              <li key={i} style={s.li}>{item}</li>
            ))}
          </ul>
        </section>

        <p style={{ ...s.body, marginTop: "-24px" }}>
          <a href="/produkter/" style={{ color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px", fontWeight: 600 }}>
            Se kister og urner med priser →
          </a>
        </p>


        <hr style={s.hr} />


        {/* ── TILVALG ── */}
        <section id="tilvalg" style={{ marginBottom: "56px", scrollMarginTop: "24px" }}>
          <h2 style={s.h2}>Det kan I vælge til</h2>
          <PriceTable rows={[
            ["Møde hjemme hos jer eller på mit kontor i Søborg", "1.000 kr."],
            ["Ekstra rustvognskørsel", "1.595 kr."],
            ["Umalet basiskiste i stedet for klassisk hvid kiste (begravelse og bisættelse med ceremoni)", "1.000 kr. billigere"],
            ["Ligklæde", "295 kr."],
            ["Blomsterkørsel på hverdage", "1.195 kr."],
            ["Blomsterkørsel om lørdagen", "1.995 kr."],
            ["Kistepynt, lille / mellem / stor", "1.800 / 2.500 / 3.500 kr."],
            ["Anden kiste eller urne", "I betaler kun forskellen"],
            ["Askerør ved askespredning og askespredning over havet", "Fra 2.500 kr."],
            ["Fremvisning på hospital eller i kapel", "900 kr."],
            ["Ceremonileder ved borgerlig ceremoni", "Ca. 2.500 kr."],
            ["Ventekapel ved lørdagsbisættelse", "Prisen varierer"],
            ["Kørsel efter kl. 16, i weekenden og på helligdage", "800 kr. pr. udkald"],
          ]} />
          <p style={s.body}>
            <strong>Ekstra rustvognskørsel:</strong> I weekenden er hospitalernes kapeller lukket, så der skal som regel bruges flere kørsler. Det aftaler vi, når forløbet ligger fast.
          </p>
          <p style={s.body}>
            <strong>Blomsterkørsel:</strong> Er graven på samme kirkegård som kirken, sørger kirken som regel selv for blomsterne. Skal de et andet sted hen, er det en blomsterkørsel.
          </p>
        </section>


        <hr style={s.hr} />


        {/* ── PRIS PÅ BISÆTTELSE ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={s.h2}>Pris på bisættelse – faste priser og den enkleste løsning</h2>
          <p style={s.body}>
            En bisættelse med ceremoni koster hos mig fra 14.995 kr., og begravelseshjælpen trækkes direkte fra fakturaen. Mange spørger efter den enkleste løsning. Den er en <a href="/afsked-uden-ceremoni/" style={{ color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F" }}>bisættelse uden ceremoni</a> til 9.995 kr. Jeg gennemgår alle udgifter med jer, før I bestemmer noget.
          </p>
        </section>


        <hr style={s.hr} />


        {/* ── AFTEN/WEEKEND ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={s.h2}>Aften, weekend og helligdage</h2>
          <p style={s.body}>
            Uden for normal arbejdstid skal jeg have en hjælper med til at bære og løfte. Derfor er der et tillæg på 800 kr. pr. udkald, når der køres efter kl. 16 på hverdage, i weekender og på helligdage – fx en afhentning om aftenen eller en bisættelse om lørdagen. Tillægget gælder kun kørslen. Der er ikke tillæg på andet.
          </p>
          <p style={s.body}>
            Det står her, så I kan regne det ud selv.
          </p>
          <p style={s.body}>
            Er der ikke noget, der haster, kan afdøde ofte blive, hvor vedkommende er, til næste morgen. Mange familier foretrækker det — der bliver tid til at sige farvel i ro. Så bortfalder tillægget. Det taler vi om, når I ringer.
          </p>
          <p style={s.body}>
            Afhentning i private hjem koster 1.200 kr. ekstra, fordi det kræver mere tid og altid to personer.
          </p>
        </section>


        <hr style={s.hr} />


        {/* ── KOMMUNALE TAKSTER ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={s.h2}>Udgifter, jeg ikke selv bestemmer over</h2>
          <p style={s.body}>
            Kremering, gravsted, gravning eller urnenedsættelse, kisteopbevaring, kapel, orgelspil og gravsten betales til kommunen, kirkegården eller stenhuggeren. De priser bestemmer jeg ikke over, men I skal kende dem. Her er Københavns Kommunes takster for 2026:
          </p>
          <PriceTable rows={[
            ["Kremering, voksen", "3.075 kr."],
            ["Gravning af urnegrav", "1.199 kr."],
            ["Askefællesgrav, engangsbeløb", "3.617 kr."],
            ["Gravning af kistegrav, 3 m²", "7.055 kr."],
            ["Kisteopbevaring, pr. påbegyndt uge", "272 kr."],
            ["Leje af kapel, ½ time", "1.154 kr."],
            ["Orgelspil og sang i kapellet, ½ time", "1.352 kr."],
          ]} />
          <p style={s.body}>
            Dertil kommer erhvervelse af selve gravstedet, gravsten og eventuel vedligeholdelse. Bor I i en anden kommune, gælder andre takster — dem finder jeg for jer.
          </p>
          <p style={{ ...s.body, background: "#EAF2ED", borderLeft: "3px solid #3D6B4F", padding: "16px 20px", borderRadius: "2px" }}>
            <strong>Læg mærke til én ting:</strong> en begravelse i kistegrav koster 5.856 kr. mere i gravning end en bisættelse i urnegrav.
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
            ["Rustvognskørsel, én kørsel inkl. de første 25 km fra Søborg", "1.595 kr."],
            ["Herefter pr. km (kun den ene vej, ad den billigste rute)", "35 kr."],
            ["Højst pr. kørsel i hele København og Nordsjælland", "2.000 kr."],
            ["Rustvognskørsel uden for København og Nordsjælland (fx resten af Sjælland, Fyn og Jylland)", "1.595 kr. inkl. 25 km, derefter 35 kr. pr. km, uden loft"],
            ["Urnekørsel fra krematorie til kirkegårdskontor", "900 kr."],
            ["Blomsterkørsel på hverdage", "1.195 kr."],
            ["Blomsterkørsel om lørdagen", "1.995 kr."],
          ]} />
          <p style={{ ...s.small, fontStyle: "italic", marginBottom: "32px" }}>Fast tillæg på 800 kr. pr. udkald efter kl. 16 på hverdage samt i weekender og på helligdage.</p>
          <div style={{ background: "#f0f7f3", borderLeft: "3px solid #3D6B4F", borderRadius: "3px", padding: "24px 24px 8px", marginBottom: "32px" }}>
            <p style={{ ...s.body, fontWeight: 700, color: "#2F3E46" }}>Sådan regner jeg kørslen</p>
            <p style={s.body}>
              Afstanden regnes fra mit kontor i Søborg. En rustvognskørsel koster 1.595 kr., og de første 25 km er med i prisen. Derefter koster det 35 kr. pr. km. Der regnes kun den ene vej, ad den billigste rute. I hele København og Nordsjælland koster en kørsel højst 2.000 kr. Uden for det område gælder samme km-pris, men der er intet loft. Jeg regner prisen ud for jer, inden vi kører.
            </p>
            <p style={s.body}>
              Bisættelse uden ceremoni og begravelse har én rustvognskørsel, og bisættelse med ceremoni har to. Bliver der brug for flere, koster en ekstra kørsel 1.595 kr. I weekenden er hospitalernes kapeller lukket, så der skal som regel bruges flere kørsler. Det aftaler vi, når forløbet ligger fast.
            </p>
          </div>


          <h3 style={{ ...s.h3, marginTop: "32px" }}>Honorar</h3>
          <PriceTable rows={[
            ["Ved begravelse eller bisættelse", "4.500 kr."],
            ["Ved bisættelse uden ceremoni", "3.500 kr."],
          ]} />
          <p style={{ ...s.body, marginBottom: "32px" }}>
            Honoraret dækker al kontakt med jer gennem hele forløbet, alt papirarbejde — anmodning om begravelse eller ligbrænding og ansøgning om begravelseshjælp — samt koordinering med myndigheder, kirker, kapeller og krematorier.
          </p>


          <h3 style={{ ...s.h3, marginTop: "32px" }}>Blomster og pynt</h3>
          <PriceTable rows={[
            ["Kistepynt, lille", "1.800 kr."],
            ["Kistepynt, mellem", "2.500 kr."],
            ["Kistepynt, stor", "3.500 kr."],
            ["Blomsterkrans eller blomsterhjerte", "2.500 kr."],
            ["Silkebånd — \"en sidste hilsen\"", "300 kr."],
            ["10 farvelroser til rustvognen", "350 kr."],
          ]} />


          <h3 style={{ ...s.h3, marginTop: "32px" }}>Askespredning</h3>
          <PriceTable rows={[
            ["Askespredning over havet", "Fra 2.500 kr."],
          ]} />
          <p style={{ ...s.small, marginBottom: "32px" }}>
            Inkluderer koordinering, papirerne til sognet og det praktiske omkring spredningen.
          </p>

          <h3 style={{ ...s.h3, marginTop: "32px" }}>Øvrige ydelser</h3>
          <PriceTable rows={[
            ["Fremvisning på hospital eller i kapel", "900 kr."],
            ["Ligklæde", "295 kr."],
            ["Møde hjemme hos jer eller på mit kontor i Søborg", "1.000 kr."],
            ["Udarbejdelse af dødsannonce", "Inkluderet i mit honorar"],
            ["Sangblade fra ekstern leverandør", "Tilbud indhentes"],
          ]} />
        </section>


        <hr style={s.hr} />


        {/* ── DØDSANNONCER ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={s.h2}>Dødsannoncer</h2>
          <p style={s.body}>
            Jeg hjælper gerne med indrykning af dødsannonce i trykte aviser og på portalen Afdøde.dk — så I ikke skal bekymre jer om det praktiske i en i forvejen svær tid.
          </p>
          <p style={s.body}>
            Udarbejdelse af dødsannonce er inkluderet i mit honorar. Avisens pris for indrykning kommer oveni.
          </p>
        </section>


        {/* ── SANGBLADE ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={s.h2}>Sangblade</h2>
          <p style={s.body}>
            Mange ønsker at synge sange, der ikke fremgår af Den Danske Salmebog. Jeg hjælper med udarbejdelse af trykte sanghæfter, så de sange, I ønsker, kan synges til ceremonien.
          </p>
        </section>


        <hr style={s.hr} />


        {/* ── MIN SIDSTE VILJE ── */}
        <section id="min-sidste-vilje" style={{ background: "#fff", border: "1px solid #e0dcd6", borderRadius: "4px", padding: "40px 36px", marginBottom: "56px" }}>
          <span style={s.label}>Gratis hjemmebesøg</span>
          <h2 style={{ ...s.h2, marginBottom: "16px" }}>Min Sidste Vilje</h2>
          <p style={s.body}>
            De fleste udskyder samtalen. Men det er en gave til ens børn at have taget stilling i forvejen.
          </p>
          <p style={s.body}>
            Jeg kommer hjem til jer og hjælper med at skrive ønskerne ned: hvad der skal ske, hvad det koster, hvem der skal ringes til. Det tager en time, og så er det ordnet. Det koster ingenting, og der er ingen forpligtelse bagefter.
          </p>
          <p style={s.body}>
            <a href="/min-sidste-vilje/" style={{ color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px", fontWeight: 600 }}>Læs mere om Min Sidste Vilje →</a>
          </p>
          <a href="tel:+4528146011" style={{ display: "inline-block", background: "#3D6B4F", color: "#fff", fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "15px", padding: "14px 32px", borderRadius: "3px", textDecoration: "none", letterSpacing: "0.04em", marginTop: "8px" }}>
          Ring til mig på 28 14 60 11
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


      <footer
        style={{
          background: "#2F3E46",
          color: "#ffffff",
          textAlign: "center",
          padding: "80px 32px",
        }}
      >
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 600,
            fontSize: "clamp(18px, 2.5vw, 26px)",
            marginBottom: "16px",
            letterSpacing: "0.02em",
          }}
        >
          Bedemand København og Nordsjælland
        </p>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(14px, 1.6vw, 18px)",
            color: "rgba(255,255,255,0.82)",
            marginBottom: "16px",
            letterSpacing: "0.03em",
          }}
        >
          Kim Bondo
        </p>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.82)",
            marginBottom: "32px",
            lineHeight: 1.7,
          }}
        >
          Vandtårnsvej 62A, kontor 11, 2860 Søborg
        </p>
        <a
          href="/#kontakt"
          style={{
            display: "inline-block",
            background: "#3D6B4F",
            color: "#ffffff",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(15px, 1.8vw, 18px)",
            padding: "18px 40px",
            borderRadius: "3px",
            textDecoration: "none",
            letterSpacing: "0.05em",
            marginBottom: "48px",
          }}
        >
          Kontakt mig
        </a>
        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.78)",
            marginTop: "16px",
          }}
        >
          © {new Date().getFullYear()} Bedemand København ApS &nbsp;·&nbsp; Vandtårnsvej 62A, kontor 11, 2860 Søborg &nbsp;·&nbsp;{" "}
          <a
            href="tel:+4528146011"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            Tlf.: 28 14 60 11
          </a>
          {" "}&nbsp;·&nbsp;{" "}
          <a
            href="mailto:kim@bedemandkobenhavn.dk"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            kim@bedemandkobenhavn.dk
          </a>
          {" "}&nbsp;·&nbsp; CVR.: 45084159
          {" "}&nbsp;·&nbsp;{" "}
          <a
            href="/min-sidste-vilje/"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            Min Sidste Vilje
          </a>
          {" "}&nbsp;·&nbsp;{" "}
          <a
            href="/persondatapolitik/"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            Persondatapolitik
          </a>
          {" "}&nbsp;·&nbsp;{" "}
          <a
            href="#cookieindstillinger"
            style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}
          >
            Cookieindstillinger
          </a>
        </p>
      </footer>
    </div>
  );
}
