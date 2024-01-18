function count_same_elements(collection) {
  //在这里写入代码
  const result = [];
  const countMap = {};

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];

    if (countMap[element]) {
      countMap[element]++;
    } else {
      countMap[element] = 1;
    }
  }

  for (const key in countMap) {
    result.push({ key: key, count: countMap[key] });
  }

  return result;
}


module.exports = count_same_elements;
