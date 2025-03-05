import serve from "rollup-plugin-serve";
import styles from "rollup-plugin-styles";

export default {
    input: "index.js",
    output: {
        file: "bundle.js",
        format: "iife",
    },
    plugins: [
        styles(),
        serve({
            open: true,
            contentBase: ".",
            port: 3000,
        }),
    ],
};
