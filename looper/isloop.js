'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let listSet = new Set();

  if (listSet.has(current)) {
    return true;
  } else {
    listSet.add(current);
    if (current.next !== null) {
      return isLoop(linkedlist);
    } else {
      return false;
    }
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
