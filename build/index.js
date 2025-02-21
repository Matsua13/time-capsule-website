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
import { jsxDEV } from "react/jsx-dev-runtime";
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
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
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
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
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
var global_default = "/build/_assets/global-JWEDX5S3.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "font-inter bg-background text-gray-800", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/community-guidelines.tsx
var community_guidelines_exports = {};
__export(community_guidelines_exports, {
  default: () => CommunityGuidelines
});
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function CommunityGuidelines() {
  return /* @__PURE__ */ jsxDEV3("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: /* @__PURE__ */ jsxDEV3("div", { className: "max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ jsxDEV3("header", { className: "text-center mb-6", children: /* @__PURE__ */ jsxDEV3("h1", { className: "text-4xl font-extrabold drop-shadow-lg", children: "Community Guidelines" }, void 0, !1, {
      fileName: "app/routes/community-guidelines.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/community-guidelines.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("main", { className: "prose text-justify", children: [
      /* @__PURE__ */ jsxDEV3("p", { children: "Welcome to the Time Capsule Universe," }, void 0, !1, {
        fileName: "app/routes/community-guidelines.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { children: "At Time Capsule, we believe that every message and every memory is precious. To ensure a harmonious and respectful environment, we invite you to observe the following principles:" }, void 0, !1, {
        fileName: "app/routes/community-guidelines.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("ul", { children: [
        /* @__PURE__ */ jsxDEV3("li", { children: [
          /* @__PURE__ */ jsxDEV3("strong", { children: "- Respect and Kindness:" }, void 0, !1, {
            fileName: "app/routes/community-guidelines.tsx",
            lineNumber: 23,
            columnNumber: 15
          }, this),
          " Treat everyone with courtesy and consideration. Any form of harassment, discrimination, or hate speech is strictly prohibited."
        ] }, void 0, !0, {
          fileName: "app/routes/community-guidelines.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { children: [
          /* @__PURE__ */ jsxDEV3("strong", { children: "- Confidentiality and Discretion:" }, void 0, !1, {
            fileName: "app/routes/community-guidelines.tsx",
            lineNumber: 26,
            columnNumber: 15
          }, this),
          " Avoid sharing sensitive personal information about yourself or others."
        ] }, void 0, !0, {
          fileName: "app/routes/community-guidelines.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { children: [
          /* @__PURE__ */ jsxDEV3("strong", { children: "- Constructive Sharing:" }, void 0, !1, {
            fileName: "app/routes/community-guidelines.tsx",
            lineNumber: 29,
            columnNumber: 15
          }, this),
          " Your messages and memories are intended to inspire and encourage. Be aware of the impact of your publications and foster enriching exchanges\u2014even if your goals are not immediately achieved, your capsule is meant for introspection and evolution."
        ] }, void 0, !0, {
          fileName: "app/routes/community-guidelines.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { children: [
          /* @__PURE__ */ jsxDEV3("strong", { children: "- Authenticity and Responsibility:" }, void 0, !1, {
            fileName: "app/routes/community-guidelines.tsx",
            lineNumber: 32,
            columnNumber: 15
          }, this),
          " Ensure that your content reflects your true emotions and experiences while respecting the dignity of others."
        ] }, void 0, !0, {
          fileName: "app/routes/community-guidelines.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/community-guidelines.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { children: "By using Time Capsule, you agree to abide by these essential rules. Together, let's create a space for sharing and inspiration, where each capsule contributes to weaving a collective story of respect and hope." }, void 0, !1, {
        fileName: "app/routes/community-guidelines.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/community-guidelines.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("footer", { className: "mt-8 text-center text-sm text-gray-600", children: /* @__PURE__ */ jsxDEV3("p", { children: "\xA9 2023 Time Capsule. All rights reserved." }, void 0, !1, {
      fileName: "app/routes/community-guidelines.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/community-guidelines.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/community-guidelines.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/community-guidelines.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/upcoming-updates.tsx
var upcoming_updates_exports = {};
__export(upcoming_updates_exports, {
  default: () => UpcomingUpdates
});
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function UpcomingUpdates() {
  return /* @__PURE__ */ jsxDEV4("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: /* @__PURE__ */ jsxDEV4("div", { className: "max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ jsxDEV4("header", { className: "text-center mb-6", children: /* @__PURE__ */ jsxDEV4("h1", { className: "text-4xl font-extrabold drop-shadow-lg", children: "Upcoming Updates" }, void 0, !1, {
      fileName: "app/routes/upcoming-updates.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/upcoming-updates.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("main", { className: "prose text-justify", children: [
      /* @__PURE__ */ jsxDEV4("p", { children: "At Time Capsule, we're continuously working to enhance your experience. In our upcoming updates, you can expect:" }, void 0, !1, {
        fileName: "app/routes/upcoming-updates.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("ul", { children: [
        /* @__PURE__ */ jsxDEV4("li", { children: [
          /* @__PURE__ */ jsxDEV4("strong", { children: "- Draft Mode:" }, void 0, !1, {
            fileName: "app/routes/upcoming-updates.tsx",
            lineNumber: 21,
            columnNumber: 15
          }, this),
          " Create and save draft capsules that you can edit and refine before sending\u2014giving you the time to think about your message."
        ] }, void 0, !0, {
          fileName: "app/routes/upcoming-updates.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("li", { children: [
          /* @__PURE__ */ jsxDEV4("strong", { children: "- Archive option:" }, void 0, !1, {
            fileName: "app/routes/upcoming-updates.tsx",
            lineNumber: 24,
            columnNumber: 15
          }, this),
          " Archive the capsules you want to make it easier to organise the dashboard."
        ] }, void 0, !0, {
          fileName: "app/routes/upcoming-updates.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("li", { children: [
          /* @__PURE__ */ jsxDEV4("strong", { children: "- Friend Connections:" }, void 0, !1, {
            fileName: "app/routes/upcoming-updates.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this),
          " Connect with other users so that your public capsules can be shared and enjoyed among friends."
        ] }, void 0, !0, {
          fileName: "app/routes/upcoming-updates.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("li", { children: [
          /* @__PURE__ */ jsxDEV4("strong", { children: "- Interactive Replies:" }, void 0, !1, {
            fileName: "app/routes/upcoming-updates.tsx",
            lineNumber: 30,
            columnNumber: 15
          }, this),
          " Respond to received capsules\u2014whether it's engaging with your past self or replying to a friend's message."
        ] }, void 0, !0, {
          fileName: "app/routes/upcoming-updates.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("li", { children: [
          /* @__PURE__ */ jsxDEV4("strong", { children: "- Social Sign-In:" }, void 0, !1, {
            fileName: "app/routes/upcoming-updates.tsx",
            lineNumber: 33,
            columnNumber: 15
          }, this),
          " Enjoy a smoother experience with the option to sign up and log in using Google and Facebook."
        ] }, void 0, !0, {
          fileName: "app/routes/upcoming-updates.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/upcoming-updates.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { children: "Stay tuned for these exciting new features as we continue to evolve your Time Capsule experience!" }, void 0, !1, {
        fileName: "app/routes/upcoming-updates.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/upcoming-updates.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("footer", { className: "mt-8 text-center text-sm text-gray-600", children: /* @__PURE__ */ jsxDEV4("p", { children: "\xA9 2023 Time Capsule. All rights reserved." }, void 0, !1, {
      fileName: "app/routes/upcoming-updates.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/upcoming-updates.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/upcoming-updates.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/upcoming-updates.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
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
global.__db || (global.__db = new PrismaClient(), global.__db.$connect()), db = global.__db;

// app/utils/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
if (!process.env.SESSION_SECRET)
  throw new Error("SESSION_SECRET must be set in the .env file");
var sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    // En production, le cookie ne sera transmis que sur HTTPS.
    secure: !1,
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
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV5("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4", children: /* @__PURE__ */ jsxDEV5("div", { className: "w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ jsxDEV5("h1", { className: "text-4xl font-extrabold text-white mb-6 drop-shadow-lg text-center", children: "Manage Your Capsules" }, void 0, !1, {
      fileName: "app/routes/delete-capsules.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    capsules.length === 0 ? /* @__PURE__ */ jsxDEV5("p", { className: "text-center text-lg", children: "No capsules found." }, void 0, !1, {
      fileName: "app/routes/delete-capsules.tsx",
      lineNumber: 70,
      columnNumber: 11
    }, this) : /* @__PURE__ */ jsxDEV5("ul", { className: "space-y-4", children: capsules.map((capsule) => /* @__PURE__ */ jsxDEV5(
      "li",
      {
        className: "flex justify-between items-center p-4 bg-white rounded shadow hover:bg-gray-100 transition",
        children: [
          /* @__PURE__ */ jsxDEV5("span", { className: "text-xl font-medium", children: capsule.title }, void 0, !1, {
            fileName: "app/routes/delete-capsules.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5(
            Form,
            {
              method: "post",
              onSubmit: (e) => {
                window.confirm("Are you sure you want to delete this capsule?") || e.preventDefault();
              },
              children: [
                /* @__PURE__ */ jsxDEV5("input", { type: "hidden", name: "capsuleId", value: capsule.id }, void 0, !1, {
                  fileName: "app/routes/delete-capsules.tsx",
                  lineNumber: 89,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV5(
                  "button",
                  {
                    type: "submit",
                    children: "\u{1F5D1}\uFE0F"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/delete-capsules.tsx",
                    lineNumber: 90,
                    columnNumber: 19
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/delete-capsules.tsx",
              lineNumber: 79,
              columnNumber: 17
            },
            this
          )
        ]
      },
      capsule.id,
      !0,
      {
        fileName: "app/routes/delete-capsules.tsx",
        lineNumber: 74,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/delete-capsules.tsx",
      lineNumber: 72,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxDEV5(Link, { to: "/dashboard", className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition", children: "Back to Dashboard" }, void 0, !1, {
      fileName: "app/routes/delete-capsules.tsx",
      lineNumber: 101,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/delete-capsules.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/delete-capsules.tsx",
    lineNumber: 65,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/delete-capsules.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

// app/routes/privacy-policy.tsx
var privacy_policy_exports = {};
__export(privacy_policy_exports, {
  default: () => PrivacyPolicy
});
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function PrivacyPolicy() {
  return /* @__PURE__ */ jsxDEV6("div", { className: "min-h-screen bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300 text-white", children: [
    /* @__PURE__ */ jsxDEV6("header", { className: "w-full p-6 bg-white text-gray-900 text-center", children: /* @__PURE__ */ jsxDEV6("h1", { className: "text-4xl font-bold", children: "Privacy Policy" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("main", { className: "container mx-auto px-4 py-8 text-gray-900", children: /* @__PURE__ */ jsxDEV6("div", { className: "prose max-w-none", children: /* @__PURE__ */ jsxDEV6("p", { children: "Ajoutez ici le contenu de la Privacy Policy." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("footer", { className: "bg-white text-gray-900 py-4 text-center border-t border-gray-300", children: /* @__PURE__ */ jsxDEV6("p", { children: "\xA9 2023 Time Capsule. All rights reserved." }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/privacy-policy.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
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
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function TermsOfUse() {
  return /* @__PURE__ */ jsxDEV7("div", { className: "min-h-screen bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300 text-white", children: [
    /* @__PURE__ */ jsxDEV7("header", { className: "w-full p-6 bg-white text-gray-900 text-center", children: /* @__PURE__ */ jsxDEV7("h1", { className: "text-4xl font-bold", children: "Terms of Use" }, void 0, !1, {
      fileName: "app/routes/terms-of-use.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/terms-of-use.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("main", { className: "container mx-auto px-4 py-8 text-gray-900", children: /* @__PURE__ */ jsxDEV7("div", { className: "prose max-w-none", children: /* @__PURE__ */ jsxDEV7("p", { children: "Ajoutez ici le contenu des Terms of Use." }, void 0, !1, {
      fileName: "app/routes/terms-of-use.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/terms-of-use.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/terms-of-use.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("footer", { className: "bg-white text-gray-900 py-4 text-center border-t border-gray-300", children: /* @__PURE__ */ jsxDEV7("p", { children: "\xA9 2023 Time Capsule. All rights reserved." }, void 0, !1, {
      fileName: "app/routes/terms-of-use.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/terms-of-use.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/terms-of-use.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/check-email.tsx
var check_email_exports = {};
__export(check_email_exports, {
  default: () => CheckEmail
});
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function CheckEmail() {
  return /* @__PURE__ */ jsxDEV8("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV8("div", { className: "max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ jsxDEV8("h2", { className: "text-2xl font-bold mb-4", children: "Please, check your e-mail inbox" }, void 0, !1, {
      fileName: "app/routes/check-email.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("p", { className: "text-lg", children: "A confirmation e-mail has been sent to you. Click on the link to confirm your e-mail address and join us!" }, void 0, !1, {
      fileName: "app/routes/check-email.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/check-email.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/check-email.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/safety-tips.tsx
var safety_tips_exports = {};
__export(safety_tips_exports, {
  default: () => SafetyTips
});
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function SafetyTips() {
  return /* @__PURE__ */ jsxDEV9("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: /* @__PURE__ */ jsxDEV9("div", { className: "max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ jsxDEV9("header", { className: "text-center mb-6 text-justify", children: /* @__PURE__ */ jsxDEV9("h1", { className: "text-4xl font-extrabold drop-shadow-lg", children: "Safety Tips" }, void 0, !1, {
      fileName: "app/routes/safety-tips.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/safety-tips.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV9("main", { className: "prose", children: [
      /* @__PURE__ */ jsxDEV9("p", { children: /* @__PURE__ */ jsxDEV9("strong", { children: "Security and Protection of Your Data" }, void 0, !1, {
        fileName: "app/routes/safety-tips.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/safety-tips.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9("p", { children: "Protecting your personal information is our priority. We recommend that you follow these tips to use the platform safely:" }, void 0, !1, {
        fileName: "app/routes/safety-tips.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9("ul", { children: [
        /* @__PURE__ */ jsxDEV9("li", { children: [
          /* @__PURE__ */ jsxDEV9("strong", { children: "- Confidentiality of Content:" }, void 0, !1, {
            fileName: "app/routes/safety-tips.tsx",
            lineNumber: 25,
            columnNumber: 15
          }, this),
          " Never share content (photos, videos, messages) containing sensitive or compromising personal information."
        ] }, void 0, !0, {
          fileName: "app/routes/safety-tips.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV9("li", { children: [
          /* @__PURE__ */ jsxDEV9("strong", { children: "- Access Settings:" }, void 0, !1, {
            fileName: "app/routes/safety-tips.tsx",
            lineNumber: 28,
            columnNumber: 15
          }, this),
          " Use the confidentiality options provided to control who can view your capsules."
        ] }, void 0, !0, {
          fileName: "app/routes/safety-tips.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV9("li", { children: [
          /* @__PURE__ */ jsxDEV9("strong", { children: "- Regular Updates:" }, void 0, !1, {
            fileName: "app/routes/safety-tips.tsx",
            lineNumber: 31,
            columnNumber: 15
          }, this),
          " Make sure you keep your application and data up to date to benefit from the latest security protections."
        ] }, void 0, !0, {
          fileName: "app/routes/safety-tips.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV9("li", { children: [
          /* @__PURE__ */ jsxDEV9("strong", { children: "- Vigilance on Links and Downloads:" }, void 0, !1, {
            fileName: "app/routes/safety-tips.tsx",
            lineNumber: 34,
            columnNumber: 15
          }, this),
          " Do not open links or files from unverified sources."
        ] }, void 0, !0, {
          fileName: "app/routes/safety-tips.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV9("li", { children: [
          /* @__PURE__ */ jsxDEV9("strong", { children: "- Reporting Anomalies:" }, void 0, !1, {
            fileName: "app/routes/safety-tips.tsx",
            lineNumber: 37,
            columnNumber: 15
          }, this),
          " If you notice any suspicious behavior or inappropriate content, please report it immediately using our dedicated tool."
        ] }, void 0, !0, {
          fileName: "app/routes/safety-tips.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/safety-tips.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/safety-tips.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV9("footer", { className: "mt-8 text-center text-sm text-gray-600", children: /* @__PURE__ */ jsxDEV9("p", { children: "\xA9 2023 Time Capsule. All rights reserved." }, void 0, !1, {
      fileName: "app/routes/safety-tips.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/safety-tips.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/safety-tips.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/safety-tips.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/$capsuleId.tsx
var capsuleId_exports = {};
__export(capsuleId_exports, {
  default: () => CapsuleDetail,
  loader: () => loader3
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2, Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
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
  let formattedScheduledDate = new Date(capsule.scheduledDate).toLocaleString("en-US", { timeZone: "UTC" });
  return json2({
    capsule: {
      ...capsule,
      formattedScheduledDate
      // Ajout de la date pré-formatée
    },
    currentUser
  });
};
function CapsuleDetail() {
  console.log("Capsule Detail est rendu");
  let { capsule, currentUser } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV10("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: /* @__PURE__ */ jsxDEV10("div", { className: "max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ jsxDEV10("h1", { className: "text-4xl font-extrabold drop-shadow-lg mb-4", children: capsule.title }, void 0, !1, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "mb-4 text-lg", children: capsule.content }, void 0, !1, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "mb-4 text-sm text-gray-600", children: [
      "Opening day: ",
      new Date(capsule.scheduledDate).toLocaleString()
    ] }, void 0, !0, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "mb-4 text-sm text-gray-600", children: [
      "Visibility: ",
      capsule.visibility
    ] }, void 0, !0, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    capsule.ownerId !== currentUser.id && /* @__PURE__ */ jsxDEV10("p", { className: "mb-4 text-sm text-gray-600", children: [
      "Sent by ",
      capsule.recipientType,
      ":",
      " ",
      capsule.owner.username || capsule.owner.email
    ] }, void 0, !0, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 79,
      columnNumber: 11
    }, this),
    capsule.visibility === "group" && capsule.groupRecipient && /* @__PURE__ */ jsxDEV10("p", { className: "mb-4 text-sm text-gray-600", children: [
      "(Group capsule intended for ",
      capsule.recipientType,
      ":",
      " ",
      capsule.groupRecipient,
      ")"
    ] }, void 0, !0, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 85,
      columnNumber: 11
    }, this),
    capsule.media && capsule.media.length > 0 && /* @__PURE__ */ jsxDEV10("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxDEV10("h2", { className: "text-2xl font-semibold mb-2", children: "Special gifts with your capsule" }, void 0, !1, {
        fileName: "app/routes/$capsuleId.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: capsule.media.map((media) => /* @__PURE__ */ jsxDEV10("div", { className: "p-2 border rounded", children: media.type.startsWith("image") ? /* @__PURE__ */ jsxDEV10("img", { src: media.url, alt: "", className: "w-full" }, void 0, !1, {
        fileName: "app/routes/$capsuleId.tsx",
        lineNumber: 99,
        columnNumber: 21
      }, this) : media.type.startsWith("video") ? (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        /* @__PURE__ */ jsxDEV10("video", { controls: !0, src: media.url, className: "w-full" }, void 0, !1, {
          fileName: "app/routes/$capsuleId.tsx",
          lineNumber: 102,
          columnNumber: 21
        }, this)
      ) : (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        /* @__PURE__ */ jsxDEV10("audio", { controls: !0, src: media.url }, void 0, !1, {
          fileName: "app/routes/$capsuleId.tsx",
          lineNumber: 105,
          columnNumber: 21
        }, this)
      ) }, media.id, !1, {
        fileName: "app/routes/$capsuleId.tsx",
        lineNumber: 97,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/routes/$capsuleId.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "mt-8", children: /* @__PURE__ */ jsxDEV10(
      Link2,
      {
        to: "/dashboard",
        className: "bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition",
        children: "Back to dashboard"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/$capsuleId.tsx",
        lineNumber: 113,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$capsuleId.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/$capsuleId.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

// app/routes/contact-us.tsx
var contact_us_exports = {};
__export(contact_us_exports, {
  default: () => ContactUs
});
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function ContactUs() {
  return /* @__PURE__ */ jsxDEV11("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: /* @__PURE__ */ jsxDEV11("div", { className: "max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ jsxDEV11("header", { className: "text-center mb-6", children: /* @__PURE__ */ jsxDEV11("h1", { className: "text-4xl font-extrabold drop-shadow-lg", children: "Contact Us" }, void 0, !1, {
      fileName: "app/routes/contact-us.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/contact-us.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11("main", { className: "prose", children: [
      /* @__PURE__ */ jsxDEV11("p", { children: [
        "If you have any questions, feedback, or need assistance, please feel free to contact us via email at",
        " ",
        /* @__PURE__ */ jsxDEV11("a", { href: "mailto:ltifene@gmail.com", className: "text-sky-500 hover:underline", children: "ltifene@gmail.com" }, void 0, !1, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/contact-us.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV11("p", { children: "We look forward to hearing from you and will get back to you as soon as possible!" }, void 0, !1, {
        fileName: "app/routes/contact-us.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact-us.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11("footer", { className: "mt-8 text-center text-sm text-gray-600", children: /* @__PURE__ */ jsxDEV11("p", { children: "\xA9 2023 Time Capsule. All rights reserved." }, void 0, !1, {
      fileName: "app/routes/contact-us.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/contact-us.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact-us.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact-us.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  action: () => action2,
  default: () => Dashboard,
  loader: () => loader4
});
import { Link as Link3, Form as Form2, useLoaderData as useLoaderData3 } from "@remix-run/react";
import { json as json3, redirect as redirect4 } from "@remix-run/node";

// app/components/Timeline.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var Timeline = ({ capsules }) => {
  let sortedCapsules = [...capsules].sort(
    (a, b) => new Date(b.scheduledDate).getTime() - new Date(a.scheduledDate).getTime()
  );
  return /* @__PURE__ */ jsxDEV12("div", { children: /* @__PURE__ */ jsxDEV12("ul", { style: { listStyle: "none", paddingLeft: 0 }, children: sortedCapsules.map((capsule) => /* @__PURE__ */ jsxDEV12("li", { style: { marginBottom: "20px", position: "relative" }, children: /* @__PURE__ */ jsxDEV12("div", { style: { borderLeft: "2px solid #333", paddingLeft: "15px" }, children: [
    /* @__PURE__ */ jsxDEV12("h4", { children: capsule.title }, void 0, !1, {
      fileName: "app/components/Timeline.tsx",
      lineNumber: 26,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ jsxDEV12("p", { children: new Date(capsule.scheduledDate).toLocaleString() }, void 0, !1, {
      fileName: "app/components/Timeline.tsx",
      lineNumber: 27,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Timeline.tsx",
    lineNumber: 25,
    columnNumber: 13
  }, this) }, capsule.id, !1, {
    fileName: "app/components/Timeline.tsx",
    lineNumber: 24,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/Timeline.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Timeline.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}, Timeline_default = Timeline;

// app/components/CalendarView.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function CalendarView({ capsules }) {
  let now = /* @__PURE__ */ new Date(), year = now.getUTCFullYear(), month = now.getUTCMonth(), currentDay = now.getUTCDate(), monthName = now.toLocaleString("default", { month: "long" }), daysInMonth = new Date(year, month + 1, 0).getUTCDate(), capsuleDays = capsules.map((capsule) => {
    let date = new Date(capsule.scheduledDate);
    return date.getUTCFullYear() === year && date.getUTCMonth() === month ? date.getUTCDate() : null;
  }).filter((day) => day !== null), firstDayOfWeek = new Date(Date.UTC(year, month, 1)).getUTCDay(), calendarCells = [];
  for (let i = 0; i < firstDayOfWeek; i++)
    calendarCells.push(null);
  for (let day = 1; day <= daysInMonth; day++)
    calendarCells.push(day);
  return /* @__PURE__ */ jsxDEV13("div", { className: "p-4 bg-white rounded-3xl shadow-xl border-4 border-slate-300", children: [
    /* @__PURE__ */ jsxDEV13("h3", { className: "text-xl font-semibold mb-2 text-center", children: [
      monthName,
      " ",
      year
    ] }, void 0, !0, {
      fileName: "app/components/CalendarView.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("div", { className: "grid grid-cols-7 gap-2 text-center", children: [
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => /* @__PURE__ */ jsxDEV13("div", { className: "font-bold", children: dayName }, dayName, !1, {
        fileName: "app/components/CalendarView.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)),
      calendarCells.map((cell, index) => /* @__PURE__ */ jsxDEV13(
        "div",
        {
          className: "h-12 flex items-center justify-center border border-gray-200 rounded",
          children: cell ? /* @__PURE__ */ jsxDEV13("div", { className: `${cell === currentDay ? "bg-green-200 font-bold rounded-full px-1" : ""}`, children: [
            /* @__PURE__ */ jsxDEV13("span", { children: cell }, void 0, !1, {
              fileName: "app/components/CalendarView.tsx",
              lineNumber: 67,
              columnNumber: 17
            }, this),
            capsuleDays.includes(cell) && /* @__PURE__ */ jsxDEV13("span", { className: "ml-1", title: "Capsule scheduled", children: "\u{1F48A}" }, void 0, !1, {
              fileName: "app/components/CalendarView.tsx",
              lineNumber: 69,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/CalendarView.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this) : null
        },
        index,
        !1,
        {
          fileName: "app/components/CalendarView.tsx",
          lineNumber: 61,
          columnNumber: 11
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/components/CalendarView.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/CalendarView.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
import { useState, useEffect } from "react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
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
  }), redirect4("/dashboard"));
};
function Dashboard() {
  let { capsules, user, notifications, reminders } = useLoaderData3(), [filter, setFilter] = useState("all"), [localReminders, setLocalReminders] = useState(reminders);
  useEffect(() => {
    let timer = setTimeout(() => {
      setLocalReminders([]);
    }, 6e4);
    return () => clearTimeout(timer);
  }, []);
  let filteredCapsules = capsules;
  filter === "sent" ? filteredCapsules = capsules.filter((c) => c.ownerId === user.id) : filter === "received" && (filteredCapsules = capsules.filter((c) => c.ownerId !== user.id));
  let now = /* @__PURE__ */ new Date(), upcomingCapsules = filteredCapsules.filter(
    (c) => new Date(c.scheduledDate) >= now
  ), pastCapsules = filteredCapsules.filter(
    (c) => new Date(c.scheduledDate) < now
  );
  return /* @__PURE__ */ jsxDEV14("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: [
    localReminders.length > 0 && /* @__PURE__ */ jsxDEV14("div", { className: "mb-6 p-4 bg-emerald-100 text-emerald-800 rounded", children: localReminders.map((reminder) => /* @__PURE__ */ jsxDEV14("p", { className: "text-sm", children: reminder.message }, reminder.id, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 172,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 170,
      columnNumber: 9
    }, this),
    notifications.length > 0 && /* @__PURE__ */ jsxDEV14("div", { className: "mb-6 p-4 bg-amber-100 text-amber-800 rounded", children: notifications.map((notif) => {
      let match = notif.message.match(/^capsule:(\d+):\s*(.*)/);
      if (match) {
        let capsuleId = match[1], displayMessage = match[2];
        return /* @__PURE__ */ jsxDEV14("p", { className: "text-sm", children: /* @__PURE__ */ jsxDEV14(
          "a",
          {
            href: `/notification?capsuleId=${capsuleId}&notifId=${notif.id}`,
            className: "hover:underline",
            children: displayMessage
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 187,
            columnNumber: 19
          },
          this
        ) }, notif.id, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 186,
          columnNumber: 17
        }, this);
      } else
        return /* @__PURE__ */ jsxDEV14("p", { className: "text-sm", children: notif.message }, notif.id, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 196,
          columnNumber: 22
        }, this);
    }) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 179,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ jsxDEV14("h1", { className: "text-5xl font-extrabold drop-shadow-xl", children: "Dashboard" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 204,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14(Form2, { method: "post", action: "/logout", children: /* @__PURE__ */ jsxDEV14(
        "button",
        {
          type: "submit",
          className: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition",
          children: "Log out"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 206,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 205,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 203,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("section", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsxDEV14(
      Link3,
      {
        to: "/new",
        className: "bg-amber-300 hover:bg-amber-500 text-white px-6 py-3 rounded transition",
        children: "Create a Capsule"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 217,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 216,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "mb-6 flex space-x-4", children: [
      /* @__PURE__ */ jsxDEV14(
        "button",
        {
          onClick: () => setFilter("all"),
          className: `px-4 py-2 rounded transition ${filter === "all" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"}`,
          children: "All Capsules"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 227,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV14(
        "button",
        {
          onClick: () => setFilter("sent"),
          className: `px-4 py-2 rounded transition ${filter === "sent" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"}`,
          children: "Sent"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 235,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV14(
        "button",
        {
          onClick: () => setFilter("received"),
          className: `px-4 py-2 rounded transition ${filter === "received" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"}`,
          children: "Received"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 243,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 226,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("section", { className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV14("h2", { className: "text-2xl font-semibold mb-4", children: "Upcoming Capsules" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 255,
        columnNumber: 9
      }, this),
      upcomingCapsules.length ? /* @__PURE__ */ jsxDEV14("div", { className: "grid gap-4", children: upcomingCapsules.map((capsule) => /* @__PURE__ */ jsxDEV14(
        "div",
        {
          className: "flex justify-between items-center p-4 bg-white rounded shadow hover:bg-gray-100 transition",
          children: [
            /* @__PURE__ */ jsxDEV14("div", { children: [
              /* @__PURE__ */ jsxDEV14("h3", { className: "text-xl font-semibold", children: /* @__PURE__ */ jsxDEV14(Link3, { to: `/${capsule.id}`, className: "text-sky-700 hover:underline", children: capsule.title }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 265,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 264,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV14("p", { className: "text-sm text-gray-600", children: capsule.content }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 269,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV14("p", { className: "text-xs text-gray-500", children: [
                "Opening day: ",
                new Date(capsule.scheduledDate).toLocaleString()
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 270,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 263,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV14(
              Link3,
              {
                to: "/delete-capsules",
                className: "ml-4 text-red-600 hover:text-red-800",
                title: "Manage capsule deletions",
                children: "\u{1F5D1}\uFE0F"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 275,
                columnNumber: 17
              },
              this
            )
          ]
        },
        capsule.id,
        !0,
        {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 259,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 257,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV14("p", { children: "No upcoming capsules." }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 286,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 254,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("section", { className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV14("h2", { className: "text-2xl font-semibold mb-4", children: "Previous Capsules" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 292,
        columnNumber: 9
      }, this),
      pastCapsules.length ? /* @__PURE__ */ jsxDEV14("div", { className: "grid gap-4", children: pastCapsules.map((capsule) => /* @__PURE__ */ jsxDEV14(
        "div",
        {
          className: "flex justify-between items-center p-4 bg-white rounded shadow hover:bg-gray-100 transition",
          children: [
            /* @__PURE__ */ jsxDEV14("div", { children: [
              /* @__PURE__ */ jsxDEV14("h3", { className: "text-xl font-semibold", children: /* @__PURE__ */ jsxDEV14(
                Link3,
                {
                  to: `/${capsule.id}`,
                  className: "text-sky-700 hover:underline",
                  children: capsule.title
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 302,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 301,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV14("p", { className: "text-sm text-gray-600", children: capsule.content }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 309,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV14("p", { className: "text-xs text-gray-500", children: [
                "Opening day: ",
                new Date(capsule.scheduledDate).toLocaleString()
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 310,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 300,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV14(
              Link3,
              {
                to: "/delete-capsules",
                className: "ml-4 text-red-600 hover:text-red-800",
                title: "Manage capsule deletions",
                children: "\u{1F5D1}\uFE0F"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 314,
                columnNumber: 17
              },
              this
            )
          ]
        },
        capsule.id,
        !0,
        {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 296,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 294,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV14("p", { children: "No previous capsules." }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 325,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 291,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("section", { className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV14("h2", { className: "text-center text-2xl font-semibold mb-4", children: "Visualisations" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 331,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxDEV14("div", { className: "bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
          /* @__PURE__ */ jsxDEV14("h3", { className: "text-xl font-semibold mb-2", children: "Timeline" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 334,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14(Timeline_default, { capsules }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 335,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 333,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14("div", { className: "bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
          /* @__PURE__ */ jsxDEV14("h3", { className: "text-xl font-semibold mb-2", children: "Calendar" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 338,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14(CalendarView, { capsules }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 339,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 337,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 332,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 330,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 167,
    columnNumber: 5
  }, this);
}

// app/routes/confirm.tsx
var confirm_exports = {};
__export(confirm_exports, {
  default: () => Confirm,
  loader: () => loader5
});
import { redirect as redirect5 } from "@remix-run/node";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
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
  }), redirect5("/login?confirmed=1");
};
function Confirm() {
  return /* @__PURE__ */ jsxDEV15("p", { children: "Confirmation ongoing\u2026" }, void 0, !1, {
    fileName: "app/routes/confirm.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Link as Link4 } from "@remix-run/react";
import { useEffect as useEffect2, useRef, useState as useState2 } from "react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
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
  }, []), /* @__PURE__ */ jsxDEV16(
    "div",
    {
      ref,
      className: `transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
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
  return /* @__PURE__ */ jsxDEV16("div", { className: "mb-12", children: [
    /* @__PURE__ */ jsxDEV16("h3", { className: "text-2xl font-bold mb-4 text-gray-800 text-center", children: story.title }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "flex justify-center space-x-4 mb-4", children: periodOptions.map(({ key, label }) => /* @__PURE__ */ jsxDEV16(
      "button",
      {
        onClick: () => setSelectedPeriod(key),
        className: `px-4 py-2 rounded-full border transition-colors ${selectedPeriod === key ? "bg-green-500 text-white" : "bg-white text-blue-600 hover:bg-blue-100"}`,
        children: label
      },
      key,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 91,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "p-6 bg-yellow-100 rounded-lg border border-yellow-400 shadow-md", children: /* @__PURE__ */ jsxDEV16("p", { className: "text-lg text-gray-800 text-justify font-pressstart drop-shadow-sm", children: story.parts[selectedPeriod] }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}
function TimelineSection() {
  return /* @__PURE__ */ jsxDEV16(ScrollReveal, { children: /* @__PURE__ */ jsxDEV16("section", { className: "py-12 text-white", children: /* @__PURE__ */ jsxDEV16("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV16(
      "h2",
      {
        className: "text-4xl font-extrabold text-white drop-shadow-xl text-center mb-8 tracking-widest",
        style: { textShadow: "3px 3px 6px rgba(0, 0, 0, 1)" },
        children: "Stories of Time"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 120,
        columnNumber: 9
      },
      this
    ),
    stories.map((story) => /* @__PURE__ */ jsxDEV16(TimelineStory, { story }, story.id, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 127,
      columnNumber: 11
    }, this)),
    /* @__PURE__ */ jsxDEV16("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxDEV16(
      Link4,
      {
        to: "/signup",
        className: "mr-4 inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors",
        children: "Share your story"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 130,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 129,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 119,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 118,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 117,
    columnNumber: 5
  }, this);
}
function Index() {
  return /* @__PURE__ */ jsxDEV16("div", { className: "min-h-screen flex flex-col bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300 text-white", children: [
    /* @__PURE__ */ jsxDEV16("header", { className: "w-full p-6 text-center", children: /* @__PURE__ */ jsxDEV16(
      "h1",
      {
        className: "text-5xl font-extrabold drop-shadow-xl",
        style: { textShadow: "3px 3px 6px rgba(0, 0, 0, 1)" },
        children: "Time Capsule"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 148,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("section", { className: "relative flex flex-col justify-center items-center h-[80vh] px-4 pt-24", children: [
      /* @__PURE__ */ jsxDEV16("div", { className: "text-center", children: /* @__PURE__ */ jsxDEV16("p", { className: "text-2xl md:text-3xl lg:text-4xl font-light drop-shadow-md", children: "Step into time's magic\u2014Unlock your memories, embrace your future." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 159,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "mt-12 flex gap-6", children: [
        /* @__PURE__ */ jsxDEV16(
          Link4,
          {
            to: "/login",
            className: "px-6 py-3 rounded-full bg-amber-300 hover:bg-amber-500 text-white font-bold transform hover:scale-105 transition",
            children: "Log In"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 164,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV16(
          Link4,
          {
            to: "/signup",
            className: "px-6 py-3 rounded-full bg-amber-300 hover:bg-amber-500 text-white font-bold transform hover:scale-105 transition",
            children: "Sign Up"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 170,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "absolute bottom-4", children: /* @__PURE__ */ jsxDEV16(
        "svg",
        {
          className: "w-8 h-8 animate-bounce text-white",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsxDEV16("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 186,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 179,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("section", { className: "py-20 -mt-32", children: /* @__PURE__ */ jsxDEV16(ScrollReveal, { children: /* @__PURE__ */ jsxDEV16("div", { className: "max-w-3xl mx-auto px-4 p-8 bg-yellow-200 rounded-3xl shadow-xl border-4 border-yellow-500 text-gray-800", children: [
      /* @__PURE__ */ jsxDEV16("h2", { className: "text-3xl font-bold mb-4 text-center drop-shadow-lg", children: "About" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 195,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV16("p", { className: "text-base leading-relaxed text-justify", children: "Once upon a time, there was a little girl with eyes sparkling with innocence, who dreamt of feeling the salt of the ocean caress her cheeks and hearing the murmur of the waves as a lullaby every day. She imagined herself, a few years later, living by the sea, her feet in the foam, gliding over the waves like a dancer in symphony with the ocean." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 198,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV16("p", { className: "text-base leading-relaxed mt-4 text-justify", children: "One day, determined to seal her dreams, she created a time capsule, a message of hope and ambition, destined for her future version. Five years later, after a morning surf session, she found herself facing the ocean \u2014 the ocean that had become her daily life over the last year. She felt immense gratitude towards the little girl who had dared to dream. You are where you wanted to be." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 201,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV16("p", { className: "text-base leading-relaxed mt-4 text-justify", children: "Time Capsule is much more than an app. Whether you want to send an inspiring, public and accessible capsule to your friends, record your dreams and achievements for yourself, or share a personalised message for a birthday, an amusing anecdote or to comfort a loved one, Time Capsule transforms every moment into a precious bridge between the past and the future. Be creative and let your messages travel through time." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 204,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 194,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 193,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16(TimelineSection, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 212,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("footer", { className: "bg-white text-gray-900 py-8 border-t-4 border-sky-500 shadow-xl", children: /* @__PURE__ */ jsxDEV16("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV16("div", { className: "flex flex-col md:flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV16("div", { className: "mb-4 md:mb-0 text-center md:text-left", children: [
          /* @__PURE__ */ jsxDEV16("h3", { className: "text-3xl font-bold text-gray-700 drop-shadow-md", children: "Time Capsule" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 220,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV16("p", { className: "text-sm text-gray-600", children: "A journey through time and memories" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 223,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 219,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { className: "flex flex-wrap justify-center space-x-4", children: [
          /* @__PURE__ */ jsxDEV16(
            "a",
            {
              href: "/safety-tips",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Safety Tips"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 228,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV16(
            "a",
            {
              href: "/community-guidelines",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Community Guidelines"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 234,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV16(
            "a",
            {
              href: "/upcoming-updates",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Upcoming Updates"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 240,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV16(
            "a",
            {
              href: "/contact-us",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Contact Us"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 246,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 227,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 218,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "mt-6 flex flex-col md:flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV16("div", { className: "flex flex-wrap justify-center space-x-4", children: [
          /* @__PURE__ */ jsxDEV16(
            "a",
            {
              href: "/privacy-policy",
              className: "text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-sky-500",
              children: "Privacy Policy"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 257,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV16(
            "a",
            {
              href: "/terms-of-use",
              className: "text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-sky-500",
              children: "Terms of Use"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 263,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 256,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { className: "mt-4 md:mt-0 text-xs text-gray-500 text-center", children: "\xA9 2023 Time Capsule. All rights reserved." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 270,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 255,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 216,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 215,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 145,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action3,
  default: () => Logout,
  loader: () => loader6
});
import { redirect as redirect6 } from "@remix-run/node";
var action3 = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));
  return redirect6("/", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}, loader6 = async () => redirect6("/");
function Logout() {
  return null;
}

// app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action4,
  default: () => SignupPage
});
import { json as json4, redirect as redirect7 } from "@remix-run/node";
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
    subject: "Please, confirm your e-mail address",
    text: `Click on this link to confirm your account: ${confirmationUrl}`,
    html: `<p>Click on <a href="${confirmationUrl}">this link</a> to confirm your account and join us!</p>`
  };
  await transporter.sendMail(mailOptions);
}
async function sendInstantNotificationEmail(to, capsuleTitle) {
  let notificationUrl = `${process.env.BASE_URL || "http://localhost:3000"}/dashboard`, mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: "Someone is thinking about you \u{1F33B}",
    text: `You have received a capsule titled "${capsuleTitle}". Visit your dashboard for more details: ${notificationUrl}

Best regards,
The Time Capsule Team`,
    html: `<p>You have received a capsule titled "<strong>${capsuleTitle}</strong>".</p>
           <p>Visit your <a href="${notificationUrl}">dashboard</a> for more details.</p>
           <p>Best regards,<br>The <strong>Time Capsule</strong> Team</p>`
  };
  await transporter.sendMail(mailOptions);
}

// app/routes/signup.tsx
import { randomUUID } from "crypto";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
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
  }), await sendConfirmationEmail(email, confirmationToken), redirect7("/check-email");
};
function SignupPage() {
  let actionData = useActionData();
  return /* @__PURE__ */ jsxDEV17("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4", children: [
    /* @__PURE__ */ jsxDEV17("h1", { className: "text-4xl font-extrabold text-white mb-6 drop-shadow-lg", children: "Join the Adventure!" }, void 0, !1, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17(
      Form3,
      {
        method: "post",
        className: "w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500",
        children: [
          actionData?.error ? /* @__PURE__ */ jsxDEV17("div", { className: "mb-4 text-red-600 font-bold", children: actionData.error }, void 0, !1, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 78,
            columnNumber: 11
          }, this) : null,
          /* @__PURE__ */ jsxDEV17("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxDEV17(
              "label",
              {
                htmlFor: "username",
                className: "block text-lg font-semibold text-gray-700 mb-1",
                children: "Username"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/signup.tsx",
                lineNumber: 81,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV17(
              "input",
              {
                type: "text",
                name: "username",
                id: "username",
                required: !0,
                className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/signup.tsx",
                lineNumber: 87,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 80,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxDEV17(
              "label",
              {
                htmlFor: "email",
                className: "block text-lg font-semibold text-gray-700 mb-1",
                children: "Email"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/signup.tsx",
                lineNumber: 96,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV17(
              "input",
              {
                type: "email",
                name: "email",
                id: "email",
                required: !0,
                className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/signup.tsx",
                lineNumber: 102,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 95,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxDEV17(
              "label",
              {
                htmlFor: "password",
                className: "block text-lg font-semibold text-gray-700 mb-1",
                children: "Password"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/signup.tsx",
                lineNumber: 111,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV17(
              "input",
              {
                type: "password",
                name: "password",
                id: "password",
                required: !0,
                className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/signup.tsx",
                lineNumber: 117,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 110,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV17(
            "button",
            {
              type: "submit",
              className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition",
              children: "Start"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/signup.tsx",
              lineNumber: 125,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/signup.tsx",
        lineNumber: 73,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV17("p", { className: "mt-4 text-white", children: [
      "Already on board?",
      " ",
      /* @__PURE__ */ jsxDEV17(
        Link5,
        {
          to: "/login",
          className: "text-blue-200 underline font-semibold",
          children: "Log in"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/signup.tsx",
          lineNumber: 134,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
import { Link as Link6 } from "@remix-run/react";
import { useEffect as useEffect3, useRef as useRef2, useState as useState3 } from "react";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
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
  }, []), /* @__PURE__ */ jsxDEV18(
    "div",
    {
      ref,
      className: `transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/routes/index.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
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
  return /* @__PURE__ */ jsxDEV18("div", { className: "mb-12", children: [
    /* @__PURE__ */ jsxDEV18("h3", { className: "text-2xl font-bold mb-4 text-gray-800 text-center", children: story.title }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "flex justify-center space-x-4 mb-4", children: periodOptions.map(({ key, label }) => /* @__PURE__ */ jsxDEV18(
      "button",
      {
        onClick: () => setSelectedPeriod(key),
        className: `px-4 py-2 rounded-full border transition-colors ${selectedPeriod === key ? "bg-green-500 text-white" : "bg-white text-blue-600 hover:bg-blue-100"}`,
        children: label
      },
      key,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 91,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "p-6 bg-yellow-100 rounded-lg border border-yellow-400 shadow-md", children: /* @__PURE__ */ jsxDEV18("p", { className: "text-lg text-gray-800 text-justify font-pressstart drop-shadow-sm", children: story.parts[selectedPeriod] }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}
function TimelineSection2() {
  return /* @__PURE__ */ jsxDEV18(ScrollReveal2, { children: /* @__PURE__ */ jsxDEV18("section", { className: "py-12 text-white", children: /* @__PURE__ */ jsxDEV18("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV18(
      "h2",
      {
        className: "text-4xl font-extrabold text-white drop-shadow-xl text-center mb-8 tracking-widest",
        style: { textShadow: "3px 3px 6px rgba(0, 0, 0, 1)" },
        children: "Stories of Time"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 120,
        columnNumber: 9
      },
      this
    ),
    stories2.map((story) => /* @__PURE__ */ jsxDEV18(TimelineStory2, { story }, story.id, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 127,
      columnNumber: 11
    }, this)),
    /* @__PURE__ */ jsxDEV18("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxDEV18(
      Link6,
      {
        to: "/signup",
        className: "mr-4 inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors",
        children: "Share your story"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 130,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 129,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 119,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 118,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 117,
    columnNumber: 5
  }, this);
}
function Index2() {
  return /* @__PURE__ */ jsxDEV18("div", { className: "min-h-screen flex flex-col bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300 text-white", children: [
    /* @__PURE__ */ jsxDEV18("header", { className: "w-full p-6 text-center", children: /* @__PURE__ */ jsxDEV18(
      "h1",
      {
        className: "text-5xl font-extrabold drop-shadow-xl",
        style: { textShadow: "3px 3px 6px rgba(0, 0, 0, 1)" },
        children: "Time Capsule"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 148,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("section", { className: "relative flex flex-col justify-center items-center h-[80vh] px-4 pt-24", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "text-center", children: /* @__PURE__ */ jsxDEV18("p", { className: "text-2xl md:text-3xl lg:text-4xl font-light drop-shadow-md", children: "Step into time's magic\u2014Unlock your memories, embrace your future." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 159,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "mt-12 flex gap-6", children: [
        /* @__PURE__ */ jsxDEV18(
          Link6,
          {
            to: "/login",
            className: "px-6 py-3 rounded-full bg-amber-300 hover:bg-amber-500 text-white font-bold transform hover:scale-105 transition",
            children: "Log In"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 164,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV18(
          Link6,
          {
            to: "/signup",
            className: "px-6 py-3 rounded-full bg-amber-300 hover:bg-amber-500 text-white font-bold transform hover:scale-105 transition",
            children: "Sign Up"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 170,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "absolute bottom-4", children: /* @__PURE__ */ jsxDEV18(
        "svg",
        {
          className: "w-8 h-8 animate-bounce text-white",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsxDEV18("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 186,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 179,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("section", { className: "py-20 -mt-32", children: /* @__PURE__ */ jsxDEV18(ScrollReveal2, { children: /* @__PURE__ */ jsxDEV18("div", { className: "max-w-3xl mx-auto px-4 p-8 bg-yellow-200 rounded-3xl shadow-xl border-4 border-yellow-500 text-gray-800", children: [
      /* @__PURE__ */ jsxDEV18("h2", { className: "text-3xl font-bold mb-4 text-center drop-shadow-lg", children: "About" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 195,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV18("p", { className: "text-base leading-relaxed text-justify", children: "Once upon a time, there was a little girl with eyes sparkling with innocence, who dreamt of feeling the salt of the ocean caress her cheeks and hearing the murmur of the waves as a lullaby every day. She imagined herself, a few years later, living by the sea, her feet in the foam, gliding over the waves like a dancer in symphony with the ocean." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 198,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV18("p", { className: "text-base leading-relaxed mt-4 text-justify", children: "One day, determined to seal her dreams, she created a time capsule, a message of hope and ambition, destined for her future version. Five years later, after a morning surf session, she found herself facing the ocean \u2014 the ocean that had become her daily life over the last year. She felt immense gratitude towards the little girl who had dared to dream. You are where you wanted to be." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 201,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV18("p", { className: "text-base leading-relaxed mt-4 text-justify", children: "Time Capsule is much more than an app. Whether you want to send an inspiring, public and accessible capsule to your friends, record your dreams and achievements for yourself, or share a personalised message for a birthday, an amusing anecdote or to comfort a loved one, Time Capsule transforms every moment into a precious bridge between the past and the future. Be creative and let your messages travel through time." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 204,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 194,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 193,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18(TimelineSection2, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 212,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("footer", { className: "bg-white text-gray-900 py-8 border-t-4 border-sky-500 shadow-xl", children: /* @__PURE__ */ jsxDEV18("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "flex flex-col md:flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV18("div", { className: "mb-4 md:mb-0 text-center md:text-left", children: [
          /* @__PURE__ */ jsxDEV18("h3", { className: "text-3xl font-bold text-gray-700 drop-shadow-md", children: "Time Capsule" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 220,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("p", { className: "text-sm text-gray-600", children: "A journey through time and memories" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 223,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 219,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "flex flex-wrap justify-center space-x-4", children: [
          /* @__PURE__ */ jsxDEV18(
            "a",
            {
              href: "/safety-tips",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Safety Tips"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 228,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV18(
            "a",
            {
              href: "/community-guidelines",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Community Guidelines"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 234,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV18(
            "a",
            {
              href: "/upcoming-updates",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Upcoming Updates"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 240,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV18(
            "a",
            {
              href: "/contact-us",
              className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500",
              children: "Contact Us"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 246,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 227,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 218,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "mt-6 flex flex-col md:flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV18("div", { className: "flex flex-wrap justify-center space-x-4", children: [
          /* @__PURE__ */ jsxDEV18(
            "a",
            {
              href: "/privacy-policy",
              className: "text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-sky-500",
              children: "Privacy Policy"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 257,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV18(
            "a",
            {
              href: "/terms-of-use",
              className: "text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-sky-500",
              children: "Terms of Use"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 263,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 256,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "mt-4 md:mt-0 text-xs text-gray-500 text-center", children: "\xA9 2023 Time Capsule. All rights reserved." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 270,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 255,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 216,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 215,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 145,
    columnNumber: 5
  }, this);
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
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var action5 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password");
  if (typeof email != "string" || typeof password != "string")
    return json5({ error: "Invalid form details" }, { status: 400 });
  let user = await db.user.findUnique({ where: { email } });
  return user ? await bcrypt3.compare(password, user.password) ? createUserSession(user.id, "/dashboard") : json5({ error: "Invalid IDs" }, { status: 400 }) : json5({ error: "Invalid IDs" }, { status: 400 });
};
function LoginPage() {
  let actionData = useActionData2();
  return /* @__PURE__ */ jsxDEV19("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4", children: [
    /* @__PURE__ */ jsxDEV19("h1", { className: "text-4xl font-extrabold text-white mb-6 drop-shadow-lg", children: "Let's create magic!" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV19(
      Form4,
      {
        method: "post",
        className: "w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500",
        children: [
          actionData?.error ? /* @__PURE__ */ jsxDEV19("div", { className: "mb-4 text-red-600 font-bold", children: actionData.error }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 53,
            columnNumber: 11
          }, this) : null,
          /* @__PURE__ */ jsxDEV19("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxDEV19(
              "label",
              {
                htmlFor: "email",
                className: "block text-lg font-semibold text-gray-700 mb-1",
                children: "Email"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 56,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV19(
              "input",
              {
                type: "email",
                name: "email",
                id: "email",
                required: !0,
                className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 62,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxDEV19(
              "label",
              {
                htmlFor: "password",
                className: "block text-lg font-semibold text-gray-700 mb-1",
                children: "Password"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 71,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV19(
              "input",
              {
                type: "password",
                name: "password",
                id: "password",
                required: !0,
                className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 77,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 70,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV19(
            "button",
            {
              type: "submit",
              className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition",
              children: "Log in"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 85,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 48,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV19("p", { className: "mt-4 text-white", children: [
      "Not a member yet?",
      " ",
      /* @__PURE__ */ jsxDEV19(
        Link7,
        {
          to: "/signup",
          className: "text-blue-200 underline font-semibold",
          children: "Joins us!"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 94,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action6,
  default: () => NewCapsule,
  loader: () => loader7
});
import { Form as Form5, useActionData as useActionData3, useNavigation } from "@remix-run/react";
import { json as json6, redirect as redirect9 } from "@remix-run/node";
import { useState as useState4 } from "react";
import { promises as fs } from "fs";
import path from "path";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
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
  let groupRecipient = null, recipientType = null, recipientUser = null;
  if (visibility === "group") {
    let groupChoice = formData.get("groupChoice");
    if (groupChoice === "username" ? (groupRecipient = formData.get("groupUsername"), recipientType = "username") : groupChoice === "email" && (groupRecipient = formData.get("groupEmail"), recipientType = "email"), !groupRecipient || groupRecipient.trim() === "")
      return json6({ error: "Please enter the username or email of the recipient" }, { status: 400 });
    recipientType === "email" ? recipientUser = await db.user.findUnique({
      where: { email: groupRecipient.trim() }
    }) : recipientType === "username" && (recipientUser = await db.user.findFirst({
      where: { username: groupRecipient.trim() }
    })), console.log("Recipient user:", recipientUser), recipientUser && recipientUser.id === user.id && (recipientUser = null);
  }
  let capsuleData = {
    ownerId: user.id,
    title: title.trim(),
    content: content.trim(),
    scheduledDate: new Date(scheduledDate),
    visibility,
    groupRecipient: visibility === "group" ? groupRecipient.trim() : null,
    recipientType: visibility === "group" ? recipientType : null
  }, capsule = await db.capsule.create({ data: capsuleData });
  if (visibility === "group" && recipientUser && recipientUser.id !== user.id) {
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
        // L'URL est ici le chemin relatif vers le fichier
        url: `/uploads/${filename}`
      }
    });
  }
  return redirect9(`/${capsule.id}`);
};
function NewCapsule() {
  let actionData = useActionData3(), transition = useNavigation(), [selectedVisibility, setSelectedVisibility] = useState4("private"), [groupChoice, setGroupChoice] = useState4("");
  return /* @__PURE__ */ jsxDEV20("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4", children: [
    /* @__PURE__ */ jsxDEV20("h1", { className: "text-4xl font-extrabold text-white mb-6 drop-shadow-lg", children: "Create a new Capsule" }, void 0, !1, {
      fileName: "app/routes/new.tsx",
      lineNumber: 175,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20(
      Form5,
      {
        method: "post",
        encType: "multipart/form-data",
        onSubmit: (event) => {
          window.confirm(
            "Warning: Once created, the capsule cannot be modified. This is deliberate, to encourage you to be yourself: the idea is to be in the present. The editable draft option will come later for those who need more reflection."
          ) || event.preventDefault();
        },
        className: "w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500",
        children: [
          actionData?.error && /* @__PURE__ */ jsxDEV20("div", { className: "mb-4 text-red-600 font-bold", children: actionData.error }, void 0, !1, {
            fileName: "app/routes/new.tsx",
            lineNumber: 185,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV20("label", { className: "block mb-4", children: [
            "Capsule Name:",
            /* @__PURE__ */ jsxDEV20(
              "input",
              {
                type: "text",
                name: "title",
                required: !0,
                className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/new.tsx",
                lineNumber: 189,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/new.tsx",
            lineNumber: 187,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV20("label", { className: "block mb-4", children: [
            "Your thoughts:",
            /* @__PURE__ */ jsxDEV20(
              "textarea",
              {
                name: "content",
                required: !0,
                className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/new.tsx",
                lineNumber: 198,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/new.tsx",
            lineNumber: 196,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV20("label", { className: "block mb-4", children: [
            "Opening Day:",
            /* @__PURE__ */ jsxDEV20(
              "input",
              {
                type: "datetime-local",
                name: "scheduledDate",
                required: !0,
                className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/new.tsx",
                lineNumber: 206,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/new.tsx",
            lineNumber: 204,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV20("label", { className: "block mb-4", children: [
            "Visibility:",
            /* @__PURE__ */ jsxDEV20(
              "select",
              {
                name: "visibility",
                required: !0,
                onChange: (e) => {
                  setSelectedVisibility(e.target.value), e.target.value !== "group" && setGroupChoice("");
                },
                className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500",
                children: [
                  /* @__PURE__ */ jsxDEV20("option", { value: "private", children: "Private" }, void 0, !1, {
                    fileName: "app/routes/new.tsx",
                    lineNumber: 226,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ jsxDEV20("option", { value: "public", children: "Public" }, void 0, !1, {
                    fileName: "app/routes/new.tsx",
                    lineNumber: 227,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ jsxDEV20("option", { value: "group", children: "Group" }, void 0, !1, {
                    fileName: "app/routes/new.tsx",
                    lineNumber: 228,
                    columnNumber: 13
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/new.tsx",
                lineNumber: 215,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/new.tsx",
            lineNumber: 213,
            columnNumber: 9
          }, this),
          selectedVisibility === "group" && /* @__PURE__ */ jsxDEV20("fieldset", { className: "mb-4 border border-gray-300 p-4 rounded", children: [
            /* @__PURE__ */ jsxDEV20("legend", { className: "text-lg font-semibold mb-2", children: "How do you want to send the Capsule?" }, void 0, !1, {
              fileName: "app/routes/new.tsx",
              lineNumber: 234,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV20("div", { className: "mb-2", children: /* @__PURE__ */ jsxDEV20("label", { className: "inline-flex items-center", children: [
              /* @__PURE__ */ jsxDEV20(
                "input",
                {
                  type: "radio",
                  name: "groupChoice",
                  value: "username",
                  onChange: (e) => setGroupChoice(e.target.value),
                  className: "mr-2",
                  required: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/new.tsx",
                  lineNumber: 239,
                  columnNumber: 17
                },
                this
              ),
              "Via username"
            ] }, void 0, !0, {
              fileName: "app/routes/new.tsx",
              lineNumber: 238,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/new.tsx",
              lineNumber: 237,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV20("div", { className: "mb-2", children: /* @__PURE__ */ jsxDEV20("label", { className: "inline-flex items-center", children: [
              /* @__PURE__ */ jsxDEV20(
                "input",
                {
                  type: "radio",
                  name: "groupChoice",
                  value: "email",
                  onChange: (e) => setGroupChoice(e.target.value),
                  className: "mr-2",
                  required: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/new.tsx",
                  lineNumber: 252,
                  columnNumber: 17
                },
                this
              ),
              "Via email"
            ] }, void 0, !0, {
              fileName: "app/routes/new.tsx",
              lineNumber: 251,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/new.tsx",
              lineNumber: 250,
              columnNumber: 13
            }, this),
            groupChoice === "username" && /* @__PURE__ */ jsxDEV20("label", { className: "block mt-2", children: [
              "Recipient username:",
              /* @__PURE__ */ jsxDEV20(
                "input",
                {
                  type: "text",
                  name: "groupUsername",
                  required: !0,
                  className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/new.tsx",
                  lineNumber: 266,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/new.tsx",
              lineNumber: 264,
              columnNumber: 15
            }, this),
            groupChoice === "email" && /* @__PURE__ */ jsxDEV20("label", { className: "block mt-2", children: [
              "Recipient email:",
              /* @__PURE__ */ jsxDEV20(
                "input",
                {
                  type: "email",
                  name: "groupEmail",
                  required: !0,
                  className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/new.tsx",
                  lineNumber: 277,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/new.tsx",
              lineNumber: 275,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/new.tsx",
            lineNumber: 233,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV20("fieldset", { className: "mb-4 border border-gray-300 p-4 rounded", children: [
            /* @__PURE__ */ jsxDEV20("legend", { className: "text-lg font-semibold", children: "Add a gift" }, void 0, !1, {
              fileName: "app/routes/new.tsx",
              lineNumber: 289,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV20("label", { className: "block mb-2", children: [
              "Select a media type:",
              /* @__PURE__ */ jsxDEV20(
                "input",
                {
                  type: "file",
                  name: "mediaFile",
                  accept: "image/*,video/*,audio/*",
                  className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/new.tsx",
                  lineNumber: 294,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/new.tsx",
              lineNumber: 292,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/new.tsx",
            lineNumber: 288,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV20(
            "button",
            {
              type: "submit",
              disabled: transition.state === "submitting",
              className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition",
              children: transition.state === "submitting" ? "Creation ongoing..." : "Let's create the magic capsule!"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/new.tsx",
              lineNumber: 302,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/new.tsx",
        lineNumber: 178,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/new.tsx",
    lineNumber: 174,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-TLQCUBIT.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-HBOENHLD.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-FOVVXGJ2.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KGOJD45P.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/$capsuleId": { id: "routes/$capsuleId", parentId: "root", path: ":capsuleId", index: void 0, caseSensitive: void 0, module: "/build/routes/$capsuleId-XZ2EYPEI.js", imports: ["/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-G73HSPV7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/check-email": { id: "routes/check-email", parentId: "root", path: "check-email", index: void 0, caseSensitive: void 0, module: "/build/routes/check-email-VCGO4LB2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/community-guidelines": { id: "routes/community-guidelines", parentId: "root", path: "community-guidelines", index: void 0, caseSensitive: void 0, module: "/build/routes/community-guidelines-X55JPK2G.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/confirm": { id: "routes/confirm", parentId: "root", path: "confirm", index: void 0, caseSensitive: void 0, module: "/build/routes/confirm-TUVAOTYP.js", imports: ["/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact-us": { id: "routes/contact-us", parentId: "root", path: "contact-us", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-us-2ZHO32BN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-QFIA3LAB.js", imports: ["/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/delete-capsules": { id: "routes/delete-capsules", parentId: "root", path: "delete-capsules", index: void 0, caseSensitive: void 0, module: "/build/routes/delete-capsules-BNOZKYGC.js", imports: ["/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-4BETLTF6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-MROXJ7X4.js", imports: ["/build/_shared/chunk-3TAIMXWF.js", "/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-3MCVWBUP.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/new": { id: "routes/new", parentId: "root", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/new-AMI3EZVU.js", imports: ["/build/_shared/chunk-3NMNVWE6.js", "/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/notification": { id: "routes/notification", parentId: "root", path: "notification", index: void 0, caseSensitive: void 0, module: "/build/routes/notification-7ZHBOCK7.js", imports: ["/build/_shared/chunk-JSCKBFOW.js", "/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/privacy-policy": { id: "routes/privacy-policy", parentId: "root", path: "privacy-policy", index: void 0, caseSensitive: void 0, module: "/build/routes/privacy-policy-UHXXRGZO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/safety-tips": { id: "routes/safety-tips", parentId: "root", path: "safety-tips", index: void 0, caseSensitive: void 0, module: "/build/routes/safety-tips-VXVNC4VE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-IQ34T3N5.js", imports: ["/build/_shared/chunk-3TAIMXWF.js", "/build/_shared/chunk-3NMNVWE6.js", "/build/_shared/chunk-KONDUBG3.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/terms-of-use": { id: "routes/terms-of-use", parentId: "root", path: "terms-of-use", index: void 0, caseSensitive: void 0, module: "/build/routes/terms-of-use-JNAYU4Y6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/upcoming-updates": { id: "routes/upcoming-updates", parentId: "root", path: "upcoming-updates", index: void 0, caseSensitive: void 0, module: "/build/routes/upcoming-updates-B2FR3UUD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "dfcf8752", hmr: { runtime: "/build/_shared/chunk-FOVVXGJ2.js", timestamp: 1740151087405 }, url: "/build/manifest-DFCF8752.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
//# sourceMappingURL=index.js.map
