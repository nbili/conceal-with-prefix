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
    return function concealWithPrefix(original, prefix) {
        if (prefix === void 0) { prefix = '_'; }
        function invariant(key, action) {
            if (key.startsWith(prefix))
                throw new Error("Can't " + action + " private \"" + key + "\"");
        }
        var handler = {
            get: function (original, key) {
                invariant(key, 'get');
                return Reflect.get(original, key);
            },
            set: function (original, key, value) {
                invariant(key, 'set');
                return Reflect.set(original, key, value);
            }
        };
        return new Proxy(original, handler);
    };
});
