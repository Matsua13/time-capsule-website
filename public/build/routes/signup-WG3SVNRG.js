import "/build/_shared/chunk-3TAIMXWF.js";
import {
  Form,
  Link,
  useActionData
} from "/build/_shared/chunk-HBOENHLD.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_db
} from "/build/_shared/chunk-KONDUBG3.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-FOVVXGJ2.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/utils/email.server
var require_email = __commonJS({
  "empty-module:~/utils/email.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/signup.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);
var import_email = __toESM(require_email(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/signup.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/signup.tsx"
  );
  import.meta.hot.lastModified = "1740143140356.773";
}
function SignupPage() {
  _s();
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-extrabold text-white mb-6 drop-shadow-lg", children: "Join the Adventure!" }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
      actionData?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 text-red-600 font-bold", children: actionData.error }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 85,
        columnNumber: 30
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "username", className: "block text-lg font-semibold text-gray-700 mb-1", children: "Username" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "username", id: "username", required: true, className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-lg font-semibold text-gray-700 mb-1", children: "Email" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", id: "email", required: true, className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-lg font-semibold text-gray-700 mb-1", children: "Password" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password", id: "password", required: true, className: "w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition", children: "Start" }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-white", children: [
      "Already on board?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "text-blue-200 underline font-semibold", children: "Log in" }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s(SignupPage, "fHVw5pq0Zwd2gXh2gyrnVdHnLCc=", false, function() {
  return [useActionData];
});
_c = SignupPage;
var _c;
$RefreshReg$(_c, "SignupPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SignupPage as default
};
//# sourceMappingURL=/build/routes/signup-WG3SVNRG.js.map
