import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import "./styles.css";

Sentry.init({
  dsn: "https://1428a5d99dd44ddab64bd69a47e0510d@o1085312.ingest.sentry.io/6095919",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production

  tracesSampleRate: 1.0,
});

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
