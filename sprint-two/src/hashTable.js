var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var newNode = { key: k, value: v, next: null };
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentTarget = this._storage.get(index);
  if (currentTarget === undefined || currentTarget.key === k) {
    this._storage.set(index, newNode);
  } else {
    if (currentTarget.next === null) {
      currentTarget.next = newNode;
    } else {
      while (currentTarget.next !== null) {
        var prevTarget = currentTarget;
        currentTarget = currentTarget.next;
        return;
      }
      prevTarget.next = newNode;
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentIndex = this._storage.get(index);
  if (currentIndex === undefined) {
    return undefined;
  }
  if (currentIndex.key === k) {
    return this._storage.get(index).value;
  } else { //currentIndex.key != k
    while (currentIndex.next !== null) {
      var prevIndex = currentIndex;
      currentIndex = currentIndex.next;
    }
    return currentIndex.value;
  }


  // return this._storage.get(index).value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentNode = this._storage.get(index);
  if (currentNode === undefined) {
    return undefined;
  } else if (currentNode.key === k && currentNode.next === null) {
    this._storage.set(index, undefined);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//say there are two inputs ('key1', 'value1') and ('key2', value2)
//  key1 and key2 while different strings result in the same hash
//  e.g. _storage.insert(key1, value1) => key1 hashes to 3 so storage[3] = value1,
//       _storage.insert(key2, value2) => key2 hashes to 3 as well but shouldn't override value1 to be value2.
//  this can avoided by link listing the values that are attempting to enter the same index
//  in order to do that there has to be:
//    a next node property to all nodes

//    when inserting either a) storage[index] = undefined || storage[index].value = v or => insert normally
//                          b) storage[index].value != v => follow chain until storage[index].next = null and insert there

//    when retrieving a) storage[index].key = k => return storage[index].value
//                    b) check storage[index].next.key until it finds k and return value
//    when removing a) storage[index].key = k => storage[index].value = storage[index].next (if not null) or undefined
//                  b) storage[index].key != k => check through chain until storage[index].key = k and set to either .next (if not null) or undefined
//                    be sure to not break the chain. if storage[index].next.key = k set storage[index].next = storage[index].next.next (if not null) or undefined

