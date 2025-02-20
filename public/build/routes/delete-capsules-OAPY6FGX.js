import {
  Form,
  Link,
  useLoaderData
} from "/build/_shared/chunk-HBOENHLD.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_auth,
  require_db
} from "/build/_shared/chunk-W3NWCIRA.js";
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/delete-capsules.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/delete-capsules.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/delete-capsules.tsx"
  );
  import.meta.hot.lastModified = "1740084013573.8438";
}
function DeleteCapsules() {
  _s();
  const {
    capsules
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-extrabold text-white mb-6 drop-shadow-lg text-center", children: "Manage Your Capsules" }, void 0, false, {
      fileName: "app/routes/delete-capsules.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    capsules.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-lg", children: "No capsules found." }, void 0, false, {
      fileName: "app/routes/delete-capsules.tsx",
      lineNumber: 103,
      columnNumber: 34
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-4", children: capsules.map((capsule) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex justify-between items-center p-4 bg-white rounded shadow hover:bg-gray-100 transition", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-medium", children: capsule.title }, void 0, false, {
        fileName: "app/routes/delete-capsules.tsx",
        lineNumber: 105,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", onSubmit: (e) => {
        if (!window.confirm("Are you sure you want to delete this capsule?")) {
          e.preventDefault();
        }
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "capsuleId", value: capsule.id }, void 0, false, {
          fileName: "app/routes/delete-capsules.tsx",
          lineNumber: 111,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "\u{1F5D1}\uFE0F" }, void 0, false, {
          fileName: "app/routes/delete-capsules.tsx",
          lineNumber: 112,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/delete-capsules.tsx",
        lineNumber: 106,
        columnNumber: 17
      }, this)
    ] }, capsule.id, true, {
      fileName: "app/routes/delete-capsules.tsx",
      lineNumber: 104,
      columnNumber: 38
    }, this)) }, void 0, false, {
      fileName: "app/routes/delete-capsules.tsx",
      lineNumber: 103,
      columnNumber: 94
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition", children: "Back to Dashboard" }, void 0, false, {
      fileName: "app/routes/delete-capsules.tsx",
      lineNumber: 119,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/delete-capsules.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/delete-capsules.tsx",
    lineNumber: 99,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/delete-capsules.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
_s(DeleteCapsules, "+Wm3neYxqmaSnK2GCF0yfvlICdU=", false, function() {
  return [useLoaderData];
});
_c = DeleteCapsules;
var _c;
$RefreshReg$(_c, "DeleteCapsules");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DeleteCapsules as default
};
//# sourceMappingURL=/build/routes/delete-capsules-OAPY6FGX.js.map
