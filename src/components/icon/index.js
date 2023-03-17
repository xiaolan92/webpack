const svgIcons = require.context('./icons', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(svgIcons);
