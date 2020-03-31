"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createSubject_1 = __importDefault(require("./createSubject"));
var createStore = function (initialState) {
    var subject = createSubject_1.default(initialState);
    var update = function (updater) {
        return typeof updater === 'function'
            ? subject.broadcast(updater(subject.getValue()))
            : subject.broadcast(__assign(__assign({}, subject.getValue()), updater));
    };
    return {
        update: update,
        subject: subject,
    };
};
exports.default = createStore;
//# sourceMappingURL=createStore.js.map