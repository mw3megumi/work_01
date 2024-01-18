function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let avalues = []
  for (let i = 0; i < collection_a.length; i++) {
    avalues.push(collection_a[i].key);
  }

  let bvalues = object_b.value;

  return avalues.filter(element => bvalues.includes(element));
}

module.exports = collect_same_elements;
