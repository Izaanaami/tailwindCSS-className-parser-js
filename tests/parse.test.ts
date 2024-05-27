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
    relatedProperties: {},
    isImportant: false,
  });
});

test("md:w-48", () => {
  expect(parse("md:w-48")).toStrictEqual({
    className: "md:w-48",
    responsiveModifier: "md",
    pseudoModifier: null,
    property: "width",
    value: "12rem",
    relatedProperties: {},
    isImportant: false,
  });
});

test("text-sm", () => {
  expect(parse("text-sm")).toStrictEqual({
    className: "text-sm",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "font-size",
    value: "0.875rem",
    relatedProperties: { lineHeight: "1.25rem" },
    isImportant: false,
  });
});

test("md:hover:text-blue-600", () => {
  expect(parse("md:hover:text-blue-600")).toStrictEqual({
    className: "md:hover:text-blue-600",
    responsiveModifier: "md",
    pseudoModifier: "hover",
    property: "color",
    value: "#2563eb",
    relatedProperties: {},
    isImportant: false,
  });
});

test("hover:bg-green-100", () => {
  expect(parse("hover:bg-green-100")).toStrictEqual({
    className: "hover:bg-green-100",
    responsiveModifier: null,
    pseudoModifier: "hover",
    property: "background-color",
    value: "#dcfce7",
    relatedProperties: {},
    isImportant: false,
  });
});

test("absolute", () => {
  expect(parse("absolute")).toStrictEqual({
    className: "absolute",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "position",
    value: "absolute",
    relatedProperties: {},
    isImportant: false,
  });
});

test("font-serif", () => {
  expect(parse("font-serif")).toStrictEqual({
    className: "font-serif",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "font-family",
    value: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    relatedProperties: {},
    isImportant: false,
  });
});

test("flex", () => {
  expect(parse("flex")).toStrictEqual({
    className: "flex",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "display",
    value: "flex",
    relatedProperties: {},
    isImportant: false,
  });
});

test("bg-red-200/50", () => {
  expect(parse("bg-red-200/50")).toStrictEqual({
    className: "bg-red-200/50",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "background-color",
    value: "#fecaca80",
    relatedProperties: {},
    isImportant: false,
  });
});

test("right-2/4", () => {
  expect(parse("right-2/4")).toStrictEqual({
    className: "right-2/4",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "right",
    value: "50%",
    relatedProperties: {},
    isImportant: false,
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
    relatedProperties: {
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
    isImportant: false,
  });
});

test("block", () => {
  expect(parse("block")).toStrictEqual({
    className: "block",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "display",
    value: "block",
    relatedProperties: {},
    isImportant: false,
  });
});

// incorrect input
test("hovers:bg-green-100", () => {
  expect(parse("hovers:bg-green-100")).toStrictEqual({
    className: "hovers:bg-green-100",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "background-color",
    value: "#dcfce7",
    relatedProperties: {},
    isImportant: false,
  });
});

test("bg-green-1000", () => {
  expect(parse("bg-green-1000")).toStrictEqual({
    className: "bg-green-1000",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "ERROR",
    value: "ERROR",
    relatedProperties: {},
    isImportant: false,
  });
});

test("drop-shadow-md", () => {
  expect(parse("drop-shadow-md")).toStrictEqual({
    className: "drop-shadow-md",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "drop-shadow",
    value: "0 4px 3px rgb(0 0 0 / 0.07), 0 2px 2px rgb(0 0 0 / 0.06)",
    relatedProperties: {},
    isImportant: false,
  });
});

test("sm:-m-64", () => {
  expect(parse("sm:-m-64")).toStrictEqual({
    className: "sm:-m-64",
    responsiveModifier: "sm",
    pseudoModifier: null,
    property: "margin",
    value: "-16rem",
    relatedProperties: {},
    isImportant: false,
  });
});

test("bg-red-200/50", () => {
  expect(parse("bg-red-200/50")).toStrictEqual({
    className: "bg-red-200/50",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "background-color",
    value: "#fecaca80",
    relatedProperties: {},
    isImportant: false,
  });
});

test("border", () => {
  expect(parse("border")).toStrictEqual({
    className: "border",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "border-width",
    value: "1px",
    relatedProperties: {},
    isImportant: false,
  });
});

test("outline", () => {
  expect(parse("outline")).toStrictEqual({
    className: "outline",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "outline-style",
    value: "solid",
    relatedProperties: {},
    isImportant: false,
  });
});

// classNames with arbitrary values
test.only("bg-[#342312]", () => {
  expect(parse("bg-[#342312]")).toStrictEqual({
    className: "bg-[#342312]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "background-color",
    value: "#342312",
    relatedProperties: {},
    isImportant: false,
  });
});

test.only("text-[20px]", () => {
  expect(parse("text-[20px]")).toStrictEqual({
    className: "text-[20px]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "font-size",
    value: "20px",
    relatedProperties: {},
    isImportant: false,
  });
});

test.only("top-[10px]", () => {
  expect(parse("top-[10px]")).toStrictEqual({
    className: "top-[10px]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "top",
    value: "10px",
    relatedProperties: {},
    isImportant: false,
  });
});

test.only("bg-[center]", () => {
  expect(parse("bg-[center]")).toStrictEqual({
    className: "bg-[center]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "background-position",
    value: "center",
    relatedProperties: {},
    isImportant: false,
  });
});

test.only("bg-[fixed]", () => {
  expect(parse("bg-[fixed]")).toStrictEqual({
    className: "bg-[fixed]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "ERROR",
    value: "fixed",
    relatedProperties: {},
    isImportant: false,
  });
});

test.only("aspect-[3/10]", () => {
  expect(parse("aspect-[3/10]")).toStrictEqual({
    className: "aspect-[3/10]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "aspect-ratio",
    value: "3/10",
    relatedProperties: {},
    isImportant: false,
  });
});

test.only("!font-[900]", () => {
  expect(parse("!font-[900]")).toStrictEqual({
    className: "font-[900]",
    responsiveModifier: null,
    pseudoModifier: null,
    property: "font-weight",
    value: "900",
    relatedProperties: {},
    isImportant: true,
  });
});

test.only("hover:border-t-[rgb(29,32,135)]", () => {
  expect(parse("hover:border-t-[rgb(29,32,135)]")).toStrictEqual({
    className: "hover:border-t-[rgb(29,32,135)]",
    responsiveModifier: null,
    pseudoModifier: "hover",
    property: "border-top-color",
    value: "rgb(29,32,135)",
    relatedProperties: {},
    isImportant: false,
  });
});

test.only("!lg:hover:px-[140rem]", () => {
  expect(parse("!lg:hover:px-[140rem]")).toStrictEqual({
    className: "lg:hover:px-[140rem]",
    responsiveModifier: "lg",
    pseudoModifier: "hover",
    property: "padding-x",
    value: "140rem",
    relatedProperties: {},
    isImportant: true,
  });
});