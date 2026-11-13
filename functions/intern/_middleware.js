// Ekstra lås på /intern/*: siden vises kun, når anmodningen er kommet gennem Cloudflare Access.
// Selve beskyttelsen er Cloudflare Access (sti /intern/*). Er Access ikke sat op endnu,
// svarer vi 404, så siden ikke kan ses, selv hvis den bliver udgivet for tidligt.
export async function onRequest({ request, next, env }) {
  const viaAccess =
    request.headers.has("Cf-Access-Jwt-Assertion") ||
    /(?:^|;\s*)CF_Authorization=/.test(request.headers.get("Cookie") || "");
  if (!viaAccess) {
    return env.ASSETS.fetch(new URL("/__siden-findes-ikke__", request.url));
  }
  const svar = await next();
  const ny = new Response(svar.body, svar);
  ny.headers.set("X-Robots-Tag", "noindex, nofollow");
  ny.headers.set("Cache-Control", "no-store");
  return ny;
}
