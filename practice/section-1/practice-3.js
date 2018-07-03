'use strict';

function collectSameElements(collectionA, objectB) {
  var result = new Array();
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < objectB.value.length; j++) {
      if (collectionA[i] == objectB.value[j]) {
        result[result.length] = collectionA[i];
      }
    }
  }
  return result;
}
