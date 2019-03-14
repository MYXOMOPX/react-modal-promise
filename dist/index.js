'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModal = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ModalFactory = require('./ModalFactory');

var _ModalFactory2 = _interopRequireDefault(_ModalFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = {};

var PromiseModal = function PromiseModal() {
  return _react2.default.createElement(_ModalFactory2.default, { ref: function ref(node) {
      modal.stack = node;
    } });
};

var createModal = function createModal(Component, options) {
  return function (props) {
    return modal.stack.create(Component, options)(props);
  };
};

exports.default = PromiseModal;
exports.createModal = createModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2RhbCIsIlByb21pc2VNb2RhbCIsInN0YWNrIiwibm9kZSIsImNyZWF0ZU1vZGFsIiwiQ29tcG9uZW50Iiwib3B0aW9ucyIsImNyZWF0ZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxFQUFkOztBQUVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQ25CLDhCQUFDLHNCQUFELElBQWMsS0FBSyxtQkFBUTtBQUFFRCxZQUFNRSxLQUFOLEdBQWNDLElBQWQ7QUFBb0IsS0FBakQsR0FEbUI7QUFBQSxDQUFyQjs7QUFJQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsU0FBRCxFQUFZQyxPQUFaO0FBQUEsU0FBd0I7QUFBQSxXQUFTTixNQUFNRSxLQUFOLENBQVlLLE1BQVosQ0FBbUJGLFNBQW5CLEVBQThCQyxPQUE5QixFQUF1Q0UsS0FBdkMsQ0FBVDtBQUFBLEdBQXhCO0FBQUEsQ0FBcEI7O2tCQUVlUCxZO1FBRU5HLFcsR0FBQUEsVyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNb2RhbEZhY3RvcnkgZnJvbSAnLi9Nb2RhbEZhY3RvcnknXG5cbmNvbnN0IG1vZGFsID0ge31cblxuY29uc3QgUHJvbWlzZU1vZGFsID0gKCkgPT4gKFxuICA8TW9kYWxGYWN0b3J5IHJlZj17bm9kZSA9PiB7IG1vZGFsLnN0YWNrID0gbm9kZSB9fSAvPlxuKVxuXG5jb25zdCBjcmVhdGVNb2RhbCA9IChDb21wb25lbnQsIG9wdGlvbnMpID0+IHByb3BzID0+IG1vZGFsLnN0YWNrLmNyZWF0ZShDb21wb25lbnQsIG9wdGlvbnMpKHByb3BzKVxuXG5leHBvcnQgZGVmYXVsdCBQcm9taXNlTW9kYWxcblxuZXhwb3J0IHsgY3JlYXRlTW9kYWwgfVxuIl19