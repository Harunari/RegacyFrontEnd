/// <reference path="../global.ts" />
/// <reference path="../typings/regasyJs.d.ts" />
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./controller", "../CommonLibrary/Extensions/string.extensions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var controller_1 = require("./controller");
    require("../CommonLibrary/Extensions/string.extensions");
    console.log('initialized');
    var controller = new controller_1.Controller();
    controller.showConsole();
    controller.showAlert();
    console.log(controller.getForAttr("testElement"));
    console.log(globalFunction());
    regacyLibrary.init(12);
    regacyLibrary.showProperty();
    console.log(globalAge);
    console.log('matsumura'.quoted());
});
//# sourceMappingURL=main.js.map