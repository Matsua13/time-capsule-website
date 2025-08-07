var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/styles/global.css
var global_default = "/build/_assets/global-LK6CQD5J.css";

// app/root.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "font-inter bg-background text-gray-800", children: [
      /* @__PURE__ */ jsx2(Outlet, {}),
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {})
    ] })
  ] });
}

// app/routes/community-guidelines.tsx
var community_guidelines_exports = {};
__export(community_guidelines_exports, {
  default: () => CommunityGuidelines
});
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function CommunityGuidelines() {
  return /* @__PURE__ */ jsx3("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: /* @__PURE__ */ jsxs2("div", { className: "max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ jsx3("header", { className: "text-center mb-6", children: /* @__PURE__ */ jsx3("h1", { className: "text-4xl font-extrabold drop-shadow-lg", children: "Community Guidelines" }) }),
    /* @__PURE__ */ jsxs2("main", { className: "prose text-justify", children: [
      /* @__PURE__ */ jsx3("p", { children: "Welcome to the Time Capsule Universe," }),
      /* @__PURE__ */ jsx3("p", { children: "At Time Capsule, we believe that every message and every memory is precious. To ensure a harmonious and respectful environment, we invite you to observe the following principles:" }),
      /* @__PURE__ */ jsxs2("ul", { children: [
        /* @__PURE__ */ jsxs2("li", { children: [
          /* @__PURE__ */ jsx3("strong", { children: "- Respect and Kindness:" }),
          " Treat everyone with courtesy and consideration. Any form of harassment, discrimination, or hate speech is strictly prohibited."
        ] }),
        /* @__PURE__ */ jsxs2("li", { children: [
          /* @__PURE__ */ jsx3("strong", { children: "- Confidentiality and Discretion:" }),
          " Avoid sharing sensitive personal information about yourself or others."
        ] }),
        /* @__PURE__ */ jsxs2("li", { children: [
          /* @__PURE__ */ jsx3("strong", { children: "- Constructive Sharing:" }),
          " Your messages and memories are intended to inspire and encourage. Be aware of the impact of your publications and foster enriching exchanges\u2014even if your goals are not immediately achieved, your capsule is meant for introspection and evolution."
        ] }),
        /* @__PURE__ */ jsxs2("li", { children: [
          /* @__PURE__ */ jsx3("strong", { children: "- Authenticity and Responsibility:" }),
          " Ensure that your content reflects your true emotions and experiences while respecting the dignity of others."
        ] })
      ] }),
      /* @__PURE__ */ jsx3("p", { children: "By using Time Capsule, you agree to abide by these essential rules. Together, let's create a space for sharing and inspiration, where each capsule contributes to weaving a collective story of respect and hope." })
    ] }),
    /* @__PURE__ */ jsx3("footer", { className: "mt-8 text-center text-sm text-gray-600", children: /* @__PURE__ */ jsx3("p", { children: "\xA9 2025 Time Capsule. All rights reserved." }) })
  ] }) });
}

// app/routes/upcoming-updates.tsx
var upcoming_updates_exports = {};
__export(upcoming_updates_exports, {
  default: () => UpcomingUpdates
});
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function UpcomingUpdates() {
  return /* @__PURE__ */ jsx4("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: /* @__PURE__ */ jsxs3("div", { className: "max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ jsx4("header", { className: "text-center mb-6", children: /* @__PURE__ */ jsx4("h1", { className: "text-4xl font-extrabold drop-shadow-lg", children: "Upcoming Updates" }) }),
    /* @__PURE__ */ jsxs3("main", { className: "prose text-justify", children: [
      /* @__PURE__ */ jsx4("p", { children: "At Time Capsule, we're continuously working to enhance your experience. In our upcoming updates, you can expect:" }),
      /* @__PURE__ */ jsxs3("ul", { children: [
        /* @__PURE__ */ jsxs3("li", { children: [
          /* @__PURE__ */ jsx4("strong", { children: "- Friend Connections:" }),
          " Connect with other users so that your public capsules can be shared and enjoyed among friends."
        ] }),
        /* @__PURE__ */ jsxs3("li", { children: [
          /* @__PURE__ */ jsx4("strong", { children: "- Draft Mode:" }),
          " Create and save draft capsules that you can edit and refine before sending\u2014giving you the time to think about your message."
        ] }),
        /* @__PURE__ */ jsxs3("li", { children: [
          /* @__PURE__ */ jsx4("strong", { children: "- Archive option:" }),
          " Archive the capsules you want to make it easier to organise the dashboard."
        ] }),
        /* @__PURE__ */ jsxs3("li", { children: [
          /* @__PURE__ */ jsx4("strong", { children: "- Interactive Replies:" }),
          " Respond to received capsules\u2014whether it's engaging with your past self or replying to a friend's message."
        ] }),
        /* @__PURE__ */ jsxs3("li", { children: [
          /* @__PURE__ */ jsx4("strong", { children: "- Social Sign-In:" }),
          " Enjoy a smoother experience with the option to sign up and log in using Google and Facebook."
        ] }),
        /* @__PURE__ */ jsxs3("li", { children: [
          /* @__PURE__ */ jsx4("strong", { children: "- Animation effect for opening day's capsule:" }),
          " Enjoy a smoother experience."
        ] })
      ] }),
      /* @__PURE__ */ jsx4("p", { children: "Stay tuned for these exciting new features as we continue to evolve your Time Capsule experience!" })
    ] }),
    /* @__PURE__ */ jsx4("footer", { className: "mt-8 text-center text-sm text-gray-600", children: /* @__PURE__ */ jsx4("p", { children: "\xA9 2025 Time Capsule. All rights reserved." }) })
  ] }) });
}

// app/routes/delete-capsules.tsx
var delete_capsules_exports = {};
__export(delete_capsules_exports, {
  action: () => action,
  default: () => DeleteCapsules,
  loader: () => loader
});
import { json, redirect as redirect2 } from "@remix-run/node";
import { Form, useLoaderData, Link } from "@remix-run/react";

// app/utils/db.server.ts
import { PrismaClient } from "@prisma/client";
var db;
db = new PrismaClient(), db.$connect();

// app/utils/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
if (!process.env.SESSION_SECRET)
  throw new Error("SESSION_SECRET must be set in the .env file");
var sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    // En production, le cookie ne sera transmis que sur HTTPS.
    secure: !0,
    // Utilise le secret défini dans le .env pour signer le cookie
    secrets: [process.env.SESSION_SECRET],
    // SameSite "lax" est un bon compromis pour prévenir les attaques CSRF tout en conservant une bonne expérience utilisateur
    sameSite: "lax",
    // Le cookie sera accessible pour toutes les routes de l'application
    path: "/",
    // Empêche l'accès au cookie via JavaScript côté client
    httpOnly: !0
  }
}), getSession = (cookieHeader) => sessionStorage.getSession(cookieHeader), commitSession = (session) => sessionStorage.commitSession(session), destroySession = (session) => sessionStorage.destroySession(session);

// app/utils/auth.server.ts
import { redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
async function requireUser(request) {
  let userId = (await getSession(request.headers.get("Cookie"))).get("userId");
  if (!userId || typeof userId != "number")
    throw redirect("/login");
  let user = await db.user.findUnique({ where: { id: userId } });
  if (!user)
    throw redirect("/login");
  return user;
}
async function createUserSession(userId, redirectTo) {
  let session = await getSession(null);
  return session.set("userId", userId), redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}

// app/routes/delete-capsules.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var loader = async ({ request }) => {
  let user = await requireUser(request), capsules = await db.capsule.findMany({
    where: { ownerId: user.id },
    select: { id: !0, title: !0 }
  });
  return json({ capsules });
}, action = async ({ request }) => {
  let user = await requireUser(request), capsuleId = (await request.formData()).get("capsuleId");
  if (typeof capsuleId != "string")
    return json({ error: "Invalid capsule ID" }, { status: 400 });
  let capsule = await db.capsule.findUnique({
    where: { id: parseInt(capsuleId) },
    select: { ownerId: !0 }
  });
  return !capsule || capsule.ownerId !== user.id ? json({ error: "Capsule not found or unauthorized" }, { status: 404 }) : (await db.media.deleteMany({
    where: { capsuleId: parseInt(capsuleId) }
  }), await db.capsule.delete({
    where: { id: parseInt(capsuleId) }
  }), redirect2("/delete-capsules"));
};
function DeleteCapsules() {
  let { capsules } = useLoaderData();
  return /* @__PURE__ */ jsx5("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4", children: /* @__PURE__ */ jsxs4("div", { className: "w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ jsx5("h1", { className: "text-4xl font-extrabold text-white mb-6 drop-shadow-lg text-center", children: "Manage Your Capsules" }),
    capsules.length === 0 ? /* @__PURE__ */ jsx5("p", { className: "text-center text-lg", children: "No capsules found." }) : /* @__PURE__ */ jsx5("ul", { className: "space-y-4", children: capsules.map((capsule) => /* @__PURE__ */ jsxs4(
      "li",
      {
        className: "flex justify-between items-center p-4 bg-white rounded shadow hover:bg-gray-100 transition",
        children: [
          /* @__PURE__ */ jsx5("span", { className: "text-xl font-medium", children: capsule.title }),
          /* @__PURE__ */ jsxs4(
            Form,
            {
              method: "post",
              onSubmit: (e) => {
                window.confirm("Are you sure you want to delete this capsule?") || e.preventDefault();
              },
              children: [
                /* @__PURE__ */ jsx5("input", { type: "hidden", name: "capsuleId", value: capsule.id }),
                /* @__PURE__ */ jsx5(
                  "button",
                  {
                    type: "submit",
                    children: "\u{1F5D1}\uFE0F"
                  }
                )
              ]
            }
          )
        ]
      },
      capsule.id
    )) }),
    /* @__PURE__ */ jsx5("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsx5(Link, { to: "/dashboard", className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition", children: "Back to Dashboard" }) })
  ] }) });
}

// app/routes/privacy-policy.tsx
var privacy_policy_exports = {};
__export(privacy_policy_exports, {
  default: () => PrivacyPolicy
});
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function PrivacyPolicy() {
  return /* @__PURE__ */ jsxs5("div", { className: "min-h-screen bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300 text-white", children: [
    /* @__PURE__ */ jsx6("header", { className: "w-full p-6 bg-white text-gray-900 text-center", children: /* @__PURE__ */ jsx6("h1", { className: "text-4xl font-bold", children: "Privacy Policy" }) }),
    /* @__PURE__ */ jsx6("main", { className: "container mx-auto px-4 py-8 text-gray-900", children: /* @__PURE__ */ jsx6("div", { className: "prose max-w-none", children: /* @__PURE__ */ jsx6("p", { children: "Ajoutez ici le contenu de la Privacy Policy." }) }) }),
    /* @__PURE__ */ jsx6("footer", { className: "bg-white text-gray-900 py-4 text-center border-t border-gray-300", children: /* @__PURE__ */ jsx6("p", { children: "\xA9 2025 Time Capsule. All rights reserved." }) })
  ] });
}

// app/routes/notification.tsx
var notification_exports = {};
__export(notification_exports, {
  default: () => NotificationRedirect,
  loader: () => loader2
});
import { redirect as redirect3 } from "@remix-run/node";
var loader2 = async ({ request }) => {
  let user = await requireUser(request), url = new URL(request.url), capsuleId = url.searchParams.get("capsuleId"), notifId = url.searchParams.get("notifId");
  return notifId && await db.notification.update({
    where: { id: parseInt(notifId) },
    data: { read: !0 }
  }), capsuleId ? redirect3(`/${capsuleId}`) : redirect3("/dashboard");
};
function NotificationRedirect() {
  return null;
}

// app/routes/terms-of-use.tsx
var terms_of_use_exports = {};
__export(terms_of_use_exports, {
  default: () => TermsOfUse
});
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function TermsOfUse() {
  return /* @__PURE__ */ jsxs6("div", { className: "min-h-screen bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300 text-white", children: [
    /* @__PURE__ */ jsx7("header", { className: "w-full p-6 bg-white text-gray-900 text-center", children: /* @__PURE__ */ jsx7("h1", { className: "text-4xl font-bold", children: "Terms of Use" }) }),
    /* @__PURE__ */ jsx7("main", { className: "container mx-auto px-4 py-8 text-gray-900", children: /* @__PURE__ */ jsx7("div", { className: "prose max-w-none", children: /* @__PURE__ */ jsx7("p", { children: "Ajoutez ici le contenu des Terms of Use." }) }) }),
    /* @__PURE__ */ jsx7("footer", { className: "bg-white text-gray-900 py-4 text-center border-t border-gray-300", children: /* @__PURE__ */ jsx7("p", { children: "\xA9 2025 Time Capsule. All rights reserved." }) })
  ] });
}

// app/routes/check-email.tsx
var check_email_exports = {};
__export(check_email_exports, {
  default: () => CheckEmail
});
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function CheckEmail() {
  return /* @__PURE__ */ jsx8("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900 flex items-center justify-center", children: /* @__PURE__ */ jsxs7("div", { className: "max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ jsx8("h2", { className: "text-2xl font-bold mb-4", children: "Please, check your e-mail inbox" }),
    /* @__PURE__ */ jsx8("p", { className: "text-lg", children: "We just sent a confirmation email to your inbox. Please click the link in the email to verify your address and get started. If you don't see it right away, be sure to check your spam or junk folder. We're excited to have you with us!\u{1F33B}" })
  ] }) });
}

// app/routes/safety-tips.tsx
var safety_tips_exports = {};
__export(safety_tips_exports, {
  default: () => SafetyTips
});
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
function SafetyTips() {
  return /* @__PURE__ */ jsx9("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: /* @__PURE__ */ jsxs8("div", { className: "max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ jsx9("header", { className: "text-center mb-6 text-justify", children: /* @__PURE__ */ jsx9("h1", { className: "text-4xl font-extrabold drop-shadow-lg", children: "Safety Tips" }) }),
    /* @__PURE__ */ jsxs8("main", { className: "prose", children: [
      /* @__PURE__ */ jsx9("p", { children: /* @__PURE__ */ jsx9("strong", { children: "Security and Protection of Your Data" }) }),
      /* @__PURE__ */ jsx9("p", { children: "Protecting your personal information is our priority. We recommend that you follow these tips to use the platform safely:" }),
      /* @__PURE__ */ jsxs8("ul", { children: [
        /* @__PURE__ */ jsxs8("li", { children: [
          /* @__PURE__ */ jsx9("strong", { children: "- Confidentiality of Content:" }),
          " Never share content (photos, videos, messages) containing sensitive or compromising personal information."
        ] }),
        /* @__PURE__ */ jsxs8("li", { children: [
          /* @__PURE__ */ jsx9("strong", { children: "- Access Settings:" }),
          " Use the confidentiality options provided to control who can view your capsules."
        ] }),
        /* @__PURE__ */ jsxs8("li", { children: [
          /* @__PURE__ */ jsx9("strong", { children: "- Regular Updates:" }),
          " Make sure you keep your application and data up to date to benefit from the latest security protections."
        ] }),
        /* @__PURE__ */ jsxs8("li", { children: [
          /* @__PURE__ */ jsx9("strong", { children: "- Vigilance on Links and Downloads:" }),
          " Do not open links or files from unverified sources."
        ] }),
        /* @__PURE__ */ jsxs8("li", { children: [
          /* @__PURE__ */ jsx9("strong", { children: "- Reporting Anomalies:" }),
          " If you notice any suspicious behavior or inappropriate content, please report it immediately using our dedicated tool."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx9("footer", { className: "mt-8 text-center text-sm text-gray-600", children: /* @__PURE__ */ jsx9("p", { children: "\xA9 2025 Time Capsule. All rights reserved." }) })
  ] }) });
}

// app/routes/$capsuleId.tsx
var capsuleId_exports = {};
__export(capsuleId_exports, {
  default: () => CapsuleDetail,
  loader: () => loader3
});
import { json as json2, redirect as redirect4 } from "@remix-run/node";
import { useLoaderData as useLoaderData2, Link as Link2 } from "@remix-run/react";
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var loader3 = async ({ request, params }) => {
  let currentUser = await requireUser(request), capsuleId = params.capsuleId;
  if (console.log("Requ\xEAte re\xE7ue pour capsule ID:", capsuleId), !capsuleId)
    throw new Response("Missing capsule ID", { status: 400 });
  let capsule = await db.capsule.findUnique({
    where: { id: parseInt(capsuleId) },
    include: { media: !0, owner: !0 }
  });
  if (!capsule)
    throw new Response("Capsule not found", { status: 404 });
  let now = /* @__PURE__ */ new Date(), scheduledDate = new Date(capsule.scheduledDate);
  if (now < scheduledDate && (capsule.visibility === "private" || currentUser.id !== capsule.ownerId))
    return redirect4(
      `/dashboard?locked=true&opening=${encodeURIComponent(scheduledDate.toLocaleString())}`
    );
  let formattedScheduledDate = scheduledDate.toLocaleString("en-US", {
    timeZone: "UTC"
  });
  return json2({
    capsule: {
      ...capsule,
      formattedScheduledDate
    },
    currentUser
  });
};
function CapsuleDetail() {
  let { capsule } = useLoaderData2();
  return /* @__PURE__ */ jsx10("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: /* @__PURE__ */ jsxs9("div", { className: "max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ jsx10("h1", { className: "text-4xl font-extrabold drop-shadow-lg mb-4", children: capsule.title }),
    /* @__PURE__ */ jsx10("p", { className: "mb-4 text-lg", children: capsule.content }),
    /* @__PURE__ */ jsxs9("p", { className: "mb-4 text-sm text-gray-600", children: [
      "Opening day: ",
      new Date(capsule.scheduledDate).toLocaleString()
    ] }),
    /* @__PURE__ */ jsxs9("p", { className: "mb-4 text-sm text-gray-600", children: [
      "Visibility: ",
      capsule.visibility
    ] }),
    capsule.ownerId !== capsule.owner.id && /* @__PURE__ */ jsxs9("p", { className: "mb-4 text-sm text-gray-600", children: [
      "Sent by ",
      capsule.recipientType,
      ":",
      " ",
      capsule.owner.username || capsule.owner.email
    ] }),
    capsule.visibility === "group" && capsule.groupRecipient && /* @__PURE__ */ jsxs9("p", { className: "mb-4 text-sm text-gray-600", children: [
      "Group capsule intended for ",
      capsule.recipientType,
      ": ",
      capsule.groupRecipient,
      /* @__PURE__ */ jsxs9("p", { children: [
        "Sent by: ",
        capsule.owner.username || capsule.owner.email
      ] })
    ] }),
    capsule.media && capsule.media.length > 0 && /* @__PURE__ */ jsxs9("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx10("h2", { className: "text-2xl font-semibold mb-2", children: "Special gifts with your capsule" }),
      /* @__PURE__ */ jsx10("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: capsule.media.map((media) => /* @__PURE__ */ jsx10("div", { className: "p-2 border rounded", children: media.type.startsWith("image") ? /* @__PURE__ */ jsx10("img", { src: media.url, alt: "", className: "w-full" }) : media.type.startsWith("video") ? /* @__PURE__ */ jsx10("video", { controls: !0, src: media.url, className: "w-full" }) : /* @__PURE__ */ jsx10("audio", { controls: !0, src: media.url }) }, media.id)) })
    ] }),
    /* @__PURE__ */ jsx10("div", { className: "mt-8", children: /* @__PURE__ */ jsx10(
      Link2,
      {
        to: "/dashboard",
        className: "bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition",
        children: "Back to Dashboard"
      }
    ) })
  ] }) });
}

// app/routes/contact-us.tsx
var contact_us_exports = {};
__export(contact_us_exports, {
  default: () => ContactUs
});
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
function ContactUs() {
  return /* @__PURE__ */ jsx11("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: /* @__PURE__ */ jsxs10("div", { className: "max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ jsx11("header", { className: "text-center mb-6", children: /* @__PURE__ */ jsx11("h1", { className: "text-4xl font-extrabold drop-shadow-lg", children: "Contact Us" }) }),
    /* @__PURE__ */ jsxs10("main", { className: "prose", children: [
      /* @__PURE__ */ jsxs10("p", { children: [
        "If you have any questions, feedback, or need assistance, please feel free to contact us via email at",
        " ",
        /* @__PURE__ */ jsx11("a", { href: "mailto:ltifene@gmail.com", className: "text-sky-500 hover:underline", children: "ltifene@gmail.com" }),
        "."
      ] }),
      /* @__PURE__ */ jsx11("p", { children: "We look forward to hearing from you and will get back to you as soon as possible!" })
    ] }),
    /* @__PURE__ */ jsx11("footer", { className: "mt-8 text-center text-sm text-gray-600", children: /* @__PURE__ */ jsx11("p", { children: "\xA9 2025 Time Capsule. All rights reserved." }) })
  ] }) });
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  action: () => action2,
  default: () => Dashboard,
  loader: () => loader4
});
import { Link as Link3, Form as Form2, useLoaderData as useLoaderData3, useSearchParams } from "@remix-run/react";
import { json as json3, redirect as redirect5 } from "@remix-run/node";

// app/components/Timeline.tsx
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var Timeline = ({ capsules }) => {
  let sortedCapsules = [...capsules].sort(
    (a, b) => new Date(b.scheduledDate).getTime() - new Date(a.scheduledDate).getTime()
  );
  return /* @__PURE__ */ jsx12("div", { children: /* @__PURE__ */ jsx12("ul", { style: { listStyle: "none", paddingLeft: 0 }, children: sortedCapsules.map((capsule) => /* @__PURE__ */ jsx12("li", { style: { marginBottom: "20px", position: "relative" }, children: /* @__PURE__ */ jsxs11("div", { style: { borderLeft: "2px solid #333", paddingLeft: "15px" }, children: [
    /* @__PURE__ */ jsx12("h4", { children: capsule.title }),
    /* @__PURE__ */ jsx12("p", { children: new Date(capsule.scheduledDate).toLocaleString() })
  ] }) }, capsule.id)) }) });
}, Timeline_default = Timeline;

// app/components/CalendarView.tsx
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
function CalendarView({ capsules }) {
  let now = /* @__PURE__ */ new Date(), year = now.getUTCFullYear(), month = now.getUTCMonth(), currentDay = now.getUTCDate(), monthName = now.toLocaleString("default", { month: "long" }), daysInMonth = new Date(year, month + 1, 0).getUTCDate(), capsuleDays = capsules.map((capsule) => {
    let date = new Date(capsule.scheduledDate);
    return date.getUTCFullYear() === year && date.getUTCMonth() === month ? date.getUTCDate() : null;
  }).filter((day) => day !== null), firstDayOfWeek = new Date(Date.UTC(year, month, 1)).getUTCDay(), calendarCells = [];
  for (let i = 0; i < firstDayOfWeek; i++)
    calendarCells.push(null);
  for (let day = 1; day <= daysInMonth; day++)
    calendarCells.push(day);
  return /* @__PURE__ */ jsxs12("div", { className: "p-4 bg-white rounded-3xl shadow-xl border-4 border-slate-300", children: [
    /* @__PURE__ */ jsxs12("h3", { className: "text-xl font-semibold mb-2 text-center", children: [
      monthName,
      " ",
      year
    ] }),
    /* @__PURE__ */ jsxs12("div", { className: "grid grid-cols-7 gap-2 text-center", children: [
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => /* @__PURE__ */ jsx13("div", { className: "font-bold", children: dayName }, dayName)),
      calendarCells.map((cell, index) => /* @__PURE__ */ jsx13(
        "div",
        {
          className: "h-12 flex items-center justify-center border border-gray-200 rounded",
          children: cell ? /* @__PURE__ */ jsxs12("div", { className: `${cell === currentDay ? "bg-green-200 font-bold rounded-full px-1" : ""}`, children: [
            /* @__PURE__ */ jsx13("span", { children: cell }),
            capsuleDays.includes(cell) && /* @__PURE__ */ jsx13("span", { className: "ml-1", title: "Capsule scheduled", children: "\u{1F48A}" })
          ] }) : null
        },
        index
      ))
    ] })
  ] });
}

// app/routes/dashboard.tsx
import { useState, useEffect } from "react";
import { jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
var loader4 = async ({ request }) => {
  let user = await requireUser(request), capsulesTransformed = (await db.capsule.findMany({
    where: {
      OR: [
        { ownerId: user.id },
        {
          visibility: "group",
          ownerId: { not: user.id },
          OR: [
            { recipientType: "email", groupRecipient: user.email },
            { recipientType: "username", groupRecipient: user.username }
          ]
        }
      ]
    }
  })).map((c) => ({
    ...c,
    scheduledDate: c.scheduledDate.toISOString()
  })), notifications = await db.notification.findMany({
    where: { userId: user.id, read: !1 },
    orderBy: { createdAt: "desc" }
  }), today = /* @__PURE__ */ new Date(), tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1), tomorrow.setHours(0, 0, 0, 0);
  let dayAfterTomorrow = new Date(tomorrow);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);
  let reminders = capsulesTransformed.filter((c) => {
    let capsuleDate = new Date(c.scheduledDate);
    return capsuleDate >= tomorrow && capsuleDate < dayAfterTomorrow && c.ownerId !== user.id;
  }).map((c) => {
    let openingTime = new Date(c.scheduledDate).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    return {
      id: c.id,
      message: `Hey there, don't forget to open your magical capsule tomorrow at ${openingTime}`
    };
  });
  return json3({ capsules: capsulesTransformed, user, notifications, reminders });
}, action2 = async ({ request }) => {
  let user = await requireUser(request), deleteId = (await request.formData()).get("deleteCapsuleId");
  if (typeof deleteId != "string")
    return json3({ error: "Invalid capsule ID" }, { status: 400 });
  let capsule = await db.capsule.findUnique({
    where: { id: parseInt(deleteId) },
    select: { ownerId: !0 }
  });
  return !capsule || capsule.ownerId !== user.id ? json3({ error: "Capsule not found or unauthorized" }, { status: 404 }) : (await db.media.deleteMany({
    where: { capsuleId: parseInt(deleteId) }
  }), await db.capsule.delete({
    where: { id: parseInt(deleteId) }
  }), redirect5("/dashboard"));
};
function Dashboard() {
  let { capsules, user, notifications, reminders } = useLoaderData3(), [searchParams] = useSearchParams(), [filter, setFilter] = useState("all"), [localReminders, setLocalReminders] = useState(reminders);
  useEffect(() => {
    let timer = setTimeout(() => {
      setLocalReminders([]);
    }, 6e4);
    return () => clearTimeout(timer);
  }, []);
  let filteredCapsules = capsules;
  filter === "sent" ? filteredCapsules = capsules.filter((c) => c.ownerId === user.id) : filter === "received" && (filteredCapsules = capsules.filter((c) => c.ownerId !== user.id));
  let now = /* @__PURE__ */ new Date(), upcomingCapsules = filteredCapsules.filter((c) => new Date(c.scheduledDate) >= now), pastCapsules = filteredCapsules.filter((c) => new Date(c.scheduledDate) < now);
  return /* @__PURE__ */ jsxs13("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: [
    searchParams.get("locked") && searchParams.get("opening") && /* @__PURE__ */ jsx14("div", { className: "mb-6 p-4 bg-red-100 text-red-800 rounded border border-red-300", children: /* @__PURE__ */ jsxs13("p", { children: [
      "Be patient, this capsule will open on",
      " ",
      /* @__PURE__ */ jsx14("strong", { children: searchParams.get("opening") }),
      "."
    ] }) }),
    localReminders.length > 0 && /* @__PURE__ */ jsx14("div", { className: "mb-6 p-4 bg-emerald-100 text-emerald-800 rounded", children: localReminders.map((reminder) => /* @__PURE__ */ jsx14("p", { className: "text-sm", children: reminder.message }, reminder.id)) }),
    notifications.length > 0 && /* @__PURE__ */ jsx14("div", { className: "mb-6 p-4 bg-amber-100 text-amber-800 rounded", children: notifications.map((notif) => {
      let match = notif.message.match(/^capsule:(\d+):\s*(.*)/);
      if (match) {
        let capsuleId = match[1], displayMessage = match[2];
        return /* @__PURE__ */ jsx14("p", { className: "text-sm", children: /* @__PURE__ */ jsx14(
          "a",
          {
            href: `/notification?capsuleId=${capsuleId}&notifId=${notif.id}`,
            className: "hover:underline",
            children: displayMessage
          }
        ) }, notif.id);
      } else
        return /* @__PURE__ */ jsx14("p", { className: "text-sm", children: notif.message }, notif.id);
    }) }),
    /* @__PURE__ */ jsxs13("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ jsx14("h1", { className: "text-5xl font-extrabold drop-shadow-xl", children: "Dashboard" }),
      /* @__PURE__ */ jsx14(Form2, { method: "post", action: "/logout", children: /* @__PURE__ */ jsx14(
        "button",
        {
          type: "submit",
          className: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition",
          children: "Log out"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx14("section", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsx14(
      Link3,
      {
        to: "/new",
        className: "bg-amber-300 hover:bg-amber-500 text-white px-6 py-3 rounded transition",
        children: "Create a Capsule"
      }
    ) }),
    /* @__PURE__ */ jsxs13("div", { className: "mb-6 flex space-x-4", children: [
      /* @__PURE__ */ jsx14(
        "button",
        {
          onClick: () => setFilter("all"),
          className: `px-4 py-2 rounded transition ${filter === "all" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"}`,
          children: "All Capsules"
        }
      ),
      /* @__PURE__ */ jsx14(
        "button",
        {
          onClick: () => setFilter("sent"),
          className: `px-4 py-2 rounded transition ${filter === "sent" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"}`,
          children: "Sent"
        }
      ),
      /* @__PURE__ */ jsx14(
        "button",
        {
          onClick: () => setFilter("received"),
          className: `px-4 py-2 rounded transition ${filter === "received" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"}`,
          children: "Received"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs13("section", { className: "mb-8", children: [
      /* @__PURE__ */ jsx14("h2", { className: "text-2xl font-semibold mb-4", children: "Upcoming Capsules" }),
      upcomingCapsules.length ? /* @__PURE__ */ jsx14("div", { className: "grid gap-4", children: upcomingCapsules.map((capsule) => {
        let capsuleDate = new Date(capsule.scheduledDate);
        return capsuleDate > now && (capsule.visibility === "private" || capsule.ownerId !== user.id) ? /* @__PURE__ */ jsxs13(
          "div",
          {
            className: "flex justify-between items-center p-4 bg-gray-200 rounded shadow border border-gray-400 opacity-50 cursor-not-allowed",
            onClick: () => alert(`Be patient, this capsule will open on ${capsuleDate.toLocaleString()}`),
            role: "button",
            tabIndex: 0,
            onKeyDown: (e) => {
              (e.key === "Enter" || e.key === " ") && alert(`Be patient, this capsule will open on ${capsuleDate.toLocaleString()}`);
            },
            children: [
              /* @__PURE__ */ jsxs13("div", { children: [
                /* @__PURE__ */ jsx14("h3", { className: "text-xl font-semibold text-gray-700", children: capsule.title }),
                /* @__PURE__ */ jsxs13("p", { className: "text-xs text-gray-600", children: [
                  "Opening day: ",
                  capsuleDate.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsx14("div", { children: /* @__PURE__ */ jsxs13(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-6 w-6 text-gray-700",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: [
                    /* @__PURE__ */ jsx14(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11v2h6v-2z"
                      }
                    ),
                    /* @__PURE__ */ jsx14(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M16 11V9a4 4 0 00-8 0v2"
                      }
                    )
                  ]
                }
              ) })
            ]
          },
          capsule.id
        ) : /* @__PURE__ */ jsxs13(
          "div",
          {
            className: "flex justify-between items-center p-4 bg-white rounded shadow hover:bg-gray-100 transition",
            children: [
              /* @__PURE__ */ jsxs13("div", { children: [
                /* @__PURE__ */ jsx14("h3", { className: "text-xl font-semibold", children: /* @__PURE__ */ jsx14(Link3, { to: `/${capsule.id}`, className: "text-sky-700 hover:underline", children: capsule.title }) }),
                /* @__PURE__ */ jsx14("p", { className: "text-sm text-gray-600", children: capsule.content }),
                /* @__PURE__ */ jsxs13("p", { className: "text-xs text-gray-500", children: [
                  "Opening day: ",
                  capsuleDate.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsx14(
                Link3,
                {
                  to: "/delete-capsules",
                  className: "ml-4 text-red-600 hover:text-red-800",
                  title: "Manage capsule deletions",
                  children: "\u{1F5D1}\uFE0F"
                }
              )
            ]
          },
          capsule.id
        );
      }) }) : /* @__PURE__ */ jsx14("p", { children: "No upcoming capsules." })
    ] }),
    /* @__PURE__ */ jsxs13("section", { className: "mb-8", children: [
      /* @__PURE__ */ jsx14("h2", { className: "text-2xl font-semibold mb-4", children: "Previous Capsules" }),
      pastCapsules.length ? /* @__PURE__ */ jsx14("div", { className: "grid gap-4", children: pastCapsules.map((capsule) => /* @__PURE__ */ jsxs13(
        "div",
        {
          className: "flex justify-between items-center p-4 bg-white rounded shadow hover:bg-gray-100 transition",
          children: [
            /* @__PURE__ */ jsxs13("div", { children: [
              /* @__PURE__ */ jsx14("h3", { className: "text-xl font-semibold", children: /* @__PURE__ */ jsx14(Link3, { to: `/${capsule.id}`, className: "text-sky-700 hover:underline", children: capsule.title }) }),
              /* @__PURE__ */ jsx14("p", { className: "text-sm text-gray-600", children: capsule.content }),
              /* @__PURE__ */ jsxs13("p", { className: "text-xs text-gray-500", children: [
                "Opening day: ",
                new Date(capsule.scheduledDate).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsx14(
              Link3,
              {
                to: "/delete-capsules",
                className: "ml-4 text-red-600 hover:text-red-800",
                title: "Manage capsule deletions",
                children: "\u{1F5D1}\uFE0F"
              }
            )
          ]
        },
        capsule.id
      )) }) : /* @__PURE__ */ jsx14("p", { children: "No previous capsules." })
    ] }),
    /* @__PURE__ */ jsxs13("section", { className: "mb-8", children: [
      /* @__PURE__ */ jsx14("h2", { className: "text-center text-2xl font-semibold mb-4", children: "Visualisations" }),
      /* @__PURE__ */ jsxs13("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs13("div", { className: "bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
          /* @__PURE__ */ jsx14("h3", { className: "text-xl font-semibold mb-2", children: "Timeline" }),
          /* @__PURE__ */ jsx14(Timeline_default, { capsules })
        ] }),
        /* @__PURE__ */ jsxs13("div", { className: "bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
          /* @__PURE__ */ jsx14("h3", { className: "text-xl font-semibold mb-2", children: "Calendar" }),
          /* @__PURE__ */ jsx14(CalendarView, { capsules })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/confirm.tsx
var confirm_exports = {};
__export(confirm_exports, {
  default: () => Confirm,
  loader: () => loader5
});
import { redirect as redirect6 } from "@remix-run/node";
import { jsx as jsx15 } from "react/jsx-runtime";
var loader5 = async ({ request }) => {
  let token = new URL(request.url).searchParams.get("token");
  if (!token)
    throw new Response("Token manquant", { status: 400 });
  let user = await db.user.findFirst({ where: { confirmationToken: token } });
  if (!user)
    throw new Response("Token invalide ou expir\xE9", { status: 400 });
  return await db.user.update({
    where: { id: user.id },
    data: { emailConfirmed: !0, confirmationToken: null }
  }), redirect6("/login?confirmed=1");
};
function Confirm() {
  return /* @__PURE__ */ jsx15("p", { children: "Confirmation ongoing\u2026" });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Link as Link4 } from "@remix-run/react";
import { useEffect as useEffect2, useRef, useState as useState2 } from "react";
import { jsx as jsx16, jsxs as jsxs14 } from "react/jsx-runtime";
var ScrollReveal = ({ children }) => {
  let ref = useRef(null), [isVisible, setVisible] = useState2(!1);
  return useEffect2(() => {
    let observer = new IntersectionObserver(
      ([entry2]) => {
        entry2.isIntersecting && (setVisible(!0), observer.unobserve(entry2.target));
      },
      { threshold: 0.3 }
    );
    return ref.current && observer.observe(ref.current), () => observer.disconnect();
  }, []), /* @__PURE__ */ jsx16(
    "div",
    {
      ref,
      className: `transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
      children
    }
  );
}, stories = [
  {
    id: "abandoned-dream",
    title: "The Regret of an Abandoned Dream",
    parts: {
      past: "When she was young, Lea dreamed of exploring the world and becoming a famous photographer. With eyes shining with ambition, she created a capsule in which she recorded her dreams, her first photos, and her promise never to give up. Every word and image reflected a future full of possibilities.",
      present: "Years later, exhausted by the routine and compromises of everyday life, Lea rediscovered her capsule. As she looked through the memories, she realised with bitterness that she had let her dreams die. Her once-vibrant ambitions had dissipated, and her heart clenched at the realization that she had achieved nothing of what she had hoped. The pain of regret washed over her, marking a moment of profound self-questioning.",
      future: "However, this painful realization became the starting point for a new beginning. In the tumult of her present, Lea chose to draw on this emotion to reclaim her life. She realised that, to transform her future, it first had to be rooted in a sincere and committed present. That day, despite the sadness of lost dreams, she vowed to rekindle the flame of her passion, to take control of her life and, from that moment on, to build the future she had always wanted."
    }
  },
  {
    id: "brushstrokes-of-time",
    title: "Brushstrokes of Time",
    parts: {
      past: "In the tender light of a bygone era, a young drawing enthusiast, armed with his first pencils and a notebook brimming with hopes, sends a capsule to his future self. In this message, he captures the innocence of his first sketches, the naivety of his ambitions and the ardent dream of becoming a recognised artist.",
      present: "Some years later, after overcoming some challenges and tasting some unexpected successes, he rediscovered this message. In reading it, he rediscovers the creative spark that once animated him, realising how much his journey has shaped his sensibility and refined his art.",
      future: "By projecting himself into the future, he sees himself not only as the accomplished artist he aspires to be, but also understands that it is in the here and now that the canvases of his dreams are woven. As he closes the capsule, he seals his gratitude to the young dreamer he once was, celebrating the continuity of his passion anchored in the beauty of the present and all the road still to travel."
    }
  },
  {
    id: "inner-traveller",
    title: "The Rebirth of an Inner Traveller",
    parts: {
      past: "At the dawn of a life in search of renewal, a woman, tired of the stifling routine, records her thoughts, doubts and ambitions in a capsule. In those initial moments, she dreamt of escape and exploration, yearning to rediscover herself far from the beaten track.",
      present: "Today, as she revisits the words she spoke to herself, she can see the depth of her evolution. Each sentence resonates with the challenges she overcame and the victories that enriched her journey towards a more authentic existence.",
      future: "By looking ahead, she sees herself not only as an accomplished traveller, master of herself and the horizons she explores, but also as a woman who savours the present to the full. She understands that every moment is a precious stone on the path to her transformation. When she reopens this capsule, she will be deeply grateful to the young girl on a quest who dared to dream of change, celebrating her inner rebirth and the importance of living fully in the present."
    }
  }
];
function TimelineStory({ story }) {
  let [selectedPeriod, setSelectedPeriod] = useState2("past"), periodOptions = [
    { key: "past", label: "Past" },
    { key: "present", label: "Present" },
    { key: "future", label: "Future" }
  ];
  return /* @__PURE__ */ jsxs14("div", { className: "mb-12", children: [
    /* @__PURE__ */ jsx16("h3", { className: "text-2xl font-bold mb-4 text-gray-800 text-center", children: story.title }),
    /* @__PURE__ */ jsx16("div", { className: "flex justify-center space-x-4 mb-4", children: periodOptions.map(({ key, label }) => /* @__PURE__ */ jsx16(
      "button",
      {
        onClick: () => setSelectedPeriod(key),
        className: `px-4 py-2 rounded-full border transition-colors ${selectedPeriod === key ? "bg-green-500 text-white" : "bg-white text-blue-600 hover:bg-blue-100"}`,
        children: label
      },
      key
    )) }),
    /* @__PURE__ */ jsx16("div", { className: "p-6 bg-yellow-100 rounded-lg border border-yellow-400 shadow-md", children: /* @__PURE__ */ jsx16("p", { className: "text-lg text-gray-800 text-justify font-pressstart drop-shadow-sm", children: story.parts[selectedPeriod] }) })
  ] });
}
function TimelineSection() {
  return /* @__PURE__ */ jsx16(ScrollReveal, { children: /* @__PURE__ */ jsx16("section", { className: "py-12 text-white", children: /* @__PURE__ */ jsxs14("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx16(
      "h2",
      {
        className: "text-4xl font-extrabold text-white drop-shadow-xl text-center mb-8 tracking-widest",
        style: { textShadow: "3px 3px 6px rgba(0, 0, 0, 1)" },
        children: "Stories of Time"
      }
    ),
    stories.map((story) => /* @__PURE__ */ jsx16(TimelineStory, { story }, story.id)),
    /* @__PURE__ */ jsx16("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx16(
      Link4,
      {
        to: "/signup",
        className: "mr-4 inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors",
        children: "Share your story"
      }
    ) })
  ] }) }) });
}
function Index() {
  return /* @__PURE__ */ jsxs14("div", { className: "min-h-screen flex flex-col bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300 text-white", children: [
    /* @__PURE__ */ jsx16("header", { className: "w-full p-6 text-center", children: /* @__PURE__ */ jsx16(
      "h1",
      {
        className: "text-5xl font-extrabold drop-shadow-xl",
        style: { textShadow: "3px 3px 6px rgba(0, 0, 0, 1)" },
        children: "Time Capsule"
      }
    ) }),
    /* @__PURE__ */ jsxs14("section", { className: "relative flex flex-col justify-center items-center h-[80vh] px-4 pt-24", children: [
      /* @__PURE__ */ jsx16("div", { className: "text-center", children: /* @__PURE__ */ jsx16("p", { className: "text-2xl md:text-3xl lg:text-4xl font-light drop-shadow-md", children: "Step into time's magic\u2014Unlock your memories, embrace your future." }) }),
      /* @__PURE__ */ jsxs14("div", { className: "mt-12 flex gap-6", children: [
        /* @__PURE__ */ jsx16(
          Link4,
          {
            to: "/login",
            className: "px-6 py-3 rounded-full bg-amber-300 hover:bg-amber-500 text-white font-bold transform hover:scale-105 transition",
            children: "Log In"
          }
        ),
        /* @__PURE__ */ jsx16(
          Link4,
          {
            to: "/signup",
            className: "px-6 py-3 rounded-full bg-amber-300 hover:bg-amber-500 text-white font-bold transform hover:scale-105 transition",
            children: "Sign Up"
          }
        )
      ] }),
      /* @__PURE__ */ jsx16("div", { className: "absolute bottom-4", children: /* @__PURE__ */ jsx16(
        "svg",
        {
          className: "w-12 h-12 animate-bounce text-white drop-shadow-lg",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx16("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx16("section", { className: "py-20 -mt-32", children: /* @__PURE__ */ jsx16(ScrollReveal, { children: /* @__PURE__ */ jsxs14("div", { className: "max-w-3xl mx-auto px-4 p-8 bg-yellow-200 rounded-3xl shadow-xl border-4 border-yellow-500 text-gray-800", children: [
      /* @__PURE__ */ jsx16("h2", { className: "text-3xl font-bold mb-4 text-center drop-shadow-lg", children: "About" }),
      /* @__PURE__ */ jsx16("p", { className: "text-base leading-relaxed text-justify", children: "Once upon a time, there was a little girl with sparkling eyes, who dreamt of hearing the murmur of the waves as a lullaby every day. She imagined herself, a few years later, living by the sea, gliding over the waves like a dancer in symphony with the ocean." }),
      /* @__PURE__ */ jsx16("p", { className: "text-base leading-relaxed mt-4 text-justify", children: "One day, determined to seal her dreams, she created a time capsule, a message of hope and ambition, destined for her future version. Five years later, after a morning surf session, she found herself facing the ocean \u2014 the ocean that had become her daily life over the last year. She felt immense gratitude towards the little girl who had dared to dream. You are where you wanted to be." }),
      /* @__PURE__ */ jsxs14("p", { className: "text-base leading-relaxed mt-4 text-justify", children: [
        /* @__PURE__ */ jsx16("strong", { children: "Time Capsule" }),
        " is much more than an app. Whether you want to send an inspiring public capsule to your friends, record your dreams for yourself, share a personalised message for a birthday or even to let a grandmother send a heartfelt message to her newborn granddaughter so that as she grows up, she can witness her grandmother\u2019s youthful words \u2014 Time Capsule transforms every moment into a precious bridge between the past and the future. Be creative and let your messages travel through time."
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx16(TimelineSection, {}),
    /* @__PURE__ */ jsx16("footer", { className: "bg-white text-gray-900 py-8 border-t-4 border-sky-500 shadow-xl", children: /* @__PURE__ */ jsxs14("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs14("div", { className: "flex flex-col md:flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxs14("div", { className: "mb-4 md:mb-0 text-center md:text-left", children: [
          /* @__PURE__ */ jsx16("h3", { className: "text-3xl font-bold text-gray-700 drop-shadow-md", children: "Time Capsule" }),
          /* @__PURE__ */ jsx16("p", { className: "text-sm text-gray-600", children: "A journey through time and memories" })
        ] }),
        /* @__PURE__ */ jsxs14("div", { className: "flex flex-wrap justify-center space-x-4", children: [
          /* @__PURE__ */ jsx16(
            "a",
            {
              href: "/safety-tips",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Safety Tips"
            }
          ),
          /* @__PURE__ */ jsx16(
            "a",
            {
              href: "/community-guidelines",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Community Guidelines"
            }
          ),
          /* @__PURE__ */ jsx16(
            "a",
            {
              href: "/upcoming-updates",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Upcoming Updates"
            }
          ),
          /* @__PURE__ */ jsx16(
            "a",
            {
              href: "/contact-us",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Contact Us"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs14("div", { className: "mt-6 flex flex-col md:flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxs14("div", { className: "flex flex-wrap justify-center space-x-4", children: [
          /* @__PURE__ */ jsx16(
            "a",
            {
              href: "/privacy-policy",
              className: "text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-sky-500",
              children: "Privacy Policy"
            }
          ),
          /* @__PURE__ */ jsx16(
            "a",
            {
              href: "/terms-of-use",
              className: "text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-sky-500",
              children: "Terms of Use"
            }
          )
        ] }),
        /* @__PURE__ */ jsx16("div", { className: "mt-4 md:mt-0 text-xs text-gray-500 text-center", children: "\xA9 2025 Time Capsule. All rights reserved." })
      ] })
    ] }) })
  ] });
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action3,
  default: () => Logout,
  loader: () => loader6
});
import { redirect as redirect7 } from "@remix-run/node";
var action3 = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));
  return redirect7("/", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}, loader6 = async () => redirect7("/");
function Logout() {
  return null;
}

// app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action4,
  default: () => SignupPage
});
import { json as json4, redirect as redirect8 } from "@remix-run/node";
import { Form as Form3, useActionData, Link as Link5 } from "@remix-run/react";
import bcrypt2 from "bcryptjs";

// app/utils/email.server.ts
import * as nodemailer from "nodemailer";
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    // ton adresse Gmail dans .env
    pass: process.env.GMAIL_PASS
    // ton mot de passe ou App Password si 2FA est activé dans .env
  }
});
async function sendConfirmationEmail(to, token) {
  let confirmationUrl = `${process.env.BASE_URL || "http://localhost:3000"}/confirm?token=${token}`, mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: "Thank you for joining us!",
    text: `Hello there! We're delighted to have you on board. To confirm your account, please click on the following link: ${confirmationUrl} and join our community.`,
    html: `<p>Hello there! We're delighted to have you on board. Please <a href="${confirmationUrl}">click here</a> to confirm your account and join our community.</p>`
  };
  await transporter.sendMail(mailOptions);
}
async function sendInstantNotificationEmail(to, capsuleTitle) {
  let notificationUrl = `${process.env.BASE_URL || "http://localhost:3000"}/dashboard`, mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: "Someone is thinking about you \u{1F33B}",
    text: `You have received a capsule titled "${capsuleTitle}". Visit your dashboard for more details: ${notificationUrl}

Cheers,
The Time Capsule Team`,
    html: `<p>You have received a capsule titled "<strong>${capsuleTitle}</strong>".</p>
           <p>Visit your <a href="${notificationUrl}">dashboard</a> for more details.</p>
           <p>Cheers,<br>The <strong>Time Capsule</strong> Team</p>`
  };
  await transporter.sendMail(mailOptions);
}

// app/routes/signup.tsx
import { randomUUID } from "crypto";
import { jsx as jsx17, jsxs as jsxs15 } from "react/jsx-runtime";
var action4 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), username = formData.get("username");
  if (typeof email != "string" || typeof password != "string" || typeof username != "string" || !email || !password || !username)
    return json4(
      { error: "Please, try to fill in all the fields correctly." },
      { status: 400 }
    );
  if (await db.user.findUnique({ where: { email } }))
    return json4(
      { error: "Are you sure you don't already have an account with this email?." },
      { status: 400 }
    );
  let hashedPassword = await bcrypt2.hash(password, 10), confirmationToken = randomUUID();
  return await db.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
      emailConfirmed: !1,
      confirmationToken
    }
  }), await sendConfirmationEmail(email, confirmationToken), redirect8("/check-email");
};
function SignupPage() {
  let actionData = useActionData();
  return /* @__PURE__ */ jsxs15("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4", children: [
    /* @__PURE__ */ jsx17("h1", { className: "text-4xl font-extrabold text-white mb-6 drop-shadow-lg", children: "Join the Adventure!" }),
    /* @__PURE__ */ jsxs15(
      Form3,
      {
        method: "post",
        className: "w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500",
        children: [
          actionData?.error ? /* @__PURE__ */ jsx17("div", { className: "mb-4 text-red-600 font-bold", children: actionData.error }) : null,
          /* @__PURE__ */ jsxs15("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx17(
              "label",
              {
                htmlFor: "username",
                className: "block text-lg font-semibold text-gray-700 mb-1",
                children: "Username"
              }
            ),
            /* @__PURE__ */ jsx17(
              "input",
              {
                type: "text",
                name: "username",
                id: "username",
                required: !0,
                className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs15("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx17(
              "label",
              {
                htmlFor: "email",
                className: "block text-lg font-semibold text-gray-700 mb-1",
                children: "Email"
              }
            ),
            /* @__PURE__ */ jsx17(
              "input",
              {
                type: "email",
                name: "email",
                id: "email",
                required: !0,
                className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs15("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx17(
              "label",
              {
                htmlFor: "password",
                className: "block text-lg font-semibold text-gray-700 mb-1",
                children: "Password"
              }
            ),
            /* @__PURE__ */ jsx17(
              "input",
              {
                type: "password",
                name: "password",
                id: "password",
                required: !0,
                className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsx17(
            "button",
            {
              type: "submit",
              className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition",
              children: "Start"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs15("p", { className: "mt-4 text-white", children: [
      "Already on board?",
      " ",
      /* @__PURE__ */ jsx17(
        Link5,
        {
          to: "/login",
          className: "text-blue-200 underline font-semibold",
          children: "Log in"
        }
      )
    ] })
  ] });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
import { Link as Link6 } from "@remix-run/react";
import { useEffect as useEffect3, useRef as useRef2, useState as useState3 } from "react";
import { jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
var ScrollReveal2 = ({ children }) => {
  let ref = useRef2(null), [isVisible, setVisible] = useState3(!1);
  return useEffect3(() => {
    let observer = new IntersectionObserver(
      ([entry2]) => {
        entry2.isIntersecting && (setVisible(!0), observer.unobserve(entry2.target));
      },
      { threshold: 0.3 }
    );
    return ref.current && observer.observe(ref.current), () => observer.disconnect();
  }, []), /* @__PURE__ */ jsx18(
    "div",
    {
      ref,
      className: `transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
      children
    }
  );
}, stories2 = [
  {
    id: "abandoned-dream",
    title: "The Regret of an Abandoned Dream",
    parts: {
      past: "When she was young, Lea dreamed of exploring the world and becoming a famous photographer. With eyes shining with ambition, she created a capsule in which she recorded her dreams, her first photos, and her promise never to give up. Every word and image reflected a future full of possibilities.",
      present: "Years later, exhausted by the routine and compromises of everyday life, Lea rediscovered her capsule. As she looked through the memories, she realised with bitterness that she had let her dreams die. Her once-vibrant ambitions had dissipated, and her heart clenched at the realization that she had achieved nothing of what she had hoped. The pain of regret washed over her, marking a moment of profound self-questioning.",
      future: "However, this painful realization became the starting point for a new beginning. In the tumult of her present, Lea chose to draw on this emotion to reclaim her life. She realised that, to transform her future, it first had to be rooted in a sincere and committed present. That day, despite the sadness of lost dreams, she vowed to rekindle the flame of her passion, to take control of her life and, from that moment on, to build the future she had always wanted."
    }
  },
  {
    id: "brushstrokes-of-time",
    title: "Brushstrokes of Time",
    parts: {
      past: "In the tender light of a bygone era, a young drawing enthusiast, armed with his first pencils and a notebook brimming with hopes, sends a capsule to his future self. In this message, he captures the innocence of his first sketches, the naivety of his ambitions and the ardent dream of becoming a recognised artist.",
      present: "Some years later, after overcoming some challenges and tasting some unexpected successes, he rediscovered this message. In reading it, he rediscovers the creative spark that once animated him, realising how much his journey has shaped his sensibility and refined his art.",
      future: "By projecting himself into the future, he sees himself not only as the accomplished artist he aspires to be, but also understands that it is in the here and now that the canvases of his dreams are woven. As he closes the capsule, he seals his gratitude to the young dreamer he once was, celebrating the continuity of his passion anchored in the beauty of the present and all the road still to travel."
    }
  },
  {
    id: "inner-traveller",
    title: "The Rebirth of an Inner Traveller",
    parts: {
      past: "At the dawn of a life in search of renewal, a woman, tired of the stifling routine, records her thoughts, doubts and ambitions in a capsule. In those initial moments, she dreamt of escape and exploration, yearning to rediscover herself far from the beaten track.",
      present: "Today, as she revisits the words she spoke to herself, she can see the depth of her evolution. Each sentence resonates with the challenges she overcame and the victories that enriched her journey towards a more authentic existence.",
      future: "By looking ahead, she sees herself not only as an accomplished traveller, master of herself and the horizons she explores, but also as a woman who savours the present to the full. She understands that every moment is a precious stone on the path to her transformation. When she reopens this capsule, she will be deeply grateful to the young girl on a quest who dared to dream of change, celebrating her inner rebirth and the importance of living fully in the present."
    }
  }
];
function TimelineStory2({ story }) {
  let [selectedPeriod, setSelectedPeriod] = useState3("past"), periodOptions = [
    { key: "past", label: "Past" },
    { key: "present", label: "Present" },
    { key: "future", label: "Future" }
  ];
  return /* @__PURE__ */ jsxs16("div", { className: "mb-12", children: [
    /* @__PURE__ */ jsx18("h3", { className: "text-2xl font-bold mb-4 text-gray-800 text-center", children: story.title }),
    /* @__PURE__ */ jsx18("div", { className: "flex justify-center space-x-4 mb-4", children: periodOptions.map(({ key, label }) => /* @__PURE__ */ jsx18(
      "button",
      {
        onClick: () => setSelectedPeriod(key),
        className: `px-4 py-2 rounded-full border transition-colors ${selectedPeriod === key ? "bg-green-500 text-white" : "bg-white text-blue-600 hover:bg-blue-100"}`,
        children: label
      },
      key
    )) }),
    /* @__PURE__ */ jsx18("div", { className: "p-6 bg-yellow-100 rounded-lg border border-yellow-400 shadow-md", children: /* @__PURE__ */ jsx18("p", { className: "text-lg text-gray-800 text-justify font-pressstart drop-shadow-sm", children: story.parts[selectedPeriod] }) })
  ] });
}
function TimelineSection2() {
  return /* @__PURE__ */ jsx18(ScrollReveal2, { children: /* @__PURE__ */ jsx18("section", { className: "py-12 text-white", children: /* @__PURE__ */ jsxs16("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx18(
      "h2",
      {
        className: "text-4xl font-extrabold text-white drop-shadow-xl text-center mb-8 tracking-widest",
        style: { textShadow: "3px 3px 6px rgba(0, 0, 0, 1)" },
        children: "Stories of Time"
      }
    ),
    stories2.map((story) => /* @__PURE__ */ jsx18(TimelineStory2, { story }, story.id)),
    /* @__PURE__ */ jsx18("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx18(
      Link6,
      {
        to: "/signup",
        className: "mr-4 inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors",
        children: "Share your story"
      }
    ) })
  ] }) }) });
}
function Index2() {
  return /* @__PURE__ */ jsxs16("div", { className: "min-h-screen flex flex-col bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300 text-white", children: [
    /* @__PURE__ */ jsx18("header", { className: "w-full p-6 text-center", children: /* @__PURE__ */ jsx18(
      "h1",
      {
        className: "text-5xl font-extrabold drop-shadow-xl",
        style: { textShadow: "3px 3px 6px rgba(0, 0, 0, 1)" },
        children: "Time Capsule"
      }
    ) }),
    /* @__PURE__ */ jsxs16("section", { className: "relative flex flex-col justify-center items-center h-[80vh] px-4 pt-24", children: [
      /* @__PURE__ */ jsx18("div", { className: "text-center", children: /* @__PURE__ */ jsx18("p", { className: "text-2xl md:text-3xl lg:text-4xl font-light drop-shadow-md", children: "Step into time's magic\u2014Unlock your memories, embrace your future." }) }),
      /* @__PURE__ */ jsxs16("div", { className: "mt-12 flex gap-6", children: [
        /* @__PURE__ */ jsx18(
          Link6,
          {
            to: "/login",
            className: "px-6 py-3 rounded-full bg-amber-300 hover:bg-amber-500 text-white font-bold transform hover:scale-105 transition",
            children: "Log In"
          }
        ),
        /* @__PURE__ */ jsx18(
          Link6,
          {
            to: "/signup",
            className: "px-6 py-3 rounded-full bg-amber-300 hover:bg-amber-500 text-white font-bold transform hover:scale-105 transition",
            children: "Sign Up"
          }
        )
      ] }),
      /* @__PURE__ */ jsx18("div", { className: "absolute bottom-4", children: /* @__PURE__ */ jsx18(
        "svg",
        {
          className: "w-8 h-8 animate-bounce text-white",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx18("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx18("section", { className: "py-20 -mt-32", children: /* @__PURE__ */ jsx18(ScrollReveal2, { children: /* @__PURE__ */ jsxs16("div", { className: "max-w-3xl mx-auto px-4 p-8 bg-yellow-200 rounded-3xl shadow-xl border-4 border-yellow-500 text-gray-800", children: [
      /* @__PURE__ */ jsx18("h2", { className: "text-3xl font-bold mb-4 text-center drop-shadow-lg", children: "About" }),
      /* @__PURE__ */ jsx18("p", { className: "text-base leading-relaxed text-justify", children: "Once upon a time, there was a little girl with eyes sparkling with innocence, who dreamt of feeling the salt of the ocean caress her cheeks and hearing the murmur of the waves as a lullaby every day. She imagined herself, a few years later, living by the sea, her feet in the foam, gliding over the waves like a dancer in symphony with the ocean." }),
      /* @__PURE__ */ jsx18("p", { className: "text-base leading-relaxed mt-4 text-justify", children: "One day, determined to seal her dreams, she created a time capsule, a message of hope and ambition, destined for her future version. Five years later, after a morning surf session, she found herself facing the ocean \u2014 the ocean that had become her daily life over the last year. She felt immense gratitude towards the little girl who had dared to dream. You are where you wanted to be." }),
      /* @__PURE__ */ jsx18("p", { className: "text-base leading-relaxed mt-4 text-justify", children: "Time Capsule is much more than an app. Whether you want to send an inspiring, public and accessible capsule to your friends, record your dreams and achievements for yourself, or share a personalised message for a birthday, an amusing anecdote or to comfort a loved one, Time Capsule transforms every moment into a precious bridge between the past and the future. Be creative and let your messages travel through time." })
    ] }) }) }),
    /* @__PURE__ */ jsx18(TimelineSection2, {}),
    /* @__PURE__ */ jsx18("footer", { className: "bg-white text-gray-900 py-8 border-t-4 border-sky-500 shadow-xl", children: /* @__PURE__ */ jsxs16("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs16("div", { className: "flex flex-col md:flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxs16("div", { className: "mb-4 md:mb-0 text-center md:text-left", children: [
          /* @__PURE__ */ jsx18("h3", { className: "text-3xl font-bold text-gray-700 drop-shadow-md", children: "Time Capsule" }),
          /* @__PURE__ */ jsx18("p", { className: "text-sm text-gray-600", children: "A journey through time and memories" })
        ] }),
        /* @__PURE__ */ jsxs16("div", { className: "flex flex-wrap justify-center space-x-4", children: [
          /* @__PURE__ */ jsx18(
            "a",
            {
              href: "/safety-tips",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Safety Tips"
            }
          ),
          /* @__PURE__ */ jsx18(
            "a",
            {
              href: "/community-guidelines",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Community Guidelines"
            }
          ),
          /* @__PURE__ */ jsx18(
            "a",
            {
              href: "/upcoming-updates",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Upcoming Updates"
            }
          ),
          /* @__PURE__ */ jsx18(
            "a",
            {
              href: "/contact-us",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Contact Us"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs16("div", { className: "mt-6 flex flex-col md:flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxs16("div", { className: "flex flex-wrap justify-center space-x-4", children: [
          /* @__PURE__ */ jsx18(
            "a",
            {
              href: "/privacy-policy",
              className: "text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-sky-500",
              children: "Privacy Policy"
            }
          ),
          /* @__PURE__ */ jsx18(
            "a",
            {
              href: "/terms-of-use",
              className: "text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-sky-500",
              children: "Terms of Use"
            }
          )
        ] }),
        /* @__PURE__ */ jsx18("div", { className: "mt-4 md:mt-0 text-xs text-gray-500 text-center", children: "\xA9 2025 Time Capsule. All rights reserved." })
      ] })
    ] }) })
  ] });
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action5,
  default: () => LoginPage
});
import { json as json5 } from "@remix-run/node";
import { Form as Form4, useActionData as useActionData2, Link as Link7 } from "@remix-run/react";
import bcrypt3 from "bcryptjs";
import { jsx as jsx19, jsxs as jsxs17 } from "react/jsx-runtime";
var action5 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password");
  if (typeof email != "string" || typeof password != "string")
    return json5({ error: "Invalid form details" }, { status: 400 });
  let user = await db.user.findUnique({ where: { email } });
  return user ? await bcrypt3.compare(password, user.password) ? createUserSession(user.id, "/dashboard") : json5({ error: "Invalid IDs" }, { status: 400 }) : json5({ error: "Invalid IDs" }, { status: 400 });
};
function LoginPage() {
  let actionData = useActionData2();
  return /* @__PURE__ */ jsxs17("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4", children: [
    /* @__PURE__ */ jsx19("h1", { className: "text-4xl font-extrabold text-white mb-6 drop-shadow-lg", children: "Let's create magic!" }),
    /* @__PURE__ */ jsxs17(
      Form4,
      {
        method: "post",
        className: "w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500",
        children: [
          actionData?.error ? /* @__PURE__ */ jsx19("div", { className: "mb-4 text-red-600 font-bold", children: actionData.error }) : null,
          /* @__PURE__ */ jsxs17("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx19(
              "label",
              {
                htmlFor: "email",
                className: "block text-lg font-semibold text-gray-700 mb-1",
                children: "Email"
              }
            ),
            /* @__PURE__ */ jsx19(
              "input",
              {
                type: "email",
                name: "email",
                id: "email",
                required: !0,
                className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs17("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx19(
              "label",
              {
                htmlFor: "password",
                className: "block text-lg font-semibold text-gray-700 mb-1",
                children: "Password"
              }
            ),
            /* @__PURE__ */ jsx19(
              "input",
              {
                type: "password",
                name: "password",
                id: "password",
                required: !0,
                className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsx19(
            "button",
            {
              type: "submit",
              className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition",
              children: "Log in"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs17("p", { className: "mt-4 text-white", children: [
      "Not a member yet?",
      " ",
      /* @__PURE__ */ jsx19(
        Link7,
        {
          to: "/signup",
          className: "text-blue-200 underline font-semibold",
          children: "Joins us!"
        }
      )
    ] })
  ] });
}

// app/routes/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action6,
  default: () => NewCapsule,
  loader: () => loader7
});
import { Form as Form5, useActionData as useActionData3, useNavigation } from "@remix-run/react";
import { json as json6, redirect as redirect10 } from "@remix-run/node";
import { useState as useState4 } from "react";
import { promises as fs } from "fs";
import path from "path";
import { jsx as jsx20, jsxs as jsxs18 } from "react/jsx-runtime";
var loader7 = async ({ request }) => (await requireUser(request), json6({})), action6 = async ({ request }) => {
  let user = await requireUser(request), formData = await request.formData(), title = formData.get("title"), content = formData.get("content"), scheduledDate = formData.get("scheduledDate"), visibility = formData.get("visibility");
  if (typeof title != "string" || title.trim() === "")
    return json6({ error: "Please, choose a name for your capsule." }, { status: 400 });
  if (typeof content != "string" || content.trim() === "")
    return json6({ error: "Please, put some content." }, { status: 400 });
  if (typeof scheduledDate != "string" || scheduledDate.trim() === "")
    return json6({ error: "Please, choose the opening day." }, { status: 400 });
  if (typeof visibility != "string")
    return json6({ error: "Please, choose the visibility." }, { status: 400 });
  let groupRecipients = [], recipientType = null, recipientUsers = [], groupRecipientStored = null;
  if (visibility === "group") {
    let groupChoice = formData.get("groupChoice");
    if (groupChoice === "username") {
      let groupUsernames = formData.get("groupUsername");
      if (!groupUsernames || groupUsernames.trim() === "")
        return json6({ error: "Please enter at least one recipient username." }, { status: 400 });
      groupRecipients = groupUsernames.split(",").map((s) => s.trim()).filter((s) => s.length > 0), recipientType = "username";
    } else if (groupChoice === "email") {
      let groupEmails = formData.get("groupEmail");
      if (!groupEmails || groupEmails.trim() === "")
        return json6({ error: "Please enter at least one recipient email." }, { status: 400 });
      groupRecipients = groupEmails.split(",").map((s) => s.trim()).filter((s) => s.length > 0), recipientType = "email";
    }
    groupRecipientStored = groupRecipients.join(", ");
    for (let r of groupRecipients) {
      let foundUser;
      recipientType === "email" ? foundUser = await db.user.findUnique({
        where: { email: r }
      }) : recipientType === "username" && (foundUser = await db.user.findFirst({
        where: { username: r }
      })), foundUser && foundUser.id !== user.id && recipientUsers.push(foundUser);
    }
  }
  let capsuleData = {
    ownerId: user.id,
    title: title.trim(),
    content: content.trim(),
    scheduledDate: new Date(scheduledDate),
    visibility,
    groupRecipient: visibility === "group" ? groupRecipientStored : null,
    recipientType: visibility === "group" ? recipientType : null
  }, capsule = await db.capsule.create({ data: capsuleData });
  if (visibility === "group" && recipientUsers.length > 0)
    for (let recipientUser of recipientUsers) {
      let notificationMessage = `capsule:${capsule.id}: someone's thinking about you!`;
      await db.notification.create({
        data: {
          userId: recipientUser.id,
          message: notificationMessage
        }
      }), console.log("Notification created for user", recipientUser.id), await sendInstantNotificationEmail(recipientUser.email, capsule.title);
    }
  let mediaFile = formData.get("mediaFile");
  if (mediaFile && mediaFile.size > 0) {
    let arrayBuffer = await mediaFile.arrayBuffer(), buffer = Buffer.from(arrayBuffer), filename = `${Date.now()}-${mediaFile.name}`, uploadDir = path.join(process.cwd(), "public", "uploads"), filePath = path.join(uploadDir, filename);
    await fs.mkdir(uploadDir, { recursive: !0 }), await fs.writeFile(filePath, buffer);
    let mediaType = "file";
    mediaFile.type.startsWith("image/") ? mediaType = "image" : mediaFile.type.startsWith("video/") ? mediaType = "video" : mediaFile.type.startsWith("audio/") && (mediaType = "audio"), await db.media.create({
      data: {
        capsule: { connect: { id: capsule.id } },
        type: mediaType,
        url: `/uploads/${filename}`
      }
    });
  }
  return redirect10(`/${capsule.id}`);
};
function NewCapsule() {
  let actionData = useActionData3(), transition = useNavigation(), [selectedVisibility, setSelectedVisibility] = useState4("private"), [groupChoice, setGroupChoice] = useState4("");
  return /* @__PURE__ */ jsxs18("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4", children: [
    /* @__PURE__ */ jsx20("h1", { className: "text-4xl font-extrabold text-white mb-6 drop-shadow-lg", children: "Create a new Capsule" }),
    /* @__PURE__ */ jsxs18(
      Form5,
      {
        method: "post",
        encType: "multipart/form-data",
        onSubmit: (event) => {
          window.confirm(
            "Warning: Once created, the capsule cannot be modified. This is deliberate, to encourage you to be in the present. The editable draft option will come later for those who need more reflection."
          ) || event.preventDefault();
        },
        className: "w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500",
        children: [
          actionData?.error && /* @__PURE__ */ jsx20("div", { className: "mb-4 text-red-600 font-bold", children: actionData.error }),
          /* @__PURE__ */ jsxs18("label", { className: "block mb-4", children: [
            "Capsule Name:",
            /* @__PURE__ */ jsx20(
              "input",
              {
                type: "text",
                name: "title",
                required: !0,
                className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs18("label", { className: "block mb-4", children: [
            "Your thoughts:",
            /* @__PURE__ */ jsx20(
              "textarea",
              {
                name: "content",
                required: !0,
                className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs18("label", { className: "block mb-4", children: [
            "Opening Day:",
            /* @__PURE__ */ jsx20(
              "input",
              {
                type: "datetime-local",
                name: "scheduledDate",
                required: !0,
                className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs18("label", { className: "block mb-4", children: [
            "Visibility:",
            /* @__PURE__ */ jsxs18(
              "select",
              {
                name: "visibility",
                required: !0,
                onChange: (e) => {
                  setSelectedVisibility(e.target.value), e.target.value !== "group" && setGroupChoice("");
                },
                className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500",
                children: [
                  /* @__PURE__ */ jsx20("option", { value: "private", children: "Private" }),
                  /* @__PURE__ */ jsx20("option", { value: "public", children: "Public" }),
                  /* @__PURE__ */ jsx20("option", { value: "group", children: "Group" })
                ]
              }
            )
          ] }),
          selectedVisibility === "group" && /* @__PURE__ */ jsxs18("fieldset", { className: "mb-4 border border-gray-300 p-4 rounded", children: [
            /* @__PURE__ */ jsx20("legend", { className: "text-lg font-semibold mb-2", children: "How do you want to send the Capsule?" }),
            /* @__PURE__ */ jsx20("div", { className: "mb-2", children: /* @__PURE__ */ jsxs18("label", { className: "inline-flex items-center", children: [
              /* @__PURE__ */ jsx20(
                "input",
                {
                  type: "radio",
                  name: "groupChoice",
                  value: "username",
                  onChange: (e) => setGroupChoice(e.target.value),
                  className: "mr-2",
                  required: !0
                }
              ),
              "Via username"
            ] }) }),
            /* @__PURE__ */ jsx20("div", { className: "mb-2", children: /* @__PURE__ */ jsxs18("label", { className: "inline-flex items-center", children: [
              /* @__PURE__ */ jsx20(
                "input",
                {
                  type: "radio",
                  name: "groupChoice",
                  value: "email",
                  onChange: (e) => setGroupChoice(e.target.value),
                  className: "mr-2",
                  required: !0
                }
              ),
              "Via email"
            ] }) }),
            groupChoice === "username" && /* @__PURE__ */ jsxs18("label", { className: "block mt-2", children: [
              "Recipient usernames (comma separated):",
              /* @__PURE__ */ jsx20(
                "input",
                {
                  type: "text",
                  name: "groupUsername",
                  required: !0,
                  placeholder: "selim, jane, ma\xEFa",
                  className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                }
              )
            ] }),
            groupChoice === "email" && /* @__PURE__ */ jsxs18("label", { className: "block mt-2", children: [
              "Recipient emails (comma separated):",
              /* @__PURE__ */ jsx20(
                "input",
                {
                  type: "text",
                  name: "groupEmail",
                  required: !0,
                  placeholder: "selim@example.com, jane@example.com",
                  className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs18("fieldset", { className: "mb-4 border border-gray-300 p-4 rounded", children: [
            /* @__PURE__ */ jsx20("legend", { className: "text-lg font-semibold", children: "Add a gift" }),
            /* @__PURE__ */ jsxs18("label", { className: "block mb-2", children: [
              "Select a media type:",
              /* @__PURE__ */ jsx20(
                "input",
                {
                  type: "file",
                  name: "mediaFile",
                  accept: "image/*,video/*,audio/*",
                  className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx20(
            "button",
            {
              type: "submit",
              disabled: transition.state === "submitting",
              className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition",
              children: transition.state === "submitting" ? "Creation ongoing..." : "Let's create the magic capsule!"
            }
          )
        ]
      }
    )
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-VWUYZB6N.js", imports: ["/build/_shared/chunk-NPTIZT3W.js", "/build/_shared/chunk-4HXKWYDW.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3JWM5HE4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/$capsuleId": { id: "routes/$capsuleId", parentId: "root", path: ":capsuleId", index: void 0, caseSensitive: void 0, module: "/build/routes/$capsuleId-QJ7IO3HB.js", imports: ["/build/_shared/chunk-LW5HVKRZ.js", "/build/_shared/chunk-VAWQIAN7.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-FX43ZI4S.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/check-email": { id: "routes/check-email", parentId: "root", path: "check-email", index: void 0, caseSensitive: void 0, module: "/build/routes/check-email-YXDSN5HY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/community-guidelines": { id: "routes/community-guidelines", parentId: "root", path: "community-guidelines", index: void 0, caseSensitive: void 0, module: "/build/routes/community-guidelines-B2XCIP2B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/confirm": { id: "routes/confirm", parentId: "root", path: "confirm", index: void 0, caseSensitive: void 0, module: "/build/routes/confirm-2NYOL5OQ.js", imports: ["/build/_shared/chunk-VAWQIAN7.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact-us": { id: "routes/contact-us", parentId: "root", path: "contact-us", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-us-4CZ7KTXY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-XWYGWFCR.js", imports: ["/build/_shared/chunk-LW5HVKRZ.js", "/build/_shared/chunk-VAWQIAN7.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/delete-capsules": { id: "routes/delete-capsules", parentId: "root", path: "delete-capsules", index: void 0, caseSensitive: void 0, module: "/build/routes/delete-capsules-XFGY2FFV.js", imports: ["/build/_shared/chunk-LW5HVKRZ.js", "/build/_shared/chunk-VAWQIAN7.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-QBK2HUKL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-P4S5NEJB.js", imports: ["/build/_shared/chunk-CGGNC4NM.js", "/build/_shared/chunk-LW5HVKRZ.js", "/build/_shared/chunk-VAWQIAN7.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-7H76O4OB.js", imports: ["/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/new": { id: "routes/new", parentId: "root", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/new-PIWOLHQZ.js", imports: ["/build/_shared/chunk-AVK675O2.js", "/build/_shared/chunk-LW5HVKRZ.js", "/build/_shared/chunk-VAWQIAN7.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/notification": { id: "routes/notification", parentId: "root", path: "notification", index: void 0, caseSensitive: void 0, module: "/build/routes/notification-4LQVXLC3.js", imports: ["/build/_shared/chunk-LW5HVKRZ.js", "/build/_shared/chunk-VAWQIAN7.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/privacy-policy": { id: "routes/privacy-policy", parentId: "root", path: "privacy-policy", index: void 0, caseSensitive: void 0, module: "/build/routes/privacy-policy-IMWVZMSJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/safety-tips": { id: "routes/safety-tips", parentId: "root", path: "safety-tips", index: void 0, caseSensitive: void 0, module: "/build/routes/safety-tips-BLVR2VAN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-A6KXTQQV.js", imports: ["/build/_shared/chunk-CGGNC4NM.js", "/build/_shared/chunk-AVK675O2.js", "/build/_shared/chunk-VAWQIAN7.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/terms-of-use": { id: "routes/terms-of-use", parentId: "root", path: "terms-of-use", index: void 0, caseSensitive: void 0, module: "/build/routes/terms-of-use-ZMP5QZ42.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/upcoming-updates": { id: "routes/upcoming-updates", parentId: "root", path: "upcoming-updates", index: void 0, caseSensitive: void 0, module: "/build/routes/upcoming-updates-MYVOG4YB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "563a2a09", hmr: void 0, url: "/build/manifest-563A2A09.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/community-guidelines": {
    id: "routes/community-guidelines",
    parentId: "root",
    path: "community-guidelines",
    index: void 0,
    caseSensitive: void 0,
    module: community_guidelines_exports
  },
  "routes/upcoming-updates": {
    id: "routes/upcoming-updates",
    parentId: "root",
    path: "upcoming-updates",
    index: void 0,
    caseSensitive: void 0,
    module: upcoming_updates_exports
  },
  "routes/delete-capsules": {
    id: "routes/delete-capsules",
    parentId: "root",
    path: "delete-capsules",
    index: void 0,
    caseSensitive: void 0,
    module: delete_capsules_exports
  },
  "routes/privacy-policy": {
    id: "routes/privacy-policy",
    parentId: "root",
    path: "privacy-policy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_policy_exports
  },
  "routes/notification": {
    id: "routes/notification",
    parentId: "root",
    path: "notification",
    index: void 0,
    caseSensitive: void 0,
    module: notification_exports
  },
  "routes/terms-of-use": {
    id: "routes/terms-of-use",
    parentId: "root",
    path: "terms-of-use",
    index: void 0,
    caseSensitive: void 0,
    module: terms_of_use_exports
  },
  "routes/check-email": {
    id: "routes/check-email",
    parentId: "root",
    path: "check-email",
    index: void 0,
    caseSensitive: void 0,
    module: check_email_exports
  },
  "routes/safety-tips": {
    id: "routes/safety-tips",
    parentId: "root",
    path: "safety-tips",
    index: void 0,
    caseSensitive: void 0,
    module: safety_tips_exports
  },
  "routes/$capsuleId": {
    id: "routes/$capsuleId",
    parentId: "root",
    path: ":capsuleId",
    index: void 0,
    caseSensitive: void 0,
    module: capsuleId_exports
  },
  "routes/contact-us": {
    id: "routes/contact-us",
    parentId: "root",
    path: "contact-us",
    index: void 0,
    caseSensitive: void 0,
    module: contact_us_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/confirm": {
    id: "routes/confirm",
    parentId: "root",
    path: "confirm",
    index: void 0,
    caseSensitive: void 0,
    module: confirm_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/new": {
    id: "routes/new",
    parentId: "root",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
