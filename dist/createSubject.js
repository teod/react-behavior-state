"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createSubject = function (initialState) {
    var observers = [];
    var state = initialState;
    return {
        subscribe: function (fn) {
            observers.push(fn);
            return function () { return observers.filter(function (subscriber) { return subscriber !== fn; }); };
        },
        broadcast: function (data) {
            state = data;
            observers.forEach(function (subscriber) { return subscriber(data); });
        },
        getValue: function () { return state; },
    };
};
exports.default = createSubject;
//# sourceMappingURL=createSubject.js.map