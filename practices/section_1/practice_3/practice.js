function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let values = object_b.value;
  return collection_a.filter(element => values.includes(element));
}

module.exports = collect_same_elements;
