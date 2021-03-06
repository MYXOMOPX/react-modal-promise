"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var randHex = function randHex() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;

  var maxlen = 8;
  var min = Math.pow(16, Math.min(len, maxlen) - 1);
  var max = Math.pow(16, Math.min(len, maxlen)) - 1;
  var n = Math.floor(Math.random() * (max - min + 1)) + min;
  var r = n.toString(16);
  while (r.length < len) {
    r = r + randHex(len - maxlen);
  }
  return r;
};

exports.default = randHex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yYW5kSGV4LmpzIl0sIm5hbWVzIjpbInJhbmRIZXgiLCJsZW4iLCJtYXhsZW4iLCJtaW4iLCJNYXRoIiwicG93IiwibWF4IiwibiIsImZsb29yIiwicmFuZG9tIiwiciIsInRvU3RyaW5nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLFVBQVUsU0FBVkEsT0FBVSxHQUFjO0FBQUEsTUFBYkMsR0FBYSx1RUFBUCxFQUFPOztBQUM1QixNQUFNQyxTQUFTLENBQWY7QUFDQSxNQUFNQyxNQUFNQyxLQUFLQyxHQUFMLENBQVMsRUFBVCxFQUFhRCxLQUFLRCxHQUFMLENBQVNGLEdBQVQsRUFBY0MsTUFBZCxJQUF3QixDQUFyQyxDQUFaO0FBQ0EsTUFBTUksTUFBTUYsS0FBS0MsR0FBTCxDQUFTLEVBQVQsRUFBYUQsS0FBS0QsR0FBTCxDQUFTRixHQUFULEVBQWNDLE1BQWQsQ0FBYixJQUFzQyxDQUFsRDtBQUNBLE1BQU1LLElBQUlILEtBQUtJLEtBQUwsQ0FBV0osS0FBS0ssTUFBTCxNQUFpQkgsTUFBTUgsR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOENBLEdBQXhEO0FBQ0EsTUFBSU8sSUFBR0gsRUFBRUksUUFBRixDQUFXLEVBQVgsQ0FBUDtBQUNBLFNBQU9ELEVBQUVFLE1BQUYsR0FBV1gsR0FBbEIsRUFBdUI7QUFDckJTLFFBQUlBLElBQUlWLFFBQVFDLE1BQU1DLE1BQWQsQ0FBUjtBQUNEO0FBQ0QsU0FBT1EsQ0FBUDtBQUNELENBVkQ7O2tCQVllVixPIiwiZmlsZSI6InJhbmRIZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByYW5kSGV4ID0gKGxlbiA9IDEyKSA9PiB7XG4gIGNvbnN0IG1heGxlbiA9IDhcbiAgY29uc3QgbWluID0gTWF0aC5wb3coMTYsIE1hdGgubWluKGxlbiwgbWF4bGVuKSAtIDEpXG4gIGNvbnN0IG1heCA9IE1hdGgucG93KDE2LCBNYXRoLm1pbihsZW4sIG1heGxlbikpIC0gMVxuICBjb25zdCBuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxuICBsZXQgciA9bi50b1N0cmluZygxNilcbiAgd2hpbGUgKHIubGVuZ3RoIDwgbGVuKSB7XG4gICAgciA9IHIgKyByYW5kSGV4KGxlbiAtIG1heGxlbilcbiAgfVxuICByZXR1cm4gclxufVxuXG5leHBvcnQgZGVmYXVsdCByYW5kSGV4XG4iXX0=