import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// app/root.tsx
// eslint-disable-next-line import/no-duplicates
import "./styles/global.css"; // Import direct pour forcer le traitement par Vite/PostCSS
import { Links, Meta, Outlet, Scripts, ScrollRestoration, } from "@remix-run/react";
// eslint-disable-next-line import/no-duplicates
import globalStyles from "./styles/global.css"; // Import pour la fonction links
export const links = () => [
    { rel: "stylesheet", href: globalStyles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
];
export default function App() {
    return (_jsxs("html", { lang: "en", children: [_jsxs("head", { children: [_jsx(Meta, {}), _jsx(Links, {})] }), _jsxs("body", { className: "font-inter bg-background text-gray-800", children: [_jsx(Outlet, {}), _jsx(ScrollRestoration, {}), _jsx(Scripts, {})] })] }));
}
