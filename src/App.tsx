import { Route, Router, Switch } from "wouter";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import QuotePage from "./pages/QuotePage";
import AboutPage from "./pages/AboutPage";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <Router base="/">
      <Toaster position="top-right" />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/quote" component={QuotePage} />
        <Route path="/about" component={AboutPage} />
        <Route>
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
              <p className="text-muted-foreground">Sorry, this page doesn't exist.</p>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;