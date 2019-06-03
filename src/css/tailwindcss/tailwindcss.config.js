module.exports = {
  theme: {
    extend: {
      width: {
        "30": "30%"
      },
      colors: {
        "primary-color2": {
          100: "#F0F7FA",
          200: "#D9EAF1",
          300: "#C2DEE9",
          400: "#94C5D9",
          500: "#66ACC8",
          600: "#5C9BB4",
          700: "#3D6778",
          800: "#2E4D5A",
          900: "#1F343C"
        },
        "primary-color": {
          100: "#E9F2F6",
          200: "#C8DEE7",
          300: "#A7CAD9",
          400: "#66A3BD",
          500: "#247BA0",
          600: "#206F90",
          700: "#164A60",
          800: "#103748",
          900: "#0B2530"
        }
      },
      fontFamily: {
        brand: [
          "Poppins",
          "Work Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: [
          "PT Serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif"
        ],
        sans: [
          "Work Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      }
    },
    textIndent: {
      // defaults to {}
      "1": "0.25rem",
      "2": "0.5rem"
    },
    textShadow: {
      // defaults to {}
      default: "0 2px 5px rgba(0, 0, 0, 0.5)",
      lg: "0 2px 10px rgba(0, 0, 0, 0.5)"
    },
    textStyles: theme => ({
      // defaults to {}
      heading: {
        output: false, // this means there won't be a "heading" component in the CSS, but it can be extended
        fontWeight: theme("fontWeight.bold"),
        lineHeight: theme("lineHeight.tight")
      },
      h1: {
        extends: "heading", // this means all the styles in "heading" will be copied here; "extends" can also be an array to extend multiple text styles
        fontSize: theme("fontSize.5xl"),
        "@screen sm": {
          fontSize: theme("fontSize.6xl")
        }
      },
      h2: {
        extends: "heading",
        fontSize: theme("fontSize.4xl"),
        "@screen sm": {
          fontSize: theme("fontSize.5xl")
        }
      },
      h3: {
        extends: "heading",
        fontSize: theme("fontSize.4xl")
      },
      h4: {
        extends: "heading",
        fontSize: theme("fontSize.3xl")
      },
      h5: {
        extends: "heading",
        fontSize: theme("fontSize.2xl")
      },
      h6: {
        extends: "heading",
        fontSize: theme("fontSize.xl")
      },
      link: {
        fontWeight: theme("fontWeight.bold"),
        color: theme("colors.blue.400"),
        "&:hover": {
          color: theme("colors.blue.600"),
          textDecoration: "underline"
        }
      },
      richText: {
        fontWeight: theme("fontWeight.normal"),
        fontSize: theme("fontSize.base"),
        lineHeight: theme("lineHeight.relaxed"),
        "> * + *": {
          marginTop: "1em"
        },
        h1: {
          extends: "h1"
        },
        h2: {
          extends: "h2"
        },
        h3: {
          extends: "h3"
        },
        h4: {
          extends: "h4"
        },
        h5: {
          extends: "h5"
        },
        h6: {
          extends: "h6"
        },
        ul: {
          listStyleType: "disc"
        },
        ol: {
          listStyleType: "decimal"
        },
        a: {
          extends: "link"
        },
        "b, strong": {
          fontWeight: theme("fontWeight.bold")
        },
        "i, em": {
          fontStyle: "italic"
        }
      }
    })
  },

  variants: {},
  plugins: [
    require("tailwindcss-grid")({
      grids: [2, 3, 5, 6, 8, 10, 12],
      gaps: {
        0: "0",
        4: "1rem",
        8: "2rem",
        "4-x": "1rem",
        "4-y": "1rem"
      },
      autoMinWidths: {
        "16": "4rem",
        "24": "6rem",
        "300px": "300px"
      },
      variants: ["responsive"]
    }),
    require("tailwindcss-typography")({
      ellipsis: true, // defaults to true
      hyphens: true, // defaults to true
      textUnset: true, // defaults to true
      componentPrefix: "c-" // for text styles; defaults to 'c-'
    })
  ]
};
