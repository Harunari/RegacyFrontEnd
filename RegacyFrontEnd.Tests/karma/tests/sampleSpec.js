(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../RegacyFrontEnd/Scripts/CommonLibrary/Extensions/string.extensions", "../../../RegacyFrontEnd/Scripts/Oiisu/controller"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("../../../RegacyFrontEnd/Scripts/CommonLibrary/Extensions/string.extensions");
    var controller_1 = require("../../../RegacyFrontEnd/Scripts/Oiisu/controller");
    describe('拡張メソッドのテスト', function () {
        it('文字列はシングルクォートで囲むこと', function () {
            expect("'matsumu'").toEqual('matsumu'.quoted());
        });
    });
    describe('domのテスト', function () {
        beforeEach(function () {
            document.body.innerHTML = window.__html__["RegacyFrontEnd.Tests/karma/fixtures/main.html"];
        });
        it('選んだ要素のfor属性を取得できること', function () {
            var controller = new controller_1.Controller();
            expect("matsumu").toEqual(controller.getForAttr('sample'));
        });
    });
});
