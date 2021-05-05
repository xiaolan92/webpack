
const svgIcons = require.context("./svg", false, /\.svg$/),
    requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(svgIcons);