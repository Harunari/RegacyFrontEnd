(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Controller = /** @class */ (function () {
        function Controller() {
        }
        Controller.prototype.showConsole = function () {
            console.log('show');
        };
        Controller.prototype.showAlert = function () {
            alert("oiiisu");
        };
        Controller.prototype.getForAttr = function (domId) {
            var element = document.getElementById(domId);
            if (element) {
                return element.getAttribute('for') || '';
            }
            return '';
        };
        return Controller;
    }());
    exports.Controller = Controller;
});
//# sourceMappingURL=controller.js.map