function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let countMap = new Map();

  for (let element of collection_a) {
    let key = element;
    let count = 1;

    if (element.includes("-")) {
      [key, count] = element.split("-");
      count = parseInt(count);
    }

    countMap.set(key, countMap.has(key) ? countMap.get(key) + count : count);
  }

  for (let item of object_b.value) {
    if (countMap.has(item)) {
      let count = countMap.get(item);
      countMap.set(item, count - Math.floor(count / 3));
    }
  }

  let result = [];
  for (let [key, count] of countMap.entries()) {
    result.push({ key: key, count: count });
  }

  return result;
}

module.exports = create_updated_collection;
