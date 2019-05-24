"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var App_1 = __importDefault(require("../../src/App"));
describe("App", function () {
    it("App should return true", function () {
        chai_1.expect(App_1.default).to.equal(true);
    });
});
