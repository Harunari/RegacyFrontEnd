/// <reference path="../global.ts" />
/// <reference path="../typings/regasyJs.d.ts" />

declare const regacyLibrary: regacyLibrary;
declare const globalAge: number;
declare const globalFunction: Function;

import { Controller } from "./controller";
import "../CommonLibrary/Extensions/string.extensions";

console.log('initialized');

const controller = new Controller();
controller.showConsole();
controller.showAlert();
console.log(controller.getForAttr("testElement"));

console.log(globalFunction());

regacyLibrary.init(12);
regacyLibrary.showProperty();

console.log(globalAge);

console.log('matsumura'.quoted());

