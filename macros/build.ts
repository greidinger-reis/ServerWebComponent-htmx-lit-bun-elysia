Bun.build({
    entrypoints: ["./src/web/index.ts"],
    outdir: "./public",
    target: "browser",
    minify: {
        identifiers: false,
        whitespace: true,
        syntax: true,
    },
});
