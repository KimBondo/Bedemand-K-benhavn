/**
 * SSR entry point — used by Vite SSR build only.
 * React.lazy is NOT supported with renderToString, so all pages are imported directly here.
 * The client entry (main.tsx) continues to use lazy() for code splitting.
 */
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { Route, Switch } from "wouter";

// Direct imports — no lazy() for SSR
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import KimBondo from "./pages/KimBondo";
import KimPriser from "./pages/KimPriser";
import KimAfskeder from "./pages/KimAfskeder";
import KimBisaettelse from "./pages/KimBisaettelse";
import KimBegravelse from "./pages/KimBegravelse";
import KimAfskedUdenCeremoni from "./pages/KimAfskedUdenCeremoni";
import KimAskespredning from "./pages/KimAskespredning";
import KimKirkeligAfsked from "./pages/KimKirkeligAfsked";
import KimBorgerligAfsked from "./pages/KimBorgerligAfsked";
import KimHuskeliste from "./pages/KimHuskeliste";
import KimBegravelseshjaelp from "./pages/KimBegravelseshjaelp";
import KimOmraade from "./pages/KimOmraade";
import KimHvadKoster from "./pages/KimHvadKoster";
import KimHelsingor from "./pages/KimHelsingor";
import KimHorsholm from "./pages/KimHorsholm";
import KimGentofte from "./pages/KimGentofte";
import KimLyngby from "./pages/KimLyngby";
import KimHillerod from "./pages/KimHillerod";
import KimKobenhavn from "./pages/KimKobenhavn";
import KimFaq from "./pages/KimFaq";
import KimNordsjaelland from "./pages/KimNordsjaelland";
import KimFrederiksberg from "./pages/KimFrederiksberg";
import KimAmager from "./pages/KimAmager";
import KimOsterbro from "./pages/KimOsterbro";
import KimNorrebro from "./pages/KimNorrebro";
import KimVesterbro from "./pages/KimVesterbro";
import KimProdukter from "./pages/KimProdukter";
import KimOmKim from "./pages/KimOmKim";

function SSRApp() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Switch>
            <Route path={"/"} component={Home} />
            <Route path={"/kim-bondo"} component={KimBondo} />
            <Route path={"/kim-bondo/priser"} component={KimPriser} />
            <Route path={"/kim-bondo/afskeder"} component={KimAfskeder} />
            <Route path={"/kim-bondo/bisaettelse"} component={KimBisaettelse} />
            <Route path={"/kim-bondo/begravelse"} component={KimBegravelse} />
            <Route path={"/kim-bondo/afsked-uden-ceremoni"} component={KimAfskedUdenCeremoni} />
            <Route path={"/kim-bondo/askespredning"} component={KimAskespredning} />
            <Route path={"/kim-bondo/kirkelig-afsked"} component={KimKirkeligAfsked} />
            <Route path={"/kim-bondo/borgerlig-afsked"} component={KimBorgerligAfsked} />
            <Route path={"/kim-bondo/huskeliste"} component={KimHuskeliste} />
            <Route path={"/kim-bondo/begravelseshjaelp"} component={KimBegravelseshjaelp} />
            <Route path={"/kim-bondo/omraade"} component={KimOmraade} />
            <Route path={"/kim-bondo/hvad-koster-en-begravelse"} component={KimHvadKoster} />
            <Route path={"/kim-bondo/helsingor"} component={KimHelsingor} />
            <Route path={"/kim-bondo/horsholm"} component={KimHorsholm} />
            <Route path={"/kim-bondo/gentofte"} component={KimGentofte} />
            <Route path={"/kim-bondo/lyngby"} component={KimLyngby} />
            <Route path={"/kim-bondo/hillerod"} component={KimHillerod} />
            <Route path={"/kim-bondo/kobenhavn"} component={KimKobenhavn} />
            <Route path={"/kim-bondo/faq"} component={KimFaq} />
            <Route path={"/kim-bondo/nordsjaelland"} component={KimNordsjaelland} />
            <Route path={"/kim-bondo/frederiksberg"} component={KimFrederiksberg} />
            <Route path={"/kim-bondo/amager"} component={KimAmager} />
            <Route path={"/kim-bondo/osterbro"} component={KimOsterbro} />
            <Route path={"/kim-bondo/norrebro"} component={KimNorrebro} />
            <Route path={"/kim-bondo/vesterbro"} component={KimVesterbro} />
            <Route path={"/kim-bondo/produkter"} component={KimProdukter} />
            <Route path={"/kim-bondo/om-kim"} component={KimOmKim} />
            <Route path={"/404"} component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export function render(url: string): string {
  // Use wouter's official SSR API: ssrPath prop sets the current URL server-side
  return renderToString(
    <Router ssrPath={url}>
      <SSRApp />
    </Router>
  );
}
