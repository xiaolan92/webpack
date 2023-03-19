const isDEV = process.env.NODE_ENV === 'development'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          node: 'current',
          browsers: ['> 1%', 'last 2 versions', 'chrome >= 80']
        }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-transform-react-jsx-source',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-unicode-property-regex',
    isDEV && require.resolve('react-refresh/babel'),
    ["@babel/plugin-proposal-decorators", { legacy: true }]
  ].filter(Boolean)
}
