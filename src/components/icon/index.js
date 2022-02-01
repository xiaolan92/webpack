const svgIcons = require.context("./icons", false, /\.svg$/),
    requireAll = requireContext => requireContext.keys().map(requireContext);
    requireAll(svgIcons); 