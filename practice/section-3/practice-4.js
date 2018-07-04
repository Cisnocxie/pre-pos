'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC = new Array();
  for (var i = 0; i < collectionA.length; i++) {
    var exist = false;
    var num = 1;
    if (collectionA[i].length > 1) {
      if (collectionA[i].indexOf('-') != -1) {
        num = parseInt(collectionA[i].slice(collectionA[i].indexOf('-') + 1));
        collectionA[i] = collectionA[i][0];
      }
    }
    for (var j = 0; j < collectionC.length; j++) {
      if (collectionA[i] == collectionC[j].key) {
        collectionC[j].count += num;
        exist = true;
        break;
      }
    }
    if (!exist) {
      collectionC.push({key:collectionA[i], count:num});
    }
  }
  for (var i = 0; i < collectionC.length; i++) {
    for (var j = 0; j < objectB.value.length; j++) {
      if (collectionC[i].key == objectB.value[j]) {
        collectionC[i].count -= parseInt(collectionC[i].count / 3);
      }
    }
  }
  return collectionC;
}
