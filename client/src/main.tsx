import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "@/components/ui/sonner";

// Hydrate the SSR-rendered #root — Toaster must NOT be inside this tree
// because Sonner renders a <section> that is absent from SSR HTML → hydration mismatch #418
hydrateRoot(document.getElementById("root")!, <App />);

// Mount Toaster in a separate DOM node that is never SSR-rendered
const toasterEl = document.createElement("div");
toasterEl.id = "toaster-root";
document.body.appendChild(toasterEl);
createRoot(toasterEl).render(<Toaster />);
