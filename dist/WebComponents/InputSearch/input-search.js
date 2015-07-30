var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Vidyano;
(function (Vidyano) {
    var WebComponents;
    (function (WebComponents) {
        var InputSearch = (function (_super) {
            __extends(InputSearch, _super);
            function InputSearch() {
                _super.apply(this, arguments);
            }
            InputSearch.prototype._searchKeypressed = function (e) {
                if (e.keyCode == 13) {
                    var input = this.$$("#input");
                    if (input)
                        input.blur();
                    this._searchClick();
                }
            };
            InputSearch.prototype._searchClick = function (e) {
                this.fire("search", this.value);
                if (e && !this.value)
                    e.stopPropagation();
            };
            InputSearch.prototype._input_focused = function () {
                this.focused = true;
            };
            InputSearch.prototype._input_blurred = function () {
                this.focused = false;
            };
            InputSearch.prototype._stop_tap = function (e) {
                e.stopPropagation();
                this.focus();
            };
            InputSearch.prototype.focus = function () {
                var _this = this;
                setTimeout(function () {
                    var input = _this.$$("#input");
                    if (input)
                        input.focus();
                }, 100);
            };
            return InputSearch;
        })(WebComponents.WebComponent);
        WebComponents.InputSearch = InputSearch;
        WebComponents.WebComponent.register(InputSearch, WebComponents, "vi", {
            properties: {
                value: {
                    type: String,
                    notify: true,
                    value: ""
                },
                focused: {
                    type: Boolean,
                    reflectToAttribute: true
                },
                autofocus: {
                    type: Boolean,
                    reflectToAttribute: true
                },
                collapsed: {
                    type: Boolean,
                    reflectToAttribute: true,
                    value: false
                }
            }
        });
    })(WebComponents = Vidyano.WebComponents || (Vidyano.WebComponents = {}));
})(Vidyano || (Vidyano = {}));
