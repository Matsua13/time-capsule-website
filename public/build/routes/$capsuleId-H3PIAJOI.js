import {
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

// app/routes/$capsuleId.tsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/$capsuleId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/$capsuleId.tsx"
  );
  import.meta.hot.lastModified = "1740077024632.2278";
}
function CapsuleDetail() {
  _s();
  console.log("Capsule Detail est rendu");
  const {
    capsule,
    currentUser
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-extrabold drop-shadow-lg mb-4", children: capsule.title }, void 0, false, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4 text-lg", children: capsule.content }, void 0, false, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4 text-sm text-gray-600", children: [
      "Opening day: ",
      new Date(capsule.scheduledDate).toLocaleString()
    ] }, void 0, true, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4 text-sm text-gray-600", children: [
      "Visibility: ",
      capsule.visibility
    ] }, void 0, true, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    capsule.ownerId !== currentUser.id && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4 text-sm text-gray-600", children: [
      "Sent by ",
      capsule.recipientType,
      ":",
      " ",
      capsule.owner.username || capsule.owner.email
    ] }, void 0, true, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 85,
      columnNumber: 48
    }, this),
    capsule.visibility === "group" && capsule.groupRecipient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4 text-sm text-gray-600", children: [
      "(Group capsule intended for ",
      capsule.recipientType,
      ":",
      " ",
      capsule.groupRecipient,
      ")"
    ] }, void 0, true, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 89,
      columnNumber: 70
    }, this),
    capsule.media && capsule.media.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold mb-2", children: "Special gifts with your capsule" }, void 0, false, {
        fileName: "app/routes/$capsuleId.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: capsule.media.map((media) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 border rounded", children: media.type.startsWith("image") ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: media.url, alt: "", className: "w-full" }, void 0, false, {
        fileName: "app/routes/$capsuleId.tsx",
        lineNumber: 99,
        columnNumber: 53
      }, this) : media.type.startsWith("video") ? (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { controls: true, src: media.url, className: "w-full" }, void 0, false, {
          fileName: "app/routes/$capsuleId.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this)
      ) : (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("audio", { controls: true, src: media.url }, void 0, false, {
          fileName: "app/routes/$capsuleId.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this)
      ) }, media.id, false, {
        fileName: "app/routes/$capsuleId.tsx",
        lineNumber: 98,
        columnNumber: 43
      }, this)) }, void 0, false, {
        fileName: "app/routes/$capsuleId.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 93,
      columnNumber: 55
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", className: "bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition", children: "Back to dashboard" }, void 0, false, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 108,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/$capsuleId.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$capsuleId.tsx",
    lineNumber: 74,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/$capsuleId.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s(CapsuleDetail, "yp9pyzqaC1L+OPbVRLhXF8Hov7Y=", false, function() {
  return [useLoaderData];
});
_c = CapsuleDetail;
var _c;
$RefreshReg$(_c, "CapsuleDetail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CapsuleDetail as default
};
//# sourceMappingURL=/build/routes/$capsuleId-H3PIAJOI.js.map
