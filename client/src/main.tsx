import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "@/components/ui/sonner";

// ── Global conversion tracking ───────────────────────────────────────────────
// Catches ALL tel: link clicks anywhere on the page — no need to modify
// individual components. Fires a GTM dataLayer event for Google Ads/Analytics.
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

document.addEventListener("click", (e) => {
  const target = (e.target as HTMLElement).closest("a[href^='tel:']");
  if (target) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "phone_click",
      phone_number: (target as HTMLAnchorElement).href.replace("tel:", ""),
      page_path: window.location.pathname,
    });
  }
});

// Hydrate the SSR-rendered #root — Toaster must NOT be inside this tree
// because Sonner renders a <section> that is absent from SSR HTML → hydration mismatch #418
hydrateRoot(document.getElementById("root")!, <App />);

// Mount Toaster in a separate DOM node that is never SSR-rendered
const toasterEl = document.createElement("div");
toasterEl.id = "toaster-root";
document.body.appendChild(toasterEl);
createRoot(toasterEl).render(<Toaster />);
