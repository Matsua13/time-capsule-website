import {
  Link
} from "/build/_shared/chunk-HBOENHLD.js";
import "/build/_shared/chunk-U4FRFQSK.js";
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

// app/routes/_index.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1740075776369.2356";
}
var ScrollReveal = ({
  children
}) => {
  _s();
  const ref = (0, import_react2.useRef)(null);
  const [isVisible, setVisible] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.3
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: `transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`, children }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
};
_s(ScrollReveal, "2AcwfLQgrHtDYQk40kLPGN9VtU4=");
_c = ScrollReveal;
var stories = [{
  id: "abandoned-dream",
  title: "The Regret of an Abandoned Dream",
  parts: {
    past: "When she was young, Lea dreamed of exploring the world and becoming a famous photographer. With eyes shining with ambition, she created a capsule in which she recorded her dreams, her first photos, and her promise never to give up. Every word and image reflected a future full of possibilities.",
    present: "Years later, exhausted by the routine and compromises of everyday life, Lea rediscovered her capsule. As she looked through the memories, she realised with bitterness that she had let her dreams die. Her once-vibrant ambitions had dissipated, and her heart clenched at the realization that she had achieved nothing of what she had hoped. The pain of regret washed over her, marking a moment of profound self-questioning.",
    future: "However, this painful realization became the starting point for a new beginning. In the tumult of her present, Lea chose to draw on this emotion to reclaim her life. She realised that, to transform her future, it first had to be rooted in a sincere and committed present. That day, despite the sadness of lost dreams, she vowed to rekindle the flame of her passion, to take control of her life and, from that moment on, to build the future she had always wanted."
  }
}, {
  id: "brushstrokes-of-time",
  title: "Brushstrokes of Time",
  parts: {
    past: "In the tender light of a bygone era, a young drawing enthusiast, armed with his first pencils and a notebook brimming with hopes, sends a capsule to his future self. In this message, he captures the innocence of his first sketches, the naivety of his ambitions and the ardent dream of becoming a recognised artist.",
    present: "Some years later, after overcoming some challenges and tasting some unexpected successes, he rediscovered this message. In reading it, he rediscovers the creative spark that once animated him, realising how much his journey has shaped his sensibility and refined his art.",
    future: "By projecting himself into the future, he sees himself not only as the accomplished artist he aspires to be, but also understands that it is in the here and now that the canvases of his dreams are woven. As he closes the capsule, he seals his gratitude to the young dreamer he once was, celebrating the continuity of his passion anchored in the beauty of the present and all the road still to travel."
  }
}, {
  id: "inner-traveller",
  title: "The Rebirth of an Inner Traveller",
  parts: {
    past: "At the dawn of a life in search of renewal, a woman, tired of the stifling routine, records her thoughts, doubts and ambitions in a capsule. In those initial moments, she dreamt of escape and exploration, yearning to rediscover herself far from the beaten track.",
    present: "Today, as she revisits the words she spoke to herself, she can see the depth of her evolution. Each sentence resonates with the challenges she overcame and the victories that enriched her journey towards a more authentic existence.",
    future: "By looking ahead, she sees herself not only as an accomplished traveller, master of herself and the horizons she explores, but also as a woman who savours the present to the full. She understands that every moment is a precious stone on the path to her transformation. When she reopens this capsule, she will be deeply grateful to the young girl on a quest who dared to dream of change, celebrating her inner rebirth and the importance of living fully in the present."
  }
}];
function TimelineStory({
  story
}) {
  _s2();
  const [selectedPeriod, setSelectedPeriod] = (0, import_react2.useState)("past");
  const periodOptions = [{
    key: "past",
    label: "Past"
  }, {
    key: "present",
    label: "Present"
  }, {
    key: "future",
    label: "Future"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-bold mb-4 text-gray-800 text-center", children: story.title }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center space-x-4 mb-4", children: periodOptions.map(({
      key,
      label
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSelectedPeriod(key), className: `px-4 py-2 rounded-full border transition-colors ${selectedPeriod === key ? "bg-green-500 text-white" : "bg-white text-blue-600 hover:bg-blue-100"}`, children: label }, key, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 104,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 bg-yellow-100 rounded-lg border border-yellow-400 shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-800 text-justify font-pressstart drop-shadow-sm", children: story.parts[selectedPeriod] }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
_s2(TimelineStory, "REYn5D5mC9opJZwzPxk0anOdSd8=");
_c2 = TimelineStory;
function TimelineSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollReveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-12 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-4xl font-extrabold text-white drop-shadow-xl text-center mb-8 tracking-widest", style: {
      textShadow: "3px 3px 6px rgba(0, 0, 0, 1)"
    }, children: "Stories of Time" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 124,
      columnNumber: 9
    }, this),
    stories.map((story) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TimelineStory, { story }, story.id, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 129,
      columnNumber: 31
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/signup", className: "mr-4 inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors", children: "Share your story" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 131,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 130,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 123,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 122,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 121,
    columnNumber: 10
  }, this);
}
_c3 = TimelineSection;
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex flex-col bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300 text-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "w-full p-6 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-extrabold drop-shadow-xl", style: {
      textShadow: "3px 3px 6px rgba(0, 0, 0, 1)"
    }, children: "Time Capsule" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 144,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 143,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative flex flex-col justify-center items-center h-[80vh] px-4 pt-24", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl md:text-3xl lg:text-4xl font-light drop-shadow-md", children: "Step into time's magic\u2014Unlock your memories, embrace your future." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 154,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 flex gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "px-6 py-3 rounded-full bg-amber-300 hover:bg-amber-500 text-white font-bold transform hover:scale-105 transition", children: "Log In" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/signup", className: "px-6 py-3 rounded-full bg-amber-300 hover:bg-amber-500 text-white font-bold transform hover:scale-105 transition", children: "Sign Up" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-8 h-8 animate-bounce text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 169,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 168,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 152,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-20 -mt-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollReveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl mx-auto px-4 p-8 bg-yellow-200 rounded-3xl shadow-xl border-4 border-yellow-500 text-gray-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold mb-4 text-center drop-shadow-lg", children: "About" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base leading-relaxed text-justify", children: "Once upon a time, there was a little girl with eyes sparkling with innocence, who dreamt of feeling the salt of the ocean caress her cheeks and hearing the murmur of the waves as a lullaby every day. She imagined herself, a few years later, living by the sea, her feet in the foam, gliding over the waves like a dancer in symphony with the ocean." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 181,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base leading-relaxed mt-4 text-justify", children: "One day, determined to seal her dreams, she created a time capsule, a message of hope and ambition, destined for her future version. Five years later, after a morning surf session, she found herself facing the ocean \u2014 the ocean that had become her daily life over the last year. She felt immense gratitude towards the little girl who had dared to dream. You are where you wanted to be." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 184,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base leading-relaxed mt-4 text-justify", children: "Time Capsule is much more than an app. Whether you want to send an inspiring, public and accessible capsule to your friends, record your dreams and achievements for yourself, or share a personalised message for a birthday, an amusing anecdote or to comfort a loved one, Time Capsule transforms every moment into a precious bridge between the past and the future. Be creative and let your messages travel through time." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 187,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 177,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 176,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 175,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TimelineSection, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 195,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "bg-white text-gray-900 py-8 border-t-4 border-sky-500 shadow-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 md:mb-0 text-center md:text-left", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-3xl font-bold text-gray-700 drop-shadow-md", children: "Time Capsule" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 203,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "A journey through time and memories" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 206,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 202,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap justify-center space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/safety-tips", className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500", children: "Safety Tips" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 211,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/community-guidelines", className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500", children: "Community Guidelines" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 214,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/upcoming-updates", className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500", children: "Upcoming Updates" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 217,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/contact-us", className: "font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-500", children: "Contact Us" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 220,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 210,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 201,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex flex-col md:flex-row items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap justify-center space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/privacy-policy", className: "text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-sky-500", children: "Privacy Policy" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 228,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/terms-of-use", className: "text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-sky-500", children: "Terms of Use" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 231,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 227,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 md:mt-0 text-xs text-gray-500 text-center", children: "\xA9 2023 Time Capsule. All rights reserved." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 226,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 199,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 141,
    columnNumber: 10
  }, this);
}
_c4 = Index;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "ScrollReveal");
$RefreshReg$(_c2, "TimelineStory");
$RefreshReg$(_c3, "TimelineSection");
$RefreshReg$(_c4, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-G73HSPV7.js.map
