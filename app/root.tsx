// app/root.tsx
// eslint-disable-next-line import/no-duplicates
import "./styles/global.css"; // Import direct pour forcer le traitement par Vite/PostCSS
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
// eslint-disable-next-line import/no-duplicates
import globalStyles from "./styles/global.css"; // Import pour la fonction links

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-inter bg-background text-gray-800">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
