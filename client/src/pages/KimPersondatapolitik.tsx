import SEO from "@/components/SEO";
import KimNav from "@/components/KimNav";

/**
 * Kim Bondo – Persondatapolitik
 * Design: Nordic Quietism — samme tokens som de øvrige sider.
 */

const s = {
  body: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "20px" },
  h2: { fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#2F3E46", marginBottom: "16px", marginTop: "0" },
  h3: { fontFamily: "'Lora', serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#2F3E46", marginBottom: "12px", marginTop: "0" },
  label: { fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em", color: "#3D6B4F", textTransform: "uppercase" as const, marginBottom: "16px" },
  link: { color: "#3D6B4F", textDecoration: "none", borderBottom: "1px solid #3D6B4F", paddingBottom: "1px" },
  li: { fontFamily: "'Open Sans', sans-serif", fontSize: "17px", lineHeight: 1.75, color: "#3d4f5a", marginBottom: "10px" },
  ul: { paddingLeft: "22px", marginTop: "0", marginBottom: "24px" },
  block: { maxWidth: "760px", margin: "0 auto" },
};

const SECTION_LIGHT: React.CSSProperties = { background: "#F9F8F6", padding: "64px 32px" };
const SECTION_WHITE: React.CSSProperties = { background: "#fff", padding: "64px 32px" };

export default function KimPersondatapolitik() {
  return (
    <div role="main" style={{ fontFamily: "'Open Sans', sans-serif", background: "#F9F8F6", color: "#2F3E46", margin: 0, padding: 0 }}>
      <SEO
        title="Persondatapolitik – Bedemand Kim Bondo"
        description="Sådan behandler Bedemand København ApS dine personoplysninger: kontaktformular, kundeforhold, cookies, opbevaring og dine rettigheder efter GDPR."
        url="https://www.bedemandkobenhavn.dk/kim-bondo/persondatapolitik"
        image="/images/kim-beach-solo_609d5ab7.webp"
      />

      {/* ── HEADER ── */}
      <header style={{ background: "#F9F8F6", padding: "20px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px", borderBottom: "1px solid #e0dcd6", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <a href="/" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#3D6B4F", textDecoration: "none", letterSpacing: "0.04em" }}>← Forsiden</a>
          <a href="/kim-bondo" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: "clamp(12px, 1.3vw, 14px)", color: "#3D6B4F", textDecoration: "none", letterSpacing: "0.04em" }}>← Tilbage til Kim Bondo</a>
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(14px, 2.2vw, 20px)", color: "#2F3E46", letterSpacing: "0.03em", lineHeight: 1.2 }}>Bedemand København og Nordsjælland</span>
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.4vw, 15px)", color: "#5a7a6a", letterSpacing: "0.02em" }}>Kim Bondo – Persondatapolitik</span>
        </div>
        <KimNav />
      </header>

      {/* ── HERO ── */}
      <section style={{ background: "#F9F8F6", padding: "64px 32px 48px", textAlign: "center" }}>
        <p style={s.label}>Behandling af personoplysninger</p>
        <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", color: "#2F3E46", lineHeight: 1.2, maxWidth: "760px", margin: "0 auto 24px" }}>
          Persondatapolitik
        </h1>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", color: "#5a7a6a", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
          Når du henvender dig til mig, deler du noget af det mest private, et menneske har. Her står der præcis, hvad jeg gør med de oplysninger — og hvad jeg ikke gør.
        </p>
      </section>

      {/* ── DATAANSVARLIG ── */}
      <section style={SECTION_WHITE}>
        <div style={s.block}>
          <h2 style={s.h2}>Hvem er ansvarlig</h2>
          <p style={s.body}>
            Dataansvarlig for behandlingen af dine personoplysninger er:
          </p>
          <p style={{ ...s.body, background: "#F9F8F6", borderLeft: "3px solid #3D6B4F", padding: "20px 24px", marginBottom: "24px" }}>
            <strong>Bedemand København ApS</strong>
            <br />
            v/ Kim Bondo
            <br />
            Vandtårnsvej 62A, 2860 Søborg
            <br />
            CVR-nr. 45084159
            <br />
            Telefon:{" "}
            <a href="tel:22211437" style={s.link}>22 21 14 37</a>
            <br />
            E-mail:{" "}
            <a href="mailto:kim@bedemandkobenhavn.dk" style={s.link}>kim@bedemandkobenhavn.dk</a>
          </p>
          <p style={s.body}>
            Har du spørgsmål til, hvordan dine oplysninger behandles, er du altid velkommen til at ringe eller skrive direkte til mig. Du får et svar fra et menneske.
          </p>
        </div>
      </section>

      {/* ── KONTAKTFORMULAREN ── */}
      <section style={SECTION_LIGHT}>
        <div style={s.block}>
          <h2 style={s.h2}>Når du skriver via kontaktformularen</h2>
          <p style={s.body}>
            Bruger du formularen her på siden, registrerer jeg de oplysninger, du selv skriver ind: navn, telefonnummer, eventuelt e-mailadresse og din besked. Sammen med beskeden følger den side, du skrev fra, og din IP-adresse.
          </p>
          <p style={s.body}>
            <strong>Formål:</strong> at kunne besvare din henvendelse og aftale et møde eller en samtale.
          </p>
          <p style={s.body}>
            <strong>Retsgrundlag:</strong> databeskyttelsesforordningens artikel 6, stk. 1, litra b — behandlingen sker på din anmodning forud for en eventuel aftale.
          </p>
          <p style={s.body}>
            Selve afsendelsen håndteres af tjenesten <strong>Web3Forms</strong>, som videresender beskeden til min indbakke. Web3Forms er databehandler for mig og opbevarer indsendelsen i op til tre år, hvorefter den slettes automatisk. Tjenesten drives uden for EU og anvender leverandører som Amazon Web Services, Cloudflare og Hetzner. Overførslen sker på grundlag af EU-Kommissionens standardkontraktbestemmelser.
          </p>
          <p style={s.body}>
            Vil du hellere undgå det led, kan du altid bare ringe på{" "}
            <a href="tel:22211437" style={s.link}>22 21 14 37</a> eller skrive direkte til{" "}
            <a href="mailto:kim@bedemandkobenhavn.dk" style={s.link}>kim@bedemandkobenhavn.dk</a>.
          </p>
        </div>
      </section>

      {/* ── KUNDEFORHOLD ── */}
      <section style={SECTION_WHITE}>
        <div style={s.block}>
          <h2 style={s.h2}>Når du bliver kunde</h2>
          <p style={s.body}>
            Vælger du min hjælp til en bisættelse eller begravelse, har jeg brug for flere oplysninger for at kunne løse opgaven. Det drejer sig typisk om:
          </p>
          <ul style={s.ul}>
            <li style={s.li}>Navn, adresse, telefonnummer og e-mail på dig som pårørende</li>
            <li style={s.li}>Oplysninger om afdøde, herunder CPR-nummer</li>
            <li style={s.li}>Oplysninger om ceremoni, kirke, kirkegård, krematorium og valg af kiste og urne</li>
            <li style={s.li}>Betalings- og faktureringsoplysninger</li>
          </ul>
          <p style={s.body}>
            <strong>Retsgrundlag:</strong> artikel 6, stk. 1, litra b (opfyldelse af aftalen med dig) og litra c (retlige forpligtelser, blandt andet bogføringsloven).
          </p>

          <h3 style={s.h3}>CPR-numre</h3>
          <p style={s.body}>
            Jeg beder kun om CPR-nummer, hvor det er nødvendigt — for eksempel til dødsanmeldelsen og til mærkning af kisten. Nummeret bruges til det formål og slettes derefter fra mine arbejdsværktøjer. Det står aldrig i kalenderaftaler, sms'er eller andre steder, hvor det ikke hører hjemme.
          </p>

          <h3 style={s.h3}>Oplysninger om afdøde</h3>
          <p style={s.body}>
            Databeskyttelsesforordningen gælder ikke for afdøde personer. Men oplysninger om afdøde kan samtidig sige noget om jer, der er tilbage, og jeg behandler dem derfor med samme omhu som alt andet.
          </p>
        </div>
      </section>

      {/* ── COOKIES ── */}
      <section style={SECTION_LIGHT}>
        <div style={s.block}>
          <h2 style={s.h2}>Cookies og statistik</h2>
          <p style={s.body}>
            Siden bruger Google Tag Manager og Google Analytics til at se, hvor mange der besøger siderne, og hvilke sider der bliver læst. Det hjælper mig med at skrive om det, folk faktisk leder efter. Google Analytics placerer cookies i din browser og registrerer blandt andet din IP-adresse i afkortet form.
          </p>
          <p style={s.body}>
            Jeg bruger ikke statistikken til at identificere dig som person, og oplysningerne sælges ikke videre.
          </p>
          <p style={s.body}>
            Du kan altid slette cookies i din browsers indstillinger eller bruge en browser-udvidelse, der blokerer statistikcookies. Du kan også fravælge Google Analytics via{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={s.link}>Googles eget fravalgsværktøj</a>.
          </p>
        </div>
      </section>

      {/* ── MODTAGERE ── */}
      <section style={SECTION_WHITE}>
        <div style={s.block}>
          <h2 style={s.h2}>Hvem oplysningerne deles med</h2>
          <p style={s.body}>
            Jeg sælger aldrig oplysninger videre, og jeg bruger dem ikke til markedsføring. Oplysninger deles kun, hvor det er nødvendigt for at løse opgaven eller følger af loven:
          </p>
          <ul style={s.ul}>
            <li style={s.li}>Kirker, kirkegårde, krematorier, præster og myndigheder, når afskeden skal arrangeres</li>
            <li style={s.li}>Offentlige myndigheder, blandt andet ved dødsanmeldelse og ansøgning om begravelseshjælp</li>
            <li style={s.li}>Mit bogholderi og min revisor i forbindelse med fakturering og regnskab</li>
            <li style={s.li}>Databehandlere, der leverer teknik til hjemmesiden: Web3Forms (kontaktformular), Cloudflare (hosting og levering) og Google (statistik)</li>
          </ul>
        </div>
      </section>

      {/* ── OPBEVARING ── */}
      <section style={SECTION_LIGHT}>
        <div style={s.block}>
          <h2 style={s.h2}>Hvor længe oplysningerne gemmes</h2>
          <ul style={s.ul}>
            <li style={s.li}><strong>Henvendelser der ikke fører til en opgave:</strong> slettes, når det står klart, at der ikke bliver noget — og senest efter seks måneder.</li>
            <li style={s.li}><strong>Sagsoplysninger på en gennemført opgave:</strong> gemmes i fem år efter udløbet af det regnskabsår, opgaven hører til, fordi bogføringsloven kræver det.</li>
            <li style={s.li}><strong>CPR-numre:</strong> slettes, så snart de har været brugt til det, de var nødvendige for.</li>
            <li style={s.li}><strong>Indsendelser hos Web3Forms:</strong> slettes automatisk af tjenesten efter senest tre år.</li>
          </ul>
        </div>
      </section>

      {/* ── RETTIGHEDER ── */}
      <section style={SECTION_WHITE}>
        <div style={s.block}>
          <h2 style={s.h2}>Dine rettigheder</h2>
          <p style={s.body}>
            Du har efter databeskyttelsesforordningen en række rettigheder over de oplysninger, jeg har om dig:
          </p>
          <ul style={s.ul}>
            <li style={s.li}><strong>Indsigt</strong> — du kan få at vide, hvilke oplysninger jeg har om dig, og få en kopi.</li>
            <li style={s.li}><strong>Berigtigelse</strong> — er noget forkert, retter jeg det.</li>
            <li style={s.li}><strong>Sletning</strong> — du kan bede om at få oplysninger slettet, hvor jeg ikke er forpligtet til at gemme dem.</li>
            <li style={s.li}><strong>Begrænsning</strong> — du kan bede om, at behandlingen sættes i bero.</li>
            <li style={s.li}><strong>Indsigelse</strong> — du kan gøre indsigelse mod behandling, der sker i min legitime interesse.</li>
            <li style={s.li}><strong>Dataportabilitet</strong> — du kan få udleveret dine oplysninger i et almindeligt format.</li>
            <li style={s.li}><strong>Tilbagekaldelse af samtykke</strong> — har du givet et samtykke, kan du trække det tilbage når som helst.</li>
          </ul>
          <p style={s.body}>
            Skriv til{" "}
            <a href="mailto:kim@bedemandkobenhavn.dk" style={s.link}>kim@bedemandkobenhavn.dk</a>{" "}
            eller ring på{" "}
            <a href="tel:22211437" style={s.link}>22 21 14 37</a>, så vender jeg tilbage hurtigst muligt og senest inden for en måned.
          </p>
        </div>
      </section>

      {/* ── KLAGE ── */}
      <section style={SECTION_LIGHT}>
        <div style={s.block}>
          <h2 style={s.h2}>Klage til Datatilsynet</h2>
          <p style={s.body}>
            Er du utilfreds med måden, jeg behandler dine oplysninger på, håber jeg, du siger det til mig først — så retter jeg det, jeg kan rette. Du har under alle omstændigheder ret til at klage til Datatilsynet:
          </p>
          <p style={{ ...s.body, background: "#fff", borderLeft: "3px solid #3D6B4F", padding: "20px 24px" }}>
            <strong>Datatilsynet</strong>
            <br />
            Carl Jacobsens Vej 35, 2500 Valby
            <br />
            Telefon: 33 19 32 00
            <br />
            E-mail:{" "}
            <a href="mailto:dt@datatilsynet.dk" style={s.link}>dt@datatilsynet.dk</a>
            <br />
            <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" style={s.link}>www.datatilsynet.dk</a>
          </p>
        </div>
      </section>

      {/* ── SIKKERHED OG ÆNDRINGER ── */}
      <section style={SECTION_WHITE}>
        <div style={s.block}>
          <h2 style={s.h2}>Sikkerhed</h2>
          <p style={s.body}>
            Hjemmesiden kører krypteret (https), og adgangen til mine mail- og arbejdssystemer er beskyttet med adgangskode og to-faktor-login. Jeg er den eneste, der har adgang til sagsoplysningerne, bortset fra revisor og de leverandører, der er nævnt ovenfor.
          </p>

          <h2 style={{ ...s.h2, marginTop: "40px" }}>Ændringer</h2>
          <p style={s.body}>
            Ændrer jeg noget i den måde, oplysninger behandles på, opdaterer jeg denne side. Datoen nedenfor viser, hvornår den sidst blev ændret.
          </p>
          <p style={{ ...s.body, fontStyle: "italic", color: "#7a8f99", marginBottom: 0 }}>
            Senest opdateret 26. august 2026.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
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
            color: "rgba(255,255,255,0.70)",
            marginBottom: "16px",
            letterSpacing: "0.03em",
          }}
        >
          Kim Bondo
        </p>
        <a
          href="/kim-bondo#kontakt"
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
            color: "rgba(255,255,255,0.35)",
            marginTop: "16px",
          }}
        >
          © {new Date().getFullYear()} Bedemand København ApS &nbsp;·&nbsp; Vandtårnsvej 62A, 2860 Søborg &nbsp;·&nbsp;{" "}
          <a
            href="tel:22211437"
            style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}
          >
            Tlf.: 22 21 14 37
          </a>
          {" "}&nbsp;·&nbsp;{" "}
          <a
            href="mailto:kim@bedemandkobenhavn.dk"
            style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}
          >
            kim@bedemandkobenhavn.dk
          </a>
          {" "}&nbsp;·&nbsp; CVR.: 45084159
        </p>
      </footer>
    </div>
  );
}
