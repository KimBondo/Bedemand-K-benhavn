import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import CookieConsent from "./components/CookieConsent";
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
const KimPersondatapolitik = lazy(() => import("./pages/KimPersondatapolitik"));


function AppRouter() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#F9F8F6" }} />}>
    <Switch>
      <Route path={"/"} component={KimBondo} />
      <Route path={"/priser"} component={KimPriser} />
      <Route path={"/afskeder"} component={KimAfskeder} />
      <Route path={"/bisaettelse"} component={KimBisaettelse} />
      <Route path={"/begravelse"} component={KimBegravelse} />
      <Route path={"/afsked-uden-ceremoni"} component={KimAfskedUdenCeremoni} />
      <Route path={"/askespredning"} component={KimAskespredning} />
      <Route path={"/kirkelig-afsked"} component={KimKirkeligAfsked} />
      <Route path={"/borgerlig-afsked"} component={KimBorgerligAfsked} />
      <Route path={"/huskeliste"} component={KimHuskeliste} />
      <Route path={"/begravelseshjaelp"} component={KimBegravelseshjaelp} />
      <Route path={"/omraade"} component={KimOmraade} />
      <Route path={"/hvad-koster-en-begravelse"} component={KimHvadKoster} />
      <Route path={"/helsingor"} component={KimHelsingor} />
      <Route path={"/horsholm"} component={KimHorsholm} />
      <Route path={"/gentofte"} component={KimGentofte} />
      <Route path={"/lyngby"} component={KimLyngby} />
      <Route path={"/hillerod"} component={KimHillerod} />
      <Route path={"/kobenhavn"} component={KimKobenhavn} />
      <Route path={"/faq"} component={KimFaq} />
      <Route path={"/nordsjaelland"} component={KimNordsjaelland} />
      <Route path={"/frederiksberg"} component={KimFrederiksberg} />
      <Route path={"/amager"} component={KimAmager} />
      <Route path={"/osterbro"} component={KimOsterbro} />
      <Route path={"/norrebro"} component={KimNorrebro} />
      <Route path={"/vesterbro"} component={KimVesterbro} />
      <Route path={"/produkter"} component={KimProdukter} />
      <Route path={"/om-kim"} component={KimOmKim} />
      <Route path={"/persondatapolitik"} component={KimPersondatapolitik} />
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
      >
        <TooltipProvider>
          <AppRouter />
          <CookieConsent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
