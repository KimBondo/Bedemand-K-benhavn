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
