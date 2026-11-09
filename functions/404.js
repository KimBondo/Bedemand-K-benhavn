// /404 må ikke svare 200 (soft 404 i Search Console).
// Vi henter en adresse, der ikke findes, så Cloudflare selv giver den
// venlige fejlside (404.html) med status 404 – præcis som ved ukendte adresser.
export async function onRequest({ request, env }) {
  return env.ASSETS.fetch(new URL("/__siden-findes-ikke__", request.url));
}
