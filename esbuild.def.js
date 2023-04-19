export default {
    entryPoints: ["src/extension.ts", "src/stylesheet.css"],
    outdir: "dist",
    bundle: true,
    // For SpiderMoney updates check GJS release notes: https://gitlab.gnome.org/GNOME/gjs/-/blob/master/NEWS
    // target: "firefox60", // Since GJS 1.53.90
    target: "firefox68", // Since GJS 1.63.90
    // target: "firefox78", // Since GJS 1.65.90
    // target: "firefox91", // Since GJS 1.71.1
    // target: "firefox102", // Since GJS 1.73.2
    format: "esm",
    treeShaking: false,
    platform: "neutral", // generates ESM
    external: ["@girs/*"],
}