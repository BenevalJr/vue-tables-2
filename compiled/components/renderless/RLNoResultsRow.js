"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLNoResultsRow',
  inject: ['colspan', 'display', 'componentsOverride'],
  render: function render() {
    return this.$scopedSlots["default"]({
      colspan: this.colspan(),
      display: this.display,
      override: this.componentsOverride.noResultsRow
    });
  }
};
exports["default"] = _default;