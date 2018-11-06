function sum() {
  var layer = Array.prototype.slice,
    sum = 0,
    closure = function() {
      var args2 = layer.call(arguments)
      for (var i = 0, l = args2.length; i < l; i++) {
        sum += args2[i] * 1
      }
      // проверка - вызов closure

      return args2.length ? closure : sum
    }
  return closure.apply(null, layer.call(arguments))
}

sum(2)(5)(7)() // 14
