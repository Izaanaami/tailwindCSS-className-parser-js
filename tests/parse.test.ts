import Tailwind from "../src/index";
const config = require("./tailwind.config");
const { parse } = Tailwind(config);

test("m-4", () => {
  expect(parse("m-4")).toStrictEqual({
    className: "m-4",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "margin",
    value: "1rem",
    compositeProperties: {},
    relatedProperties: ["margin-top", "margin-right", "margin-bottom", "margin-left"],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("md:w-48", () => {
  expect(parse("md:w-48")).toStrictEqual({
    className: "md:w-48",
    responsiveModifier: "md",
    pseudoModifier: null,
    property: "width",
    value: "12rem",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("text-sm", () => {
  expect(parse("text-sm")).toStrictEqual({
    className: "text-sm",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "font-size",
    value: "0.875rem",
    compositeProperties: { lineHeight: "1.25rem" },
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("md:hover:text-blue-600", () => {
  expect(parse("md:hover:text-blue-600")).toStrictEqual({
    className: "md:hover:text-blue-600",
    responsiveModifier: "md",
    pseudoModifier: "hover",
    property: "color",
    value: "#2563eb",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("hover:bg-green-100", () => {
  expect(parse("hover:bg-green-100")).toStrictEqual({
    className: "hover:bg-green-100",
    responsiveModifier: null,
    pseudoModifier: "hover",
    property: "background-color",
    value: "#dcfce7",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("absolute", () => {
  expect(parse("absolute")).toStrictEqual({
    className: "absolute",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "position",
    value: "absolute",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("font-serif", () => {
  expect(parse("font-serif")).toStrictEqual({
    className: "font-serif",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "font-family",
    value: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("flex", () => {
  expect(parse("flex")).toStrictEqual({
    className: "flex",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "display",
    value: "flex",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("bg-red-200/50", () => {
  expect(parse("bg-red-200/50")).toStrictEqual({
    className: "bg-red-200/50",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "background-color",
    value: "#fecaca80",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("right-2/4", () => {
  expect(parse("right-2/4")).toStrictEqual({
    className: "right-2/4",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "right",
    value: "50%",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

// composite values
test("sr-only", () => {
  expect(parse("sr-only")).toStrictEqual({
    className: "sr-only",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "composite",
    value: null,
    compositeProperties: {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      "white-space": "nowrap",
      borderWidth: "0",
    },
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("block", () => {
  expect(parse("block")).toStrictEqual({
    className: "block",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "display",
    value: "block",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("hovers:bg-green-100", () => {
  expect(parse("hovers:bg-green-100")).toStrictEqual({
    className: "hovers:bg-green-100",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "background-color",
    value: "#dcfce7",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

// incorrect input
test("bg-green-1000", () => {
  expect(parse("bg-green-1000")).toStrictEqual({
    className: "bg-green-1000",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "ERROR",
    value: "ERROR",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("drop-shadow-md", () => {
  expect(parse("drop-shadow-md")).toStrictEqual({
    className: "drop-shadow-md",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "drop-shadow",
    value: "0 4px 3px rgb(0 0 0 / 0.07), 0 2px 2px rgb(0 0 0 / 0.06)",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("sm:-m-64", () => {
  expect(parse("sm:-m-64")).toStrictEqual({
    className: "sm:-m-64",
    responsiveModifier: "sm",
    pseudoModifier: null,
    property: "margin",
    value: "-16rem",
    compositeProperties: {},
    relatedProperties: ["margin-top", "margin-right", "margin-bottom", "margin-left"],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("bg-red-200/50", () => {
  expect(parse("bg-red-200/50")).toStrictEqual({
    className: "bg-red-200/50",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "background-color",
    value: "#fecaca80",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("border", () => {
  expect(parse("border")).toStrictEqual({
    className: "border",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "border-width",
    value: "1px",
    compositeProperties: {},
    relatedProperties: ["border-top-width", "border-right-width", "border-bottom-width", "border-left-width"],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("outline", () => {
  expect(parse("outline")).toStrictEqual({
    className: "outline",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "outline-style",
    value: "solid",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

// classNames with arbitrary values
test("bg-[#342312]", () => {
  expect(parse("bg-[#342312]")).toStrictEqual({
    className: "bg-[#342312]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "background-color",
    value: "#342312",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("text-[20px]", () => {
  expect(parse("text-[20px]")).toStrictEqual({
    className: "text-[20px]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "font-size",
    value: "20px",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("top-[10px]", () => {
  expect(parse("top-[10px]")).toStrictEqual({
    className: "top-[10px]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "top",
    value: "10px",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("bg-[center]", () => {
  expect(parse("bg-[center]")).toStrictEqual({
    className: "bg-[center]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "background-position",
    value: "center",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("bg-[fixed]", () => {
  expect(parse("bg-[fixed]")).toStrictEqual({
    className: "bg-[fixed]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "ERROR",
    value: "fixed",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("aspect-[3/10]", () => {
  expect(parse("aspect-[3/10]")).toStrictEqual({
    className: "aspect-[3/10]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "aspect-ratio",
    value: "3/10",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("!font-[900]", () => {
  expect(parse("!font-[900]")).toStrictEqual({
    className: "font-[900]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "font-weight",
    value: "900",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: true,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("hover:border-t-[rgb(29,32,135)]", () => {
  expect(parse("hover:border-t-[rgb(29,32,135)]")).toStrictEqual({
    className: "hover:border-t-[rgb(29,32,135)]",
    responsiveModifier: null,
    pseudoModifier: "hover",
    property: "border-top-color",
    value: "rgb(29,32,135)",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("!lg:hover:px-[140rem]", () => {
  expect(parse("!lg:hover:px-[140rem]")).toStrictEqual({
    className: "lg:hover:px-[140rem]",
    responsiveModifier: "lg",
    pseudoModifier: "hover",
    property: "padding-x",
    value: "140rem",
    compositeProperties: {},
    relatedProperties: ["padding-right", "padding-left"],
    isImportant: true,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("shadow-[#003232]", () => {
  expect(parse("shadow-[#003232]")).toStrictEqual({
    className: "shadow-[#003232]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "box-shadow-color",
    value: "#003232",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

test("shadow-[10px_5px_0px_3px_#444444]", () => {
  expect(parse("shadow-[10px_5px_0px_3px_#444444]")).toStrictEqual({
    className: "shadow-[10px_5px_0px_3px_#444444]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "box-shadow",
    value: "10px 5px 0px 3px #444444",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  });
});

// with arbitrary variants (modifiers)

test("[&:nth-child(3)]:hover:bg-red-100", () => {
  expect(parse("[&:nth-child(3)]:hover:bg-red-100")).toStrictEqual({
    className: "[&:nth-child(3)]:hover:bg-red-100",
    responsiveModifier: null,
    pseudoModifier: "hover",
    property: "background-color",
    value: "#fee2e2",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: ["&:nth-child(3)"],
    atRules: [],
  });
});

test("lg:[&_p]:[&:last-child]:mx-2", () => {
  expect(parse("lg:[&_p]:[&:last-child]:mx-2")).toStrictEqual({
    className: "lg:[&_p]:[&:last-child]:mx-2",
    responsiveModifier: "lg",
    pseudoModifier: null,
    property: "margin-x",
    value: "0.5rem",
    compositeProperties: {},
    relatedProperties: ["margin-right", "margin-left"],
    isImportant: false,
    arbitraryModifiers: ["& p", "&:last-child"],
    atRules: [],
  });
});

test("![@media(max-width:800px)]:[&:last-child]:hover:mx-2", () => {
  expect(parse("![@media(max-width:800px)]:[&:last-child]:hover:mx-2")).toStrictEqual({
    className: "[@media(max-width:800px)]:[&:last-child]:hover:mx-2",
    responsiveModifier: null,
    pseudoModifier: "hover",
    property: "margin-x",
    value: "0.5rem",
    compositeProperties: {},
    relatedProperties: ["margin-right", "margin-left"],
    isImportant: true,
    arbitraryModifiers: ["&:last-child"],
    atRules: [
      {
        atRule: "@media(max-width:800px)",
        modifiers: [],
      }
    ],
  });
});

test("[@media(min-width:300px){&:hover}]:-p-2", () => {
  expect(parse("[@media(min-width:300px){&:hover}]:-p-2")).toStrictEqual({
    className: "[@media(min-width:300px){&:hover}]:-p-2",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "padding",
    value: "-0.5rem",
    compositeProperties: {},
    relatedProperties: ["padding-top", "padding-right", "padding-bottom", "padding-left"],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [
      {
        atRule: "@media(min-width:300px)",
        modifiers: ["&:hover"]
      }
    ],
  });
});

test("!sm:active:[@media(min-width:300px){&:hover}]:[&:first-child]:bg-[#392939]", () => {
  expect(parse("!sm:active:[@media(min-width:300px){&:hover}]:[&:first-child]:bg-[#392939]")).toStrictEqual({
    className: "sm:active:[@media(min-width:300px){&:hover}]:[&:first-child]:bg-[#392939]",
    responsiveModifier: "sm",
    pseudoModifier: "active",
    property: "background-color",
    value: "#392939",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: true,
    arbitraryModifiers: ["&:first-child"],
    atRules: [
      {
        atRule: "@media(min-width:300px)",
        modifiers: ["&:hover"]
      }
    ],
  });
});

// arbitrary properties

test("[max-width:200px]", () => {
  expect(parse("[max-width:200px]")).toStrictEqual({
    className: "[max-width:200px]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "max-width",
    value: "200px",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  })
})

test("[grid-template:100px_auto_1fr_/_100%]", () => {
  expect(parse("[grid-template:100px_auto_1fr_/_100%]")).toStrictEqual({
    className: "[grid-template:100px_auto_1fr_/_100%]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "grid-template",
    value: "100px auto 1fr / 100%",
    compositeProperties: {},
    relatedProperties: ["grid-template-columns", "grid-template-rows", "grid-template-areas"],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  })
})

// arbitrary value with white-spaces are not allowed
test("[grid-template: 100px auto 1fr / 100%]", () => {
  expect(parse("[grid-template: 100px auto 1fr / 100%]")).toStrictEqual({
    className: "[grid-template: 100px auto 1fr / 100%]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "grid-template",
    value: "ERROR",
    compositeProperties: {},
    relatedProperties: ["grid-template-columns", "grid-template-rows", "grid-template-areas"],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  })
})

test("lg:hover:[position:absolute]", () => {
  expect(parse("lg:hover:[position:absolute]")).toStrictEqual({
    className: "lg:hover:[position:absolute]",
    responsiveModifier: "lg",
    pseudoModifier: "hover",
    property: "position",
    value: "absolute",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: [],
    atRules: [],
  })
})

test("sm:[@media(max-width:200px)]:[&:nth-child(2)]:hover:[padding:20px_10px]", () => {
  expect(parse("sm:[@media(max-width:200px)]:[&:nth-child(2)]:hover:[padding:20px_10px]")).toStrictEqual({
    className: "sm:[@media(max-width:200px)]:[&:nth-child(2)]:hover:[padding:20px_10px]",
    responsiveModifier: "sm",
    pseudoModifier: "hover",
    property: "padding",
    value: "20px 10px",
    compositeProperties: {},
    relatedProperties: ["padding-top", "padding-right", "padding-bottom", "padding-left"],
    isImportant: false,
    arbitraryModifiers: ["&:nth-child(2)"],
    atRules: [
      {
        atRule: "@media(max-width:200px)",
        modifiers: []
      }
    ],
  })
})

// arbitrary variant with arbitrary property
test("[&_first-child]:[z-index:10]", () => {
  expect(parse("[&_first-child]:[z-index:10]")).toStrictEqual({
    className: "[&_first-child]:[z-index:10]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "z-index",
    value: "10",
    compositeProperties: {},
    relatedProperties: [],
    isImportant: false,
    arbitraryModifiers: ["& first-child"],
    atRules: [],
  })
})