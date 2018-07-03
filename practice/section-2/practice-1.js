'use strict';

function countSameElements(collection) {
  var result = new Array();
  for (var i = 0; i < collection.length; i++) {
    var exist = false;
    for (var j = 0; j < result.length; j++) {
      if (collection[i] == result[j].key) {
        result[j].count++;
        exist = true;
        break;
      }
    }
    if (!exist) {
      result.push({key:collection[i], count:1});
    }
  }
  return result;
}
