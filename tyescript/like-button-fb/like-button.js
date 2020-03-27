"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_button = /** @class */ (function () {
    function like_button(likeCount, IsSelected) {
        this.likeCount = likeCount;
        this.IsSelected = IsSelected;
    }
    like_button.prototype.OnClick = function () {
        this.likeCount += this.IsSelected ? -1 : +1;
        this.IsSelected = !this.IsSelected;
        //console.log(`likeCount : ${this.likeCount} AND IsSelected : ${this.IsSelected}`);
    };
    Object.defineProperty(like_button.prototype, "status", {
        get: function () {
            return "likeCount : " + this.likeCount + " AND IsSelected : " + this.IsSelected;
        },
        enumerable: true,
        configurable: true
    });
    return like_button;
}());
exports.like_button = like_button;
;
