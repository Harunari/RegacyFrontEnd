﻿const tests = [];
for (var file in window.__karma__.files) {
    console.log(file);
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    baseUrl: '',
    deps: tests,
    callback: window.__karma__.start
});
