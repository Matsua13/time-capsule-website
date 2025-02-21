import {
  Form,
  Link,
  useLoaderData
} from "/build/_shared/chunk-HBOENHLD.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_auth
} from "/build/_shared/chunk-JSCKBFOW.js";
import {
  require_db
} from "/build/_shared/chunk-KONDUBG3.js";
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

// app/routes/dashboard.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);
var import_auth = __toESM(require_auth(), 1);

// app/components/Timeline.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Timeline.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Timeline.tsx"
  );
  import.meta.hot.lastModified = "1740075741497.3647";
}
var Timeline = ({
  capsules
}) => {
  const sortedCapsules = [...capsules].sort((a, b) => new Date(b.scheduledDate).getTime() - new Date(a.scheduledDate).getTime());
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { style: {
    listStyle: "none",
    paddingLeft: 0
  }, children: sortedCapsules.map((capsule) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { style: {
    marginBottom: "20px",
    position: "relative"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    borderLeft: "2px solid #333",
    paddingLeft: "15px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: capsule.title }, void 0, false, {
      fileName: "app/components/Timeline.tsx",
      lineNumber: 41,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: new Date(capsule.scheduledDate).toLocaleString() }, void 0, false, {
      fileName: "app/components/Timeline.tsx",
      lineNumber: 42,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Timeline.tsx",
    lineNumber: 37,
    columnNumber: 13
  }, this) }, capsule.id, false, {
    fileName: "app/components/Timeline.tsx",
    lineNumber: 33,
    columnNumber: 40
  }, this)) }, void 0, false, {
    fileName: "app/components/Timeline.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Timeline.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c = Timeline;
var Timeline_default = Timeline;
var _c;
$RefreshReg$(_c, "Timeline");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/CalendarView.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/CalendarView.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/CalendarView.tsx"
  );
  import.meta.hot.lastModified = "1740075721267.8442";
}
function CalendarView({
  capsules
}) {
  const now = /* @__PURE__ */ new Date();
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth();
  const currentDay = now.getUTCDate();
  const monthName = now.toLocaleString("default", {
    month: "long"
  });
  const daysInMonth = new Date(year, month + 1, 0).getUTCDate();
  const capsuleDays = capsules.map((capsule) => {
    const date = new Date(capsule.scheduledDate);
    if (date.getUTCFullYear() === year && date.getUTCMonth() === month) {
      return date.getUTCDate();
    }
    return null;
  }).filter((day) => day !== null);
  const firstDayOfWeek = new Date(Date.UTC(year, month, 1)).getUTCDay();
  const calendarCells = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarCells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(day);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4 bg-white rounded-3xl shadow-xl border-4 border-slate-300", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-xl font-semibold mb-2 text-center", children: [
      monthName,
      " ",
      year
    ] }, void 0, true, {
      fileName: "app/components/CalendarView.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-7 gap-2 text-center", children: [
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-bold", children: dayName }, dayName, false, {
        fileName: "app/components/CalendarView.tsx",
        lineNumber: 65,
        columnNumber: 75
      }, this)),
      calendarCells.map((cell, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-12 flex items-center justify-center border border-gray-200 rounded", children: cell ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${cell === currentDay ? "bg-green-200 font-bold rounded-full px-1" : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: cell }, void 0, false, {
          fileName: "app/components/CalendarView.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this),
        capsuleDays.includes(cell) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-1", title: "Capsule scheduled", children: "\u{1F48A}" }, void 0, false, {
          fileName: "app/components/CalendarView.tsx",
          lineNumber: 71,
          columnNumber: 48
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/CalendarView.tsx",
        lineNumber: 69,
        columnNumber: 21
      }, this) : null }, index, false, {
        fileName: "app/components/CalendarView.tsx",
        lineNumber: 68,
        columnNumber: 45
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/CalendarView.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CalendarView.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_c2 = CalendarView;
var _c2;
$RefreshReg$(_c2, "CalendarView");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.tsx"
  );
  import.meta.hot.lastModified = "1740083204904.0317";
}
function Dashboard() {
  _s();
  const {
    capsules,
    user,
    notifications,
    reminders
  } = useLoaderData();
  const [filter, setFilter] = (0, import_react2.useState)("all");
  const [localReminders, setLocalReminders] = (0, import_react2.useState)(reminders);
  (0, import_react2.useEffect)(() => {
    const timer = setTimeout(() => {
      setLocalReminders([]);
    }, 6e4);
    return () => clearTimeout(timer);
  }, []);
  let filteredCapsules = capsules;
  if (filter === "sent") {
    filteredCapsules = capsules.filter((c) => c.ownerId === user.id);
  } else if (filter === "received") {
    filteredCapsules = capsules.filter((c) => c.ownerId !== user.id);
  }
  const now = /* @__PURE__ */ new Date();
  const upcomingCapsules = filteredCapsules.filter((c) => new Date(c.scheduledDate) >= now);
  const pastCapsules = filteredCapsules.filter((c) => new Date(c.scheduledDate) < now);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "min-h-screen p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-gray-900", children: [
    localReminders.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-6 p-4 bg-emerald-100 text-emerald-800 rounded", children: localReminders.map((reminder) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm", children: reminder.message }, reminder.id, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 171,
      columnNumber: 43
    }, this)) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 170,
      columnNumber: 37
    }, this),
    notifications.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-6 p-4 bg-amber-100 text-amber-800 rounded", children: notifications.map((notif) => {
      const match = notif.message.match(/^capsule:(\d+):\s*(.*)/);
      if (match) {
        const capsuleId = match[1];
        const displayMessage = match[2];
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: `/notification?capsuleId=${capsuleId}&notifId=${notif.id}`, className: "hover:underline", children: displayMessage }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 182,
          columnNumber: 19
        }, this) }, notif.id, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 181,
          columnNumber: 18
        }, this);
      } else {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm", children: notif.message }, notif.id, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 187,
          columnNumber: 18
        }, this);
      }
    }) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 175,
      columnNumber: 36
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-5xl font-extrabold drop-shadow-xl", children: "Dashboard" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", className: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition", children: "Log out" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 196,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 193,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "flex justify-center mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/new", className: "bg-amber-300 hover:bg-amber-500 text-white px-6 py-3 rounded transition", children: "Create a Capsule" }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 204,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 203,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-6 flex space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => setFilter("all"), className: `px-4 py-2 rounded transition ${filter === "all" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"}`, children: "All Capsules" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 211,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => setFilter("sent"), className: `px-4 py-2 rounded transition ${filter === "sent" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"}`, children: "Sent" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 214,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => setFilter("received"), className: `px-4 py-2 rounded transition ${filter === "received" ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"}`, children: "Received" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 217,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 210,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-semibold mb-4", children: "Upcoming Capsules" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      upcomingCapsules.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid gap-4", children: upcomingCapsules.map((capsule) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between items-center p-4 bg-white rounded shadow hover:bg-gray-100 transition", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-xl font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/${capsule.id}`, className: "text-sky-700 hover:underline", children: capsule.title }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 229,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 228,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm text-gray-600", children: capsule.content }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 233,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xs text-gray-500", children: [
            "Opening day: ",
            new Date(capsule.scheduledDate).toLocaleString()
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 234,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 227,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/delete-capsules", className: "ml-4 text-red-600 hover:text-red-800", title: "Manage capsule deletions", children: "\u{1F5D1}\uFE0F" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 239,
          columnNumber: 17
        }, this)
      ] }, capsule.id, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 226,
        columnNumber: 46
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 225,
        columnNumber: 36
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "No upcoming capsules." }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 243,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-semibold mb-4", children: "Previous Capsules" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 248,
        columnNumber: 9
      }, this),
      pastCapsules.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid gap-4", children: pastCapsules.map((capsule) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between items-center p-4 bg-white rounded shadow hover:bg-gray-100 transition", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-xl font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/${capsule.id}`, className: "text-sky-700 hover:underline", children: capsule.title }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 253,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 252,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm text-gray-600", children: capsule.content }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 257,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xs text-gray-500", children: [
            "Opening day: ",
            new Date(capsule.scheduledDate).toLocaleString()
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 258,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 251,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/delete-capsules", className: "ml-4 text-red-600 hover:text-red-800", title: "Manage capsule deletions", children: "\u{1F5D1}\uFE0F" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 262,
          columnNumber: 17
        }, this)
      ] }, capsule.id, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 250,
        columnNumber: 42
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 249,
        columnNumber: 32
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "No previous capsules." }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 266,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 247,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-center text-2xl font-semibold mb-4", children: "Visualisations" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 271,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-xl font-semibold mb-2", children: "Timeline" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 274,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Timeline_default, { capsules }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 275,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 273,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-xl font-semibold mb-2", children: "Calendar" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 278,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CalendarView, { capsules }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 279,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 277,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 270,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 168,
    columnNumber: 10
  }, this);
}
_s(Dashboard, "GwiGptDDsD2739Md0/ltsiqL/fg=", false, function() {
  return [useLoaderData];
});
_c3 = Dashboard;
var _c3;
$RefreshReg$(_c3, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-QFIA3LAB.js.map
