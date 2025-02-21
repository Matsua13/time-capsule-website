import { jsx as _jsx } from "react/jsx-runtime";
// entry.client.tsx
import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import { startTransition, StrictMode } from "react";
function hydrate() {
    startTransition(() => {
        hydrateRoot(document, _jsx(StrictMode, { children: _jsx(RemixBrowser, {}) }));
    });
}
if (typeof requestIdleCallback === "function") {
    requestIdleCallback(hydrate);
}
else {
    // Pour Safari qui ne supporte pas requestIdleCallback
    setTimeout(hydrate, 1);
}
