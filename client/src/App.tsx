import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
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


function Router() {
  return (
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
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
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
