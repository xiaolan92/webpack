module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  rootDir: './',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  // 告诉 jest 哪些文件需要经过单元测试
  collectCoverageFrom: [
    'src/**/*/*.ts',
    '!src/**/*.d.ts'
  ],
  // 单元测试覆盖率
  coverageThreshold: {
    global: {
      statements: 0,
      functions: 0,
      branches: 0,
      lines: 0
    },
  },
};
