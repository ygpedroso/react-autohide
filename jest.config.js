module.exports = {
    verbose: true,
    roots: ['<rootDir>/src'],
    testURL: 'http://localhost/',
    setupFiles: ['<rootDir>/src/tests/enzyme'],
    transform: {
        '^.+\\.js?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^.+\\.(css)$': '<rootDir>/src/tests/__mocks__/styleMock.js',
    },
};
