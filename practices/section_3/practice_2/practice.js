function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  const result = [...collection_a];

  for (let i = 0; i < result.length; i++) {
    const elementA = result[i];
    const keyA = elementA.key;

    if (object_b.value.includes(keyA)) {
      const subtractCount = Math.floor(elementA.count / 3);
      elementA.count -= subtractCount;
    }
  }

  return result;
}

module.exports = create_updated_collection;
