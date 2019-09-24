// Karma configuration
// Generated on Fri Sep 20 2019 14:55:30 GMT+0000 (UTC)

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'requirejs', 'fixture'],
        files: [
            { pattern: 'RegacyFrontEnd/Scripts/CommonLibrary/Extensions/**/*.js', included: false },
            { pattern: 'RegacyFrontEnd/Scripts/Oiisu/**/*.js', included: false },
            { pattern: 'RegacyFrontEnd.Tests/karma/tests/**/*Spec.js', included: false },
            'RegacyFrontEnd.Tests/karma/test-main.js',
            'RegacyFrontEnd.Tests/karma/fixtures/**/*.html'
        ],
        autoWatch: true,
        preprocessors: {
            'RegacyFrontEnd.Tests/karma/fixtures/*.html': 'html2js'
        },
        exclude: [
            'RegacyFrontEnd/Scripts/Oiisu/main.js'
        ],
        reporters: ['mocha'],
        logLevel: config.INFO
    });
};