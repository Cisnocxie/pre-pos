'use strict';

function countSameElements(collection) {
  var result = new Array();
  for (var i = 0; i < collection.length; i++) {
    var exist = false;
    var num = 1;
    if (collection[i].length > 1) {
      if (collection[i].indexOf('-') != -1) {
        num = parseInt(collection[i].slice(collection[i].indexOf('-') + 1));
        collection[i] = collection[i][0];
      }
    }
    for (var j = 0; j < result.length; j++) {
      if (collection[i] == result[j].key) {
        result[j].count += num;
        exist = true;
        break;
      }
    }
    if (!exist) {
      result.push({key:collection[i], count:num});
    }
  }
  return result;
}
