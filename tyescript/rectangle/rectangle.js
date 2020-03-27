"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rectangle = /** @class */ (function () {
    function rectangle(_x, _y) {
        var _this = this;
        this._x = _x;
        this._y = _y;
        this.area = function () {
            console.log(_this._x * _this._y);
        };
    }
    Object.defineProperty(rectangle.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rectangle.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    return rectangle;
}());
exports.rectangle = rectangle;
;
