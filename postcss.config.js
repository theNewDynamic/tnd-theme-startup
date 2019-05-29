//console.log("NODE_ENV", process.env.NODE_ENV);
// NOTE THAT PURGECSS IS ALREADY SETUP FOR VUE
//Note that we have "Themes" in for now. Remove when we move away from the themes folder
module.exports = {
    plugins: [
      require("postcss-import")({
        path: ["./src/css"]
      }),
      require("tailwindcss")("./src/css/tailwindcss/tailwindcss.config.js"),
      require("autoprefixer")({
        grid: false,
        browsers: [">1%"]
      }),
  
      ...(process.env.NODE_ENV !== "development"
        ? [
            require("cssnano")({
              preset: "default"
            }),
            require("@fullhuman/postcss-purgecss")({
              content: [
                "./layouts/**/*.html",
                "./components/**/**/*.html",
                "./themes/**/**/*.html",
                "./assets/js/app/**/*.vue"
              ],
              extractors: [
                {
                  extractor: class {
                    static extract(content) {
                      //console.log(process.env.NODE_ENV);
                      return content.match(/[A-z0-9-:\/]+/g);
                      //return content.match(/[A-z0-9-:\/]+/g) || [];
                    }
                  },
                  extensions: ["vue", "html"]
                }
              ],
              whitelist: [
                "fill-current",
                "ais-hits",
                "clip",
                "screen-reader-text",
                "ais-hits--item",
                "results-hidden",
                "hidden",
                "is-visible",
                "toggle",
                "scrolled-header",
                "opacity-50", // Used in playlist-identify-playing-video
                "opacity-0", // Used to resolve a conflit with fingerprinted resources.
                "ais-pagination",
                "ais-pagination--item__active ais-pagination--item__first",
                "ais-pagination--item__last"
              ]
            })
          ]
        : []) //If Development, do not use PurgeCSS
    ]
  };
  