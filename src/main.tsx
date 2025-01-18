// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "sonner";
import { store } from "./app/store.tsx";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster expand={false} position="top-right" richColors />
  </HelmetProvider>
);
