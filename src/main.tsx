// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./app/store.tsx";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
// import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster />
    {/* <Toaster expand={false} position="top-right" richColors /> */}
  </HelmetProvider>
);
