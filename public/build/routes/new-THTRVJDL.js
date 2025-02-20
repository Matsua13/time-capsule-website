import {
  Form,
  useActionData,
  useNavigation
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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-FOVVXGJ2.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/new.tsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_db = __toESM(require_db(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/new.tsx"
  );
  import.meta.hot.lastModified = "1740079377228.2295";
}
function NewCapsule() {
  _s();
  const actionData = useActionData();
  const transition = useNavigation();
  const [selectedVisibility, setSelectedVisibility] = (0, import_react2.useState)("private");
  const [groupChoice, setGroupChoice] = (0, import_react2.useState)("");
  const handleSubmit = (event) => {
    const confirmed = window.confirm("Warning: Once created, the capsule cannot be modified. This is deliberate, to encourage you to be yourself: the idea is to be in the present. The editable draft option will come later for those who need more reflection.");
    if (!confirmed) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-sky-600 p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-extrabold text-white mb-6 drop-shadow-lg", children: "Create a new Capsule" }, void 0, false, {
      fileName: "app/routes/new.tsx",
      lineNumber: 219,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", encType: "multipart/form-data", onSubmit: handleSubmit, className: "w-full max-w-md bg-yellow-200 p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 text-red-600 font-bold", children: actionData.error }, void 0, false, {
        fileName: "app/routes/new.tsx",
        lineNumber: 223,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mb-4", children: [
        "Capsule Name:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", required: true, className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" }, void 0, false, {
          fileName: "app/routes/new.tsx",
          lineNumber: 226,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/new.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mb-4", children: [
        "Your thoughts:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "content", required: true, className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" }, void 0, false, {
          fileName: "app/routes/new.tsx",
          lineNumber: 230,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/new.tsx",
        lineNumber: 228,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mb-4", children: [
        "Opening Day:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "datetime-local", name: "scheduledDate", required: true, className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" }, void 0, false, {
          fileName: "app/routes/new.tsx",
          lineNumber: 234,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/new.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mb-4", children: [
        "Visibility:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "visibility", required: true, onChange: (e) => {
          setSelectedVisibility(e.target.value);
          if (e.target.value !== "group") {
            setGroupChoice("");
          }
        }, className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "private", children: "Private" }, void 0, false, {
            fileName: "app/routes/new.tsx",
            lineNumber: 244,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "public", children: "Public" }, void 0, false, {
            fileName: "app/routes/new.tsx",
            lineNumber: 245,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "group", children: "Group" }, void 0, false, {
            fileName: "app/routes/new.tsx",
            lineNumber: 246,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/new.tsx",
          lineNumber: 238,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/new.tsx",
        lineNumber: 236,
        columnNumber: 9
      }, this),
      selectedVisibility === "group" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "mb-4 border border-gray-300 p-4 rounded", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { className: "text-lg font-semibold mb-2", children: "How do you want to send the Capsule?" }, void 0, false, {
          fileName: "app/routes/new.tsx",
          lineNumber: 251,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "inline-flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "groupChoice", value: "username", onChange: (e) => setGroupChoice(e.target.value), className: "mr-2", required: true }, void 0, false, {
            fileName: "app/routes/new.tsx",
            lineNumber: 256,
            columnNumber: 17
          }, this),
          "Via username"
        ] }, void 0, true, {
          fileName: "app/routes/new.tsx",
          lineNumber: 255,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/new.tsx",
          lineNumber: 254,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "inline-flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "groupChoice", value: "email", onChange: (e) => setGroupChoice(e.target.value), className: "mr-2", required: true }, void 0, false, {
            fileName: "app/routes/new.tsx",
            lineNumber: 262,
            columnNumber: 17
          }, this),
          "Via email"
        ] }, void 0, true, {
          fileName: "app/routes/new.tsx",
          lineNumber: 261,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/new.tsx",
          lineNumber: 260,
          columnNumber: 13
        }, this),
        groupChoice === "username" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mt-2", children: [
          "Recipient username:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "groupUsername", required: true, className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" }, void 0, false, {
            fileName: "app/routes/new.tsx",
            lineNumber: 268,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/new.tsx",
          lineNumber: 266,
          columnNumber: 44
        }, this),
        groupChoice === "email" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mt-2", children: [
          "Recipient email:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "groupEmail", required: true, className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" }, void 0, false, {
            fileName: "app/routes/new.tsx",
            lineNumber: 272,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/new.tsx",
          lineNumber: 270,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/new.tsx",
        lineNumber: 250,
        columnNumber: 44
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "mb-4 border border-gray-300 p-4 rounded", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { className: "text-lg font-semibold", children: "Add a gift" }, void 0, false, {
          fileName: "app/routes/new.tsx",
          lineNumber: 277,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mb-2", children: [
          "Select a media type:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "file", name: "mediaFile", accept: "image/*,video/*,audio/*", className: "mt-1 block w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" }, void 0, false, {
            fileName: "app/routes/new.tsx",
            lineNumber: 282,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/new.tsx",
          lineNumber: 280,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/new.tsx",
        lineNumber: 276,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: transition.state === "submitting", className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-xl transform hover:scale-105 transition", children: transition.state === "submitting" ? "Creation ongoing..." : "Let's create the magic capsule!" }, void 0, false, {
        fileName: "app/routes/new.tsx",
        lineNumber: 285,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/new.tsx",
      lineNumber: 222,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/new.tsx",
    lineNumber: 218,
    columnNumber: 10
  }, this);
}
_s(NewCapsule, "lBC1p2b/6cR357LRhxtOEqhOBrQ=", false, function() {
  return [useActionData, useNavigation];
});
_c = NewCapsule;
var _c;
$RefreshReg$(_c, "NewCapsule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewCapsule as default
};
//# sourceMappingURL=/build/routes/new-THTRVJDL.js.map
