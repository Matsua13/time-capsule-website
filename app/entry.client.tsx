// entry.client.tsx
import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import { startTransition, StrictMode } from "react";

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    );
  });
}

if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate);
} else {
  // Pour Safari qui ne supporte pas requestIdleCallback
  setTimeout(hydrate, 1);
}
