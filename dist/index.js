"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/react-is/cjs/react-is.production.js
var require_react_is_production = __commonJS({
  "node_modules/react-is/cjs/react-is.production.js"(exports2) {
    "use strict";
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
    var REACT_MEMO_TYPE = Symbol.for("react.memo");
    var REACT_LAZY_TYPE = Symbol.for("react.lazy");
    var REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition");
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    function typeOf(object) {
      if ("object" === typeof object && null !== object) {
        var $$typeof = object.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            switch (object = object.type, object) {
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
              case REACT_SUSPENSE_LIST_TYPE:
              case REACT_VIEW_TRANSITION_TYPE:
                return object;
              default:
                switch (object = object && object.$$typeof, object) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                    return object;
                  case REACT_CONSUMER_TYPE:
                    return object;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
    }
    exports2.ContextConsumer = REACT_CONSUMER_TYPE;
    exports2.ContextProvider = REACT_CONTEXT_TYPE;
    exports2.Element = REACT_ELEMENT_TYPE;
    exports2.ForwardRef = REACT_FORWARD_REF_TYPE;
    exports2.Fragment = REACT_FRAGMENT_TYPE;
    exports2.Lazy = REACT_LAZY_TYPE;
    exports2.Memo = REACT_MEMO_TYPE;
    exports2.Portal = REACT_PORTAL_TYPE;
    exports2.Profiler = REACT_PROFILER_TYPE;
    exports2.StrictMode = REACT_STRICT_MODE_TYPE;
    exports2.Suspense = REACT_SUSPENSE_TYPE;
    exports2.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
    exports2.isContextConsumer = function(object) {
      return typeOf(object) === REACT_CONSUMER_TYPE;
    };
    exports2.isContextProvider = function(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    };
    exports2.isElement = function(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    };
    exports2.isForwardRef = function(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    };
    exports2.isFragment = function(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    };
    exports2.isLazy = function(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    };
    exports2.isMemo = function(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    };
    exports2.isPortal = function(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    };
    exports2.isProfiler = function(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    };
    exports2.isStrictMode = function(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    };
    exports2.isSuspense = function(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    };
    exports2.isSuspenseList = function(object) {
      return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
    };
    exports2.isValidElementType = function(type) {
      return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
    };
    exports2.typeOf = typeOf;
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports2) {
    "use strict";
    "production" !== process.env.NODE_ENV && (function() {
      function typeOf(object) {
        if ("object" === typeof object && null !== object) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              switch (object = object.type, object) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                case REACT_VIEW_TRANSITION_TYPE:
                  return object;
                default:
                  switch (object = object && object.$$typeof, object) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                      return object;
                    case REACT_CONSUMER_TYPE:
                      return object;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
      exports2.ContextConsumer = REACT_CONSUMER_TYPE;
      exports2.ContextProvider = REACT_CONTEXT_TYPE;
      exports2.Element = REACT_ELEMENT_TYPE;
      exports2.ForwardRef = REACT_FORWARD_REF_TYPE;
      exports2.Fragment = REACT_FRAGMENT_TYPE;
      exports2.Lazy = REACT_LAZY_TYPE;
      exports2.Memo = REACT_MEMO_TYPE;
      exports2.Portal = REACT_PORTAL_TYPE;
      exports2.Profiler = REACT_PROFILER_TYPE;
      exports2.StrictMode = REACT_STRICT_MODE_TYPE;
      exports2.Suspense = REACT_SUSPENSE_TYPE;
      exports2.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
      exports2.isContextConsumer = function(object) {
        return typeOf(object) === REACT_CONSUMER_TYPE;
      };
      exports2.isContextProvider = function(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      };
      exports2.isElement = function(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      };
      exports2.isForwardRef = function(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      };
      exports2.isFragment = function(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      };
      exports2.isLazy = function(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      };
      exports2.isMemo = function(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      };
      exports2.isPortal = function(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      };
      exports2.isProfiler = function(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      };
      exports2.isStrictMode = function(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      };
      exports2.isSuspense = function(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      };
      exports2.isSuspenseList = function(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
      };
      exports2.isValidElementType = function(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
      };
      exports2.typeOf = typeOf;
    })();
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_is_production();
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  baseTheme: () => baseTheme_default,
  createTheme: () => import_styles4.createTheme,
  themeCosmosDark: () => themeCosmosDark_default,
  themeCosmosLight: () => themeCosmosLight_default
});
module.exports = __toCommonJS(index_exports);

// src/baseTheme.ts
var import_styles = require("@mui/material/styles");

// src/tokens/themeTokensCosmos.json
var themeTokensCosmos_default = {
  palette: {
    text: {
      primary: {
        $type: "color",
        $value: {
          Light: "#101840",
          Dark: "#ffffff"
        }
      },
      secondary: {
        $type: "color",
        $value: {
          Light: "rgba(16, 24, 64, 0.60)",
          Dark: "rgba(255, 255, 255, 0.70)"
        }
      },
      disabled: {
        $type: "color",
        $value: {
          Light: "rgba(16, 24, 64, 0.38)",
          Dark: "rgba(255, 255, 255, 0.50)"
        }
      },
      _states: {
        hover: {
          $type: "color",
          $value: {
            Light: "rgba(16, 24, 64, 0.04)",
            Dark: "rgba(255, 255, 255, 0.08)"
          }
        },
        selected: {
          $type: "color",
          $value: {
            Light: "rgba(16, 24, 64, 0.08)",
            Dark: "rgba(255, 255, 255, 0.16)"
          }
        },
        focus: {
          $type: "color",
          $value: {
            Light: "rgba(16, 24, 64, 0.12)",
            Dark: "rgba(255, 255, 255, 0.12)"
          }
        },
        focusVisible: {
          $type: "color",
          $value: {
            Light: "rgba(16, 24, 64, 0.30)",
            Dark: "rgba(255, 255, 255, 0.30)"
          }
        }
      }
    },
    primary: {
      "50": {
        $type: "color",
        $value: {
          Light: "{primary.light.50}",
          Dark: "{primary.dark.50}"
        }
      },
      "100": {
        $type: "color",
        $value: {
          Light: "{primary.light.100}",
          Dark: "{primary.dark.100}"
        }
      },
      "200": {
        $type: "color",
        $value: {
          Light: "{primary.light.200}",
          Dark: "{primary.dark.200}"
        }
      },
      "300": {
        $type: "color",
        $value: {
          Light: "{primary.light.300}",
          Dark: "{primary.dark.300}"
        }
      },
      "400": {
        $type: "color",
        $value: {
          Light: "{primary.light.400}",
          Dark: "{primary.dark.400}"
        }
      },
      "500": {
        $type: "color",
        $value: {
          Light: "{primary.light.500}",
          Dark: "{primary.dark.500}"
        }
      },
      "600": {
        $type: "color",
        $value: {
          Light: "{primary.light.600}",
          Dark: "{primary.dark.600}"
        }
      },
      "700": {
        $type: "color",
        $value: {
          Light: "{primary.light.700}",
          Dark: "{primary.dark.700}"
        }
      },
      "800": {
        $type: "color",
        $value: {
          Light: "{primary.light.800}",
          Dark: "{primary.dark.800}"
        }
      },
      "900": {
        $type: "color",
        $value: {
          Light: "{primary.light.900}",
          Dark: "{primary.dark.900}"
        }
      },
      main: {
        $type: "color",
        $value: {
          Light: "{primary.light.500}",
          Dark: "{primary.dark.500}"
        }
      },
      dark: {
        $type: "color",
        $value: {
          Light: "{primary.light.900}",
          Dark: "{primary.dark.900}"
        }
      },
      light: {
        $type: "color",
        $value: {
          Light: "{primary.light.400}",
          Dark: "{primary.dark.400}"
        }
      },
      contrastText: {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#ffffff"
        }
      },
      _states: {
        hover: {
          $type: "color",
          $value: {
            Light: "rgba(83, 35, 222, 0.04)",
            Dark: "rgba(115, 88, 250, 0.08)"
          }
        },
        selected: {
          $type: "color",
          $value: {
            Light: "rgba(83, 35, 222, 0.08)",
            Dark: "rgba(115, 88, 250, 0.16)"
          }
        },
        focus: {
          $type: "color",
          $value: {
            Light: "rgba(83, 35, 222, 0.12)",
            Dark: "rgba(115, 88, 250, 0.12)"
          }
        },
        focusVisible: {
          $type: "color",
          $value: {
            Light: "rgba(83, 35, 222, 0.30)",
            Dark: "rgba(115, 88, 250, 0.30)"
          }
        },
        outlinedBorder: {
          $type: "color",
          $value: {
            Light: "rgba(83, 35, 222, 0.50)",
            Dark: "rgba(115, 88, 250, 0.50)"
          }
        }
      }
    },
    secondary: {
      "50": {
        $type: "color",
        $value: {
          Light: "{secondary.50}",
          Dark: "{secondary.50}"
        }
      },
      "100": {
        $type: "color",
        $value: {
          Light: "{secondary.100}",
          Dark: "{secondary.100}"
        }
      },
      "200": {
        $type: "color",
        $value: {
          Light: "{secondary.200}",
          Dark: "{secondary.200}"
        }
      },
      "300": {
        $type: "color",
        $value: {
          Light: "{secondary.300}",
          Dark: "{secondary.300}"
        }
      },
      "400": {
        $type: "color",
        $value: {
          Light: "{secondary.400}",
          Dark: "{secondary.400}"
        }
      },
      "500": {
        $type: "color",
        $value: {
          Light: "{secondary.500}",
          Dark: "{secondary.500}"
        }
      },
      "600": {
        $type: "color",
        $value: {
          Light: "{secondary.600}",
          Dark: "{secondary.600}"
        }
      },
      "700": {
        $type: "color",
        $value: {
          Light: "{secondary.700}",
          Dark: "{secondary.700}"
        }
      },
      "800": {
        $type: "color",
        $value: {
          Light: "{secondary.800}",
          Dark: "{secondary.800}"
        }
      },
      "900": {
        $type: "color",
        $value: {
          Light: "{secondary.900}",
          Dark: "{secondary.900}"
        }
      },
      main: {
        $type: "color",
        $value: {
          Light: "{secondary.500}",
          Dark: "{secondary.200}"
        }
      },
      dark: {
        $type: "color",
        $value: {
          Light: "{secondary.700}",
          Dark: "{secondary.400}"
        }
      },
      light: {
        $type: "color",
        $value: {
          Light: "{secondary.300}",
          Dark: "{secondary.50}"
        }
      },
      contrastText: {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#ffffff"
        }
      },
      _states: {
        hover: {
          $type: "color",
          $value: {
            Light: "rgba(0, 188, 212, 0.04)",
            Dark: "rgba(128, 222, 234, 0.08)"
          }
        },
        selected: {
          $type: "color",
          $value: {
            Light: "rgba(0, 188, 212, 0.08)",
            Dark: "rgba(128, 222, 234, 0.16)"
          }
        },
        focus: {
          $type: "color",
          $value: {
            Light: "rgba(0, 188, 212, 0.12)",
            Dark: "rgba(128, 222, 234, 0.12)"
          }
        },
        focusVisible: {
          $type: "color",
          $value: {
            Light: "rgba(0, 188, 212, 0.30)",
            Dark: "rgba(128, 222, 234, 0.30)"
          }
        },
        outlinedBorder: {
          $type: "color",
          $value: {
            Light: "rgba(0, 188, 212, 0.50)",
            Dark: "rgba(128, 222, 234, 0.50)"
          }
        }
      }
    },
    action: {
      active: {
        $type: "color",
        $value: {
          Light: "rgba(16, 24, 64, 0.54)",
          Dark: "#ffffff"
        }
      },
      hover: {
        $type: "color",
        $value: {
          Light: "rgba(16, 24, 64, 0.04)",
          Dark: "rgba(255, 255, 255, 0.08)"
        }
      },
      selected: {
        $type: "color",
        $value: {
          Light: "rgba(16, 24, 64, 0.08)",
          Dark: "rgba(255, 255, 255, 0.16)"
        }
      },
      disabledBackground: {
        $type: "color",
        $value: {
          Light: "rgba(16, 24, 64, 0.12)",
          Dark: "rgba(255, 255, 255, 0.12)"
        }
      },
      focus: {
        $type: "color",
        $value: {
          Light: "rgba(16, 24, 64, 0.12)",
          Dark: "rgba(255, 255, 255, 0.12)"
        }
      },
      disabled: {
        $type: "color",
        $value: {
          Light: "rgba(16, 24, 64, 0.26)",
          Dark: "rgba(255, 255, 255, 0.30)"
        }
      }
    },
    error: {
      "50": {
        $type: "color",
        $value: {
          Light: "{red.50}",
          Dark: "{red.50}"
        }
      },
      "100": {
        $type: "color",
        $value: {
          Light: "{red.100}",
          Dark: "{red.100}"
        }
      },
      "200": {
        $type: "color",
        $value: {
          Light: "{red.200}",
          Dark: "{red.200}"
        }
      },
      "300": {
        $type: "color",
        $value: {
          Light: "{red.300}",
          Dark: "{red.300}"
        }
      },
      "400": {
        $type: "color",
        $value: {
          Light: "{red.400}",
          Dark: "{red.400}"
        }
      },
      "500": {
        $type: "color",
        $value: {
          Light: "{red.500}",
          Dark: "{red.500}"
        }
      },
      "600": {
        $type: "color",
        $value: {
          Light: "{red.600}",
          Dark: "{red.600}"
        }
      },
      "700": {
        $type: "color",
        $value: {
          Light: "{red.700}",
          Dark: "{red.700}"
        }
      },
      "800": {
        $type: "color",
        $value: {
          Light: "{red.800}",
          Dark: "{red.800}"
        }
      },
      "900": {
        $type: "color",
        $value: {
          Light: "{red.900}",
          Dark: "{red.900}"
        }
      },
      main: {
        $type: "color",
        $value: {
          Light: "{red.700}",
          Dark: "{red.500}"
        }
      },
      dark: {
        $type: "color",
        $value: {
          Light: "{red.800}",
          Dark: "{red.700}"
        }
      },
      light: {
        $type: "color",
        $value: {
          Light: "{red.400}",
          Dark: "{red.300}"
        }
      },
      _states: {
        hover: {
          $type: "color",
          $value: {
            Light: "rgba(198, 52, 52, 0.04)",
            Dark: "rgba(209, 67, 67, 0.08)"
          }
        },
        selected: {
          $type: "color",
          $value: {
            Light: "rgba(198, 52, 52, 0.08)",
            Dark: "rgba(209, 67, 67, 0.16)"
          }
        },
        focusVisible: {
          $type: "color",
          $value: {
            Light: "rgba(198, 52, 52, 0.30)",
            Dark: "rgba(209, 67, 67, 0.30)"
          }
        },
        outlinedBorder: {
          $type: "color",
          $value: {
            Light: "rgba(198, 52, 52, 0.50)",
            Dark: "rgba(209, 67, 67, 0.50)"
          }
        }
      },
      contrastText: {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#ffffff"
        }
      }
    },
    warning: {
      "50": {
        $type: "color",
        $value: {
          Light: "{orange.50}",
          Dark: "{orange.50}"
        }
      },
      "100": {
        $type: "color",
        $value: {
          Light: "{orange.100}",
          Dark: "{orange.100}"
        }
      },
      "200": {
        $type: "color",
        $value: {
          Light: "{orange.200}",
          Dark: "{orange.200}"
        }
      },
      "300": {
        $type: "color",
        $value: {
          Light: "{orange.300}",
          Dark: "{orange.300}"
        }
      },
      "400": {
        $type: "color",
        $value: {
          Light: "{orange.400}",
          Dark: "{orange.400}"
        }
      },
      "500": {
        $type: "color",
        $value: {
          Light: "{orange.500}",
          Dark: "{orange.500}"
        }
      },
      "600": {
        $type: "color",
        $value: {
          Light: "{orange.600}",
          Dark: "{orange.600}"
        }
      },
      "700": {
        $type: "color",
        $value: {
          Light: "{orange.700}",
          Dark: "{orange.700}"
        }
      },
      "800": {
        $type: "color",
        $value: {
          Light: "{orange.800}",
          Dark: "{orange.800}"
        }
      },
      "900": {
        $type: "color",
        $value: {
          Light: "{orange.900}",
          Dark: "{orange.900}"
        }
      },
      main: {
        $type: "color",
        $value: {
          Light: "{orange.800}",
          Dark: "{orange.400}"
        }
      },
      dark: {
        $type: "color",
        $value: {
          Light: "{orange.900}",
          Dark: "{orange.700}"
        }
      },
      light: {
        $type: "color",
        $value: {
          Light: "{orange.500}",
          Dark: "{orange.300}"
        }
      },
      _states: {
        hover: {
          $type: "color",
          $value: {
            Light: "rgba(249, 104, 0, 0.04)",
            Dark: "rgba(252, 151, 38, 0.08)"
          }
        },
        selected: {
          $type: "color",
          $value: {
            Light: "rgba(249, 104, 0, 0.08)",
            Dark: "rgba(252, 151, 38, 0.16)"
          }
        },
        focusVisible: {
          $type: "color",
          $value: {
            Light: "rgba(249, 104, 0, 0.30)",
            Dark: "rgba(252, 151, 38, 0.30)"
          }
        },
        outlinedBorder: {
          $type: "color",
          $value: {
            Light: "rgba(249, 104, 0, 0.50)",
            Dark: "rgba(252, 151, 38, 0.50)"
          }
        }
      },
      contrastText: {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#ffffff"
        }
      }
    },
    info: {
      "50": {
        $type: "color",
        $value: {
          Light: "{lightBlue.50}",
          Dark: "{lightBlue.50}"
        }
      },
      "100": {
        $type: "color",
        $value: {
          Light: "{lightBlue.100}",
          Dark: "{lightBlue.100}"
        }
      },
      "200": {
        $type: "color",
        $value: {
          Light: "{lightBlue.200}",
          Dark: "{lightBlue.200}"
        }
      },
      "300": {
        $type: "color",
        $value: {
          Light: "{lightBlue.300}",
          Dark: "{lightBlue.300}"
        }
      },
      "400": {
        $type: "color",
        $value: {
          Light: "{lightBlue.400}",
          Dark: "{lightBlue.400}"
        }
      },
      "500": {
        $type: "color",
        $value: {
          Light: "{lightBlue.500}",
          Dark: "{lightBlue.500}"
        }
      },
      "600": {
        $type: "color",
        $value: {
          Light: "{lightBlue.600}",
          Dark: "{lightBlue.600}"
        }
      },
      "700": {
        $type: "color",
        $value: {
          Light: "{lightBlue.700}",
          Dark: "{lightBlue.700}"
        }
      },
      "800": {
        $type: "color",
        $value: {
          Light: "{lightBlue.800}",
          Dark: "{lightBlue.800}"
        }
      },
      "900": {
        $type: "color",
        $value: {
          Light: "{lightBlue.900}",
          Dark: "{lightBlue.900}"
        }
      },
      main: {
        $type: "color",
        $value: {
          Light: "{lightBlue.700}",
          Dark: "{lightBlue.400}"
        }
      },
      dark: {
        $type: "color",
        $value: {
          Light: "{lightBlue.900}",
          Dark: "{lightBlue.700}"
        }
      },
      light: {
        $type: "color",
        $value: {
          Light: "{lightBlue.500}",
          Dark: "{lightBlue.300}"
        }
      },
      _states: {
        hover: {
          $type: "color",
          $value: {
            Light: "rgba(34, 141, 184, 0.04)",
            Dark: "rgba(77, 173, 206, 0.08)"
          }
        },
        selected: {
          $type: "color",
          $value: {
            Light: "rgba(34, 141, 184, 0.08)",
            Dark: "rgba(77, 173, 206, 0.16)"
          }
        },
        focusVisible: {
          $type: "color",
          $value: {
            Light: "rgba(34, 141, 184, 0.30)",
            Dark: "rgba(77, 173, 206, 0.30)"
          }
        },
        outlinedBorder: {
          $type: "color",
          $value: {
            Light: "rgba(34, 141, 184, 0.50)",
            Dark: "rgba(77, 173, 206, 0.50)"
          }
        }
      },
      contrastText: {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#ffffff"
        }
      }
    },
    success: {
      "50": {
        $type: "color",
        $value: {
          Light: "{green.50}",
          Dark: "{green.50}"
        }
      },
      "100": {
        $type: "color",
        $value: {
          Light: "{green.100}",
          Dark: "{green.100}"
        }
      },
      "200": {
        $type: "color",
        $value: {
          Light: "{green.200}",
          Dark: "{green.200}"
        }
      },
      "300": {
        $type: "color",
        $value: {
          Light: "{green.300}",
          Dark: "{green.300}"
        }
      },
      "400": {
        $type: "color",
        $value: {
          Light: "{green.400}",
          Dark: "{green.400}"
        }
      },
      "500": {
        $type: "color",
        $value: {
          Light: "{green.500}",
          Dark: "{green.500}"
        }
      },
      "600": {
        $type: "color",
        $value: {
          Light: "{green.600}",
          Dark: "{green.600}"
        }
      },
      "700": {
        $type: "color",
        $value: {
          Light: "{green.700}",
          Dark: "{green.700}"
        }
      },
      "800": {
        $type: "color",
        $value: {
          Light: "{green.800}",
          Dark: "{green.800}"
        }
      },
      "900": {
        $type: "color",
        $value: {
          Light: "{green.900}",
          Dark: "{green.900}"
        }
      },
      main: {
        $type: "color",
        $value: {
          Light: "{green.800}",
          Dark: "{green.400}"
        }
      },
      dark: {
        $type: "color",
        $value: {
          Light: "{green.900}",
          Dark: "{green.700}"
        }
      },
      light: {
        $type: "color",
        $value: {
          Light: "{green.500}",
          Dark: "{green.300}"
        }
      },
      contrastText: {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#ffffff"
        }
      },
      _states: {
        hover: {
          $type: "color",
          $value: {
            Light: "rgba(114, 181, 37, 0.04)",
            Dark: "rgba(160, 209, 88, 0.08)"
          }
        },
        selected: {
          $type: "color",
          $value: {
            Light: "rgba(114, 181, 37, 0.08)",
            Dark: "rgba(160, 209, 88, 0.16)"
          }
        },
        focusVisible: {
          $type: "color",
          $value: {
            Light: "rgba(114, 181, 37, 0.30)",
            Dark: "rgba(160, 209, 88, 0.30)"
          }
        },
        outlinedBorder: {
          $type: "color",
          $value: {
            Light: "rgba(114, 181, 37, 0.50)",
            Dark: "rgba(160, 209, 88, 0.50)"
          }
        }
      }
    },
    common: {
      white_states: {
        main: {
          $type: "color",
          $value: {
            Light: "#ffffff",
            Dark: "#ffffff"
          }
        },
        hover: {
          $type: "color",
          $value: {
            Light: "rgba(255, 255, 255, 0.04)",
            Dark: "rgba(255, 255, 255, 0.08)"
          }
        },
        selected: {
          $type: "color",
          $value: {
            Light: "rgba(255, 255, 255, 0.08)",
            Dark: "rgba(255, 255, 255, 0.16)"
          }
        },
        focus: {
          $type: "color",
          $value: {
            Light: "rgba(255, 255, 255, 0.12)",
            Dark: "rgba(255, 255, 255, 0.12)"
          }
        },
        focusVisible: {
          $type: "color",
          $value: {
            Light: "rgba(255, 255, 255, 0.30)",
            Dark: "rgba(255, 255, 255, 0.30)"
          }
        },
        outlinedBorder: {
          $type: "color",
          $value: {
            Light: "rgba(255, 255, 255, 0.50)",
            Dark: "rgba(255, 255, 255, 0.50)"
          }
        }
      },
      black_states: {
        main: {
          $type: "color",
          $value: {
            Light: "#000000",
            Dark: "#000000"
          }
        },
        hover: {
          $type: "color",
          $value: {
            Light: "rgba(0, 0, 0, 0.04)",
            Dark: "rgba(0, 0, 0, 0.08)"
          }
        },
        selected: {
          $type: "color",
          $value: {
            Light: "rgba(0, 0, 0, 0.08)",
            Dark: "rgba(0, 0, 0, 0.16)"
          }
        },
        focus: {
          $type: "color",
          $value: {
            Light: "rgba(0, 0, 0, 0.12)",
            Dark: "rgba(0, 0, 0, 0.12)"
          }
        },
        focusVisible: {
          $type: "color",
          $value: {
            Light: "rgba(0, 0, 0, 0.30)",
            Dark: "rgba(0, 0, 0, 0.30)"
          }
        },
        outlinedBorder: {
          $type: "color",
          $value: {
            Light: "rgba(0, 0, 0, 0.50)",
            Dark: "rgba(0, 0, 0, 0.50)"
          }
        }
      }
    },
    background: {
      default: {
        $type: "color",
        $value: {
          Light: "#f5f5f5",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-0": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-1": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-2": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-3": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-4": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-5": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-6": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-7": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-8": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-9": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-10": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-11": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-12": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-13": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-14": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-15": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-16": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-17": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-18": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-19": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-20": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-21": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-22": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-23": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      "paper-elevation-24": {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#2a2d3a"
        }
      },
      paper: {
        $type: "color",
        $value: {
          Light: "#ffffff",
          Dark: "#363945"
        }
      }
    },
    divider: {
      $type: "color",
      $value: {
        Light: "rgba(16, 24, 64, 0.20)",
        Dark: "rgba(255, 255, 255, 0.25)"
      }
    },
    _components: {
      rating: {
        enabledBorder: {
          $type: "color",
          $value: {
            Light: "rgba(16, 24, 64, 0.12)",
            Dark: "rgba(255, 255, 255, 0.12)"
          }
        },
        activeFill: {
          $type: "color",
          $value: {
            Light: "#f96800",
            Dark: "#fc9726"
          }
        }
      },
      avatar: {
        fill: {
          $type: "color",
          $value: {
            Light: "#ced1d4",
            Dark: "#b9bdc1"
          }
        },
        color: {
          $type: "color",
          $value: {
            Light: "#ffffff",
            Dark: "#ffffff"
          }
        }
      },
      input: {
        standard: {
          enabledBorder: {
            $type: "color",
            $value: {
              Light: "rgba(16, 24, 64, 0.20)",
              Dark: "rgba(255, 255, 255, 0.25)"
            }
          },
          hoverBorder: {
            $type: "color",
            $value: {
              Light: "rgba(16, 24, 64, 0.60)",
              Dark: "rgba(255, 255, 255, 0.70)"
            }
          }
        },
        filled: {
          enabledFill: {
            $type: "color",
            $value: {
              Light: "rgba(0, 0, 0, 0.04)",
              Dark: "rgba(255, 255, 255, 0.08)"
            }
          },
          hoverFill: {
            $type: "color",
            $value: {
              Light: "rgba(0, 0, 0, 0.08)",
              Dark: "rgba(255, 255, 255, 0.16)"
            }
          }
        },
        outlined: {
          root: {
            $type: "color",
            $value: {
              Light: "rgba(16, 24, 64, 0.60)",
              Dark: "rgba(255, 255, 255, 0.70)"
            }
          },
          notchedOutline: {
            $type: "color",
            $value: {
              Light: "rgba(16, 24, 64, 0.20)",
              Dark: "rgba(255, 255, 255, 0.25)"
            }
          }
        },
        label: {
          asterisk: {
            $type: "color",
            $value: {
              Light: "#c63434",
              Dark: "#d14343"
            }
          },
          error: {
            $type: "color",
            $value: {
              Light: "rgba(198, 52, 52, 0.50)",
              Dark: "rgba(209, 67, 67, 0.50)"
            }
          }
        },
        before: {
          $type: "color",
          $value: {
            Light: "rgba(16, 24, 64, 0.20)",
            Dark: "rgba(255, 255, 255, 0.25)"
          }
        },
        hover: {
          $type: "color",
          $value: {
            Light: "rgba(16, 24, 64, 0.60)",
            Dark: "rgba(255, 255, 255, 0.70)"
          }
        }
      },
      switch: {
        thumb: {
          $type: "color",
          $value: {
            Light: "#fbfbfb",
            Dark: "#fbfbfb"
          }
        },
        track: {
          $type: "color",
          $value: {
            Light: "#c4c7ca",
            Dark: "#c4c7ca"
          }
        },
        thumbDisabled: {
          $type: "color",
          $value: {
            Light: "#f5f5f6",
            Dark: "#b9bdc1"
          }
        }
      },
      chip: {
        defaultCloseFill: {
          $type: "color",
          $value: {
            Light: "rgba(16, 24, 64, 0.54)",
            Dark: "#ffffff"
          }
        },
        defaultHoverFill: {
          $type: "color",
          $value: {
            Light: "rgba(16, 24, 64, 0.12)",
            Dark: "rgba(255, 255, 255, 0.12)"
          }
        },
        defaultEnabledBorder: {
          $type: "color",
          $value: {
            Light: "#ced1d4",
            Dark: "#b2b7bb"
          }
        },
        defaultFocusFill: {
          $type: "color",
          $value: {
            Light: "rgba(16, 24, 64, 0.12)",
            Dark: "rgba(255, 255, 255, 0.12)"
          }
        }
      },
      tooltip: {
        fill: {
          $type: "color",
          $value: {
            Light: "#101840",
            Dark: "#2a2d3a"
          }
        },
        color: {
          $type: "color",
          $value: {
            Light: "#ffffff",
            Dark: "#ffffff"
          }
        }
      },
      backdrop: {
        fill: {
          $type: "color",
          $value: {
            Light: "rgba(234, 235, 236, 0.60)",
            Dark: "rgba(54, 57, 69, 0.60)"
          }
        }
      },
      appBar: {
        defaultFill: {
          $type: "color",
          $value: {
            Light: "#f5f5f6",
            Dark: "#2a2d3a"
          }
        }
      },
      breadcrumbs: {
        collapseFill: {
          $type: "color",
          $value: {
            Light: "#f5f5f6",
            Dark: "#b9bdc1"
          }
        },
        separator: {
          $type: "color",
          $value: {
            Light: "rgba(16, 24, 64, 0.20)",
            Dark: "rgba(255, 255, 255, 0.25)"
          }
        }
      },
      alert: {
        error: {
          color: {
            $type: "color",
            $value: {
              Light: "#5f2120",
              Dark: "#f4c7c7"
            }
          },
          background: {
            $type: "color",
            $value: {
              Light: "{error.50}",
              Dark: "rgba(211, 67, 67, 0.10)"
            }
          }
        },
        warning: {
          color: {
            $type: "color",
            $value: {
              Light: "#663c00",
              Dark: "#ffe2b7"
            }
          },
          background: {
            $type: "color",
            $value: {
              Light: "{warning.50}",
              Dark: "rgba(251, 133, 0, 0.10)"
            }
          }
        },
        info: {
          color: {
            $type: "color",
            $value: {
              Light: "#014361",
              Dark: "#b8e7fb"
            }
          },
          background: {
            $type: "color",
            $value: {
              Light: "{info.50}",
              Dark: "rgba(45, 159, 197, 0.10)"
            }
          }
        },
        success: {
          color: {
            $type: "color",
            $value: {
              Light: "#1e4620",
              Dark: "#cce8cd"
            }
          },
          background: {
            $type: "color",
            $value: {
              Light: "{success.50}",
              Dark: "rgba(143, 201, 58, 0.10)"
            }
          }
        }
      },
      stepper: {
        connector: {
          $type: "color",
          $value: {
            Light: "rgba(16, 24, 64, 0.20)",
            Dark: "rgba(255, 255, 255, 0.25)"
          }
        }
      },
      snackbar: {
        fill: {
          $type: "color",
          $value: {
            Light: "#aaaeb3",
            Dark: "#2a2d3a"
          }
        },
        color: {
          $type: "color",
          $value: {
            Light: "#ffffff",
            Dark: "#ffffff"
          }
        }
      },
      dataGrid: {
        root: {
          columnHeaders: {
            backgroundColor: {
              $type: "color",
              $value: {
                Light: "rgba(16, 24, 64, 0.04)",
                Dark: "rgba(255, 255, 255, 0.08)"
              }
            },
            borderBottom: {
              $type: "color",
              $value: {
                Light: "rgba(16, 24, 64, 0.20)",
                Dark: "rgba(255, 255, 255, 0.25)"
              }
            }
          },
          columnSeparator: {
            color: {
              $type: "color",
              $value: {
                Light: "rgba(16, 24, 64, 0.20)",
                Dark: "rgba(255, 255, 255, 0.25)"
              }
            }
          },
          cell: {
            color: {
              $type: "color",
              $value: {
                Light: "rgba(16, 24, 64, 0.20)",
                Dark: "rgba(255, 255, 255, 0.25)"
              }
            },
            borderBottom: {
              $type: "color",
              $value: {
                Light: "rgba(16, 24, 64, 0.20)",
                Dark: "rgba(255, 255, 255, 0.25)"
              }
            },
            borderRight: {
              $type: "color",
              $value: {
                Light: "rgba(16, 24, 64, 0.20)",
                Dark: "rgba(255, 255, 255, 0.25)"
              }
            }
          },
          border: {
            $type: "color",
            $value: {
              Light: "rgba(16, 24, 64, 0.20)",
              Dark: "rgba(255, 255, 255, 0.25)"
            }
          },
          footerContainer: {
            borderTop: {
              $type: "color",
              $value: {
                Light: "rgba(16, 24, 64, 0.20)",
                Dark: "rgba(255, 255, 255, 0.25)"
              }
            }
          }
        }
      }
    },
    elevation: {
      outlined: {
        $type: "color",
        $value: {
          Light: "{divider}",
          Dark: "{divider}"
        }
      }
    },
    _native: {
      "scrollbar-bg": {
        $type: "color",
        $value: {
          Light: "{grey.200}",
          Dark: "{grey.700}"
        }
      }
    }
  },
  breakpoints: {
    xl: {
      $type: "number",
      $value: 1536
    },
    lg: {
      $type: "number",
      $value: 1200
    },
    md: {
      $type: "number",
      $value: 900
    },
    sm: {
      $type: "number",
      $value: 600
    },
    xs: {
      $type: "number",
      $value: 444
    }
  },
  spacing: {
    "1": {
      $type: "number",
      $value: 8
    },
    "2": {
      $type: "number",
      $value: 16
    },
    "3": {
      $type: "number",
      $value: 24
    },
    "4": {
      $type: "number",
      $value: 32
    },
    "5": {
      $type: "number",
      $value: 40
    },
    "6": {
      $type: "number",
      $value: 48
    },
    "7": {
      $type: "number",
      $value: 56
    },
    "8": {
      $type: "number",
      $value: 64
    },
    "9": {
      $type: "number",
      $value: 72
    },
    "10": {
      $type: "number",
      $value: 80
    },
    "11": {
      $type: "number",
      $value: 88
    },
    "12": {
      $type: "number",
      $value: 96
    },
    "0,5": {
      $type: "number",
      $value: 4
    }
  },
  shape: {
    borderRadius: {
      $type: "number",
      $value: 4
    },
    none: {
      $type: "number",
      $value: 0
    }
  },
  typography: {
    fontFamily: {
      $type: "string",
      $value: "Roboto"
    },
    fontWeightLight: {
      $type: "number",
      $value: 300
    },
    fontWeightRegular: {
      $type: "number",
      $value: 400
    },
    fontWeightMedium: {
      $type: "number",
      $value: 500
    },
    fontWeightBold: {
      $type: "number",
      $value: 700
    },
    _fontSize: {
      "1rem": {
        $type: "number",
        $value: 16
      },
      "0,75rem": {
        $type: "number",
        $value: 12
      },
      "0,875rem": {
        $type: "number",
        $value: 14
      },
      "1,25rem": {
        $type: "number",
        $value: 20
      },
      "1,5rem": {
        $type: "number",
        $value: 24
      },
      "2,125rem": {
        $type: "number",
        $value: 34
      },
      "3rem": {
        $type: "number",
        $value: 48
      },
      "3,75rem": {
        $type: "number",
        $value: 60
      },
      "0,625rem": {
        $type: "number",
        $value: 10
      },
      "0,8125rem": {
        $type: "number",
        $value: 13
      },
      "0,9375rem": {
        $type: "number",
        $value: 15
      },
      "2,5rem": {
        $type: "number",
        $value: 40
      },
      "1,75rem": {
        $type: "number",
        $value: 28
      },
      "1,375rem": {
        $type: "number",
        $value: 22
      },
      "1,125rem": {
        $type: "number",
        $value: 18
      },
      "0,6875rem": {
        $type: "number",
        $value: 11
      },
      "2rem": {
        $type: "number",
        $value: 32
      },
      "6rem": {
        $type: "string",
        $value: "96"
      }
    },
    fontWeightSemiBold: {
      $type: "number",
      $value: 600
    },
    heading: {
      h1: {
        fontFamily: {
          $type: "string",
          $value: "{fontFamily}"
        },
        fontSize: {
          $type: "number",
          $value: 40
        },
        fontWeight: {
          $type: "number",
          $value: 400
        },
        letterSpacing: {
          $type: "number",
          $value: -1.5
        },
        lineHeight: {
          $type: "number",
          $value: 48
        }
      },
      h2: {
        fontFamily: {
          $type: "string",
          $value: "{fontFamily}"
        },
        fontSize: {
          $type: "number",
          $value: 32
        },
        fontWeight: {
          $type: "number",
          $value: 400
        },
        letterSpacing: {
          $type: "number",
          $value: -0.5
        },
        lineHeight: {
          $type: "number",
          $value: 40
        }
      },
      h3: {
        fontFamily: {
          $type: "string",
          $value: "{fontFamily}"
        },
        fontSize: {
          $type: "number",
          $value: 28
        },
        fontWeight: {
          $type: "number",
          $value: 400
        },
        letterSpacing: {
          $type: "number",
          $value: 0
        },
        lineHeight: {
          $type: "number",
          $value: 32
        }
      },
      h4: {
        fontFamily: {
          $type: "string",
          $value: "{fontFamily}"
        },
        fontSize: {
          $type: "number",
          $value: 22
        },
        fontWeight: {
          $type: "number",
          $value: 400
        },
        letterSpacing: {
          $type: "number",
          $value: 0.25
        },
        lineHeight: {
          $type: "number",
          $value: 24
        }
      },
      h5: {
        fontFamily: {
          $type: "string",
          $value: "{fontFamily}"
        },
        fontSize: {
          $type: "number",
          $value: 18
        },
        fontWeight: {
          $type: "number",
          $value: 400
        },
        lineHeight: {
          $type: "number",
          $value: 18
        },
        letterSpacing: {
          $type: "number",
          $value: 0
        }
      },
      h6: {
        fontFamily: {
          $type: "string",
          $value: "{fontFamily}"
        },
        fontSize: {
          $type: "number",
          $value: 16
        },
        fontWeight: {
          $type: "number",
          $value: 500
        },
        lineHeight: {
          $type: "number",
          $value: 16
        },
        letterSpacing: {
          $type: "number",
          $value: 0.15000000596046448
        }
      }
    },
    body: {
      "1": {
        fontFamily: {
          $type: "string",
          $value: "{fontFamily}"
        },
        fontSize: {
          $type: "number",
          $value: 14
        },
        fontWeight: {
          $type: "number",
          $value: 400
        },
        lineHeight: {
          $type: "number",
          $value: 16
        },
        letterSpacing: {
          $type: "number",
          $value: 0.15000000596046448
        }
      },
      "2": {
        fontFamily: {
          $type: "string",
          $value: "{fontFamily}"
        },
        fontSize: {
          $type: "number",
          $value: 13
        },
        fontWeight: {
          $type: "number",
          $value: 400
        },
        lineHeight: {
          $type: "number",
          $value: 16
        },
        letterSpacing: {
          $type: "number",
          $value: 0.17000000178813934
        }
      },
      "3": {
        fontFamily: {
          $type: "string",
          $value: "{fontFamily}"
        },
        fontSize: {
          $type: "number",
          $value: 12
        },
        fontWeight: {
          $type: "number",
          $value: 400
        },
        lineHeight: {
          $type: "number",
          $value: 16
        },
        letterSpacing: {
          $type: "number",
          $value: 0.17000000178813934
        }
      }
    },
    _components: {
      button: {
        small: {
          fontSize: {
            $type: "number",
            $value: 12
          },
          fontWeight: {
            $type: "number",
            $value: 500
          },
          lineHeight: {
            $type: "number",
            $value: 18
          },
          letterSpacing: {
            $type: "number",
            $value: 0.4000000059604645
          }
        },
        medium: {
          fontSize: {
            $type: "number",
            $value: 13
          },
          fontWeight: {
            $type: "number",
            $value: 500
          },
          lineHeight: {
            $type: "number",
            $value: 18
          },
          letterSpacing: {
            $type: "number",
            $value: 0.4000000059604645
          }
        },
        large: {
          fontSize: {
            $type: "number",
            $value: 14
          },
          fontWeight: {
            $type: "number",
            $value: 500
          },
          lineHeight: {
            $type: "number",
            $value: 22
          },
          letterSpacing: {
            $type: "number",
            $value: 0.4000000059604645
          }
        }
      }
    },
    subtitle: {
      "1": {
        fontFamily: {
          $type: "string",
          $value: "{fontFamily}"
        },
        fontSize: {
          $type: "number",
          $value: 14
        },
        fontWeight: {
          $type: "number",
          $value: 500
        },
        lineHeight: {
          $type: "number",
          $value: 16
        },
        letterSpacing: {
          $type: "number",
          $value: 0.15000000596046448
        }
      },
      "2": {
        fontFamily: {
          $type: "string",
          $value: "{fontFamily}"
        },
        fontSize: {
          $type: "number",
          $value: 13
        },
        fontWeight: {
          $type: "number",
          $value: 500
        },
        lineHeight: {
          $type: "number",
          $value: 16
        },
        letterSpacing: {
          $type: "number",
          $value: 0.10000000149011612
        }
      }
    },
    caption: {
      fontFamily: {
        $type: "string",
        $value: "{fontFamily}"
      },
      fontSize: {
        $type: "number",
        $value: 11
      },
      fontWeight: {
        $type: "number",
        $value: 400
      },
      lineHeight: {
        $type: "number",
        $value: 14
      },
      letterSpacing: {
        $type: "number",
        $value: 0.4000000059604645
      }
    },
    overline: {
      fontFamily: {
        $type: "string",
        $value: "{fontFamily}"
      },
      fontSize: {
        $type: "number",
        $value: 11
      },
      fontWeight: {
        $type: "number",
        $value: 400
      },
      lineHeight: {
        $type: "number",
        $value: 24
      },
      letterSpacing: {
        $type: "number",
        $value: 1
      }
    }
  },
  metadata: {
    version: {
      $type: "string",
      $value: "6.1.0"
    }
  },
  _components: {
    muiButton: {
      small: {
        py: {
          $type: "number",
          $value: 4
        },
        px: {
          $type: "number",
          $value: 10
        },
        text: {
          py: {
            $type: "number",
            $value: 4
          },
          px: {
            $type: "number",
            $value: 5
          }
        }
      },
      medium: {
        py: {
          $type: "number",
          $value: 6
        },
        px: {
          $type: "number",
          $value: 16
        },
        text: {
          py: {
            $type: "number",
            $value: 6
          },
          px: {
            $type: "number",
            $value: "{1}"
          }
        }
      },
      large: {
        py: {
          $type: "number",
          $value: 8
        },
        px: {
          $type: "number",
          $value: 22
        },
        text: {
          py: {
            $type: "number",
            $value: "{1}"
          },
          px: {
            $type: "number",
            $value: 11
          }
        }
      }
    },
    muiInput: {
      muiInputBase: {
        py: {
          $type: "number",
          $value: 5.940000057220459
        }
      },
      muiInputLabel: {
        root: {
          fontSize: {
            $type: "number",
            $value: 13
          },
          lineHeight: {
            $type: "number",
            $value: 18
          }
        }
      },
      muiOutlinedInput: {
        input: {
          fontSize: {
            $type: "number",
            $value: 13
          },
          fontWeight: {
            $type: "number",
            $value: 400
          },
          lineHeight: {
            $type: "number",
            $value: 16
          },
          letterSpacing: {
            $type: "number",
            $value: 0.17000000178813934
          }
        }
      }
    },
    muiTextField: {
      standard: {
        padding: {
          $type: "number",
          $value: 0
        }
      },
      root: {
        adornment: {
          $type: "number",
          $value: 4
        },
        iconButton: {
          $type: "number",
          $value: 4
        },
        muiSvgIcon: {
          $type: "number",
          $value: 20
        },
        padding: {
          $type: "number",
          $value: 4.800000190734863
        }
      },
      small: {
        height: {
          $type: "number",
          $value: 30
        }
      }
    },
    muiSelect: {
      fontSize: {
        $type: "number",
        $value: 13
      },
      small: {
        height: {
          $type: "number",
          $value: 32
        }
      }
    },
    muiTab: {
      minHeight: {
        $type: "number",
        $value: 40
      },
      textTransform: {
        $type: "string",
        $value: "none"
      }
    },
    muiTabs: {
      minHeight: {
        $type: "number",
        $value: 40
      }
    },
    muiAvatar: {
      fill: {
        $type: "color",
        $value: "{grey.400}"
      },
      color: {
        $type: "color",
        $value: "{common.white_states.main}"
      }
    },
    muiSwitch: {
      base: {
        padding: {
          $type: "number",
          $value: 4
        }
      },
      padding: {
        $type: "number",
        $value: 7
      },
      width: {
        $type: "number",
        $value: 40
      },
      height: {
        $type: "number",
        $value: 24
      },
      thumb: {
        width: {
          $type: "number",
          $value: 16
        },
        height: {
          $type: "number",
          $value: 16
        }
      },
      track: {
        borderRadius: {
          $type: "number",
          $value: 12
        }
      }
    },
    muiSnackbar: {
      minHeight: {
        $type: "number",
        $value: 42
      }
    },
    muiChip: {
      borderRadius: {
        $type: "number",
        $value: 4
      },
      fontSize: {
        $type: "number",
        $value: 11
      },
      lineHeight: {
        $type: "number",
        $value: 14
      },
      small: {
        py: {
          $type: "number",
          $value: 4
        },
        px: {
          $type: "number",
          $value: 3
        }
      },
      medium: {
        py: {
          $type: "number",
          $value: 4
        },
        px: {
          $type: "number",
          $value: 4
        }
      }
    },
    muiDataGrid: {
      standard: {
        row: {
          minHeight: {
            $type: "size",
            $value: 32
          },
          maxHeight: {
            $type: "size",
            $value: 32
          }
        },
        cell: {
          py: {
            $type: "number",
            $value: 0
          },
          fontSize: {
            $type: "number",
            $value: 13
          },
          minHeight: {
            $type: "size",
            $value: 32
          },
          maxHeight: {
            $type: "size",
            $value: 32
          },
          borderRadius: {
            $type: "number",
            $value: 4
          },
          px: {
            $type: "number",
            $value: 8
          }
        },
        columnHeader: {
          minHeight: {
            $type: "number",
            $value: 32
          },
          maxHeight: {
            $type: "number",
            $value: 32
          }
        },
        columnHeaders: {
          minHeight: {
            $type: "size",
            $value: 40
          },
          maxHeight: {
            $type: "size",
            $value: 40
          }
        },
        columnHeadersTitle: {
          fontSize: {
            $type: "number",
            $value: 13
          },
          fontWeight: {
            $type: "number",
            $value: 500
          },
          lineHeight: {
            $type: "number",
            $value: 32
          }
        },
        _components: {
          avatar: {
            width: {
              $type: "number",
              $value: 26
            },
            height: {
              $type: "number",
              $value: 26
            },
            fontSize: {
              $type: "number",
              $value: 13
            }
          },
          chip: {
            height: {
              $type: "number",
              $value: 24
            }
          },
          checkbox: {
            root: {
              $type: "number",
              $value: 16
            },
            padding: {
              $type: "number",
              $value: 6
            }
          },
          iconButton: {
            root: {
              $type: "number",
              $value: 13
            }
          },
          radioButton: {
            padding: {
              $type: "number",
              $value: 6
            }
          },
          switch: {
            margin: {
              $type: "number",
              $value: -4
            }
          },
          button: {
            root: {
              py: {
                $type: "number",
                $value: 2
              },
              px: {
                $type: "number",
                $value: 8
              },
              fontSize: {
                $type: "number",
                $value: 12
              },
              minHeight: {
                $type: "number",
                $value: 20
              },
              lineHeight: {
                $type: "number",
                $value: 1.2000000476837158
              }
            }
          },
          select: {
            py: {
              $type: "number",
              $value: 4
            },
            px: {
              $type: "number",
              $value: 8
            },
            fontSize: {
              $type: "number",
              $value: 13
            },
            minHeight: {
              $type: "number",
              $value: 26
            }
          },
          input: {
            base: {
              py: {
                $type: "number",
                $value: 4
              },
              px: {
                $type: "number",
                $value: 8
              }
            },
            fontSize: {
              $type: "number",
              $value: 13
            },
            minHeight: {
              $type: "number",
              $value: 26
            }
          },
          badge: {
            height: {
              $type: "number",
              $value: 16
            },
            minWidth: {
              $type: "number",
              $value: 16
            },
            fontSize: {
              $type: "number",
              $value: 11
            },
            py: {
              $type: "number",
              $value: 0
            },
            px: {
              $type: "number",
              $value: 4
            },
            marginTop: {
              $type: "number",
              $value: -1
            },
            marginRight: {
              $type: "number",
              $value: -1
            }
          },
          circularProgress: {
            height: {
              $type: "number",
              $value: 26
            },
            width: {
              $type: "number",
              $value: 26
            },
            fontSize: {
              $type: "number",
              $value: 11
            }
          },
          toggleButton: {
            py: {
              $type: "number",
              $value: 3
            },
            px: {
              $type: "number",
              $value: 8
            },
            small: {
              py: {
                $type: "number",
                $value: 2
              },
              px: {
                $type: "number",
                $value: 6
              },
              fontSize: {
                $type: "number",
                $value: 13
              }
            },
            minHeight: {
              $type: "number",
              $value: 26
            },
            fontSize: {
              $type: "number",
              $value: 13
            }
          },
          toggleButtonGroup: {
            minHeight: {
              $type: "number",
              $value: 26
            }
          },
          autocomplete: {
            minHeight: {
              $type: "number",
              $value: 26
            },
            input: {
              py: {
                $type: "number",
                $value: 4
              },
              px: {
                $type: "number",
                $value: 8
              },
              fontSize: {
                $type: "number",
                $value: 13
              }
            },
            py: {
              $type: "number",
              $value: 0
            },
            paddingRight: {
              $type: "number",
              $value: 26
            },
            iconButton: {
              padding: {
                $type: "number",
                $value: 4
              },
              svgIcon: {
                fontSize: {
                  $type: "number",
                  $value: 20
                }
              }
            }
          },
          alert: {
            minHeight: {
              $type: "number",
              $value: 26
            },
            py: {
              $type: "number",
              $value: 0
            },
            px: {
              $type: "number",
              $value: 8
            },
            fontSize: {
              $type: "number",
              $value: 13
            },
            alertIcon: {
              py: {
                $type: "number",
                $value: 3
              },
              px: {
                $type: "number",
                $value: 0
              },
              marginRight: {
                $type: "number",
                $value: 6
              },
              fontSize: {
                $type: "number",
                $value: 18
              }
            },
            alertMessage: {
              py: {
                $type: "number",
                $value: 3
              },
              px: {
                $type: "number",
                $value: 0
              }
            }
          },
          skeleton: {
            height: {
              $type: "number",
              $value: 20
            },
            borderRadius: {
              $type: "number",
              $value: 4
            }
          }
        }
      },
      root: {
        cell: {
          borderRadius: {
            $type: "number",
            $value: 4
          }
        },
        row: {
          borderRadius: {
            $type: "number",
            $value: 4
          }
        },
        columnHeaders: {
          borderRadius: {
            $type: "number",
            $value: 4
          }
        },
        borderRadius: {
          $type: "number",
          $value: 4
        }
      },
      compact: {
        row: {
          minHeight: {
            $type: "size",
            $value: 26
          },
          maxHeight: {
            $type: "size",
            $value: 26
          }
        },
        cell: {
          minHeight: {
            $type: "size",
            $value: 26
          },
          maxHeight: {
            $type: "size",
            $value: 26
          },
          py: {
            $type: "number",
            $value: 0
          },
          fontSize: {
            $type: "number",
            $value: 12
          },
          borderRadius: {
            $type: "number",
            $value: 4
          },
          px: {
            $type: "number",
            $value: 8
          }
        },
        columnHeader: {
          minHeight: {
            $type: "number",
            $value: 26
          },
          maxHeight: {
            $type: "number",
            $value: 26
          }
        },
        columnHeaders: {
          minHeight: {
            $type: "size",
            $value: 32
          },
          maxHeight: {
            $type: "size",
            $value: 32
          }
        },
        columnHeadersTitle: {
          fontSize: {
            $type: "number",
            $value: 12
          },
          fontWeight: {
            $type: "number",
            $value: 500
          },
          lineHeight: {
            $type: "number",
            $value: 26
          }
        },
        _components: {
          chip: {
            height: {
              $type: "number",
              $value: 20
            },
            py: {
              $type: "number",
              $value: 0
            },
            px: {
              $type: "number",
              $value: 8
            },
            fontSize: {
              $type: "number",
              $value: "{body.3.fontSize}"
            }
          },
          avatar: {
            height: {
              $type: "number",
              $value: 22
            },
            width: {
              $type: "number",
              $value: 22
            },
            fontSize: {
              $type: "number",
              $value: 12
            }
          },
          iconButton: {
            root: {
              $type: "number",
              $value: 13
            }
          },
          checkbox: {
            root: {
              $type: "number",
              $value: 16
            },
            padding: {
              $type: "number",
              $value: 4
            }
          },
          radioButton: {
            root: {
              $type: "number",
              $value: 16
            },
            padding: {
              $type: "number",
              $value: 4
            }
          },
          button: {
            root: {
              py: {
                $type: "number",
                $value: 2
              },
              px: {
                $type: "number",
                $value: 8
              },
              fontSize: {
                $type: "number",
                $value: 12
              },
              minHeight: {
                $type: "number",
                $value: 20
              },
              lineHeight: {
                $type: "number",
                $value: 1.2000000476837158
              }
            }
          },
          switch: {
            margin: {
              $type: "number",
              $value: -4
            }
          },
          select: {
            py: {
              $type: "number",
              $value: 2
            },
            px: {
              $type: "number",
              $value: 8
            },
            fontSize: {
              $type: "number",
              $value: 12
            },
            minHeight: {
              $type: "number",
              $value: 20
            }
          },
          input: {
            py: {
              $type: "number",
              $value: 2
            },
            px: {
              $type: "number",
              $value: 8
            },
            fontSize: {
              $type: "number",
              $value: 12
            },
            minHeight: {
              $type: "number",
              $value: 20
            }
          },
          badge: {
            py: {
              $type: "number",
              $value: 0
            },
            px: {
              $type: "number",
              $value: 1.600000023841858
            },
            fontSize: {
              $type: "number",
              $value: 11
            },
            height: {
              $type: "number",
              $value: 14
            },
            minWidth: {
              $type: "number",
              $value: 14
            },
            lineHeight: {
              $type: "number",
              $value: 14
            },
            marginTop: {
              $type: "number",
              $value: -1.600000023841858
            },
            marginRight: {
              $type: "number",
              $value: -1.600000023841858
            }
          },
          circularProgress: {
            height: {
              $type: "number",
              $value: 22
            },
            width: {
              $type: "number",
              $value: 22
            },
            fontSize: {
              $type: "number",
              $value: 8
            }
          },
          toggleButton: {
            minHeight: {
              $type: "number",
              $value: 20
            },
            fontSize: {
              $type: "number",
              $value: 12
            },
            py: {
              $type: "number",
              $value: 2
            },
            px: {
              $type: "number",
              $value: 6
            },
            small: {
              py: {
                $type: "number",
                $value: 1
              },
              px: {
                $type: "number",
                $value: 4
              },
              fontSize: {
                $type: "number",
                $value: 12
              }
            }
          },
          toggleButtonGroup: {
            minHeight: {
              $type: "number",
              $value: 20
            }
          },
          autocomplete: {
            minHeight: {
              $type: "number",
              $value: 20
            },
            fontSize: {
              $type: "number",
              $value: 12
            },
            inputBase: {
              py: {
                $type: "number",
                $value: 0
              },
              px: {
                $type: "number",
                $value: 6
              },
              fontSize: {
                $type: "number",
                $value: 12
              }
            }
          },
          alert: {
            minHeight: {
              $type: "number",
              $value: 20
            },
            fontSize: {
              $type: "number",
              $value: 12
            },
            alertIcon: {
              py: {
                $type: "number",
                $value: 2
              },
              px: {
                $type: "number",
                $value: 0
              },
              fontSize: {
                $type: "number",
                $value: 13
              },
              marginRight: {
                $type: "number",
                $value: 6
              }
            },
            py: {
              $type: "number",
              $value: 0
            },
            px: {
              $type: "number",
              $value: 8
            },
            alertMessage: {
              py: {
                $type: "number",
                $value: 2
              },
              px: {
                $type: "number",
                $value: 0
              }
            }
          },
          skeleton: {
            height: {
              $type: "number",
              $value: 20
            },
            borderRadius: {
              $type: "number",
              $value: 2
            }
          }
        }
      },
      comfortable: {
        row: {
          minHeight: {
            $type: "size",
            $value: 40
          },
          maxHeight: {
            $type: "size",
            $value: 40
          }
        },
        cell: {
          minHeight: {
            $type: "size",
            $value: 40
          },
          maxHeight: {
            $type: "size",
            $value: 40
          },
          py: {
            $type: "number",
            $value: 0
          },
          fontSize: {
            $type: "number",
            $value: 14
          },
          borderRadius: {
            $type: "number",
            $value: 4
          },
          px: {
            $type: "number",
            $value: 16
          }
        },
        columnHeader: {
          minHeight: {
            $type: "number",
            $value: 40
          },
          maxHeight: {
            $type: "number",
            $value: 40
          }
        },
        columnHeaders: {
          minHeight: {
            $type: "size",
            $value: 48
          },
          maxHeight: {
            $type: "size",
            $value: 48
          }
        },
        columnHeadersTitle: {
          fontSize: {
            $type: "number",
            $value: 14
          },
          fontWeight: {
            $type: "number",
            $value: 500
          },
          lineHeight: {
            $type: "number",
            $value: 40
          }
        },
        _components: {
          avatar: {
            width: {
              $type: "number",
              $value: 32
            },
            height: {
              $type: "number",
              $value: 32
            },
            fontSize: {
              $type: "number",
              $value: 14
            }
          },
          chip: {
            height: {
              $type: "number",
              $value: 28
            }
          },
          checkbox: {
            padding: {
              $type: "number",
              $value: 8
            },
            fontSize: {
              $type: "number",
              $value: 24
            }
          },
          iconButton: {
            padding: {
              $type: "number",
              $value: 6
            }
          },
          radioButton: {
            padding: {
              $type: "number",
              $value: 8
            }
          },
          switch: {
            margin: {
              $type: "number",
              $value: -4
            }
          },
          button: {
            root: {
              py: {
                $type: "number",
                $value: 2
              },
              px: {
                $type: "number",
                $value: 8
              },
              fontSize: {
                $type: "number",
                $value: 12
              },
              minHeight: {
                $type: "number",
                $value: 20
              },
              lineHeight: {
                $type: "number",
                $value: 1.2000000476837158
              }
            }
          },
          select: {
            minHeight: {
              $type: "number",
              $value: 32
            },
            fontSize: {
              $type: "number",
              $value: 14
            },
            py: {
              $type: "number",
              $value: 6
            },
            px: {
              $type: "number",
              $value: 12
            }
          },
          input: {
            minHeight: {
              $type: "number",
              $value: 32
            },
            fontSize: {
              $type: "number",
              $value: 14
            },
            base: {
              py: {
                $type: "number",
                $value: 6
              },
              px: {
                $type: "number",
                $value: 12
              }
            }
          },
          badge: {
            height: {
              $type: "number",
              $value: 20
            },
            minWidth: {
              $type: "number",
              $value: 20
            },
            fontSize: {
              $type: "number",
              $value: 20
            },
            py: {
              $type: "number",
              $value: 0
            },
            px: {
              $type: "number",
              $value: 6
            },
            marginTop: {
              $type: "number",
              $value: -1.600000023841858
            },
            marginRight: {
              $type: "number",
              $value: -1.600000023841858
            }
          },
          circularProgress: {
            height: {
              $type: "number",
              $value: 32
            },
            width: {
              $type: "number",
              $value: 32
            },
            fontSize: {
              $type: "number",
              $value: 12
            }
          },
          toggleButton: {
            py: {
              $type: "number",
              $value: 4
            },
            px: {
              $type: "number",
              $value: 12
            },
            small: {
              py: {
                $type: "number",
                $value: 3
              },
              px: {
                $type: "number",
                $value: 8
              },
              fontSize: {
                $type: "number",
                $value: 14
              }
            },
            minHeight: {
              $type: "number",
              $value: 32
            },
            fontSize: {
              $type: "number",
              $value: 14
            }
          },
          toggleButtonGroup: {
            minHeight: {
              $type: "number",
              $value: 32
            }
          },
          autocomplete: {
            minHeight: {
              $type: "number",
              $value: 32
            },
            py: {
              $type: "number",
              $value: 0
            },
            paddingRight: {
              $type: "number",
              $value: 32
            },
            input: {
              fontSize: {
                $type: "number",
                $value: 14
              },
              py: {
                $type: "number",
                $value: 6
              },
              px: {
                $type: "number",
                $value: 12
              }
            },
            iconButton: {
              padding: {
                $type: "number",
                $value: 4
              },
              svgIcon: {
                fontSize: {
                  $type: "number",
                  $value: 24
                }
              }
            }
          },
          alert: {
            minHeight: {
              $type: "number",
              $value: 32
            },
            py: {
              $type: "number",
              $value: 0
            },
            px: {
              $type: "number",
              $value: 12
            },
            fontSize: {
              $type: "number",
              $value: 14
            },
            alertIcon: {
              py: {
                $type: "number",
                $value: 4
              },
              px: {
                $type: "number",
                $value: 0
              },
              marginRight: {
                $type: "number",
                $value: 8
              },
              fontSize: {
                $type: "number",
                $value: 20
              }
            },
            alertMessage: {
              py: {
                $type: "number",
                $value: 4
              },
              px: {
                $type: "number",
                $value: 0
              }
            }
          },
          skeleton: {
            height: {
              $type: "number",
              $value: 28
            },
            borderRadius: {
              $type: "number",
              $value: 4
            }
          }
        }
      }
    },
    muiIconButton: {
      padding: {
        $type: "number",
        $value: 5
      },
      fontSize: {
        $type: "number",
        $value: 16
      }
    },
    muiAutocomplete: {
      small: {
        minHeight: {
          $type: "number",
          $value: 32
        },
        py: {
          $type: "number",
          $value: 2
        },
        px: {
          $type: "number",
          $value: 14
        },
        inputBase: {
          py: {
            $type: "number",
            $value: 4
          },
          px: {
            $type: "number",
            $value: 0
          },
          fontSize: {
            $type: "number",
            $value: 13
          }
        },
        _componentes: {
          chip: {
            height: {
              $type: "number",
              $value: 20
            },
            fontSize: {
              $type: "number",
              $value: 11
            },
            margin: {
              $type: "number",
              $value: 1
            },
            label: {
              lineHeight: {
                $type: "number",
                $value: 18
              },
              py: {
                $type: "number",
                $value: 0
              },
              px: {
                $type: "number",
                $value: 8
              }
            },
            deleteIcon: {
              fontSize: {
                $type: "number",
                $value: 12
              },
              my: {
                $type: "number",
                $value: 0
              },
              marignRight: {
                $type: "number",
                $value: 2
              },
              marignLeft: {
                $type: "number",
                $value: -4
              }
            },
            icon: {
              fontSize: {
                $type: "number",
                $value: 12
              },
              marignLeft: {
                $type: "number",
                $value: 4
              }
            }
          }
        }
      },
      input: {
        small: {
          minHeight: {
            $type: "number",
            $value: 32
          },
          py: {
            $type: "number",
            $value: 2
          },
          px: {
            $type: "number",
            $value: 13
          },
          base: {
            py: {
              $type: "number",
              $value: 4
            },
            px: {
              $type: "number",
              $value: 0
            },
            fontSize: {
              $type: "number",
              $value: 13
            }
          }
        },
        fontSize: {
          $type: "number",
          $value: 13
        }
      }
    }
  },
  "brand-colors": {
    grey: {
      "50": {
        $type: "color",
        $value: "#fbfbfb"
      },
      "100": {
        $type: "color",
        $value: "#f5f5f6"
      },
      "200": {
        $type: "color",
        $value: "#eaebec"
      },
      "300": {
        $type: "color",
        $value: "#dcdee0"
      },
      "400": {
        $type: "color",
        $value: "#ced1d4"
      },
      "500": {
        $type: "color",
        $value: "#c4c7ca"
      },
      "600": {
        $type: "color",
        $value: "#b9bdc1"
      },
      "700": {
        $type: "color",
        $value: "#b2b7bb"
      },
      "800": {
        $type: "color",
        $value: "#aaaeb3"
      },
      "900": {
        $type: "color",
        $value: "#a2a6ab"
      }
    },
    primary: {
      light: {
        "50": {
          $type: "color",
          $value: "#f3f3ff"
        },
        "100": {
          $type: "color",
          $value: "#f3f3ff"
        },
        "200": {
          $type: "color",
          $value: "#d6d5ff"
        },
        "300": {
          $type: "color",
          $value: "#b9b3ff"
        },
        "400": {
          $type: "color",
          $value: "#9588fd"
        },
        "500": {
          $type: "color",
          $value: "#7358fa"
        },
        "600": {
          $type: "color",
          $value: "#5323de"
        },
        "700": {
          $type: "color",
          $value: "#6135f2"
        },
        "800": {
          $type: "color",
          $value: "#451dba"
        },
        "900": {
          $type: "color",
          $value: "#3a1a98"
        }
      },
      dark: {
        "50": {
          $type: "color",
          $value: "#f3f3ff"
        },
        "100": {
          $type: "color",
          $value: "#e8e7ff"
        },
        "200": {
          $type: "color",
          $value: "#d6d5ff"
        },
        "300": {
          $type: "color",
          $value: "#b9b3ff"
        },
        "400": {
          $type: "color",
          $value: "#9588fd"
        },
        "500": {
          $type: "color",
          $value: "#7358fa"
        },
        "600": {
          $type: "color",
          $value: "#6135f2"
        },
        "700": {
          $type: "color",
          $value: "#5323de"
        },
        "800": {
          $type: "color",
          $value: "#451dba"
        },
        "900": {
          $type: "color",
          $value: "#5323de"
        }
      }
    },
    secondary: {
      "50": {
        $type: "color",
        $value: "#e0f7fa"
      },
      "100": {
        $type: "color",
        $value: "#b3ebf2"
      },
      "200": {
        $type: "color",
        $value: "#80deea"
      },
      "300": {
        $type: "color",
        $value: "#4dd0e1"
      },
      "400": {
        $type: "color",
        $value: "#26c6da"
      },
      "500": {
        $type: "color",
        $value: "#00bcd4"
      },
      "600": {
        $type: "color",
        $value: "#00b6cf"
      },
      "700": {
        $type: "color",
        $value: "#00adc9"
      },
      "800": {
        $type: "color",
        $value: "#00a5c3"
      },
      "900": {
        $type: "color",
        $value: "#0097b9"
      }
    },
    red: {
      "50": {
        $type: "color",
        $value: "#f9e8e8"
      },
      "100": {
        $type: "color",
        $value: "#f1c7c7"
      },
      "200": {
        $type: "color",
        $value: "#e8a1a1"
      },
      "300": {
        $type: "color",
        $value: "#df7b7b"
      },
      "400": {
        $type: "color",
        $value: "#d85f5f"
      },
      "500": {
        $type: "color",
        $value: "#d14343"
      },
      "600": {
        $type: "color",
        $value: "#cc3d3d"
      },
      "700": {
        $type: "color",
        $value: "#c63434"
      },
      "800": {
        $type: "color",
        $value: "#c02c2c"
      },
      "900": {
        $type: "color",
        $value: "#b51e1e"
      }
    },
    green: {
      "50": {
        $type: "color",
        $value: "#f2f9e7"
      },
      "100": {
        $type: "color",
        $value: "#ddefc4"
      },
      "200": {
        $type: "color",
        $value: "#c7e49d"
      },
      "300": {
        $type: "color",
        $value: "#b1d975"
      },
      "400": {
        $type: "color",
        $value: "#a0d158"
      },
      "500": {
        $type: "color",
        $value: "#8fc93a"
      },
      "600": {
        $type: "color",
        $value: "#87c334"
      },
      "700": {
        $type: "color",
        $value: "#7cbc2c"
      },
      "800": {
        $type: "color",
        $value: "#72b525"
      },
      "900": {
        $type: "color",
        $value: "#60a918"
      }
    },
    orange: {
      "50": {
        $type: "color",
        $value: "#fff0e0"
      },
      "100": {
        $type: "color",
        $value: "#fedab3"
      },
      "200": {
        $type: "color",
        $value: "#fdc280"
      },
      "300": {
        $type: "color",
        $value: "#fcaa4d"
      },
      "400": {
        $type: "color",
        $value: "#fc9726"
      },
      "500": {
        $type: "color",
        $value: "#fb8500"
      },
      "600": {
        $type: "color",
        $value: "#fa7d00"
      },
      "700": {
        $type: "color",
        $value: "#fa7200"
      },
      "800": {
        $type: "color",
        $value: "#f96800"
      },
      "900": {
        $type: "color",
        $value: "#f85500"
      }
    },
    lightBlue: {
      "50": {
        $type: "color",
        $value: "#e6f3f8"
      },
      "100": {
        $type: "color",
        $value: "#c0e2ee"
      },
      "200": {
        $type: "color",
        $value: "#96cfe2"
      },
      "300": {
        $type: "color",
        $value: "#6cbcd6"
      },
      "400": {
        $type: "color",
        $value: "#4dadce"
      },
      "500": {
        $type: "color",
        $value: "#2d9fc5"
      },
      "600": {
        $type: "color",
        $value: "#2897bf"
      },
      "700": {
        $type: "color",
        $value: "#228db8"
      },
      "800": {
        $type: "color",
        $value: "#1c83b0"
      },
      "900": {
        $type: "color",
        $value: "#1172a3"
      }
    }
  }
};

// src/baseTheme.ts
var baseThemeConfig = {
  // ============================================================================
  // SOMBRAS PERSONALIZADAS - Suaves con tono azul-grisáceo para light theme
  // ============================================================================
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(93, 109, 126, 0.16), 0px 1px 1px 0px rgba(93, 109, 126, 0.12), 0px 1px 3px 0px rgba(93, 109, 126, 0.08)",
    "0px 3px 1px -2px rgba(93, 109, 126, 0.16), 0px 2px 2px 0px rgba(93, 109, 126, 0.12), 0px 1px 5px 0px rgba(93, 109, 126, 0.08)",
    "0px 3px 3px -2px rgba(93, 109, 126, 0.16), 0px 3px 4px 0px rgba(93, 109, 126, 0.12), 0px 1px 8px 0px rgba(93, 109, 126, 0.08)",
    "0px 2px 4px -1px rgba(93, 109, 126, 0.16), 0px 4px 5px 0px rgba(93, 109, 126, 0.12), 0px 1px 10px 0px rgba(93, 109, 126, 0.08)",
    "0px 3px 5px -1px rgba(93, 109, 126, 0.17), 0px 5px 8px 0px rgba(93, 109, 126, 0.13), 0px 1px 14px 0px rgba(93, 109, 126, 0.08)",
    "0px 3px 5px -1px rgba(93, 109, 126, 0.17), 0px 6px 10px 0px rgba(93, 109, 126, 0.13), 0px 1px 18px 0px rgba(93, 109, 126, 0.08)",
    "0px 4px 5px -2px rgba(93, 109, 126, 0.17), 0px 7px 10px 1px rgba(93, 109, 126, 0.13), 0px 2px 16px 1px rgba(93, 109, 126, 0.08)",
    "0px 5px 5px -3px rgba(93, 109, 126, 0.18), 0px 8px 10px 1px rgba(93, 109, 126, 0.14), 0px 3px 14px 2px rgba(93, 109, 126, 0.09)",
    "0px 5px 6px -3px rgba(93, 109, 126, 0.18), 0px 9px 12px 1px rgba(93, 109, 126, 0.14), 0px 3px 16px 2px rgba(93, 109, 126, 0.09)",
    "0px 6px 6px -3px rgba(93, 109, 126, 0.18), 0px 10px 14px 1px rgba(93, 109, 126, 0.14), 0px 4px 18px 3px rgba(93, 109, 126, 0.09)",
    "0px 6px 7px -4px rgba(93, 109, 126, 0.19), 0px 11px 15px 1px rgba(93, 109, 126, 0.14), 0px 4px 20px 3px rgba(93, 109, 126, 0.09)",
    "0px 7px 8px -4px rgba(93, 109, 126, 0.19), 0px 12px 17px 2px rgba(93, 109, 126, 0.15), 0px 5px 22px 4px rgba(93, 109, 126, 0.09)",
    "0px 7px 8px -4px rgba(93, 109, 126, 0.19), 0px 13px 19px 2px rgba(93, 109, 126, 0.15), 0px 5px 24px 4px rgba(93, 109, 126, 0.09)",
    "0px 7px 9px -4px rgba(93, 109, 126, 0.20), 0px 14px 21px 2px rgba(93, 109, 126, 0.15), 0px 5px 26px 4px rgba(93, 109, 126, 0.10)",
    "0px 8px 9px -5px rgba(93, 109, 126, 0.20), 0px 15px 22px 2px rgba(93, 109, 126, 0.15), 0px 6px 28px 5px rgba(93, 109, 126, 0.10)",
    "0px 8px 10px -5px rgba(93, 109, 126, 0.20), 0px 16px 24px 2px rgba(93, 109, 126, 0.16), 0px 6px 30px 5px rgba(93, 109, 126, 0.10)",
    "0px 8px 11px -5px rgba(93, 109, 126, 0.21), 0px 17px 26px 2px rgba(93, 109, 126, 0.16), 0px 6px 32px 5px rgba(93, 109, 126, 0.10)",
    "0px 9px 11px -5px rgba(93, 109, 126, 0.21), 0px 18px 28px 2px rgba(93, 109, 126, 0.16), 0px 7px 34px 6px rgba(93, 109, 126, 0.10)",
    "0px 9px 12px -6px rgba(93, 109, 126, 0.21), 0px 19px 29px 2px rgba(93, 109, 126, 0.16), 0px 7px 36px 6px rgba(93, 109, 126, 0.11)",
    "0px 10px 13px -6px rgba(93, 109, 126, 0.22), 0px 20px 31px 3px rgba(93, 109, 126, 0.17), 0px 8px 38px 7px rgba(93, 109, 126, 0.11)",
    "0px 10px 13px -6px rgba(93, 109, 126, 0.22), 0px 21px 33px 3px rgba(93, 109, 126, 0.17), 0px 8px 40px 7px rgba(93, 109, 126, 0.11)",
    "0px 10px 14px -6px rgba(93, 109, 126, 0.22), 0px 22px 35px 3px rgba(93, 109, 126, 0.17), 0px 8px 42px 7px rgba(93, 109, 126, 0.11)",
    "0px 11px 14px -7px rgba(93, 109, 126, 0.23), 0px 23px 36px 3px rgba(93, 109, 126, 0.18), 0px 9px 44px 8px rgba(93, 109, 126, 0.12)",
    "0px 11px 15px -7px rgba(93, 109, 126, 0.23), 0px 24px 38px 3px rgba(93, 109, 126, 0.18), 0px 9px 46px 8px rgba(93, 109, 126, 0.12)"
  ],
  // ============================================================================
  // PALETA DE COLORES COMPARTIDOS
  // ============================================================================
  palette: {
    mode: "light",
    // COLORES SEMÁNTICOS - Compartidos entre todas las marcas
    error: {
      50: themeTokensCosmos_default["brand-colors"].red[50].$value,
      100: themeTokensCosmos_default["brand-colors"].red[100].$value,
      200: themeTokensCosmos_default["brand-colors"].red[200].$value,
      300: themeTokensCosmos_default["brand-colors"].red[300].$value,
      400: themeTokensCosmos_default["brand-colors"].red[400].$value,
      500: themeTokensCosmos_default["brand-colors"].red[500].$value,
      600: themeTokensCosmos_default["brand-colors"].red[600].$value,
      700: themeTokensCosmos_default["brand-colors"].red[700].$value,
      800: themeTokensCosmos_default["brand-colors"].red[800].$value,
      900: themeTokensCosmos_default["brand-colors"].red[900].$value,
      main: themeTokensCosmos_default["brand-colors"].red[700].$value,
      light: themeTokensCosmos_default["brand-colors"].red[400].$value,
      dark: themeTokensCosmos_default["brand-colors"].red[800].$value,
      contrastText: themeTokensCosmos_default.palette.error.contrastText.$value.Light
    },
    warning: {
      50: themeTokensCosmos_default["brand-colors"].orange[50].$value,
      100: themeTokensCosmos_default["brand-colors"].orange[100].$value,
      200: themeTokensCosmos_default["brand-colors"].orange[200].$value,
      300: themeTokensCosmos_default["brand-colors"].orange[300].$value,
      400: themeTokensCosmos_default["brand-colors"].orange[400].$value,
      500: themeTokensCosmos_default["brand-colors"].orange[500].$value,
      600: themeTokensCosmos_default["brand-colors"].orange[600].$value,
      700: themeTokensCosmos_default["brand-colors"].orange[700].$value,
      800: themeTokensCosmos_default["brand-colors"].orange[800].$value,
      900: themeTokensCosmos_default["brand-colors"].orange[900].$value,
      main: themeTokensCosmos_default["brand-colors"].orange[500].$value,
      light: themeTokensCosmos_default["brand-colors"].orange[400].$value,
      dark: themeTokensCosmos_default["brand-colors"].orange[900].$value,
      contrastText: themeTokensCosmos_default.palette.warning.contrastText.$value.Light
    },
    info: {
      50: themeTokensCosmos_default["brand-colors"].lightBlue[50].$value,
      100: themeTokensCosmos_default["brand-colors"].lightBlue[100].$value,
      200: themeTokensCosmos_default["brand-colors"].lightBlue[200].$value,
      300: themeTokensCosmos_default["brand-colors"].lightBlue[300].$value,
      400: themeTokensCosmos_default["brand-colors"].lightBlue[400].$value,
      500: themeTokensCosmos_default["brand-colors"].lightBlue[500].$value,
      600: themeTokensCosmos_default["brand-colors"].lightBlue[600].$value,
      700: themeTokensCosmos_default["brand-colors"].lightBlue[700].$value,
      800: themeTokensCosmos_default["brand-colors"].lightBlue[800].$value,
      900: themeTokensCosmos_default["brand-colors"].lightBlue[900].$value,
      main: themeTokensCosmos_default["brand-colors"].lightBlue[700].$value,
      light: themeTokensCosmos_default["brand-colors"].lightBlue[500].$value,
      dark: themeTokensCosmos_default["brand-colors"].lightBlue[900].$value,
      contrastText: themeTokensCosmos_default.palette.info.contrastText.$value.Light
    },
    success: {
      50: themeTokensCosmos_default["brand-colors"].green[50].$value,
      100: themeTokensCosmos_default["brand-colors"].green[100].$value,
      200: themeTokensCosmos_default["brand-colors"].green[200].$value,
      300: themeTokensCosmos_default["brand-colors"].green[300].$value,
      400: themeTokensCosmos_default["brand-colors"].green[400].$value,
      500: themeTokensCosmos_default["brand-colors"].green[500].$value,
      600: themeTokensCosmos_default["brand-colors"].green[600].$value,
      700: themeTokensCosmos_default["brand-colors"].green[700].$value,
      800: themeTokensCosmos_default["brand-colors"].green[800].$value,
      900: themeTokensCosmos_default["brand-colors"].green[900].$value,
      main: themeTokensCosmos_default["brand-colors"].green[800].$value,
      light: themeTokensCosmos_default["brand-colors"].green[400].$value,
      dark: themeTokensCosmos_default["brand-colors"].green[900].$value,
      contrastText: themeTokensCosmos_default.palette.success.contrastText.$value.Light
    },
    // COLORES SECUNDARIOS - Cyan compartido
    secondary: {
      50: themeTokensCosmos_default["brand-colors"].secondary[50].$value,
      100: themeTokensCosmos_default["brand-colors"].secondary[100].$value,
      200: themeTokensCosmos_default["brand-colors"].secondary[200].$value,
      300: themeTokensCosmos_default["brand-colors"].secondary[300].$value,
      400: themeTokensCosmos_default["brand-colors"].secondary[400].$value,
      500: themeTokensCosmos_default["brand-colors"].secondary[500].$value,
      600: themeTokensCosmos_default["brand-colors"].secondary[600].$value,
      700: themeTokensCosmos_default["brand-colors"].secondary[700].$value,
      800: themeTokensCosmos_default["brand-colors"].secondary[800].$value,
      900: themeTokensCosmos_default["brand-colors"].secondary[900].$value,
      main: themeTokensCosmos_default["brand-colors"].secondary[500].$value,
      light: themeTokensCosmos_default["brand-colors"].secondary[300].$value,
      dark: themeTokensCosmos_default["brand-colors"].secondary[700].$value,
      contrastText: themeTokensCosmos_default.palette.secondary.contrastText.$value.Light
    },
    // COLORES GRISES - Paleta completa compartida
    grey: {
      50: themeTokensCosmos_default["brand-colors"].grey[50].$value,
      100: themeTokensCosmos_default["brand-colors"].grey[100].$value,
      200: themeTokensCosmos_default["brand-colors"].grey[200].$value,
      300: themeTokensCosmos_default["brand-colors"].grey[300].$value,
      400: themeTokensCosmos_default["brand-colors"].grey[400].$value,
      500: themeTokensCosmos_default["brand-colors"].grey[500].$value,
      600: themeTokensCosmos_default["brand-colors"].grey[600].$value,
      700: themeTokensCosmos_default["brand-colors"].grey[700].$value,
      800: themeTokensCosmos_default["brand-colors"].grey[800].$value,
      900: themeTokensCosmos_default["brand-colors"].grey[900].$value
    },
    // COLORES DE FONDO Y SUPERFICIE
    background: {
      default: themeTokensCosmos_default.palette.background.default.$value.Light,
      paper: themeTokensCosmos_default.palette.background.paper.$value.Light
    },
    // COLORES DE TEXTO
    text: {
      primary: themeTokensCosmos_default.palette.text.primary.$value.Light,
      secondary: themeTokensCosmos_default.palette.text.secondary.$value.Light,
      disabled: themeTokensCosmos_default.palette.text.disabled.$value.Light
    },
    // DIVISORES Y ELEMENTOS DE ACCIÓN
    divider: themeTokensCosmos_default.palette.divider.$value.Light,
    action: {
      active: themeTokensCosmos_default.palette.action.active.$value.Light,
      hover: themeTokensCosmos_default.palette.action.hover.$value.Light,
      selected: themeTokensCosmos_default.palette.action.selected.$value.Light,
      disabled: themeTokensCosmos_default.palette.action.disabled.$value.Light,
      disabledBackground: themeTokensCosmos_default.palette.action.disabledBackground.$value.Light,
      focus: themeTokensCosmos_default.palette.action.focus.$value.Light
    }
  },
  // ============================================================================
  // TIPOGRAFÍA BASE - COMPARTIDA
  // ============================================================================
  typography: {
    // body3 es una variante personalizada compartida por todas las marcas
    body3: {
      fontSize: `${themeTokensCosmos_default.typography.body[3].fontSize.$value}px`,
      fontWeight: `${themeTokensCosmos_default.typography.body[3].fontWeight.$value}`,
      lineHeight: `${themeTokensCosmos_default.typography.body[3].lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.body[3].letterSpacing.$value}px`
    }
  },
  // ============================================================================
  // ESPACIADO Y FORMAS - COMPARTIDO
  // ============================================================================
  spacing: 8,
  shape: {
    borderRadius: themeTokensCosmos_default.shape.borderRadius.$value
  },
  // ============================================================================
  // COMPONENTES BASE - CONFIGURACIONES COMPARTIDAS
  // ============================================================================
  components: {
    // ========================================================================
    // COMPONENTES DE INTERACCIÓN
    // ========================================================================
    // BOTONES - Configuración base sin colores específicos
    MuiButton: {
      defaultProps: {
        size: "small"
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          textTransform: "none",
          borderRadius: themeTokensCosmos_default.shape.borderRadius.$value,
          ...ownerState.size === "small" && {
            paddingBlock: `${themeTokensCosmos_default._components.muiButton.small.py.$value}px`,
            paddingInline: `${themeTokensCosmos_default._components.muiButton.small.px.$value}px`,
            fontSize: `${themeTokensCosmos_default.typography._components.button.small.fontSize.$value}px`,
            lineHeight: `${themeTokensCosmos_default.typography._components.button.small.lineHeight.$value}px`
          },
          ...ownerState.size === "medium" && {
            paddingBlock: `${themeTokensCosmos_default._components.muiButton.medium.py.$value}px`,
            paddingInline: `${themeTokensCosmos_default._components.muiButton.medium.px.$value}px`,
            fontSize: `${themeTokensCosmos_default.typography._components.button.medium.fontSize.$value}px`,
            lineHeight: `${themeTokensCosmos_default.typography._components.button.medium.lineHeight.$value}px`
          },
          ...ownerState.size === "large" && {
            paddingBlock: `${themeTokensCosmos_default._components.muiButton.large.py.$value}px`,
            paddingInline: `${themeTokensCosmos_default._components.muiButton.large.px.$value}px`,
            fontSize: `${themeTokensCosmos_default.typography._components.button.large.fontSize.$value}px`,
            lineHeight: `${themeTokensCosmos_default.typography._components.button.large.lineHeight.$value}px`
          }
        })
      }
    },
    // ========================================================================
    // COMPONENTES DE FORMULARIO E INPUTS
    // ========================================================================
    // CAMPOS DE ENTRADA - Configuración base para todos los inputs
    MuiInputBase: {
      defaultProps: {
        margin: "none"
      },
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-input.MuiInputBase-inputSizeSmall": {
            paddingBlock: `${themeTokensCosmos_default._components.muiInput.muiInputBase.py.$value}px`
          }
        }
      }
    },
    // OUTLINED INPUT - Borde hover personalizado
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.input.outlined.root.$value.Light : themeTokensCosmos_default.palette._components.input.outlined.root.$value.Dark
          }
        }),
        notchedOutline: ({ theme }) => ({
          borderColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.input.outlined.notchedOutline.$value.Light : themeTokensCosmos_default.palette._components.input.outlined.notchedOutline.$value.Dark
        }),
        input: {
          fontSize: `${themeTokensCosmos_default._components.muiInput.muiOutlinedInput.input.fontSize.$value}px`,
          fontWeight: `${themeTokensCosmos_default._components.muiInput.muiOutlinedInput.input.fontWeight.$value}`,
          lineHeight: `${themeTokensCosmos_default._components.muiInput.muiOutlinedInput.input.lineHeight.$value}px`,
          letterSpacing: `${themeTokensCosmos_default._components.muiInput.muiOutlinedInput.input.letterSpacing.$value}px`
        }
      }
    },
    // FILLED INPUT
    MuiFilledInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:before": {
            borderColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.input.filled.enabledFill.$value.Light : themeTokensCosmos_default.palette._components.input.filled.enabledFill.$value.Dark
          },
          "&:hover:not(.Mui-disabled):before": {
            borderColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette.primary._states.outlinedBorder.$value.Light : themeTokensCosmos_default.palette.primary._states.outlinedBorder.$value.Dark
          }
        })
      }
    },
    // STANDARD INPUT
    MuiInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:before": {
            borderColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette.divider.$value.Light : themeTokensCosmos_default.palette.divider.$value.Dark
          },
          "&:hover:not(.Mui-disabled):before": {
            borderColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette.primary._states.outlinedBorder.$value.Light : themeTokensCosmos_default.palette.primary._states.outlinedBorder.$value.Dark
          }
        })
      }
    },
    // ETIQUETAS DE CAMPOS (LABELS)
    MuiInputLabel: {
      defaultProps: {
        margin: "dense"
      },
      styleOverrides: {
        asterisk: ({ theme }) => ({
          color: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.input.label.asterisk.$value.Light : themeTokensCosmos_default.palette._components.input.label.asterisk.$value.Dark
        }),
        error: ({ theme }) => ({
          color: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.input.label.error.$value.Light : themeTokensCosmos_default.palette._components.input.label.error.$value.Dark
        }),
        root: {
          fontSize: `${themeTokensCosmos_default._components.muiInput.muiInputLabel.root.fontSize.$value}px`,
          lineHeight: `${themeTokensCosmos_default._components.muiInput.muiInputLabel.root.lineHeight.$value}px`
        },
        filled: {
          "&.MuiInputLabel-filled.MuiInputLabel-sizeSmall:not(.MuiInputLabel-shrink)": {
            transform: "translate(12px, 15px) scale(1)"
          },
          "&.MuiInputLabel-filled.MuiInputLabel-sizeMedium:not(.MuiInputLabel-shrink)": {
            transform: "translate(12px, 19px) scale(1)"
          }
        },
        standard: {
          "&.MuiInputLabel-standard.MuiInputLabel-sizeSmall:not(.MuiInputLabel-shrink)": {
            transform: "translate(0, 14px) scale(1)"
          },
          "&.MuiInputLabel-standard.MuiInputLabel-sizeMedium:not(.MuiInputLabel-shrink)": {
            transform: "translate(0, 16px) scale(1)"
          }
        },
        outlined: {
          "&.MuiInputLabel-outlined.MuiInputLabel-sizeSmall": {
            transform: "translate(14px, 7px) scale(1)"
          },
          "&.MuiInputLabel-outlined": {
            transform: "translate(14px, 14px) scale(1)",
            "&.MuiInputLabel-shrink": {
              transform: "translate(16px, -7px) scale(0.8)"
            }
          }
        }
      }
    },
    // CAMPOS DE TEXTO COMPLETOS
    MuiTextField: {
      defaultProps: {
        size: "small"
      },
      variants: [
        {
          props: { variant: "standard", margin: "none" },
          style: {
            ".MuiInputBase-input.MuiInputBase-inputSizeSmall": {
              padding: `${themeTokensCosmos_default._components.muiTextField.standard.padding.$value}px`
            }
          }
        }
      ],
      styleOverrides: {
        root: {
          "& .MuiInputAdornment-root": {
            "& .MuiIconButton-root": {
              padding: `${themeTokensCosmos_default._components.muiTextField.root.padding.$value}px !important`,
              "& .MuiSvgIcon-root": {
                fontSize: `${themeTokensCosmos_default._components.muiTextField.root.muiSvgIcon.$value}px`
              }
            },
            "& .MuiSvgIcon-root": {
              fontSize: `${themeTokensCosmos_default._components.muiTextField.root.muiSvgIcon.$value}px`
            }
          }
        }
      }
    },
    // CONTROLES DE FORMULARIO
    MuiFormControl: {
      defaultProps: {
        size: "small"
      }
    },
    // SELECT
    MuiSelect: {
      defaultProps: {
        size: "small"
      },
      styleOverrides: {
        select: {
          fontSize: `${themeTokensCosmos_default._components.muiSelect.fontSize.$value}px`
        }
      }
    },
    MuiList: {
      defaultProps: { dense: true }
    },
    MuiTable: {
      defaultProps: { size: "small" }
    },
    MuiIconButton: {
      defaultProps: { size: "small" }
    },
    // AUTOCOMPLETE
    MuiAutocomplete: {
      defaultProps: {
        size: "small"
      },
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            "&.MuiInputBase-sizeSmall": {
              minHeight: `${themeTokensCosmos_default._components.muiAutocomplete.small.minHeight.$value}px`,
              paddingBlock: `${themeTokensCosmos_default._components.muiAutocomplete.small.py.$value}px`,
              paddingInline: `${themeTokensCosmos_default._components.muiAutocomplete.small.px.$value}px`,
              "& .MuiInputBase-input": {
                paddingBlock: `${themeTokensCosmos_default._components.muiAutocomplete.small.inputBase.py.$value}px`,
                paddingInline: `${themeTokensCosmos_default._components.muiAutocomplete.small.inputBase.px.$value}px`,
                fontSize: `${themeTokensCosmos_default._components.muiAutocomplete.small.inputBase.fontSize.$value}px`
              },
              "& .MuiChip-root": {
                height: `${themeTokensCosmos_default._components.muiAutocomplete.small._componentes.chip.height.$value}px`,
                fontSize: `${themeTokensCosmos_default._components.muiAutocomplete.small._componentes.chip.fontSize.$value}px`,
                margin: `${themeTokensCosmos_default._components.muiAutocomplete.small._componentes.chip.margin.$value}px`,
                "& .MuiChip-label": {
                  paddingBlock: `${themeTokensCosmos_default._components.muiAutocomplete.small._componentes.chip.label.py.$value}px`,
                  paddingInline: `${themeTokensCosmos_default._components.muiAutocomplete.small._componentes.chip.label.px.$value}px`,
                  lineHeight: `${themeTokensCosmos_default._components.muiAutocomplete.small._componentes.chip.label.lineHeight.$value}px`
                },
                "& .MuiChip-deleteIcon": {
                  fontSize: `${themeTokensCosmos_default._components.muiAutocomplete.small._componentes.chip.deleteIcon.fontSize.$value}px`,
                  marginTop: `${themeTokensCosmos_default._components.muiAutocomplete.small._componentes.chip.deleteIcon.my.$value}px`,
                  marginBottom: `${themeTokensCosmos_default._components.muiAutocomplete.small._componentes.chip.deleteIcon.my.$value}px`,
                  marginRight: `${themeTokensCosmos_default._components.muiAutocomplete.small._componentes.chip.deleteIcon.marignRight.$value}px`,
                  marginLeft: `${themeTokensCosmos_default._components.muiAutocomplete.small._componentes.chip.deleteIcon.marignLeft.$value}px`
                },
                "& .MuiChip-icon": {
                  fontSize: `${themeTokensCosmos_default._components.muiAutocomplete.small._componentes.chip.icon.fontSize.$value}px`,
                  marginLeft: `${themeTokensCosmos_default._components.muiAutocomplete.small._componentes.chip.icon.marignLeft.$value}px`
                }
              }
            }
          }
        },
        inputRoot: {
          "&.MuiInputBase-sizeSmall": {
            minHeight: `${themeTokensCosmos_default._components.muiAutocomplete.input.small.minHeight.$value}px`,
            paddingBlock: `${themeTokensCosmos_default._components.muiAutocomplete.input.small.py.$value}px`,
            paddingInline: `${themeTokensCosmos_default._components.muiAutocomplete.input.small.px.$value}px`,
            "& .MuiInputBase-input": {
              padding: "4px 0",
              paddingBlock: `${themeTokensCosmos_default._components.muiAutocomplete.input.small.base.py.$value}px`,
              paddingInline: `${themeTokensCosmos_default._components.muiAutocomplete.input.small.base.px.$value}px`,
              fontSize: `${themeTokensCosmos_default._components.muiAutocomplete.input.small.base.fontSize.$value}px`
            }
          }
        },
        input: {
          fontSize: `${themeTokensCosmos_default._components.muiAutocomplete.input.fontSize.$value}px`
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: `${themeTokensCosmos_default._components.muiTabs.minHeight.$value}px`
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          minHeight: `${themeTokensCosmos_default._components.muiTab.minHeight.$value}px`
        }
      }
    },
    // ========================================================================
    // COMPONENTES DE FEEDBACK Y NOTIFICACIÓN
    // ========================================================================
    // ALERTAS
    MuiAlert: {
      styleOverrides: {
        standardError: ({ theme }) => ({
          backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.alert.error.background.$value.Light : themeTokensCosmos_default.palette._components.alert.error.background.$value.Dark
        }),
        standardWarning: ({ theme }) => ({
          backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.alert.warning.background.$value.Light : themeTokensCosmos_default.palette._components.alert.warning.background.$value.Dark
        }),
        standardInfo: ({ theme }) => ({
          backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.alert.info.background.$value.Light : themeTokensCosmos_default.palette._components.alert.info.background.$value.Dark
        }),
        standardSuccess: ({ theme }) => ({
          backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.alert.success.background.$value.Light : themeTokensCosmos_default.palette._components.alert.success.background.$value.Dark
        })
      }
    },
    // APP BAR
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.appBar.defaultFill.$value.Light : themeTokensCosmos_default.palette._components.appBar.defaultFill.$value.Dark
        })
      }
    },
    // AVATAR
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.avatar.fill.$value.Light : themeTokensCosmos_default.palette._components.avatar.fill.$value.Dark,
          color: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.avatar.color.$value.Light : themeTokensCosmos_default.palette._components.avatar.color.$value.Dark
        })
      }
    },
    // SWITCH
    MuiSwitch: {
      styleOverrides: {
        sizeSmall: {
          width: `${themeTokensCosmos_default._components.muiSwitch.width.$value}px`,
          height: `${themeTokensCosmos_default._components.muiSwitch.height.$value}px`,
          padding: `${themeTokensCosmos_default._components.muiSwitch.padding.$value}px`,
          "& .MuiSwitch-switchBase": {
            padding: `${themeTokensCosmos_default._components.muiSwitch.base.padding.$value}px`,
            "&.Mui-checked": {
              transform: "translateX(16px)"
            }
          },
          "& .MuiSwitch-thumb": {
            width: `${themeTokensCosmos_default._components.muiSwitch.thumb.width.$value}px`,
            height: `${themeTokensCosmos_default._components.muiSwitch.thumb.height.$value}px`
          },
          "& .MuiSwitch-track": {
            borderRadius: `${themeTokensCosmos_default._components.muiSwitch.track.borderRadius.$value}px`
          }
        },
        thumb: ({ theme }) => ({
          backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.switch.thumb.$value.Light : themeTokensCosmos_default.palette._components.switch.thumb.$value.Dark
        }),
        track: ({ theme }) => ({
          backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.switch.track.$value.Light : themeTokensCosmos_default.palette._components.switch.track.$value.Dark,
          opacity: 0.5,
          ".Mui-checked.Mui-checked + &": {
            backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette.primary.main.$value.Light : themeTokensCosmos_default.palette.primary.main.$value.Dark,
            opacity: 1
          }
        }),
        switchBase: ({ theme, ownerState }) => ({
          "&.Mui-disabled": {
            "& .MuiSwitch-thumb": {
              backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.switch.thumb.$value.Light : themeTokensCosmos_default.palette._components.switch.thumb.$value.Dark
            }
          },
          "&.Mui-checked": {
            "& + .MuiSwitch-track": {
              backgroundColor: ownerState.color === "default" ? themeTokensCosmos_default.palette._components.switch.track.$value.Light : theme.palette[ownerState.color]?.main || themeTokensCosmos_default.palette._components.switch.track.$value,
              opacity: 1
            }
          }
        }),
        colorPrimary: ({ theme }) => ({
          "&.Mui-checked": {
            color: theme.palette.common.white,
            "& + .MuiSwitch-track": {
              backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette.primary.main.$value.Light : themeTokensCosmos_default.palette.primary.main.$value.Dark,
              opacity: 1
            }
          }
        }),
        colorSecondary: ({ theme }) => ({
          "&.Mui-checked": {
            color: theme.palette.common.white,
            "& + .MuiSwitch-track": {
              backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette.secondary.main.$value.Light : themeTokensCosmos_default.palette.secondary.main.$value.Dark,
              opacity: 1
            }
          }
        })
      }
    },
    // RATING
    MuiRating: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiRating-iconEmpty": {
            color: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.rating.enabledBorder.$value.Light : themeTokensCosmos_default.palette._components.rating.enabledBorder.$value.Dark
          },
          "& .MuiRating-iconFilled": {
            color: theme.palette.mode === "light" ? themeTokensCosmos_default["brand-colors"].orange[500].$value : themeTokensCosmos_default["brand-colors"].orange[400].$value
          }
        })
      }
    },
    // SNACKBAR
    MuiSnackbar: {
      styleOverrides: {
        root: {
          "& .MuiSnackbarContent-root": ({ theme }) => ({
            backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.snackbar.fill.$value.Light : themeTokensCosmos_default.palette._components.snackbar.fill.$value.Dark,
            color: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.snackbar.color.$value.Light : themeTokensCosmos_default.palette._components.snackbar.color.$value.Dark
          })
        }
      }
    },
    // TOOLTIP
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.tooltip.fill.$value.Light : themeTokensCosmos_default.palette._components.tooltip.fill.$value.Dark,
          color: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.tooltip.color.$value.Light : themeTokensCosmos_default.palette._components.tooltip.color.$value.Dark
        }),
        arrow: ({ theme }) => ({
          color: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.tooltip.fill.$value.Light : themeTokensCosmos_default.palette._components.tooltip.fill.$value.Dark
        })
      }
    },
    // BACKDROP
    MuiBackdrop: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette._components.backdrop.fill.$value.Light : themeTokensCosmos_default.palette._components.backdrop.fill.$value.Dark
        })
      }
    },
    // ========================================================================
    // COMPONENTES DE DATOS Y DISPLAY
    // ========================================================================
    // CHIPS
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: `${themeTokensCosmos_default._components.muiChip.borderRadius.$value}px`,
          fontSize: `${themeTokensCosmos_default._components.muiChip.fontSize.$value}px`,
          lineHeight: `${themeTokensCosmos_default._components.muiChip.lineHeight.$value}px`
        },
        outlined: ({ theme }) => ({
          "&.MuiChip-colorDefault": {
            borderColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette.divider.$value.Light : themeTokensCosmos_default.palette.divider.$value.Dark
          }
        })
      }
    },
    // CARD
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.MuiPaper-outlined": {
            borderColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette.divider.$value.Light : themeTokensCosmos_default.palette.divider.$value.Dark
          }
        })
      }
    },
    // PAPER
    MuiPaper: {
      styleOverrides: {
        outlined: ({ theme }) => ({
          borderColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette.divider.$value.Light : themeTokensCosmos_default.palette.divider.$value.Dark
        })
      }
    },
    // ACCORDION
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:before": {
            backgroundColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette.divider.$value.Light : themeTokensCosmos_default.palette.divider.$value.Dark
          }
        })
      }
    },
    // STEPPER
    MuiStepConnector: {
      styleOverrides: {
        line: ({ theme }) => ({
          borderColor: theme.palette.mode === "light" ? themeTokensCosmos_default.palette.divider.$value.Light : themeTokensCosmos_default.palette.divider.$value.Dark
        })
      }
    },
    // BREADCRUMBS
    MuiBreadcrumbs: {
      styleOverrides: {
        ol: {
          "& .MuiBreadcrumbs-separator": ({ theme }) => ({
            color: theme.palette.mode === "light" ? themeTokensCosmos_default.palette.divider.$value.Light : themeTokensCosmos_default.palette.divider.$value.Dark
          })
        }
      }
    },
    // INPUT ADORNMENT
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          "& .MuiIconButton-root": {
            padding: `${themeTokensCosmos_default._components.muiIconButton.padding.$value}px !important`,
            "& .MuiSvgIcon-root": {
              fontSize: `${themeTokensCosmos_default._components.muiIconButton.fontSize.$value}px !important`
            }
          }
        }
      }
    }
  }
};
var baseTheme = (0, import_styles.createTheme)(baseThemeConfig);
var baseTheme_default = baseTheme;

// src/themeCosmosLight.ts
var import_styles2 = require("@mui/material/styles");

// node_modules/@mui/utils/esm/deepmerge/deepmerge.js
var React = __toESM(require("react"));
var import_react_is = __toESM(require_react_is());
function isPlainObject(item) {
  if (typeof item !== "object" || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (/* @__PURE__ */ React.isValidElement(source) || (0, import_react_is.isValidElementType)(source) || !isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach((key) => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? {
    ...target
  } : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (/* @__PURE__ */ React.isValidElement(source[key]) || (0, import_react_is.isValidElementType)(source[key])) {
        output[key] = source[key];
      } else if (isPlainObject(source[key]) && // Avoid prototype pollution
      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

// src/themeCosmosLight.ts
var cosmosLightConfig = {
  // ============================================================================
  // PALETA DE COLORES COSMOS
  // ============================================================================
  palette: {
    // COLORES PRIMARIOS - Violeta/Morado Cosmos
    primary: {
      50: themeTokensCosmos_default["brand-colors"].primary.light[50].$value,
      100: themeTokensCosmos_default["brand-colors"].primary.light[100].$value,
      200: themeTokensCosmos_default["brand-colors"].primary.light[200].$value,
      300: themeTokensCosmos_default["brand-colors"].primary.light[300].$value,
      400: themeTokensCosmos_default["brand-colors"].primary.light[400].$value,
      500: themeTokensCosmos_default["brand-colors"].primary.light[500].$value,
      600: themeTokensCosmos_default["brand-colors"].primary.light[600].$value,
      700: themeTokensCosmos_default["brand-colors"].primary.light[700].$value,
      800: themeTokensCosmos_default["brand-colors"].primary.light[800].$value,
      900: themeTokensCosmos_default["brand-colors"].primary.light[900].$value,
      main: themeTokensCosmos_default["brand-colors"].primary.light[500].$value,
      light: themeTokensCosmos_default["brand-colors"].primary.light[400].$value,
      dark: themeTokensCosmos_default["brand-colors"].primary.light[900].$value,
      contrastText: themeTokensCosmos_default.palette.primary.contrastText.$value.Light
    }
  },
  // ============================================================================
  // TIPOGRAFÍA COSMOS - ROBOTO
  // ============================================================================
  typography: {
    fontFamily: themeTokensCosmos_default.typography.fontFamily.$value,
    // JERARQUÍA DE TÍTULOS - Basada en tokens Cosmos
    h1: {
      fontSize: `${themeTokensCosmos_default.typography.heading.h1.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.heading.h1.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.heading.h1.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.heading.h1.letterSpacing.$value}px`
    },
    h2: {
      fontSize: `${themeTokensCosmos_default.typography.heading.h2.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.heading.h2.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.heading.h2.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.heading.h2.letterSpacing.$value}px`
    },
    h3: {
      fontSize: `${themeTokensCosmos_default.typography.heading.h3.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.heading.h3.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.heading.h3.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.heading.h3.letterSpacing.$value}px`
    },
    h4: {
      fontSize: `${themeTokensCosmos_default.typography.heading.h4.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.heading.h4.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.heading.h4.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.heading.h4.letterSpacing.$value}px`
    },
    h5: {
      fontSize: `${themeTokensCosmos_default.typography.heading.h5.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.heading.h5.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.heading.h5.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.heading.h5.letterSpacing.$value}px`
    },
    h6: {
      fontSize: `${themeTokensCosmos_default.typography.heading.h6.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.heading.h6.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.heading.h6.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.heading.h6.letterSpacing.$value}px`
    },
    // TEXTO DE CUERPO
    body1: {
      fontSize: `${themeTokensCosmos_default.typography.body[1].fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.body[1].fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.body[1].lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.body[1].letterSpacing.$value}px`
    },
    body2: {
      fontSize: `${themeTokensCosmos_default.typography.body[2].fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.body[2].fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.body[2].lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.body[2].letterSpacing.$value}px`
    },
    // ELEMENTOS ESPECIALES
    button: {
      fontSize: "0.8125rem",
      fontWeight: 500,
      lineHeight: "1.25rem",
      textTransform: "none"
    },
    caption: {
      fontSize: `${themeTokensCosmos_default.typography.caption.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.caption.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.caption.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.caption.letterSpacing.$value}px`
    },
    overline: {
      fontSize: `${themeTokensCosmos_default.typography.overline.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.overline.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.overline.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.overline.letterSpacing.$value}px`,
      textTransform: "uppercase"
    },
    subtitle1: {
      fontSize: `${themeTokensCosmos_default.typography.subtitle[1].fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.subtitle[1].fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.subtitle[1].lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.subtitle[1].letterSpacing.$value}px`
    },
    subtitle2: {
      fontSize: `${themeTokensCosmos_default.typography.subtitle[2].fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.subtitle[2].fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.subtitle[2].lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.subtitle[2].letterSpacing.$value}px`
    }
  },
  // ============================================================================
  // COMPONENTES ESPECÍFICOS COSMOS
  // ============================================================================
  components: {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: "medium"
      },
      styleOverrides: {
        root: {
          "&.MuiSvgIcon-fontSizeSmall": {
            fontSize: "1.25rem"
          },
          "&.MuiSvgIcon-fontSizeMedium": {
            fontSize: "1.5rem"
          },
          "&.MuiSvgIcon-fontSizeLarge": {
            fontSize: "2rem"
          }
        }
      }
    }
  }
};
var mergedConfig = deepmerge(baseThemeConfig, cosmosLightConfig);
var themeCosmosLight = (0, import_styles2.createTheme)(mergedConfig);
var themeCosmosLight_default = themeCosmosLight;

// src/themeCosmosDark.ts
var import_styles3 = require("@mui/material/styles");
var cosmosDarkConfig = {
  // ============================================================================
  // PALETA DE COLORES COSMOS - MODO OSCURO
  // ============================================================================
  palette: {
    mode: "dark",
    // COLORES PRIMARIOS - Violeta/Morado Cosmos (adaptado para modo oscuro)
    primary: {
      50: themeTokensCosmos_default["brand-colors"].primary.dark[50].$value,
      100: themeTokensCosmos_default["brand-colors"].primary.dark[100].$value,
      200: themeTokensCosmos_default["brand-colors"].primary.dark[200].$value,
      300: themeTokensCosmos_default["brand-colors"].primary.dark[300].$value,
      400: themeTokensCosmos_default["brand-colors"].primary.dark[400].$value,
      500: themeTokensCosmos_default["brand-colors"].primary.dark[500].$value,
      600: themeTokensCosmos_default["brand-colors"].primary.dark[600].$value,
      700: themeTokensCosmos_default["brand-colors"].primary.dark[700].$value,
      800: themeTokensCosmos_default["brand-colors"].primary.dark[800].$value,
      900: themeTokensCosmos_default["brand-colors"].primary.dark[900].$value,
      main: themeTokensCosmos_default["brand-colors"].primary.dark[500].$value,
      light: themeTokensCosmos_default["brand-colors"].primary.dark[400].$value,
      dark: themeTokensCosmos_default["brand-colors"].primary.dark[900].$value,
      contrastText: themeTokensCosmos_default.palette.primary.contrastText.$value.Dark
    },
    // Colores de fondo para modo oscuro
    background: {
      default: themeTokensCosmos_default.palette.background.default.$value.Dark,
      paper: themeTokensCosmos_default.palette.background.paper.$value.Dark
    },
    // Colores de texto para modo oscuro
    text: {
      primary: themeTokensCosmos_default.palette.text.primary.$value.Dark,
      secondary: themeTokensCosmos_default.palette.text.secondary.$value.Dark,
      disabled: themeTokensCosmos_default.palette.text.disabled.$value.Dark
    },
    // Líneas divisoras para modo oscuro
    divider: themeTokensCosmos_default.palette.divider.$value.Dark,
    // Acciones para modo oscuro
    action: {
      active: themeTokensCosmos_default.palette.action.active.$value.Dark,
      hover: themeTokensCosmos_default.palette.action.hover.$value.Dark,
      selected: themeTokensCosmos_default.palette.action.selected.$value.Dark,
      disabled: themeTokensCosmos_default.palette.action.disabled.$value.Dark,
      disabledBackground: themeTokensCosmos_default.palette.action.disabledBackground.$value.Dark
    }
  },
  // ============================================================================
  // TIPOGRAFÍA COSMOS - ROBOTO
  // ============================================================================
  typography: {
    fontFamily: themeTokensCosmos_default.typography.fontFamily.$value,
    // JERARQUÍA DE TÍTULOS - Basada en tokens Cosmos
    h1: {
      fontSize: `${themeTokensCosmos_default.typography.heading.h1.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.heading.h1.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.heading.h1.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.heading.h1.letterSpacing.$value}px`
    },
    h2: {
      fontSize: `${themeTokensCosmos_default.typography.heading.h2.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.heading.h2.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.heading.h2.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.heading.h2.letterSpacing.$value}px`
    },
    h3: {
      fontSize: `${themeTokensCosmos_default.typography.heading.h3.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.heading.h3.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.heading.h3.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.heading.h3.letterSpacing.$value}px`
    },
    h4: {
      fontSize: `${themeTokensCosmos_default.typography.heading.h4.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.heading.h4.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.heading.h4.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.heading.h4.letterSpacing.$value}px`
    },
    h5: {
      fontSize: `${themeTokensCosmos_default.typography.heading.h5.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.heading.h5.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.heading.h5.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.heading.h5.letterSpacing.$value}px`
    },
    h6: {
      fontSize: `${themeTokensCosmos_default.typography.heading.h6.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.heading.h6.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.heading.h6.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.heading.h6.letterSpacing.$value}px`
    },
    // TEXTO DE CUERPO
    body1: {
      fontSize: `${themeTokensCosmos_default.typography.body[1].fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.body[1].fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.body[1].lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.body[1].letterSpacing.$value}px`
    },
    body2: {
      fontSize: `${themeTokensCosmos_default.typography.body[2].fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.body[2].fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.body[2].lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.body[2].letterSpacing.$value}px`
    },
    // ELEMENTOS ESPECIALES
    button: {
      fontSize: "0.8125rem",
      fontWeight: 500,
      lineHeight: "1.25rem",
      textTransform: "none"
    },
    caption: {
      fontSize: `${themeTokensCosmos_default.typography.caption.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.caption.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.caption.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.caption.letterSpacing.$value}px`
    },
    overline: {
      fontSize: `${themeTokensCosmos_default.typography.overline.fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.overline.fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.overline.lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.overline.letterSpacing.$value}px`,
      textTransform: "uppercase"
    },
    subtitle1: {
      fontSize: `${themeTokensCosmos_default.typography.subtitle[1].fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.subtitle[1].fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.subtitle[1].lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.subtitle[1].letterSpacing.$value}px`
    },
    subtitle2: {
      fontSize: `${themeTokensCosmos_default.typography.subtitle[2].fontSize.$value}px`,
      fontWeight: themeTokensCosmos_default.typography.subtitle[2].fontWeight.$value,
      lineHeight: `${themeTokensCosmos_default.typography.subtitle[2].lineHeight.$value}px`,
      letterSpacing: `${themeTokensCosmos_default.typography.subtitle[2].letterSpacing.$value}px`
    }
  },
  // ============================================================================
  // COMPONENTES ESPECÍFICOS COSMOS
  // ============================================================================
  components: {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: "medium"
      },
      styleOverrides: {
        root: {
          "&.MuiSvgIcon-fontSizeSmall": {
            fontSize: "1.25rem"
          },
          "&.MuiSvgIcon-fontSizeMedium": {
            fontSize: "1.5rem"
          },
          "&.MuiSvgIcon-fontSizeLarge": {
            fontSize: "2rem"
          }
        }
      }
    }
  }
};
var mergedConfig2 = deepmerge(baseThemeConfig, cosmosDarkConfig);
var themeCosmosDark = (0, import_styles3.createTheme)(mergedConfig2);
var themeCosmosDark_default = themeCosmosDark;

// src/index.ts
var import_styles4 = require("@mui/material/styles");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  baseTheme,
  createTheme,
  themeCosmosDark,
  themeCosmosLight
});
/*! Bundled license information:

react-is/cjs/react-is.production.js:
  (**
   * @license React
   * react-is.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
