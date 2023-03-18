module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  rootDir: './',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest' // ts 文件用 ts-jest 转换
  },
  // 匹配 __tests__ 目录下的 .js/.ts 文件 或其他目录下的 xx.test.js/ts xx.spec.js/ts
  testRegex: '(/__tests__/.*|(\\.|/)test)\\.(ts)$',
  // 单元测试覆盖率
  coverageThreshold: {
    global: {
      statements: 0,
      functions: 0,
      branches: 0,
      lines: 0
    }
  }
}
