import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { lazy, Suspense } from "react";

// Route-level code splitting — reduces initial JS bundle by ~250 KiB
const KimBondo = lazy(() => import("./pages/KimBondo"));
const KimPriser = lazy(() => import("./pages/KimPriser"));
const KimAfskeder = lazy(() => import("./pages/KimAfskeder"));
const KimBisaettelse = lazy(() => import("./pages/KimBisaettelse"));
const KimBegravelse = lazy(() => import("./pages/KimBegravelse"));
const KimAfskedUdenCeremoni = lazy(() => import("./pages/KimAfskedUdenCeremoni"));
const KimAskespredning = lazy(() => import("./pages/KimAskespredning"));
const KimKirkeligAfsked = lazy(() => import("./pages/KimKirkeligAfsked"));
const KimBorgerligAfsked = lazy(() => import("./pages/KimBorgerligAfsked"));
const KimHuskeliste = lazy(() => import("./pages/KimHuskeliste"));
const KimBegravelseshjaelp = lazy(() => import("./pages/KimBegravelseshjaelp"));
const KimOmraade = lazy(() => import("./pages/KimOmraade"));
const KimHvadKoster = lazy(() => import("./pages/KimHvadKoster"));
const KimHelsingor = lazy(() => import("./pages/KimHelsingor"));
const KimHorsholm = lazy(() => import("./pages/KimHorsholm"));
const KimGentofte = lazy(() => import("./pages/KimGentofte"));
const KimLyngby = lazy(() => import("./pages/KimLyngby"));
const KimHillerod = lazy(() => import("./pages/KimHillerod"));
const KimKobenhavn = lazy(() => import("./pages/KimKobenhavn"));
const KimFaq = lazy(() => import("./pages/KimFaq"));
const KimNordsjaelland = lazy(() => import("./pages/KimNordsjaelland"));
const KimFrederiksberg = lazy(() => import("./pages/KimFrederiksberg"));
const KimAmager = lazy(() => import("./pages/KimAmager"));
const KimOsterbro = lazy(() => import("./pages/KimOsterbro"));
const KimNorrebro = lazy(() => import("./pages/KimNorrebro"));
const KimVesterbro = lazy(() => import("./pages/KimVesterbro"));
const KimProdukter = lazy(() => import("./pages/KimProdukter"));
const KimOmKim = lazy(() => import("./pages/KimOmKim"));


function Router() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#F9F8F6" }} />}>
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
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
