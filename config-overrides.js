module.exports = function override(config, env) {
    // Add polyfills
    config.resolve.fallback = {
        ...config.resolve.fallback,
        "util": require.resolve("util/"),
        "path": require.resolve("path-browserify")
    };
    
    return config;
}
