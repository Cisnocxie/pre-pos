'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC = new Array();
  for (var i = 0; i < collectionA.length; i++) {
    var exist = false;
    for (var j = 0; j < collectionC.length; j++) {
      if (collectionA[i] == collectionC[j].key) {
        collectionC[j].count++;
        exist = true;
        break;
      }
    }
    if (!exist) {
      collectionC.push({key:collectionA[i], count:1});
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
