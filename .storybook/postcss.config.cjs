const postcssPresetEnv = require("postcss-preset-env");
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const currentDir = dirname(fileURLToPath(import.meta.url));


module.exports = {
  plugins: [
     "@csstools/postcss-global-data": {
        files: [join(currentDir, "./assets/css/mq.css")],
      },
    postcssPresetEnv({
      browsers: "> 0.2% and not dead",
      stage: 0,
      features: {
        "nesting-rules": {
          noIsPseudoSelector: false,
        },
      },
    }),
  ],
};
