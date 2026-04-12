import { Switch, Route, useLocation, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

const SUPPORTED_LANGS = ["pt", "en", "es"];

function LanguageRouter() {
  const { i18n } = useTranslation();
  const [location] = useLocation();

  useEffect(() => {
    const pathLang = location.split("/")[1];
    if (SUPPORTED_LANGS.includes(pathLang)) {
      if (i18n.language !== pathLang) {
        i18n.changeLanguage(pathLang);
      }
    } else if (location === "/") {
      if (i18n.language !== "pt") {
        i18n.changeLanguage("pt");
      }
    }
  }, [location, i18n]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/en" component={Home} />
      <Route path="/es" component={Home} />
      <Route path="/pt">{() => <Redirect to="/" />}</Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageRouter />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
