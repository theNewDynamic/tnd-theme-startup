module.exports = {
  theme: {
    extend: {
      width: {
        "30": "30%"
      },
      colors: {
        'talos-text': {
          100: '#F2F2F2',
          200: '#DFDFDF',
          300: '#CCCCCC',
          400: '#A6A6A6',
          500: '#808080',
          600: '#737373',
          700: '#4D4D4D',
          800: '#3A3A3A',
          900: '#262626',
          },
        'primary-color': {
          100: '#EBF7F9',
          200: '#CCEBF1',
          300: '#ADDFE8',
          400: '#70C7D6',
          500: '#32AFC5',
          600: '#2D9EB1',
          700: '#1E6976',
          800: '#174F59',
          900: '#0F353B',
          },
          'primary-color-2': {
            100: '#F0F5F8',
            200: '#DBE6EE',
            300: '#C5D7E4',
            400: '#99BAD0',
            500: '#6D9CBC',
            600: '#628CA9',
            700: '#415E71',
            800: '#314655',
            900: '#212F38',
            },        
        "logo-colors": {
          1: "#32AFC5",
          2: "#6D9CBC",
          3: "#AC80A3",
          4: "#E66B8D"
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
        headings: [
          "Roboto Condensed",
          
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif"
        ],
        sans: [
          "Roboto",
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
        lineHeight: theme("lineHeight.tight"),
        fontFamily: theme("fontFamily.headings")
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
