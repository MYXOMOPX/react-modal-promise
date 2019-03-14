'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _randHex = require('./randHex');

var _randHex2 = _interopRequireDefault(_randHex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalFactory = function (_PureComponent) {
  _inherits(ModalFactory, _PureComponent);

  function ModalFactory(props) {
    _classCallCheck(this, ModalFactory);

    var _this = _possibleConstructorReturn(this, (ModalFactory.__proto__ || Object.getPrototypeOf(ModalFactory)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      modals: {},
      hashStack: [],
      layers: []
    };
    _this.defaultOptions = {
      exitTimeout: 500,
      enterTimeout: 50
    };
    return _this;
  }

  _createClass(ModalFactory, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { ref: function ref(node) {
            _this2.modalContainer = node;
          } },
        this.getModals()
      );
    }
  }]);

  return ModalFactory;
}(_react.PureComponent);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getModals = function () {
    var mapKeys = _this3.state.layers.map(function (key) {
      var _state$modals$key = _this3.state.modals[key],
          Component = _state$modals$key.Component,
          props = _state$modals$key.props,
          resolve = _state$modals$key.resolve;


      return _react2.default.createElement(Component, _extends({}, props, {
        key: key,
        close: resolve,
        open: Boolean(_this3.state.hashStack.find(function (h) {
          return h === key;
        }))
      }));
    });

    return mapKeys;
  };

  this.create = function (Component) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return function (props) {
      return new Promise(function (promiseResolve) {
        var hash = (0, _randHex2.default)();
        var resultOptions = _extends({}, _this3.defaultOptions, options);
        var resolve = function resolve(value) {
          _this3.delete(hash);
          promiseResolve(value);
        };

        _this3.setState({
          modals: _extends(_defineProperty({}, hash, _extends({
            Component: Component,
            props: props,
            resolve: resolve
          }, resultOptions)), _this3.state.modals),
          layers: [].concat(_toConsumableArray(_this3.state.layers), [hash])
        }, function () {
          setTimeout(function () {
            _this3.setState({ hashStack: [].concat(_toConsumableArray(_this3.state.hashStack), [hash]) });
          }, resultOptions.enterTimeout);
        });
      });
    };
  };

  this.delete = function (hash) {
    var target = _this3.state.modals.hash;

    var exitTimeout = target && target.exitTimeout;
    _this3.setState({
      hashStack: _this3.state.hashStack.filter(function (h) {
        return h !== hash;
      })
    }, function () {
      setTimeout(_this3.omitState, exitTimeout, hash);
    });
  };

  this.omitState = function (hash) {
    var updatedLayers = _this3.state.layers.slice();
    updatedLayers.splice(updatedLayers.indexOf(hash), 1);

    var _state$modals = _this3.state.modals,
        _ = _state$modals[hash],
        modals = _objectWithoutProperties(_state$modals, [hash]);

    _this3.setState({ modals: modals, layers: updatedLayers });
  };
};

exports.default = ModalFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Nb2RhbEZhY3RvcnkuanN4Il0sIm5hbWVzIjpbIk1vZGFsRmFjdG9yeSIsInByb3BzIiwic3RhdGUiLCJtb2RhbHMiLCJoYXNoU3RhY2siLCJsYXllcnMiLCJkZWZhdWx0T3B0aW9ucyIsImV4aXRUaW1lb3V0IiwiZW50ZXJUaW1lb3V0IiwibW9kYWxDb250YWluZXIiLCJub2RlIiwiZ2V0TW9kYWxzIiwiUHVyZUNvbXBvbmVudCIsIm1hcEtleXMiLCJtYXAiLCJrZXkiLCJDb21wb25lbnQiLCJyZXNvbHZlIiwiQm9vbGVhbiIsImZpbmQiLCJoIiwiY3JlYXRlIiwib3B0aW9ucyIsIlByb21pc2UiLCJoYXNoIiwicmVzdWx0T3B0aW9ucyIsImRlbGV0ZSIsInByb21pc2VSZXNvbHZlIiwidmFsdWUiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJ0YXJnZXQiLCJmaWx0ZXIiLCJvbWl0U3RhdGUiLCJ1cGRhdGVkTGF5ZXJzIiwic2xpY2UiLCJzcGxpY2UiLCJpbmRleE9mIiwiXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxZOzs7QUFFSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNYQSxLQURXOztBQUFBOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxFQURHO0FBRVhDLGlCQUFXLEVBRkE7QUFHWEMsY0FBUTtBQUhHLEtBQWI7QUFLQSxVQUFLQyxjQUFMLEdBQXNCO0FBQ3BCQyxtQkFBYSxHQURPO0FBRXBCQyxvQkFBYztBQUZNLEtBQXRCO0FBUmlCO0FBWWxCOzs7OzZCQWdFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssS0FBSyxtQkFBUTtBQUFFLG1CQUFLQyxjQUFMLEdBQXNCQyxJQUF0QjtBQUE0QixXQUFoRDtBQUNHLGFBQUtDLFNBQUw7QUFESCxPQURGO0FBS0Q7Ozs7RUFwRndCQyxvQjs7Ozs7T0FnQnpCRCxTLEdBQVksWUFBTTtBQUNoQixRQUFNRSxVQUFVLE9BQUtYLEtBQUwsQ0FBV0csTUFBWCxDQUFrQlMsR0FBbEIsQ0FBc0IsZUFBTztBQUFBLDhCQUNMLE9BQUtaLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQlksR0FBbEIsQ0FESztBQUFBLFVBQ25DQyxTQURtQyxxQkFDbkNBLFNBRG1DO0FBQUEsVUFDeEJmLEtBRHdCLHFCQUN4QkEsS0FEd0I7QUFBQSxVQUNqQmdCLE9BRGlCLHFCQUNqQkEsT0FEaUI7OztBQUczQyxhQUNFLDhCQUFDLFNBQUQsZUFDTWhCLEtBRE47QUFFRSxhQUFLYyxHQUZQO0FBR0UsZUFBT0UsT0FIVDtBQUlFLGNBQU1DLFFBQVEsT0FBS2hCLEtBQUwsQ0FBV0UsU0FBWCxDQUFxQmUsSUFBckIsQ0FBMEI7QUFBQSxpQkFBS0MsTUFBTUwsR0FBWDtBQUFBLFNBQTFCLENBQVI7QUFKUixTQURGO0FBUUQsS0FYZSxDQUFoQjs7QUFhQSxXQUFPRixPQUFQO0FBQ0QsRzs7T0FFRFEsTSxHQUFTLFVBQUNMLFNBQUQsRUFBMkI7QUFBQSxRQUFmTSxPQUFlLHVFQUFQLEVBQU87O0FBQ2xDLFdBQU87QUFBQSxhQUFTLElBQUlDLE9BQUosQ0FBWSwwQkFBa0I7QUFDNUMsWUFBTUMsT0FBTyx3QkFBYjtBQUNBLFlBQU1DLDZCQUFxQixPQUFLbkIsY0FBMUIsRUFBNkNnQixPQUE3QyxDQUFOO0FBQ0EsWUFBTUwsVUFBVSxTQUFWQSxPQUFVLFFBQVM7QUFDdkIsaUJBQUtTLE1BQUwsQ0FBWUYsSUFBWjtBQUNBRyx5QkFBZUMsS0FBZjtBQUNELFNBSEQ7O0FBS0EsZUFBS0MsUUFBTCxDQUFjO0FBQ1oxQiwrQ0FDR3FCLElBREg7QUFFSVIsZ0NBRko7QUFHSWYsd0JBSEo7QUFJSWdCO0FBSkosYUFLT1EsYUFMUCxJQU9LLE9BQUt2QixLQUFMLENBQVdDLE1BUGhCLENBRFk7QUFVWkUsK0NBQVksT0FBS0gsS0FBTCxDQUFXRyxNQUF2QixJQUE4Qm1CLElBQTlCO0FBVlksU0FBZCxFQVdHLFlBQU07QUFDUE0scUJBQVcsWUFBTTtBQUNmLG1CQUFLRCxRQUFMLENBQWMsRUFBRXpCLHdDQUFnQixPQUFLRixLQUFMLENBQVdFLFNBQTNCLElBQXNDb0IsSUFBdEMsRUFBRixFQUFkO0FBQ0QsV0FGRCxFQUVHQyxjQUFjakIsWUFGakI7QUFHRCxTQWZEO0FBZ0JELE9BeEJlLENBQVQ7QUFBQSxLQUFQO0FBeUJELEc7O09BRURrQixNLEdBQVMsZ0JBQVE7QUFBQSxRQUNTSyxNQURULEdBQ3NCLE9BQUs3QixLQUQzQixDQUNQQyxNQURPLENBQ0dxQixJQURIOztBQUVmLFFBQU1qQixjQUFjd0IsVUFBVUEsT0FBT3hCLFdBQXJDO0FBQ0EsV0FBS3NCLFFBQUwsQ0FBYztBQUNaekIsaUJBQVcsT0FBS0YsS0FBTCxDQUFXRSxTQUFYLENBQXFCNEIsTUFBckIsQ0FBNEI7QUFBQSxlQUFLWixNQUFNSSxJQUFYO0FBQUEsT0FBNUI7QUFEQyxLQUFkLEVBRUcsWUFBTTtBQUNQTSxpQkFBVyxPQUFLRyxTQUFoQixFQUEyQjFCLFdBQTNCLEVBQXdDaUIsSUFBeEM7QUFDRCxLQUpEO0FBS0QsRzs7T0FFRFMsUyxHQUFZLGdCQUFRO0FBQ2xCLFFBQU1DLGdCQUFnQixPQUFLaEMsS0FBTCxDQUFXRyxNQUFYLENBQWtCOEIsS0FBbEIsRUFBdEI7QUFDQUQsa0JBQWNFLE1BQWQsQ0FBcUJGLGNBQWNHLE9BQWQsQ0FBc0JiLElBQXRCLENBQXJCLEVBQWlELENBQWpEOztBQUZrQix3QkFHZSxPQUFLdEIsS0FBTCxDQUFXQyxNQUgxQjtBQUFBLFFBR0htQyxDQUhHLGlCQUdUZCxJQUhTO0FBQUEsUUFHSXJCLE1BSEosNENBR1RxQixJQUhTOztBQUlsQixXQUFLSyxRQUFMLENBQWMsRUFBRTFCLGNBQUYsRUFBVUUsUUFBTzZCLGFBQWpCLEVBQWQ7QUFDRCxHOzs7a0JBV1lsQyxZIiwiZmlsZSI6Ik1vZGFsRmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmFuZEhleCBmcm9tICcuL3JhbmRIZXgnXG5cbmNsYXNzIE1vZGFsRmFjdG9yeSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9kYWxzOiB7fSxcbiAgICAgIGhhc2hTdGFjazogW10sXG4gICAgICBsYXllcnM6IFtdLFxuICAgIH1cbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgZXhpdFRpbWVvdXQ6IDUwMCxcbiAgICAgIGVudGVyVGltZW91dDogNTBcbiAgICB9XG4gIH1cblxuICBnZXRNb2RhbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFwS2V5cyA9IHRoaXMuc3RhdGUubGF5ZXJzLm1hcChrZXkgPT4ge1xuICAgICAgY29uc3QgeyBDb21wb25lbnQsIHByb3BzLCByZXNvbHZlIH0gPSB0aGlzLnN0YXRlLm1vZGFsc1trZXldXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgY2xvc2U9e3Jlc29sdmV9XG4gICAgICAgICAgb3Blbj17Qm9vbGVhbih0aGlzLnN0YXRlLmhhc2hTdGFjay5maW5kKGggPT4gaCA9PT0ga2V5KSl9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiBtYXBLZXlzXG4gIH1cblxuICBjcmVhdGUgPSAoQ29tcG9uZW50LCBvcHRpb25zPXt9KSA9PiB7XG4gICAgcmV0dXJuIHByb3BzID0+IG5ldyBQcm9taXNlKHByb21pc2VSZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IGhhc2ggPSByYW5kSGV4KClcbiAgICAgIGNvbnN0IHJlc3VsdE9wdGlvbnMgPSB7IC4uLnRoaXMuZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfVxuICAgICAgY29uc3QgcmVzb2x2ZSA9IHZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5kZWxldGUoaGFzaClcbiAgICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb2RhbHM6IHtcbiAgICAgICAgICBbaGFzaF06IHtcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIC4uLnJlc3VsdE9wdGlvbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLnRoaXMuc3RhdGUubW9kYWxzXG4gICAgICAgIH0sXG4gICAgICAgIGxheWVyczogWy4uLnRoaXMuc3RhdGUubGF5ZXJzLGhhc2hdXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNoU3RhY2s6IFsgLi4udGhpcy5zdGF0ZS5oYXNoU3RhY2ssIGhhc2ggXSB9KVxuICAgICAgICB9LCByZXN1bHRPcHRpb25zLmVudGVyVGltZW91dClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZSA9IGhhc2ggPT4ge1xuICAgIGNvbnN0IHsgbW9kYWxzOiB7IGhhc2g6IHRhcmdldCB9IH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgZXhpdFRpbWVvdXQgPSB0YXJnZXQgJiYgdGFyZ2V0LmV4aXRUaW1lb3V0XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoYXNoU3RhY2s6IHRoaXMuc3RhdGUuaGFzaFN0YWNrLmZpbHRlcihoID0+IGggIT09IGhhc2gpXG4gICAgfSwgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm9taXRTdGF0ZSwgZXhpdFRpbWVvdXQsIGhhc2gpXG4gICAgfSlcbiAgfVxuXG4gIG9taXRTdGF0ZSA9IGhhc2ggPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRMYXllcnMgPSB0aGlzLnN0YXRlLmxheWVycy5zbGljZSgpO1xuICAgIHVwZGF0ZWRMYXllcnMuc3BsaWNlKHVwZGF0ZWRMYXllcnMuaW5kZXhPZihoYXNoKSwxKTtcbiAgICBjb25zdCB7IFtoYXNoXTpfICwgLi4ubW9kYWxzIH0gPSB0aGlzLnN0YXRlLm1vZGFsc1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RhbHMsIGxheWVyczp1cGRhdGVkTGF5ZXJzIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtub2RlID0+IHsgdGhpcy5tb2RhbENvbnRhaW5lciA9IG5vZGUgfX0+XG4gICAgICAgIHt0aGlzLmdldE1vZGFscygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsRmFjdG9yeVxuIl19