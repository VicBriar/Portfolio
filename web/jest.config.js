// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build

const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/web',
  coverageThreshold: {
    global: {
        lines: 80,
    },
},
}

module.exports = config
