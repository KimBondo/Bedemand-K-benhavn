/**
 * Link i sidefoden, som åbner cookie-banneret igen, så samtykket kan trækkes tilbage.
 * (CookieConsent lytter efter #cookieindstillinger.)
 */
export default function CookieLink() {
  return (
    <a href="#cookieindstillinger" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "underline" }}>
      Cookieindstillinger
    </a>
  );
}
