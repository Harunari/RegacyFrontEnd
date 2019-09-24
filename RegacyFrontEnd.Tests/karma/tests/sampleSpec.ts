import '../../../RegacyFrontEnd/Scripts/CommonLibrary/Extensions/string.extensions';
import { Controller } from '../../../RegacyFrontEnd/Scripts/Oiisu/controller';

describe('拡張メソッドのテスト',() => {
    it('文字列はシングルクォートで囲むこと', () => {
        expect(`'matsumu'`).toEqual('matsumu'.quoted());
    });    
});

describe('domのテスト', () => {
    beforeEach(() => {
        document.body.innerHTML = window.__html__["RegacyFrontEnd.Tests/karma/fixtures/main.html"];
    });

    it('選んだ要素のfor属性を取得できること', () => {
        const controller = new Controller();
        expect(`matsumu`).toEqual(controller.getForAttr('sample'));
    });
});

declare global {
    interface Window {
        __html__: string[];
    }
}